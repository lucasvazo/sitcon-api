import { pacienteRepository } from './../repositories/repositories';

class PacienteService {

    static async getAllPacientes() {
        const allPatients = await pacienteRepository.find()
        return allPatients;
    }
    
}

export default PacienteService; 