import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Paciente from './Paciente';
import Procedimento from './Procedimento';
import Profissional from './Profissional';

@Entity('agendamento')
class Agendamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'data_agendamento', type: 'datetime' })
    dataAgendamento: Date;

    @Column({ name:'data_criacao', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @Column({ type: 'enum', enum: ['ativo', 'cancelado', 'reagendado'], default: 'ativo' })
    status: string;

    @ManyToOne(() => Paciente)
    @JoinColumn({ name: 'paciente_id' })
    pacienteId: Paciente;

    @ManyToOne(() => Procedimento)
    @JoinColumn({ name: 'procedimento_id' })
    procedimentoId: Procedimento;
    
    @ManyToOne(() => Profissional)
    @JoinColumn({ name: 'profissional_id' })
    profissionalId: Profissional;
}

export default Agendamento;