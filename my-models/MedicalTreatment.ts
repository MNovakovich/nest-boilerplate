import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "MEDICAL_TREATMENT", timestamps: false })
export class MedicalTreatment extends Model {
    @Column({ field: "ID", primaryKey: true, type: DataType.INTEGER, comment: "Surogate key - autoincerment number" })
    Id!: number;
    @Column({ field: "PATIENT_ID", type: DataType.INTEGER, comment: "FK  reference for Patient" })
    PatientId!: number;
    @Column({ field: "DOCTOR_ID", type: DataType.INTEGER, comment: "FK  reference for Doctor" })
    DoctorId!: number;
    @Column({ field: "STARTED", type: DataType.DATE, comment: "Time of first visit to doctors with new symptoms" })
    Started!: Date;
    @Column({ field: "FINISHED", allowNull: true, type: DataType.DATE, comment: "Time of last visit when threatment was closed" })
    Finished?: Date;
    @Column({ field: "ACTUAL_SCORE", type: DataType.DECIMAL(6,2), comment: "Actuall total score of patient health state" })
    ActualScore!: string;
}