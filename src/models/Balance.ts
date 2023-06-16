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
import { Account } from './Account';
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

    @HasMany(() => Account) // Especifica la clave foránea 'balanceId'
    Account!: Account[];
  
    @ForeignKey(() => User)
    @Column
    userId!: number;
  
    @BelongsTo(() => User)
    user!: User;
  };

  