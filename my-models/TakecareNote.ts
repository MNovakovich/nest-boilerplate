import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "TAKECARE_NOTE", timestamps: false })
export class TakecareNote extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surrogate key, autoincrement" })
    Id!: number;
    @Column({ field: "TREATMENT_ID", allowNull: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    TreatmentId?: number;
    @Column({ field: "NOTE", type: DataType.STRING, comment: "Important note writen by doctors for parents to apply special care to patient." })
    Note!: string;
    @Column({ field: "NOTE_TIME", type: DataType.DATE })
    NoteTime!: Date;
}