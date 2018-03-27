import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesformComponent } from './classesform.component';

describe('ClassesformComponent', () => {
  let component: ClassesformComponent;
  let fixture: ComponentFixture<ClassesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
