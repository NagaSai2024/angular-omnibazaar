import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmailPageComponent } from './register-email-page.component';

describe('RegisterEmailPageComponent', () => {
  let component: RegisterEmailPageComponent;
  let fixture: ComponentFixture<RegisterEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEmailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
