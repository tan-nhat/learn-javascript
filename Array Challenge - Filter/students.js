const highScores = students.filter(function(student) {
    return student.score >= 80;
});

console.log(highScores);