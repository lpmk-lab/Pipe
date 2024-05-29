import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../model/student.model';
import { ComfirmdeleteComponent } from '../comfirmdelete/comfirmdelete.component';
import { ViewContianer } from '../comfirmdelete/ViewContainer.directive';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  editMode: { [key: number]: boolean } = {};
  newStudent: Student = new Student(0, '', '', new Date(), '', 0, 0.0);
  filerText:string='All'
  totalMark:number=0
  DeleteUser:any
showcomfirmDeleteComponent:boolean=false


@ViewChild(ViewContianer) Container:any
  totalStudent=new Promise((resolve,rejection)=>{
    setTimeout(() => {
          resolve(this.students.length)
    }, 2000);
  })
  constructor(private studentService: StudentService,private componetFactoryResolver:ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.students = this.studentService.filterStudentByGender(this.filerText);
    this.totalMark=this.studentService.totalMark;
  }
filterValueChange(){
  this.students = this.studentService.filterStudentByGender(this.filerText);
}
  enableEdit(id: number): void {
    this.editMode[id] = true;
  }

  saveEdit(student: Student): void {
    this.studentService.updateStudent(student);
    this.editMode[student.id] = false;
    this.filterValueChange();
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
      this.filterValueChange();
    }
  }
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudents();

  }
  //Dynamic component NgIF
//   showdeleteComFirm(user:Student){
//     this.DeleteUser=user
// this.showcomfirmDeleteComponent=true
//   }
showdeleteComFirm(user:Student){
  this.DeleteUser=user
  this.showConfrim(this.DeleteUser);
    }
  oncomfrim(isdelet:boolean){
    this.showcomfirmDeleteComponent=false
    if(isdelet==true){
      this.deleteStudent(this.DeleteUser.id)
    }
  }

  //Dynamic
  showConfrim(user:Student){
    //Create Instant
    const comfirmdeleteComponentFactory= this.componetFactoryResolver.resolveComponentFactory(ComfirmdeleteComponent)
    const containerViewRef= this.Container.viewContainer;
    containerViewRef?.clear()

    //rendering on DOM
    const comfrimRef=  containerViewRef.createComponent(comfirmdeleteComponentFactory);
    comfrimRef.instance.name=user.name;
    let conFfirmOF= comfrimRef.instance.confirmed.subscribe((data:boolean)=>{
      conFfirmOF.unsubscribe()
      containerViewRef.clear()
      if(data==true){
        this.deleteStudent(this.DeleteUser.id)
      }
    })
  }
}
