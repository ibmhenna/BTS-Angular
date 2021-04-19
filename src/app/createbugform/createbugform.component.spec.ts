import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebugformComponent } from './createbugform.component';

describe('CreatebugformComponent', () => {
  let component: CreatebugformComponent;
  let fixture: ComponentFixture<CreatebugformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebugformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
