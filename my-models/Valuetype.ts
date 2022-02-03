import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "VALUETYPE", timestamps: false, comment: "Value type of medical indictor.\r\nThe indicator can be n" })
export class Valuetype extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "NAME", type: DataType.STRING(40), comment: "Name of indicator value: Numeric or Enumeration (descriptive)" })
    Name!: string;
}