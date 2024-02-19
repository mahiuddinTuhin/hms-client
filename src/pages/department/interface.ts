export type TContact = {
  phone: string[];
  email: string[];
  address: string[];
};
export type TDepartment = {
  _id?: string;
  id: string;
  departmentName: string;
  departmentDetails: string;
  specializations: string[];
  medicalHistory?: string[];
  doctors: string[];
  contact: TContact;

  medicalLicense: string[];
  isDeleted: true | false;
};

export type TMedicalProblem = {
  problemName: string;
  problemHints: string;
  symptoms: string[];
  supportsFromHospital: string[];
  treatments: string[];
};

export type TSpecializations = {
  _id?: string;
  id?: string;
  specializationName: string;
  specializationDetails: string;
  problems: TMedicalProblem[];
  doctors?: string[];
  department: string;
};
