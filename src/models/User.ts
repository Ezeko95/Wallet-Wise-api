import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  HasOne
} from "sequelize-typescript";
import { Balance } from "./Balance";

@Table
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: false,
  })
  name!: string;

  @Column({
    allowNull: false,
  })
  lastname!: string;

  @Column({
    allowNull: false,
  })
  email!: string;

  @Column({
    allowNull: false,
  })
  password!: string;

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  premium!: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @HasOne(() => Balance)
  balance!: Balance;
}
