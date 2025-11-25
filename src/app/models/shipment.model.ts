export interface Address {
  address: string;
  city: string;
  state?: string;
  zip?: string;
}

export interface Shipment {
  shipmentId: string;
  status: 'Order Placed' | 'In Transit' | 'Out for Delivery' | 'Delayed' | 'Delivered' | string;
  estimatedDelivery: string;
  origin: Address;
  destination: Address;
}
