import { Request, Response } from 'express';
import ProfissionalService from '../services/Profissional.service';

class ProfissionalController {

    static async listAllProfessionals(req: Request, res: Response): Promise<Response> {
        try {
            const professionals = await ProfissionalService.getAllProfessionals();
            return res.json(professionals);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default ProfissionalController;