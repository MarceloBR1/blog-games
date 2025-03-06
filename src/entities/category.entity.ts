import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Post, post => post.category_id)
    posts: Post[]
}