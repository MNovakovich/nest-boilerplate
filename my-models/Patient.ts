import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "PATIENT", timestamps: false })
export class Patient extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "DOCTORS_OFFICE_ID", type: DataType.INTEGER, comment: "FK reference of the doctors office" })
    DoctorsOfficeId!: number;
    @Column({ field: "FIRST_NAME", type: DataType.STRING(40), comment: "First name of the patient" })
    FirstName!: string;
    @Column({ field: "LAST_NAME", type: DataType.STRING(40), comment: "Last name of the patient" })
    LastName!: string;
    @Column({ field: "MIDDLE_NAME", allowNull: true, type: DataType.STRING(40), comment: "Patient middle name; parent name" })
    MiddleName?: string;
    @Column({ field: "DATE_OF_BIRTH", type: DataType.DATEONLY, comment: "Patient date of birth" })
    DateOfBirth!: string;
    @Column({ field: "OPEN_DATE", allowNull: true, type: DataType.DATEONLY, comment: "Date when paient record was opened" })
    OpenDate?: string;
    @Column({ field: "ACTIVATION_CODE", allowNull: true, type: DataType.CHAR(6), comment: "Code for activation of mobile application - unique code generated by doctor when register patient in office." })
    ActivationCode?: string;
    @Column({ field: "ACTIVAION_TIME", allowNull: true, type: DataType.DATE, comment: "Time when mobile application register familly on application backend." })
    ActivaionTime?: Date;
}