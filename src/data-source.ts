import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: "postgres://yhrwupqs:x80QRVc2a0KevPDdu-Tbg4ukLmSOLVLb@peanut.db.elephantsql.com/yhrwupqs",
	name: "yhrwupqs",
	extra: {
		max: 1,
		idleTimeoutMillis: 1000,
		connectionTimeoutMillis: 1000,
	},
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})