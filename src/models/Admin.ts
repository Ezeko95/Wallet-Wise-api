import { Model, Column, Table } from "sequelize-typescript";

@Table
export class Admin extends Model<Admin> {
  @Column({
    allowNull: false,
  })
  name!: string;

  @Column({
    allowNull: false,
  })
  password!: string;
}
