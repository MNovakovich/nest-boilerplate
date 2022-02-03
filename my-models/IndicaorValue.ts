import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "INDICAOR_VALUE", timestamps: false })
export class IndicaorValue extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "TREATMENT_ID", type: DataType.INTEGER, comment: "FK  reference for Medical Threatment" })
    TreatmentId!: number;
    @Column({ field: "INDICATOR_ID", type: DataType.INTEGER, comment: "FK  reference for Medical Indicator" })
    IndicatorId!: number;
    @Column({ field: "DESCIPTIVE_VALUE_ID", allowNull: true, type: DataType.INTEGER, comment: "FK  reference for Descriptive Medical Indicator - optional if indicator has descriptive value (enumeration)." })
    DesciptiveValueId?: number;
    @Column({ field: "CARETAKER_ID", allowNull: true, type: DataType.INTEGER, comment: "FK reference for person who sent data to doctor" })
    CaretakerId?: number;
    @Column({ field: "NUMERIC_VALUE", allowNull: true, type: DataType.DECIMAL(10,2), comment: "Value of numerical medical indicator" })
    NumericValue?: string;
    @Column({ field: "VALUE_SCORE", type: DataType.DECIMAL(10,2), comment: "A score for new value of medical indicator" })
    ValueScore!: string;
    @Column({ field: "VALUE_TIME", type: DataType.DATE, comment: "A time of capture" })
    ValueTime!: Date;
}