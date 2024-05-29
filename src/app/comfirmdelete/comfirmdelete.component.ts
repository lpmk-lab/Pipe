import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comfirmdelete',
  templateUrl: './comfirmdelete.component.html',
  styleUrls: ['./comfirmdelete.component.css']
})
export class ComfirmdeleteComponent {
  @Input() name: string = '';
  @Output() confirmed = new EventEmitter<boolean>();

  onComfrim(value:boolean): void {
    this.confirmed.emit(value);
  }


}
