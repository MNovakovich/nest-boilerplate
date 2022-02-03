import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "OFFICE_USER", timestamps: false })
export class OfficeUser extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "DOCTORS_OFFICE_ID", type: DataType.INTEGER, comment: "FK  reference for Doctors Office" })
    DoctorsOfficeId!: number;
    @Column({ field: "USER_ROLE_ID", allowNull: true, type: DataType.INTEGER, comment: "FK reference for User Role" })
    UserRoleId?: number;
    @Column({ field: "USER_NAME", type: DataType.CHAR(30), comment: "User name for login in applicaion. Must be protected and user authenicated" })
    UserName!: string;
    @Column({ field: "USER_PASSWORD", type: DataType.STRING(40), comment: "Users' password / hash value" })
    UserPassword!: string;
    @Column({ field: "FIRST_NAME", type: DataType.STRING(40), comment: "First name of the user" })
    FirstName!: string;
    @Column({ field: "LAST_NAME", type: DataType.STRING(40), comment: "Last name of the user" })
    LastName!: string;
    @Column({ field: "PHONE", allowNull: true, type: DataType.CHAR(20), comment: "Official (business) phone number of the user - usable for parent communication " })
    Phone?: string;
    @Column({ field: "EMAIL", allowNull: true, type: DataType.STRING(60), comment: "Official (business) email of the user - usable for parent communication " })
    Email?: string;
}