import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
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

    @ManyToOne(() => TipoSolicitacao, (tipoSolicitacao) => tipoSolicitacao.procedimentos)
    @JoinColumn({ name: 'tipo_id' })
    tipoSolicitacao: TipoSolicitacao;

    @OneToMany(() => ProfissionalAtende, (profissionalAtende) => profissionalAtende.id )
    atendimentosIds?: ProfissionalAtende[];

    @OneToMany(() => Agendamento, agendamento => agendamento.procedimentoId)
    agendamentos: Agendamento[];
}

export default Procedimento;