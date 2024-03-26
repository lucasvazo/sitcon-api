import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import Agendamento from './Agendamento';
import ProfissionalAtende from './ProfissionalAtende';
import TipoSolicitacao from './TipoSolicitacao';

@Entity('procedimento')
class Procedimento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    descricao: string;

    @Column({ type: "enum", enum: ["ativo", "inativo"], default: "ativo"})
    status: "ativo" | "inativo";

    @ManyToOne(() => TipoSolicitacao, (tipo_solicitacao) => tipo_solicitacao.procedimentos)
    tipo_solicitacao: TipoSolicitacao;

    @OneToMany(() => ProfissionalAtende, (profissionalAtende) => profissionalAtende.id )
    atendimentosIds?: ProfissionalAtende[];

    @OneToMany(() => Agendamento, agendamento => agendamento.procedimentoId)
    agendamentos: Agendamento[];
}

export default Procedimento;