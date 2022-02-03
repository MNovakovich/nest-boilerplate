import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "CARETAKER_TYPE", timestamps: false, comment: "Type of patient caretaker during the medical treatment. Nece" })
export class CaretakerType extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "NAME", type: DataType.STRING(40), comment: "Name of catretaker person type" })
    Name!: string;
}