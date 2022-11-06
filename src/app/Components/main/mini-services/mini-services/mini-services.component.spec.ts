import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniServicesComponent } from './mini-services.component';

describe('MiniServicesComponent', () => {
  let component: MiniServicesComponent;
  let fixture: ComponentFixture<MiniServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
