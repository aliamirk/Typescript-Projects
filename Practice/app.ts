// class name {
//     constructor(parameters) {


//     }
// }b

// class badgreeter {
//     name: string
//     constructor() {
//         this.name = "hello"
// //     }
// // }
// function myCallback(text: string) {
//     console.log("Inside myCallback" + text);

// }

// function callingFunction(initialText: String, callback:(text:string) => void){
//     callback(initialText);
// }

// callingFunction("mytext", myCallback);
// class Base{
//     greet(){
//         console.log("Hello World");

//     }
// }

// class Derived extends Base{
//     // Overriding
//      greet(name?:string) {

//
// }

// class Person {
//   static id: number = 0;
//   PersonId: number = 0;
//   constructor() {
//     this.PersonId = ++Person.id;
//   }
// }

// const a = new Person();
// console.log(a.PersonId);
// const b = new Person();
// console.log(b.PersonId)
// const c = new Person();
// console.log(c.PersonId)

class Person {
  name?: string;
}
class Student extends Person {
  course?: string;
  rollNumber?: number;
}

class Teacher extends Person {
  course?: string;
  timing?: string;
}

class Course {
  classTeacher?: Teacher;
  students?: Student[];
  Timing?: string;
}

const teacher: Teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6 - 10";

const student1: Student = new Student();
student1.name = "student1";
student1.rollNumber = 1;
student1.course = teacher.course;

const student2: Student = new Student();
student2.name = "student2";
student2.course = teacher.course;
student2.rollNumber = 2;

const student3: Student = new Student();
student3.name = "student3";
student3.course = teacher.course;
student3.rollNumber = 3;

const course: Course = new Course();
course.classTeacher = teacher;
course.Timing = teacher.timing;
const std_Arr: Student[] = [student1, student2, student3];
course.students = std_Arr;

console.log(course);
