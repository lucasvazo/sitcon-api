import { Request } from 'express';
import { IAgendamento } from '../interfaces/interfaces';
import { profissionalAtendeRepository, procedimentoRepository, agendamentoRepository } from '../repositories/repositories';

class SolicitacaoService {

    static async getAllTypesAndProcedures( professionalId: number ) {

        const profissionalAtende = await profissionalAtendeRepository
            .createQueryBuilder('profissionalAtende')
            .leftJoinAndSelect('profissionalAtende.procedimentoId', 'procedimentoId')
            .leftJoinAndSelect('profissionalAtende.profissionalId', 'profissionalId')
            .where('profissionalAtende.status = :status', { status: 'ativo' })
            .andWhere('profissionalId.id = :professionalId', { professionalId })
            .select([
                'profissionalAtende.id',
                'profissionalAtende.status',
                'procedimentoId.id',
                'procedimentoId.descricao',
                'procedimentoId.status',
            ])
            .getMany();
        
        const procedures = await procedimentoRepository.find({
            where: {status: 'ativo'},
            select: {
                id: true,
                descricao: true
            },
            relations: [ 'tipoSolicitacao' ]
        })

        const professionalProcedures = profissionalAtende.map( ( profAtende ) => {
            const procedureIndex = procedures.findIndex( procedure => 
                procedure.id === profAtende.procedimentoId.id    
            )
            return procedures[procedureIndex]
        } )

        return { professionalProcedures }
    }

    static async createNewProcedure ( schedulePayload: IAgendamento ) {
        const createAppointment = await agendamentoRepository.create(schedulePayload)
        const storeAppointment = await agendamentoRepository.save(createAppointment)
            .catch(error => error);
        if (storeAppointment.driverError) {
            throw new Error('Something went wrong, please try again');
        }
        return storeAppointment;

    }

    static async listScheduledAppointments () {
        const allAppointments = await agendamentoRepository.find({
            relations: ['pacienteId', 'profissionalId', 'procedimentoId']
        })
        return allAppointments;
    }

    static async deleteAppointment ( appointmentId: number ) {
        const findAppointment = await agendamentoRepository.findOne({ where: { id: appointmentId } })
        if (!findAppointment) {
            throw new Error('Appointment not found, try again with a valid id.');
        } else {
            const {id} = findAppointment;
            const deletedAppointment = await agendamentoRepository.delete({id});
            console.log(findAppointment)
            return deletedAppointment;
        }
    }
    
}

export default SolicitacaoService; 