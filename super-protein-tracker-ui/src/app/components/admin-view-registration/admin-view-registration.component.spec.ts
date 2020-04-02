import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRegistrationComponent } from './admin-view-registration.component';

describe('AdminViewRegistrationComponent', () => {
  let component: AdminViewRegistrationComponent;
  let fixture: ComponentFixture<AdminViewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
