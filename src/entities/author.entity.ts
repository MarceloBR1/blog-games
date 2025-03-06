import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    bio: string;

    @OneToMany(() => Post, post => post.author_id)
    posts: Post[]
}