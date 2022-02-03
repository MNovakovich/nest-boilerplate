import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "TREATMENT_INDICATOR", timestamps: false })
export class TreatmentIndicator extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "TREATMENT_D", type: DataType.INTEGER, comment: "FK  reference for Medical Threatment" })
    TreatmentD!: number;
    @Column({ field: "INDICATOR_ID", type: DataType.INTEGER, comment: "FK  reference for Medical Indicator" })
    IndicatorId!: number;
    @Column({ field: "REFRESH_TIME", allowNull: true, type: DataType.INTEGER, comment: "Personal refresh time for indicator for patient - can be different from default refresh time defined in medical indicator" })
    RefreshTime?: number;
}