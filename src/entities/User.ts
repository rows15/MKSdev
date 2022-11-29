import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import bcrypt from 'bcryptjs'
@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text', unique: true})
    email: string
    @Column({type: 'text'})
    password: string
    

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }
}