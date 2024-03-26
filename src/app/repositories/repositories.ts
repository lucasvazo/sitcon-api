import Paciente from "../entities/Paciente";
import Profissional from "../entities/Profissional";
import Procedimento from "../entities/Procedimento";
import ProfissionalAtende from "../entities/ProfissionalAtende";
import TipoSolicitacao from "../entities/TipoSolicitacao";
import Agendamento from "../entities/Agendamento";
import { AppDataSource } from '../../database/data-source';

export const pacienteRepository = AppDataSource.getRepository(Paciente);
export const profissionalRepository = AppDataSource.getRepository(Profissional);
export const procedimentoRepository = AppDataSource.getRepository(Procedimento);
export const profissionalAtendeRepository = AppDataSource.getRepository(ProfissionalAtende);
export const tipoSolicitacaoRepository = AppDataSource.getRepository(TipoSolicitacao);
export const agendamentoRepository = AppDataSource.getRepository(Agendamento);