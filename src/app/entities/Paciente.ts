import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Agendamento from './Agendamento';

@Entity('paciente')
class Paciente {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 150, nullable: false })
    nome: string;

    @Column({ type: 'date', name: 'data_nascimento', nullable: false })
    dataNasc: Date;

    @Column({ type: "varchar", length: 20, unique: true, nullable: false })
    cpf: string;

    @Column({ type: "enum", enum: ["ativo", "inativo"], default: 'ativo' })
    status: "ativo" | "inativo";
    
    @OneToMany(() => Agendamento, agendamento => agendamento.pacienteId)
    agendamentos: Agendamento[];
}

export default Paciente;