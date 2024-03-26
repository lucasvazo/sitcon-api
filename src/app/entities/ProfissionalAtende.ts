import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Profissional from "./Profissional";
import Procedimento from "./Procedimento";

@Entity('profissional_atende')
class ProfissionalAtende {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "enum", enum: ["ativo", "inativo"], default: "ativo"})
    status: "ativo" | "inativo";
  
    @ManyToOne(() => Profissional, (profissionalId) => profissionalId.atendimentosIds)
    @JoinColumn({ name: 'profissional_id' })
    profissionalId: Profissional;

    @ManyToOne(() => Procedimento, (procedimentoId) => procedimentoId.atendimentosIds)
    @JoinColumn({ name: 'procedimento_id' })
    procedimentoId: Procedimento;

}

export default ProfissionalAtende;