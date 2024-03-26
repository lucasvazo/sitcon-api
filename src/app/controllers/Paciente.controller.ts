import { Request, Response } from 'express';
import PacienteService from '../services/Paciente.service';

class PacienteController {

    async listAllPatients( _req: Request, res: Response ): Promise<Response> {
        try {
            const patients = await PacienteService.getAllPacientes();
            return res.json(patients);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default PacienteController;