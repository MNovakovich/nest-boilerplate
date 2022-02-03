import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "USERS_ROLE", timestamps: false, comment: "A Role of the application user.\r\nAll roles are stuff in" })
export class UsersRole extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surrogate key, autoincrement" })
    Id!: number;
    @Column({ field: "ROLE_NAME", type: DataType.STRING(40), comment: "A name of the user role, like Doctor" })
    RoleName!: string;
    @Column({ field: "EDIT_CONFIGURATION", allowNull: true, type: DataType.TINYINT, comment: "Is possible to edit application configuration: register users, diagnosis, indicators, etc." })
    EditConfiguration?: number;
    @Column({ field: "EDIT_TREATMENTS", allowNull: true, type: DataType.TINYINT, comment: "Is possible to edit medical treatments. Doctors can do that, but assistants not, for example." })
    EditTreatments?: number;
}