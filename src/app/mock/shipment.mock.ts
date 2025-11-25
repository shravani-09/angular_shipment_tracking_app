import { Shipment } from '../models/shipment.model';

export const SHIPMENT_MOCK_DATA: Shipment[] = [
  {
    shipmentId: 'SH123456',
    status: 'In Transit',
    estimatedDelivery: '2025-11-25',
    origin: {
      address: '123 Main St, Los Angeles, CA, USA',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
    },
    destination: {
      address: '456 Elm St, New York, NY, USA',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    shipmentId: 'SH789012',
    status: 'Delivered',
    estimatedDelivery: '2025-11-20',
    origin: {
      address: '789 Maple Ave, Chicago, IL, USA',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
    },
    destination: {
      address: '321 Oak St, Miami, FL, USA',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
    },
  },
  {
    shipmentId: 'SH345678',
    status: 'Delayed',
    estimatedDelivery: '2025-12-01',
    origin: {
      address: '159 Pine St, Seattle, WA, USA',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
    },
    destination: {
      address: '753 Cedar St, Dallas, TX, USA',
      city: 'Dallas',
      state: 'TX',
      zip: '75201',
    },
  },
  {
    shipmentId: 'SH901234',
    status: 'In Transit',
    estimatedDelivery: '2025-11-30',
    origin: {
      address: '456 Birch Rd, San Francisco, CA, USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '94101',
    },
    destination: {
      address: '654 Walnut St, Boston, MA, USA',
      city: 'Boston',
      state: 'MA',
      zip: '02101',
    },
  },
  {
    shipmentId: 'SH567890',
    status: 'In Transit',
    estimatedDelivery: '2025-11-28',
    origin: {
      address: '852 Spruce St, Atlanta, GA, USA',
      city: 'Atlanta',
      state: 'GA',
      zip: '30301',
    },
    destination: {
      address: '963 Fir St, Washington, DC, USA',
      city: 'Washington',
      state: 'DC',
      zip: '20001',
    },
  },
  {
    shipmentId: 'SH135790',
    status: 'Delivered',
    estimatedDelivery: '2025-11-15',
    origin: {
      address: '147 Cherry Ln, Denver, CO, USA',
      city: 'Denver',
      state: 'CO',
      zip: '80201',
    },
    destination: {
      address: '258 Maple St, Seattle, WA, USA',
      city: 'Seattle',
      state: 'WA',
      zip: '98102',
    },
  },
  {
    shipmentId: 'SH246802',
    status: 'In Transit',
    estimatedDelivery: '2025-11-22',
    origin: {
      address: '369 Birch St, Portland, OR, USA',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
    },
    destination: {
      address: '741 Oak St, San Diego, CA, USA',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
    },
  },
  {
    shipmentId: 'SH369258',
    status: 'Delayed',
    estimatedDelivery: '2025-12-05',
    origin: {
      address: '852 Cedar St, Miami, FL, USA',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
    },
    destination: {
      address: '963 Pine St, New Orleans, LA, USA',
      city: 'New Orleans',
      state: 'LA',
      zip: '70112',
    },
  },
  {
    shipmentId: 'SH159753',
    status: 'In Transit',
    estimatedDelivery: '2025-11-27',
    origin: {
      address: '258 Spruce St, Boston, MA, USA',
      city: 'Boston',
      state: 'MA',
      zip: '02108',
    },
    destination: {
      address: '369 Maple Ave, Dallas, TX, USA',
      city: 'Dallas',
      state: 'TX',
      zip: '75202',
    },
  },
  {
    shipmentId: 'SH753951',
    status: 'Delivered',
    estimatedDelivery: '2025-11-18',
    origin: {
      address: '147 Elm St, Atlanta, GA, USA',
      city: 'Atlanta',
      state: 'GA',
      zip: '30303',
    },
    destination: {
      address: '258 Oak St, San Francisco, CA, USA',
      city: 'San Francisco',
      state: 'CA',
      zip: '94103',
    },
  },
];
