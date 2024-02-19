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

export type TEducation = {
  institute: string;
  degree: string;
  year: number;
};

export type TAdmin = {
  fullName: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  profileImage: string;

  education: TEducation[];
  address: {
    presentAddress: string;
    permanentAddress: string;
  };
  isDeleted: boolean;
  id: string;
  user: string;
};
