import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserRD {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number;

}


