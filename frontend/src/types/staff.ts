export interface Experience {
  years: string;
  company: string;
  role: string;
  description: string;
}

export interface StaffMember {
  id: number;
  name: string;
  photo: string;
  slogan: string;
  position: string;
  age: number;
  workExperience: string;
  experience: Experience[];
}