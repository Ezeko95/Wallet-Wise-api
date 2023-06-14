import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    HasMany, 
    BelongsTo,
    ForeignKey
    } from 'sequelize-typescript';
import { Expense } from './Expense';
import { Income } from './Income';
import { User } from './User';

  @Table
  export class Balance extends Model<Balance> {
    @Column({
      primaryKey: true,
      autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: false,
        defaultValue: 0,
    })
    total!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @HasMany(()=> Expense)
    expense!: Expense[];

    @HasMany(()=> Income)
    income!: Income[];

    @ForeignKey(() => User)
    @Column
    userId!: number;

    @BelongsTo(()=> User)
    user!: User;
  };

  