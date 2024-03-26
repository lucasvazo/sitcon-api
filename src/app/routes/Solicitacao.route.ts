import { Router } from 'express';
import SolicitacaoController from '../controllers/Solicitacao.controller';

const solicitacaoRouter = Router();

solicitacaoRouter.get('/', SolicitacaoController.listAllSolicTypesAndProcedures);
solicitacaoRouter.post('/', SolicitacaoController.scheduleNewProcedure);
solicitacaoRouter.get('/agendamentos', SolicitacaoController.getScheduledAppointments);
solicitacaoRouter.delete('/agendamentos', SolicitacaoController.deleteAppointment);

export default solicitacaoRouter;