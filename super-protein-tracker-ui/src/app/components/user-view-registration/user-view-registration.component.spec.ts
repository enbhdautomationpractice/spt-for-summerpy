import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRegistrationComponent } from './user-view-registration.component';

describe('AdminViewRegistrationComponent', () => {
  let component: UserViewRegistrationComponent;
  let fixture: ComponentFixture<UserViewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
