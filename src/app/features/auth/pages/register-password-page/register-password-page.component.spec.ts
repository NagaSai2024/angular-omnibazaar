import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPasswordPageComponent } from './register-password-page.component';

describe('RegisterPasswordPageComponent', () => {
  let component: RegisterPasswordPageComponent;
  let fixture: ComponentFixture<RegisterPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPasswordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
