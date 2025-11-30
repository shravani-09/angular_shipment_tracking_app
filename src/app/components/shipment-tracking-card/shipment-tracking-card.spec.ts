import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentCardComponent } from './shipment-tracking-card';
import { SHIPMENT_MOCK_DATA } from '../../mock/shipment.mock';

describe('ShipmentCardComponent', () => {
  let component: ShipmentCardComponent;
  let fixture: ComponentFixture<ShipmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentCardComponent);
    component = fixture.componentInstance;

    component.shipment = SHIPMENT_MOCK_DATA[0];

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display shipment ID', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const h3 = compiled.querySelector('h3');

    expect(h3?.textContent).toContain(`#${SHIPMENT_MOCK_DATA[0].shipmentId}`);
  });

  it('should apply correct status class', () => {
    const status = SHIPMENT_MOCK_DATA[0].status;
    const expectedClass = component.statusClass(status);

    const compiled: HTMLElement = fixture.nativeElement;
    const statusElement = compiled.querySelector('.status');

    expect(statusElement?.classList).toContain(expectedClass);
  });
});
