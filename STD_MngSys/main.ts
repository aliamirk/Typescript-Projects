import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// console.log(Math.floor(100000 + Math.random() * 900000));

class Person {
  name?: string;
  gender?: string;
}

class teacher extends Person {
  course?: string;
  timings?: string;
}

class student extends Person {
  course?: string;
  timings?: string;
  id?: any;
}

class courseinfo {
  name?: string;
  duration?: string;
  info?: string;
}

const Teacher: teacher = new teacher();
Teacher.name
Teacher.gender
Teacher.course
Teacher.timings


const std:student=new student()
std.id= console.log(Math.floor(100000 + Math.random() * 900000));