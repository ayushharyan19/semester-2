let students = [
  {name : 'Ayush', marks : 75},
  {name: 'Aryan', marks : 45}
]

function addStudent(name, marks){
  students.push({name, marks});
  console.log(`${name} added successfully`);
}

function updateMarks(name, newMarks){
  let student = students.find(s=> s.name===name);
  if(student){
    student.marks = newMarks;
    console.log(`${name}'s marks updated successfully!`);
  }
  else{
    console.log("Student not found");
  }
}

function getPassedStudents(){
  return students.filter(s => s.marks>50);
}

function getTopper(){
  let topper = students[0];

  for(let i = 1; i<student.length; i++){
    if (students[i].marks>topper.marks){
      topper = students[i];
    }
  }
  return topper;
}