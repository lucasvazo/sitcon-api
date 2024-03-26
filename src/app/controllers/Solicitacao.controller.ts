import { Request, Response } from 'express';
import SolicitacaoService from '../services/Solicitacao.service';

class SolicitacaoController {

    static async listAllSolicTypesAndProcedures(req: Request, res: Response): Promise<Response> {
        try {
            const allSolicTypesAndProcedures = await SolicitacaoService.getAllTypesAndProcedures();
            return res.json(allSolicTypesAndProcedures);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

}

export default SolicitacaoController;