import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { SHIPMENT_MOCK_DATA } from '../mock/shipment.mock';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor() {}

  getShipments(): Shipment[] {
    return SHIPMENT_MOCK_DATA;
  }

  getShipmentById(id: string): Shipment | undefined {
    return SHIPMENT_MOCK_DATA.find((s) => s.shipmentId === id);
  }
}
