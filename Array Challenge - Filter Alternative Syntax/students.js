// Cách 1 với if
// const highScores = students.filter(function(student) {
//     if (student.score >= 80){
//         return student;
//     };
// });

// Với if nhưng không cần ngoặc nhọn
const highScores = students.filter(function(student) {
    // if (student.score >= 80) return student;
    return student.score >= 80;
    
});

console.log(highScores);