import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebugformComponent } from './updatebugform.component';

describe('UpdatebugformComponent', () => {
  let component: UpdatebugformComponent;
  let fixture: ComponentFixture<UpdatebugformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebugformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
