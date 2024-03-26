import { Request, Response } from 'express';
import SolicitacaoService from '../services/Solicitacao.service';

class SolicitacaoController {

    static async listAllSolicTypesAndProcedures(req: Request, res: Response): Promise<Response> {
        try {
            const { professionalId } = req.query
            if ( !professionalId ){
                return res.status(400).json({ message: `Bad request, please submit the professional Id.` });
            }
            const allSolicTypesAndProcedures = await SolicitacaoService.getAllTypesAndProcedures(parseInt(professionalId.toString()));
            return res.json(allSolicTypesAndProcedures);
        } catch (error: any) {
            console.log(error)
            return res.status(404).json({ error: error.message });
        }
    }

}

export default SolicitacaoController;