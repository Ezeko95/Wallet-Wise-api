import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo, 
    HasMany
} from 'sequelize-typescript';

import { User } from './User';
import { IExpense } from '../Handlers/movementsHandler';
import { Participants } from "./Participants"

@Table
export class Shared extends Model<Shared> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: true,
    })
    name!: string;

    @Column({
        allowNull: true,
    })
    total!: number;

    @Column({
        allowNull: true,
    })
    personalExpense!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @HasMany(()=> Participants)
    participants!: Participants[];

    @ForeignKey(() => User)
    @Column
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}