interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export { printTeacher, StudentClass, Directors };

// Testing
const teacher3: Teacher = {
  firstName: 'Richard',
  fullTimeEmployee: false,
  lastName: 'Faynman',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Richard',
  lastName: 'Faynman',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 51,
};

console.log(director1);
console.log(printTeacher('Richard', 'Faynman'));

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
