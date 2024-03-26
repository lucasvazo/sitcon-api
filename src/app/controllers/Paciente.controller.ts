import { Request, Response } from 'express';
import PacienteService from '../services/Paciente.service';

class PacienteController {

    async listAllPatients(req: Request, res: Response): Promise<Response> {
        try {
            const pacientes = await PacienteService.getAllPacientes();
            return res.json(pacientes);
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

}

export default PacienteController;