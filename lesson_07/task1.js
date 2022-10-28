'use strick'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents =  ['Сидоров','Смирнов','Попов'];


const student = (all,failed) => {
    const allStudents = all;
    const failedStudents = failed;

    const enteredStudent = allStudents.filter((student) => !failedStudents.includes(student));
    return enteredStudent;


};


console.log(student(allStudents, failedStudents));


