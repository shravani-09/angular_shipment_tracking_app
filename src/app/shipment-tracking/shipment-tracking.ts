import { Component, OnInit } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { ShipmentService } from '../services/shipment.service';
import { CommonModule } from '@angular/common';
import { ShipmentCardComponent } from '../components/shipment-tracking-card/shipment-tracking-card';
import { ShipmentTrackingSearch } from '../components/shipment-tracking-search/shipment-tracking-search';

@Component({
  selector: 'app-shipment-tracking',
  standalone: true,
  imports: [CommonModule, ShipmentCardComponent, ShipmentTrackingSearch],
  templateUrl: './shipment-tracking.html',
  styleUrls: ['./shipment-tracking.scss'],
})
export class ShipmentTrackingComponent implements OnInit {
  shipments: Shipment[] = [];
  filtered: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.shipments = this.shipmentService.getShipments();
    this.filtered = [...this.shipments];
  }

  onSearch(value: string) {
    const q = value.toLowerCase().trim();
    if (!q) {
      this.filtered = [...this.shipments];
      return;
    }

    this.filtered = this.shipments.filter((s) => {
      const id = s.shipmentId.toLowerCase();
      return id.includes(q);
    });
  }
}
