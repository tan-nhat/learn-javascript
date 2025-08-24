const highScores = students.filter(function(student) {
    if (student.score >= 80){
        return student;
    };
});

console.log(highScores);