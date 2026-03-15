export interface Recurrence {
  name: string;
  description?: string;
  startDate: Date;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  monthDay?: number;
}