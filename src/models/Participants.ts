import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Shared } from './Shared';


@Table
export class Participants extends Model<Participants>{
    @Column({
        allowNull: true,
    })
    name!: string;
    
    @Column({
        allowNull: true,
    })
    expense!: number;

    @ForeignKey(() => Shared)
    @Column
    sharedId!: number;
}