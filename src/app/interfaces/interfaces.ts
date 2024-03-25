import Paciente from "../entities/Paciente";
import Procedimento from "../entities/Procedimento";
import Profissional from "../entities/Profissional";
import ProfissionalAtende from "../entities/ProfissionalAtente";
import TipoSolicitacao from "../entities/TipoSolicitacao";

export interface IPaciente {
    id: number,
    nome: string,
    dataNasc: Date;
    cpf: string;
    status: 'ativo' | 'inativo'
};

export interface IProfissional {
    id: number,
    nome: string,
    status: 'ativo' | 'inativo'
    atendimentos?: ProfissionalAtende[];
};

export interface IProcedimento {
    id: number,
    descricao: string;
    status: "ativo" | "inativo";
    tipoId: TipoSolicitacao;
};

export interface ITipoSolicitacao {
    id: number,
    descricao: string;
    status: "ativo" | "inativo";
};

export interface IProfissionalAtende {
    id: number;
    status: "ativo" | "inativo";
    profissional: Profissional;
    procedimento: Procedimento;
};

export interface IAgendamento {
    id: number;
    dataAgendamento: Date;
    dataCriacao: Date;
    status: 'ativo' | 'cancelado' | 'reagendado';
    pacienteId: Paciente;
    procedimentoId: Procedimento;
    profissionalId: Profissional;
}








