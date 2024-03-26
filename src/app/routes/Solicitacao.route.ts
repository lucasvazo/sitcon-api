import { Router } from 'express';
import SolicitacaoController from '../controllers/Solicitacao.controller';

const solicitacaoRouter = Router();

solicitacaoRouter.get('/', SolicitacaoController.listAllSolicTypesAndProcedures);

export default solicitacaoRouter;