import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import Procedimento from './Procedimento';

@Entity('tipo_solicitacao')
class TipoSolicitacao {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", length: 255, nullable: false }) 
    descricao: string;
  
    @Column({ type: "enum", enum: ["ativo", "inativo"], default: "ativo", })
    status: "ativo" | "inativo";

    @OneToMany(() => Procedimento, (procedimento) => procedimento.tipo_solicitacao)
    procedimentos?: Procedimento[];
}

export default TipoSolicitacao;