import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  HasOne,
  HasMany,
  Sequelize,
} from "sequelize-typescript";
import { Balance } from "./Balance";
import { Goal } from "./Goal";
import { Shared } from "./Shared";

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
    unique: true,
  })
  email!: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  password!: string;

  @Column({
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1bNiLkJdKgheMl1Bqi1eecDJsufGqq82LA",
    allowNull: true,
  })
  picture!: string;

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  premium!: boolean;

  @Column({
    allowNull: false,
    defaultValue: true,
  })
  active!: boolean;

  @Column({
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  suspenseEndDate!: Date;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @HasOne(() => Balance)
  balance!: Balance;

  @HasMany(() => Goal)
  goal!: Goal[];

  @HasMany(() => Shared)
  shared!: Shared[];
}
