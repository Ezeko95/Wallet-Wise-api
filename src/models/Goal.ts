import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo
  } from 'sequelize-typescript';

import { User } from './User';
  
  @Table
  export class Goal extends Model<Goal> {
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
    })
    description!: string;
  
    @Column({
      type: "float",
      allowNull: false,
    })
    total!: number;
  
    @Column({ 
      type: "float", 
      allowNull: false,
      defaultValue: 0
     })
    saved!: number;

    @Column({
      allowNull: false,
      defaultValue:''
    })
    picture!: string;
  
    @Column({
      allowNull: false,
      defaultValue:false
    })
    deletedGoal!: boolean;
  
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @UpdatedAt
    @Column
    updatedAt!: Date;
  
    @ForeignKey(() => User)
    @Column
    userId!: number;
  
    @BelongsTo(() => User)
    user!: User;
  }
  