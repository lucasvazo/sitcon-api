import { pacienteRepository } from './../repositories/repositories';

class PacienteService {

    static async getAllPacientes(page: number, pageSize: number) {
        const [ patients, total ] = await pacienteRepository.findAndCount({
            where: [{status:'ativo'}],
            take: pageSize,
            skip: (page - 1) * pageSize
        })
        const totalPages = Math.ceil(total / pageSize);
        const previous = page > 1 ? page - 1 : -1
        const next = page !== totalPages ? page + 1 : -1;
        return { data: patients, total , previous, next };
    }
    
}

export default PacienteService; 