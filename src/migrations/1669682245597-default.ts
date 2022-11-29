import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669682245597 implements MigrationInterface {
    name = 'default1669682245597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" text NOT NULL, "genre" text NOT NULL, "urlPoster" text, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
