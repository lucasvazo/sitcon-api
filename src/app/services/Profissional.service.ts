import { profissionalRepository } from './../repositories/repositories';

class ProfissionalService {

    static async getAllProfessionals() {
        const allProfessionals = await profissionalRepository.find()
        return allProfessionals;
    }
    
}

export default ProfissionalService; 