import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "DESCRIPTIVE_INDICATOR", timestamps: false, comment: "Medical Indicator (symptom) with non-numerical value. Usuall" })
export class DescriptiveIndicator extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "INDIKATOR_ID", type: DataType.INTEGER, comment: "FK  reference for Medical Indicator" })
    IndikatorId!: number;
    @Column({ field: "DESCRIPTIVE_VALUE", type: DataType.STRING(40), comment: "Textual description of status (value) of Medical Indicator " })
    DescriptiveValue!: string;
    @Column({ field: "VALUE_SCORE", allowNull: true, type: DataType.INTEGER, comment: "A score which this descriptive value have in indicator." })
    ValueScore?: number;
}