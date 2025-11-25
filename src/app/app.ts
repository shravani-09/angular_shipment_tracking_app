import { Component } from '@angular/core';
import { ShipmentTrackingComponent } from './components/shipment-tracking/shipment-tracking';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShipmentTrackingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
