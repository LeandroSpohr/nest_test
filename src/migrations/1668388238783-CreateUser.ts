import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1668388238783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar(200)',
          },
          {
            name: 'senha',
            type: 'varchar(1000)',
          },
          {
            name: 'ativo',
            type: 'boolean',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
          },
          {
            name: 'atualizado_em',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}
