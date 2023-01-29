// (required No. 3) >>>>>>> intialazing school array
var school = [];
// create students data.
var students = [
    {
        id: 1,
        name: "Rayan Jowair",
        lavel: "Senior",
        isSenior: true
    },
    {
        id: 2,
        name: "Abdullah Aldowsry",
        lavel: "mid level",
        isSenior: false
    },
    {
        id: 3,
        name: "Aziz Alenezi",
        lavel: "enry level",
        isSenior: false
    },
];
// create Teacher data.
var teachers = [
    {
        id: 4,
        name: "Abdulqadir",
        specialty: "Math",
        courseNum: 104
    },
    {
        id: 5,
        name: "Khalid bin muhammad",
        specialty: "Math",
        courseNum: 104
    },
    {
        id: 6,
        name: "Abdulqadir",
        specialty: "Math",
        courseNum: 104
    },
];
// (required No. 4) >>>>>>> enrty three students data.
students.forEach(function (student) { return school.push(student); });
// (required No. 5) >>>>>>> print students data function.
var students_info = function () {
    school.forEach(function (person) {
        console.log(person);
    });
};
// students_info() call.
students_info();
// (required No. 5) >>>>>>> create Teacher alias
// 5. append teachers.
teachers.forEach(function (teacher) { return school.push(teacher); });
