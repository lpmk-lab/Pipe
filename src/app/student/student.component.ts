import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  editMode: { [key: number]: boolean } = {};
  newStudent: Student = new Student(0, '', '', new Date(), '', 0, 0.0);

  totalMark:number=0
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
    this.totalMark=this.studentService.totalMark;
  }

  enableEdit(id: number): void {
    this.editMode[id] = true;
  }

  saveEdit(student: Student): void {
    this.studentService.updateStudent(student);
    this.editMode[student.id] = false;
  }
  addStudent(): void {
    if (this.newStudent.name && this.newStudent.course) {
      this.newStudent.id = this.students.length + 1; // Assign a new ID
      this.studentService.createStudent(
        this.newStudent.name,
        this.newStudent.gender,
        this.newStudent.dob,
        this.newStudent.course,
        this.newStudent.marks,
        this.newStudent.fee
      );
      this.students = this.studentService.getStudents();
      this.newStudent = new Student(0, '', '', new Date(), '', 0, 0.0); // Reset newStudent
    }
  }
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudents();
  }
}
