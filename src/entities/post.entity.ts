import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Author } from "./author.entity";
import { Category } from "./category.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(() => Author, author => author.posts)
    author_id: number;

    @ManyToOne(() => Category, category => category.posts)
    category_id: number;
}