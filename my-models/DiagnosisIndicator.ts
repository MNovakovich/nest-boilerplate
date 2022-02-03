import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "DIAGNOSIS_INDICATOR", timestamps: false })
export class DiagnosisIndicator extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "INDICATOR_ID", type: DataType.INTEGER, comment: "FK  reference for Medical Indicator" })
    IndicatorId!: number;
    @Column({ field: "DIAGNOSYS_ID", type: DataType.INTEGER, comment: "FK  reference for medical Diagnosys" })
    DiagnosysId!: number;
}