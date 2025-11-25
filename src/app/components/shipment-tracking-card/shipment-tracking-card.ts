import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shipment } from '../../models/shipment.model';

@Component({
  selector: 'app-shipment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-tracking-card.html',
  styleUrls: ['./shipment-tracking-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentCardComponent {
  @Input() shipment!: Shipment;

  statusClass(status: string) {
    return status.toLowerCase().replace(/\s+/g, '-');
  }
}
