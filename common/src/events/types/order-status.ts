export enum OrderStatus {
  // When the order has been created, but the ticket it's trying to order hasn't been reserved
  Created = 'created',
  // The ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order
  // The order expires before payment
  // Right now the order is sort of a catch all. You could split up the different types of cancel states for analytics.
  Cancelled = 'cancelled',
  // The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // The order has reserved the ticket, and the user has provided a successful payment
  Complete = 'complete'
}