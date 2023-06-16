import {
    Model,
    Column,
    Table,
    HasMany, 
    BelongsTo,
    ForeignKey
    } from 'sequelize-typescript';
import { Expense } from './Expense';
import { Income } from './Income';
import { Balance } from './Balance';


@Table
export class Accounts extends Model<Accounts> {
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
        allowNull: false,
        defaultValue: 0,
    })
    total!: number;

    @HasMany(()=> Expense)
    expense!: Expense[];

    @HasMany(()=> Income)
    income!: Income[];

    @ForeignKey(() => Balance)
    @Column
    userId!: number;

    @BelongsTo(()=> Balance)
    Balance!: Balance;
};