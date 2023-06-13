import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
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

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
