import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Balance } from './Balance';

    @Table
export class Income extends Model<Income> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: true,
    })
    type!: string;

    @Column({ type: 'float', allowNull: false })
    amount!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @ForeignKey(() => Balance)
    @Column
    balanceId!: number;

    @BelongsTo(() => Balance)
    balance!: Balance;
}