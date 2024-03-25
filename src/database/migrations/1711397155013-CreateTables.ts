import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1711397155013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS paciente (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(150) NOT NULL,
                data_nascimento DATE NOT NULL,
                cpf VARCHAR(20) UNIQUE NOT NULL,
                status ENUM('ativo', 'inativo') DEFAULT 'ativo'
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS profissional (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(150) NOT NULL,
                status ENUM('ativo', 'inativo') DEFAULT 'ativo'
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS tipo_solicitacao (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                descricao VARCHAR(255) NOT NULL,
                status ENUM('ativo', 'inativo') DEFAULT 'ativo'
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS procedimento (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                descricao VARCHAR(255) NOT NULL,
                status ENUM('ativo', 'inativo') DEFAULT 'ativo',
                tipo_id INT UNSIGNED,
                FOREIGN KEY (tipo_id) REFERENCES tipo_solicitacao(id)
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS profissional_atende (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                status ENUM('ativo', 'inativo') DEFAULT 'ativo',
                profissional_id INT UNSIGNED,
                procedimento_id INT UNSIGNED,
                FOREIGN KEY (profissional_id) REFERENCES profissional(id) ON DELETE CASCADE,
                FOREIGN KEY (procedimento_id) REFERENCES procedimento(id)
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS agendamento (
                id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                data_agendamento DATETIME NOT NULL,
                data_criacao DATETIME NOT NULL DEFAULT NOW(),
                status ENUM('ativo', 'cancelado', 'reagendado') DEFAULT 'ativo',
                paciente_id INT UNSIGNED,
                procedimento_id INT UNSIGNED,
                profissional_id INT UNSIGNED,
                FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE,
                FOREIGN KEY (procedimento_id) REFERENCES procedimento(id),
                FOREIGN KEY (profissional_id) REFERENCES profissional(id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS agendamento`);
        await queryRunner.query(`DROP TABLE IF EXISTS profissional_atende`);
        await queryRunner.query(`DROP TABLE IF EXISTS procedimento`);
        await queryRunner.query(`DROP TABLE IF EXISTS tipo_solicitacao`);
        await queryRunner.query(`DROP TABLE IF EXISTS profissional`);
        await queryRunner.query(`DROP TABLE IF EXISTS paciente`);
    }

}
