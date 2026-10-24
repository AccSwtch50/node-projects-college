class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}



function studentGroupbyMajor(students) {
    const majorStudents = {}
    for (const student of students) {
        if (majorStudents.hasOwnProperty(student.major)) {
            majorStudents[student.major].push(student);
            continue;
        }
        majorStudents[student.major] = [student];
    }
    return majorStudents;
}

function mainFunction() {
    const students = [
        new Student("Ambit", 20, "Informatics Engineering"),
        new Student("Keysha", 18, "Informatics Engineering"),
        new Student("Budi", 21, "Informatics Engineering"),
        new Student("Nizar", 19, "Informatics Engineering"),
        new Student("Mirna", 22, "Informatics Engineering"),
        new Student("Sarah", 23, "Informatics Engineering"),
        new Student("Amgad", 20, "System Informatics"),
        new Student("Sakina", 23, "System Informatics"),
        new Student("Sasha", 24, "System Informatics"),
        new Student("Aung", 21, "System Informatics"),
        new Student("Erna", 21, "Visual Design Communications"),
        new Student("Dini", 20, "Visual Design Communications"),
        new Student("Syifa", 20, "Visual Design Communications"),
        new Student("Alifia", 22, "Visual Design Communications"),
        new Student("Edi", 19, "Visual Design Communications")
    ]

    console.log(students);

    console.log(studentGroupbyMajor(students));
}

mainFunction();
