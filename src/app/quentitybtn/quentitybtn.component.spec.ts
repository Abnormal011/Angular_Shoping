import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuentitybtnComponent } from './quentitybtn.component';

describe('QuentitybtnComponent', () => {
  let component: QuentitybtnComponent;
  let fixture: ComponentFixture<QuentitybtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuentitybtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuentitybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
