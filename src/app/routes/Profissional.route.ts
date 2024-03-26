import { Router } from 'express';
import ProfissionalController from '../controllers/Profissional.controller';

const professionalRouter = Router();

professionalRouter.get('/', ProfissionalController.listAllProfessionals);

export default professionalRouter;