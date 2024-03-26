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

    static async scheduleNewProcedure(req: Request, res: Response): Promise<Response> {
        try {
            const newSolicPayload = req.body
            if (!req.body){
                return res.status(400).json({ message: `Bad request, please submit the professional Id.` });
            }
            const newProcudureScheduled = await SolicitacaoService.createNewProcedure(newSolicPayload);
            return res.json(newProcudureScheduled);
        } catch (error: any) {
            console.log(error)
            return res.status(400).json({ error: error.message });
        }
    }

    static async getScheduledAppointments(req: Request, res: Response): Promise<Response> {
        try {
            const scheduledAppointments = await SolicitacaoService.listScheduledAppointments();
            return res.json(scheduledAppointments);
        } catch (error: any) {
            console.log(error)
            return res.status(400).json({ error: error.message });
        }
    }

    static async deleteAppointment(req: Request, res: Response): Promise<Response> {
        try {
            const { appointmentId } = req.query
            if ( !appointmentId) {
                return res.status(400).json({ message: `Bad request, you must provide an appointment Id.` });
            }
            const deletedAppointment = await SolicitacaoService.deleteAppointment(parseInt(appointmentId.toString()));
            return res.json(deletedAppointment);
        } catch (error: any) {
            console.log(error)
            return res.status(400).json({ error: error.message });
        }
    }

}

export default SolicitacaoController;