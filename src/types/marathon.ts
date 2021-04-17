import { Moment } from 'moment';

export type MarathonFormData = {
  title: string;
  description: string;
  trainings: { training: string; }[];
  dateStart: Moment;
  dateEnd: Moment;
  progressIn: number;
};
