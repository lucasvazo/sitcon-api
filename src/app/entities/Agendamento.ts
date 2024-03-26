import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
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
    pacienteId: Paciente;

    @ManyToOne(() => Procedimento)
    procedimentoId: Procedimento;

    @ManyToOne(() => Profissional)
    profissionalId: Profissional;
}

export default Agendamento;