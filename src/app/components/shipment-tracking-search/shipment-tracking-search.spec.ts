import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTrackingSearch } from './shipment-tracking-search';

describe('ShipmentTrackingSearch', () => {
  let component: ShipmentTrackingSearch;
  let fixture: ComponentFixture<ShipmentTrackingSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentTrackingSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentTrackingSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
