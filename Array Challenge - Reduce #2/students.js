const averageScore = students.reduce(function(scoresTotal, student) {
    return scoresTotal + student.score;
}, 0)/students.length;

// console.log(averageScore);

const survey = students.reduce(function(survey, student){
    // console.log(student.favoriteSubject);
    const faveSubject = student.favoriteSubject;
    if(survey[faveSubject]) {
        survey[faveSubject] = survey[faveSubject] + 1
    } else {
        survey[faveSubject] = 1;
    }
    return survey;
}, {})

console.log(survey);