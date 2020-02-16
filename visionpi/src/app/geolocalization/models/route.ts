import { Checkpoint } from './checkpoint';

export class Route {
  account: string;
  fleet: string;
  route: string;
  vehicle: string;
  checkpoints: Checkpoint[];
  updated_at: string;
}
