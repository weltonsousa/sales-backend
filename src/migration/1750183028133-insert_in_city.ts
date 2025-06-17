import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInCity1750183028133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "city" ("id", "name", "state_id", "created_at", "updated_at")
                VALUES
                ( 1, 'New York', 1, NOW(), NOW()),
                ( 2, 'Los Angeles', 2, NOW(), NOW()),
                ( 3, 'Chicago', 3, NOW(), NOW()),
                ( 4, 'Houston', 4, NOW(), NOW()),
                ( 5, 'Phoenix', 5, NOW(), NOW()),
           `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
