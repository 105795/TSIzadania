function getAverage(scores) {
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return 'A+'; 
    } else if (score >= 90 && score <=99) { 
      return 'A';
    } else if (score >= 80 && score <=89) { 
      return 'B';
    } else if (score >= 70 && score <=79) { 
      return 'C';
    } else if (score >= 60 && score <=69) {
      return 'D';
    } else {return 'F';}
}

function hasPassingGrade(score) {
  return getGrade(score) !== 'F';
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const status = hasPassingGrade(studentScore) ? 'passed' : 'failed';
  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
}

const scores = [85, 90, 78, 92, 88];
const studentScore = 90;
console.log(studentMsg(scores, studentScore));