import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "INTERVAL_SCORE", timestamps: false })
export class IntervalScore extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "LOW_VALUE", type: DataType.DECIMAL(10,2), comment: "Lower limit value for numerical indicator - inclided" })
    LowValue!: string;
    @Column({ field: "HIGH_VALUE", type: DataType.DECIMAL(10,2), comment: "Higjer limit value for numerical indicator - not inclided in interval" })
    HighValue!: string;
    @Column({ field: "INTERVAL_SCORE", type: DataType.INTEGER, comment: "Sscore for that interval with linear scale from low to high value. Low have 0 score and high have full score" })
    IntervalScore!: number;
}