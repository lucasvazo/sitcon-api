import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import Agendamento from './Agendamento';
import ProfissionalAtende from './ProfissionalAtende';

@Entity('profissional')
class Profissional extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", length: 150, nullable: false })
    nome: string;
  
    @Column({ type: "enum",enum: ["ativo", "inativo"], default: "ativo" })
    status: "ativo" | "inativo";

    @OneToMany(() => ProfissionalAtende, (profissionalAtende) => profissionalAtende.id )
    atendimentosIds?: ProfissionalAtende[];

    @OneToMany(() => Agendamento, agendamento => agendamento.profissionalId)
    agendamentos: Agendamento[];
}

export default Profissional;