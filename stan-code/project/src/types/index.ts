export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'digital' | 'course' | 'membership';
  image: string;
  downloadUrl?: string;
  courseModules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  completed?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchases: string[];
  courseProgress: Record<string, number>;
}