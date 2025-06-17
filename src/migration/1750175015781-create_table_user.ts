import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1750175015781 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        --Table: public.users

        --DROP TABLE IF EXISTS public.users;

        CREATE TABLE IF NOT EXISTS public.users
                    (
                        id integer NOT NULL DEFAULT nextval('users_id_seq':: regclass),
                        name character varying(100) COLLATE pg_catalog."default" NOT NULL,
                        email character varying(100) COLLATE pg_catalog."default" NOT NULL,
                        password character varying(100) COLLATE pg_catalog."default" NOT NULL,
                        cpf character varying(20) COLLATE pg_catalog."default" NOT NULL,
                        phone character varying(20) COLLATE pg_catalog."default",
                        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY(id),
                        CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE(cpf),
                        CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE(name),
                        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE(email)
                    )

        TABLESPACE pg_default;

        ALTER TABLE IF EXISTS public.users
            OWNER to postgres;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS public.users;
       `);
    }
}
