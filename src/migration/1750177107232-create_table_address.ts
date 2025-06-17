import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1750177107232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "address" (
                "id" SERIAL PRIMARY KEY,
                "street" VARCHAR(255) NOT NULL,
                "number" VARCHAR(50) NOT NULL,
                "complement" VARCHAR(255),
                "neighborhood" VARCHAR(100) NOT NULL,
                "city_id" INTEGER NOT NULL,
                "state_id" INTEGER NOT NULL,
                "country_id" INTEGER NOT NULL,
                "postal_code" VARCHAR(20) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "address";
        `);
    }

}
