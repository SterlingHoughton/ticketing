import { Publisher, OrderCreatedEvent, Subjects } from '@sahtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
};