import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private students: Student[] = [
    new Student(1, 'John Doe', 'Male', new Date('2000-01-01'), 'Computer Science', 85, 1500),
    new Student(2, 'Jane Smith', 'Female', new Date('1999-05-15'), 'Mathematics', 90, 1400),
    new Student(3, 'Jim Beam', 'Male', new Date('2001-07-21'), 'Physics', 78, 1600),
    new Student(4, 'Jill Valentine', 'Female', new Date('2002-03-10'), 'Biology', 88, 1550)
  ];
  totalMark:number=600;
  createStudent(name: string, gender: string, dob: Date, course: string, marks: number, fee: number): void {
     let id=this.students.length+1;
    const newStudent = new Student(id, name, gender, dob, course, marks, fee);
    this.students.push(newStudent);
  }
  getStudents(): Student[] {
    return this.students;
  }

  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  filterStudentByGender(filerText:string){
    if(filerText.toLowerCase()=='all'||filerText.toLowerCase()==''||this.students.length==0){
      return this.students ;
    }else{

     return this.students.filter((data:Student)=>{
      return data.gender.toLowerCase()==filerText.toLowerCase()
     })

    }
  }
}
