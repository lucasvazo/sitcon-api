import { Router } from 'express';
import PacienteController from '../controllers/Paciente.controller';

const pacienteController = new PacienteController();
const pacienteRouter = Router();

pacienteRouter.get('/', pacienteController.listAllPatients);


export default pacienteRouter;