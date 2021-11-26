import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotOutputComponent } from './robot-output.component';

describe('RobotOutputComponent', () => {
  let component: RobotOutputComponent;
  let fixture: ComponentFixture<RobotOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
