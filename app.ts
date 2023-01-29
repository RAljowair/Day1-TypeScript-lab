// 1. (required No. 1) >>>>>>> Student interface
type Student = {
  id: number;
  name: string;
  lavel: string;
  isSenior: boolean;
};

// 1. (required No. 2) >>>>>>> Teacher interface
type Teacher = {
  id: number;
  name: string;
  specialty: string;
  courseNum: number;
};

// (required No. 3) >>>>>>> intialazing school array
let school: (Student | Teacher)[] = [];

// create students data.
let students: Student[] = [
  {
    id: 1,
    name: "Rayan Jowair",
    lavel: "Senior",
    isSenior: true,
  },
  {
    id: 2,
    name: "Abdullah Aldowsry",
    lavel: "mid level",
    isSenior: false,
  },
  {
    id: 3,
    name: "Aziz Alenezi",
    lavel: "enry level",
    isSenior: false,
  },
];

// create Teacher data.
let teachers: Teacher[] = [
  {
    id: 4,
    name: "Abdulqadir",
    specialty: "Math",
    courseNum: 104,
  },
  {
    id: 5,
    name: "Khalid bin muhammad",
    specialty: "Math",
    courseNum: 104,
  },
  {
    id: 6,
    name: "Abdulqadir",
    specialty: "Math",
    courseNum: 104,
  },
];

// (required No. 4) >>>>>>> enrty three students data.
students.forEach((student) => school.push(student));

// (required No. 5) >>>>>>> print students data function.
let students_info = () => {
  school.forEach((person) => {
    console.log(person);
  });
};

// students_info() call.
students_info();

// 4. create person alias
type Person = {
  id: number;
};

// (required No. 5) >>>>>>> create Teacher alias

// 5. append teachers.
teachers.forEach((teacher) => school.push(teacher));
