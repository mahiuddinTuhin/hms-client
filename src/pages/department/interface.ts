export type TContact = {
  phone: string[];
  email: string[];
  address: string[];
};
export type TDepartment = {
  id: string;
  departmentName: string;
  departmentDetails: string;
  specializations: string[];
  medicalHistory?: string[];
  doctors: string[];
  contact: TContact;
  /*
   type TContact = {
    phone: string[];
    email: string[];
    address: string[];
}
  */
  medicalLicense: string[];
  isDeleted: true | false;
};
