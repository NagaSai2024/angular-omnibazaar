import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleNavbarComponent } from './double-navbar.component';

describe('DoubleNavbarComponent', () => {
  let component: DoubleNavbarComponent;
  let fixture: ComponentFixture<DoubleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
