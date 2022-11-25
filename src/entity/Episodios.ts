import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Episodios {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    resumo: string

    @Column()
    capa: number

    @Column()
    personagem: string

    @Column()
    duracao: number

}