
let student = {
    name: "John",
    age: 20,
    department: "Computer Science",
    marks: [85, 92, 78]
};

console.log("Student Details:");
console.log(student);

student.name = "David";

let total = student.marks.reduce((sum, mark) => sum + mark, 0);
student.percentage = (total / 3).toFixed(2);

let highestMark = Math.max(...student.marks);

console.log("\nAfter modifications:");
console.log(student);
console.log("Highest Mark:", highestMark);
