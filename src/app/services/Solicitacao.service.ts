import { profissionalAtendeRepository, procedimentoRepository } from '../repositories/repositories';

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
    
}

export default SolicitacaoService; 