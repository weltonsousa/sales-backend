import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInState1750183017575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "state" ("id", "name", "is_active", "created_at", "updated_at", "deleted_at")
            VALUES
                (1, 'PENDING', true, now(), now(), NULL),
                (2, 'IN_PROGRESS', true, now(), now(), NULL),
                (3, 'COMPLETED', true, now(), now(), NULL),
                (4, 'CANCELED', true, now(), now(), NULL);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
