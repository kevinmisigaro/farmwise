export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqList {
  title: string;
  questions: FAQ[];
}

export interface Job {
    id: string
  position: string;
  location: string;
  jobType: string;
  introduction: string;
  keyResponsibilities: Responsibility[];
  howToApply: string
  qualifications: string[]
  benefits: string[]
}

export interface Responsibility {
  title: string;
  actions: string[]
}
