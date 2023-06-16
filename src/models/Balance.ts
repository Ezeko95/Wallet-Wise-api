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
import { Accounts } from './Accounts';
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

    @HasMany(() => Accounts) // Especifica la clave foránea 'balanceId'
    accounts!: Accounts[];
  
    @ForeignKey(() => User)
    @Column
    userId!: number;
  
    @BelongsTo(() => User)
    user!: User;
  };

  