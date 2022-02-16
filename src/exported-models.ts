import { CaretakerModule } from './domains/caretaker/caretaker.module';
import { Caretaker } from './domains/caretaker/caretaker.entity';
import { CaretakerTypeModule } from './domains/caretaker_type/caretaker_type.module';
import { CaretakerType } from './domains/caretaker_type/caretaker_type.entity';
import { DescriptiveIndicatorModule } from './domains/descriptive_indicator/descriptive_indicator.module';
import { DescriptiveIndicator } from './domains/descriptive_indicator/descriptive_indicator.entity';
import { DiagnosisModule } from './domains/diagnosis/diagnosis.module';
import { Diagnosis } from './domains/diagnosis/diagnosis.entity';
import { DiagnosisIndicatorModule } from './domains/diagnosis_indicator/diagnosis_indicator.module';
import { DiagnosisIndicator } from './domains/diagnosis_indicator/diagnosis_indicator.entity';
import { DoctorsOfficeModule } from './domains/doctors_office/doctors_office.module';
import { DoctorsOffice } from './domains/doctors_office/doctors_office.entity';
import { IndicaorValueModule } from './domains/indicaor_value/indicaor_value.module';
import { IndicaorValue } from './domains/indicaor_value/indicaor_value.entity';
import { IntervalScoreModule } from './domains/interval_score/interval_score.module';
import { IntervalScore } from './domains/interval_score/interval_score.entity';
import { MedicalIndicatorModule } from './domains/medical_indicator/medical_indicator.module';
import { MedicalIndicator } from './domains/medical_indicator/medical_indicator.entity';
import { MedicalTreatmentModule } from './domains/medical_treatment/medical_treatment.module';
import { MedicalTreatment } from './domains/medical_treatment/medical_treatment.entity';
import { UserModule } from './domains/user/user.module';
import { User } from './domains/user/user.entity';
import { PatientModule } from './domains/patient/patient.module';
import { Patient } from './domains/patient/patient.entity';
import { TakeCareModule } from './domains/take_care/take_care.module';
import { TakeCare } from './domains/take_care/take_care.entity';
import { TakecareNoteModule } from './domains/takecare_note/takecare_note.module';
import { TakecareNote } from './domains/takecare_note/takecare_note.entity';
import { TreatmentDiagnosisModule } from './domains/treatment_diagnosis/treatment_diagnosis.module';
import { TreatmentDiagnosis } from './domains/treatment_diagnosis/treatment_diagnosis.entity';
import { TreatmentIndicatorModule } from './domains/treatment_indicator/treatment_indicator.module';
import { TreatmentIndicator } from './domains/treatment_indicator/treatment_indicator.entity';
import { UsersRoleModule } from './domains/users_role/users_role.module';
import { UsersRole } from './domains/users_role/users_role.entity';
import { ValuetypeModule } from './domains/valuetype/valuetype.module';
import { Valuetype } from './domains/valuetype/valuetype.entity';

export const exportedModules = [
  CaretakerModule,
  CaretakerTypeModule,
  DescriptiveIndicatorModule,
  DiagnosisModule,
  DiagnosisIndicatorModule,
  DoctorsOfficeModule,
  IndicaorValueModule,
  IntervalScoreModule,
  MedicalIndicatorModule,
  MedicalTreatmentModule,
  UserModule,
  PatientModule,
  TakeCareModule,
  TakecareNoteModule,
  TreatmentDiagnosisModule,
  TreatmentIndicatorModule,
  UsersRoleModule,
  ValuetypeModule,
];

export const exportedEntities = [
  Caretaker,
  CaretakerType,
  DescriptiveIndicator,
  Diagnosis,
  DiagnosisIndicator,
  DoctorsOffice,
  IndicaorValue,
  IntervalScore,
  MedicalIndicator,
  MedicalTreatment,
  User,
  Patient,
  TakeCare,
  TakecareNote,
  TreatmentDiagnosis,
  TreatmentIndicator,
  UsersRole,
  Valuetype,
];
