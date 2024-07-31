import { printTeacher, StudentClass, Directors } from './main';

test('printTeacher function should return formatted name', () => {
  expect(printTeacher('Richard', 'Faynman')).toBe('R. Faynman');
});

test('StudentClass methods should work correctly', () => {
  const student = new StudentClass('John', 'Doe');
  expect(student.workOnHomework()).toBe('Currently working');
  expect(student.displayName()).toBe('John');
});

test('Directors interface should work as expected', () => {
  const director1: Directors = {
    firstName: 'Richard',
    lastName: 'Faynman',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 51,
  };

  expect(director1.firstName).toBe('Richard');
  expect(director1.numberOfReports).toBe(51);
});
