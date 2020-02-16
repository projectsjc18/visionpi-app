export class Event {
  _id: string;
  account: string;
  device: string;
  events: {
    type: string;
    event: string;
    registerdate: string;
  };
  status: string;
  eventdate: string;
}
