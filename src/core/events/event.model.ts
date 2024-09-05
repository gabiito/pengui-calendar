import { EventObject } from "../../types/event";

export class Event {
  id?: string;
  calendarId?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  recurrent: boolean;
  location: string | null; // map link?
  members: string[]; // User emails?

  constructor(eventObject?: EventObject) {
    this.id = eventObject?.id;
    this.calendarId = eventObject?.calendarId;
    this.title = eventObject?.title || "New event";
    this.description = eventObject?.description || ""; 
    this.startDate = eventObject?.startDate || new Date();
    this.endDate = eventObject?.endDate || null;
    this.recurrent = eventObject?.recurrent || false;
    this.location = eventObject?.location || null;
    this.members = eventObject?.members ?? [];
  }

  getEventDto(): EventObject {
    return {
      id: this.id,
      calendarId: this.calendarId,
      title: this.title,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      recurrent: this.recurrent,
      location: this.location,
      members: this.members,
    };
  }
}
