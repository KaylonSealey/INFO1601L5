//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student,course_code) {

  for (let record of student.transcript) {
    if (record.course === course_code) {
      let sum = 0;
      for (let grade of record.grades) {
        sum = sum + grade;
      }
      return sum / record.grades.length;
    }
  }
  return -1;
}



function getAssignmentMark(student, course_code, num) {

  for (let record of student.transcript) {
    if (record.course === course_code) {
      if (num >= 0 && num < record.grades.length) {
        return record.grades[num];
      }
    }
  }
  return -1;
}



function averageAssessment(students, course_code, num) {
      let totalMarks = 0;
      let count = 0;
    
      for (let i = 0; i < students.length; i++) {
        let student = students[i];
        
        let course = 0;
        for (let j = 0; j < student.transcript.length; j++) {
          if (student.transcript[j].course === course_code) {
            course = student.transcript[j];
          }
        }
    
        if (course) {
          let grade = course.grades[num-1];
            totalMarks = totalMarks + grade;
            count++;
        }
      }
        return totalMarks / count;
  } 
