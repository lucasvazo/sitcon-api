import { Request, Response } from 'express';
import PacienteService from '../services/Paciente.service';

class PacienteController {

    static async listAllPatients( req: Request, res: Response ): Promise<Response> {
        try {
            const { page = 1, page_size: pageSize = 10 } = req.query;
            const patients = await PacienteService.getAllPacientes(parseInt(page.toString()), parseInt(pageSize.toString()));
            return res.json(patients);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default PacienteController;