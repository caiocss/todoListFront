import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodoComponent } from './input-todo.component';

describe('InputTodoComponent', () => {
  let component: InputTodoComponent;
  let fixture: ComponentFixture<InputTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
