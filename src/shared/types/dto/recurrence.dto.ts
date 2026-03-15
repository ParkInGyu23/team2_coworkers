export interface RecurrenceDto {
  name: string;
  description: string;
  startDate: string;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  monthDay: number;
}