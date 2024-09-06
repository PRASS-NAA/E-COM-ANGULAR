import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupheaderComponent } from './signupheader.component';

describe('SignupheaderComponent', () => {
  let component: SignupheaderComponent;
  let fixture: ComponentFixture<SignupheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
