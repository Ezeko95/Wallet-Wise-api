import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Account } from './Account';

@Table
export class Expense extends Model<Expense> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: true,
  })
  description!: string;

  @Column({
    allowNull: false,
  })
  category!: string;

  @Column({
    allowNull: false,
  })
  paymentMethod!: string;

  @Column({ type: "float", allowNull: false })
  amount!: number;

  @Column({ allowNull: false, defaultValue:false })
  deletedExpense!: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @ForeignKey(() => Account)
  @Column
  accountId!: number;

  @BelongsTo(() => Account)
  Account!: Account;
}
