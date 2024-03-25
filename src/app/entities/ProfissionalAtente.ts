import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import Profissional from "./Profissional"; // Import Profissional entity
import Procedimento from "./Procedimento"; // Import Procedimento entity

@Entity('profissional_atende')
class ProfissionalAtende extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "enum", enum: ["ativo", "inativo"], default: "ativo"})
    status: "ativo" | "inativo";
  
    @ManyToOne(() => Profissional, (profissional) => profissional.atendimentosIds)
    profissional: Profissional;
  
    @ManyToOne(() => Procedimento, (procedimento) => procedimento.atendimentosIds)
    procedimento: Procedimento;

}

export default ProfissionalAtende;