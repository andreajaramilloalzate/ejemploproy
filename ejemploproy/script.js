document.addEventListener('DOMContentLoaded', ()=>{
    const StudentForm = document.getElementById('StudentForm')
    const StudentList = document.getElementById('StudentLiat')
    let Students = JSON.parse(localStorage.getItem('Students')) || []

    function renderStudents(){
        StudentList.innerHTML = ''
        Students.forEach((Student, index)=>{
            const li = document.createElement('li')
             li.innerHTML = `
                 ${Student.name} - ${Studnt.age} años - Grado: ${Student.grade}
                 <button onclick = "editStudent(${index})">Editar </button>
                 <button onclick = "deleteStudent(${index})">Borrar </button>
             `
             StudentList.appendChild(li)
        })
    
    }
StudentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const StudentId = document.getElementById('StudentId').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const grade = document.getElementById('grade').value

    const StudentData = {name, age, grade}

    if(StudentId){
        Students[StudentId]=StudentData
    } else{
        Students.push(StudentData)
    }
    localStorage.setItem('Students',JSON.stringify(Students))
    renderStudents()
    StudentForm.reset()
    document.getElementById('StudentId').value=''

 })
 
 window.editStudent = (index)=>{
    document.getElementById('StudentId').value = index
    document.getElementById('name').value = Students[index].name
    document.getElementById('age').value = Students[index].age
    document.getElementById('grade').value = Students[index].grade
}

 window.deleteStudent = (index)=>{
    Students.splice(index, 1)
    localStorage.setItem('Students', JSON.stringify(Students))
    renderStudents()
}

renderStudents()


})