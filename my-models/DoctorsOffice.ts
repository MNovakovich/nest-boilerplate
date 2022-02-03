import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "DOCTORS_OFFICE", timestamps: false })
export class DoctorsOffice extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "NAME", type: DataType.STRING(40), comment: "Name of the doctors office, usually \"Dr. Nikolic\"" })
    Name!: string;
    @Column({ field: "ADDRESS", allowNull: true, type: DataType.STRING(120), comment: "Doctors Office address" })
    Address?: string;
    @Column({ field: "PHONE", allowNull: true, type: DataType.CHAR(20), comment: "Phone in the doctors office" })
    Phone?: string;
}