import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbodyComponent } from './cartbody.component';

describe('CartbodyComponent', () => {
  let component: CartbodyComponent;
  let fixture: ComponentFixture<CartbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
