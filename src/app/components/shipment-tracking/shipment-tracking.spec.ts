import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTrackingComponent } from './shipment-tracking';

describe('ShipmentTracking', () => {
  let component: ShipmentTrackingComponent;
  let fixture: ComponentFixture<ShipmentTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentTrackingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentTrackingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
