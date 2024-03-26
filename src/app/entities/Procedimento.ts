import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import Agendamento from './Agendamento';
import ProfissionalAtende from './ProfissionalAtende';
import TipoSolicitacao from './TipoSolicitacao';

@Entity('procedimento')
class Procedimento extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    descricao: string;

    @Column({ type: "enum", enum: ["ativo", "inativo"], default: "ativo"})
    status: "ativo" | "inativo";

    @ManyToOne(() => TipoSolicitacao, (tipoSolicitacao) => tipoSolicitacao.procedimentos)
    @Column({ name: "tipo_id" })
    tipoId: TipoSolicitacao;

    @OneToMany(() => ProfissionalAtende, (profissionalAtende) => profissionalAtende.id )
    atendimentosIds?: ProfissionalAtende[];

    @OneToMany(() => Agendamento, agendamento => agendamento.procedimentoId)
    agendamentos: Agendamento[];
}

export default Procedimento;