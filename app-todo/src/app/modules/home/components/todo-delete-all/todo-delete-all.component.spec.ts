import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteAllComponent } from './todo-delete-all.component';

describe('TodoDeleteAllComponent', () => {
  let component: TodoDeleteAllComponent;
  let fixture: ComponentFixture<TodoDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
