import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Accounts } from './Accounts';

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

    @Column({
        allowNull: true,
    })
    account!: string;

    @Column({ type: 'float', allowNull: false })
    amount!: number;

    @Column({ allowNull: false, defaultValue:false })
    deletedIncome!: boolean;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @ForeignKey(() => Accounts)
    @Column
    accountId!: number;

    @BelongsTo(() => Accounts)
    Accounts!: Accounts;
}
