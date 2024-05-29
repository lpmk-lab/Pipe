import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { PercentPipe } from './Pipes/percent.pipe';
import { FilterPipe } from './Pipes/Filter.pipe';
import { ComfirmdeleteComponent } from './comfirmdelete/comfirmdelete.component';
import { ViewContianer } from './comfirmdelete/ViewContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PercentPipe,
    FilterPipe,
    ComfirmdeleteComponent,
    ViewContianer
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
