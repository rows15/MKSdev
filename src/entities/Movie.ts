import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
export class Movie{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    title: string
    @Column({type: 'text'})
    genre: string
    @Column({type: 'text', nullable: true})
    urlPoster: string

}