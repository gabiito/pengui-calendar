export type EventObject = {
  id?: string;
  calendarId?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  recurrent: boolean;
  location: string | null;
  members: string[];
}
