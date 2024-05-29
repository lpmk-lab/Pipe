import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmdeleteComponent } from './comfirmdelete.component';

describe('ComfirmdeleteComponent', () => {
  let component: ComfirmdeleteComponent;
  let fixture: ComponentFixture<ComfirmdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfirmdeleteComponent]
    });
    fixture = TestBed.createComponent(ComfirmdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
