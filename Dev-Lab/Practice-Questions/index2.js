let students = [{name:'Amit', marks: 75}, {name:'Neha', marks: 45}]

function addStudent(name, marks){
    students.push({name, marks});

}
function updateMarks(name , newMarks){
    let student = students.find(s=>s.name===name);

    if(student){
        student.marks = newMarks;
    }else{
        console.log("Name not found.")
    }
}

function getPassedStudents(){
    return students.filter(s=>s.marks>50)
}
function getTopper(){
    let highest = students[0];

    for(let i = 1; i<students.length; i++){
        if (students[i].marks>highest.marks){
            highest = students[i]
        }
    }
    return highest;
}