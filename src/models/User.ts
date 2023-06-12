import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
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
  })
  premium!: false;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
