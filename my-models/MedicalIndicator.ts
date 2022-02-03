import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "MEDICAL_INDICATOR", timestamps: false })
export class MedicalIndicator extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "TYPE_ID", type: DataType.INTEGER, comment: "FK  reference for Value Type" })
    TypeId!: number;
    @Column({ field: "NAME", type: DataType.STRING(40), comment: "Name (title) of medical indicator" })
    Name!: string;
    @Column({ field: "DESCRIPTION", type: DataType.STRING(255), comment: "Longer descriptive text of medical indicator, like \"Temperature\"" })
    Description!: string;
    @Column({ field: "SHORT_NAME", type: DataType.CHAR(10), comment: "Short descriptive text of medical indicator, like \"Temp\". Used for small title" })
    ShortName!: string;
    @Column({ field: "REFRESH_TIME", type: DataType.INTEGER, comment: "Time (hours) to ask parents for new value of medical indicator" })
    RefreshTime!: number;
    @Column({ field: "UNIT_OF_MEASURE", allowNull: true, type: DataType.CHAR(6), comment: "Mnemonic for Unit of Measure for medical indicator" })
    UnitOfMeasure?: string;
}