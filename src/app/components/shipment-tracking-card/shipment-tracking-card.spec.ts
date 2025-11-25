import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentCardComponent } from './shipment-tracking-card';

describe('ShipmentCardComponent', () => {
  let component: ShipmentCardComponent;
  let fixture: ComponentFixture<ShipmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
