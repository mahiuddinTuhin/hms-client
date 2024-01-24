export type TProblem = {
  problem: {
    problemName: string;
    problemHints: string;
    symptoms: [string];
    supportsFromHospital: [string];
    treatments: [string];
    _id: string;
  };
  doctor: {
    doctorId: string;
    doctorName: string;
    degree: [string];
    profileImage: string;
  };
};

export type TProblems = [TProblem];
