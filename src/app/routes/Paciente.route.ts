import { Router } from 'express';
import PacienteController from '../controllers/Paciente.controller';

const pacienteRouter = Router();

pacienteRouter.get('/', PacienteController.listAllPatients);


export default pacienteRouter;