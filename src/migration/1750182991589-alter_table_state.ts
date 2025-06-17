import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableState1750182991589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "state"
            ADD COLUMN "is_active" boolean NOT NULL DEFAULT true,
            ADD COLUMN "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            ADD COLUMN "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            ADD COLUMN "deleted_at" TIMESTAMP NULL DEFAULT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "state"
            DROP COLUMN "is_active",
            DROP COLUMN "created_at",
            DROP COLUMN "updated_at",
            DROP COLUMN "deleted_at";
        `);
    }

}
