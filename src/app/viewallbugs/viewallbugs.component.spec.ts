import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbugsComponent } from './viewallbugs.component';

describe('ViewallbugsComponent', () => {
  let component: ViewallbugsComponent;
  let fixture: ComponentFixture<ViewallbugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
