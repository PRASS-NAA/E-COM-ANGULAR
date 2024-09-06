import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndibodyComponent } from './indibody.component';

describe('IndibodyComponent', () => {
  let component: IndibodyComponent;
  let fixture: ComponentFixture<IndibodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndibodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndibodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
