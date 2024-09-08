import { CalendarEvent } from "../core/events/event.model";

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
};

export type EventsMap = Map<string, CalendarEvent[]>;
