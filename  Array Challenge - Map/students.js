const updateStudents = students.map(function(student) {
    student.role = 'student';
    return student;
});

console.log(updateStudents)