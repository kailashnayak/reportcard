function Student(name, roll_no, studentClass, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.studentClass = studentClass;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.calculatePercentage = function() {
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, marks) => total + marks, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        return percentage.toFixed(2); 
    };

    this.printTop3Subjects = function() {
        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });

        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    this.printReportCard = function() {
      console.log(" ")
      console.log("+----------------------+")
      console.log("|      Report Card:    |");
      console.log("+----------------------+")
        console.log(`  Name: ${this.name}`);
        console.log(`  Roll Number: ${this.roll_no}`);
        console.log(`  Class: ${this.studentClass}`);
        console.log(`  Section: ${this.section}`);
        console.log("  Marks:");
        for (const subject in this.marks_of_5_subjects) {
            console.log(`  ${subject}: ${this.marks_of_5_subjects[subject]}`);
        }
        console.log(`  Percentage: ${this.calculatePercentage()}%`);
    };
}

const studentDetails = {
    name: "Nani",
    roll_no: "A123",
    studentClass: "10",
    section: "A",
    marks_of_5_subjects: {
        science: 72,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    }
};

const student = new Student(
    studentDetails.name,
    studentDetails.roll_no,
    studentDetails.studentClass,
    studentDetails.section,
    studentDetails.marks_of_5_subjects
);

student.printTop3Subjects();
student.printReportCard();
