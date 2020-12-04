import { Listener } from '@sahtickets/common';
import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent } from '@sahtickets/common';
import { Subjects } from '@sahtickets/common';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payment-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}