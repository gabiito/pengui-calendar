import { EventsMap } from '../../types/events';
import { Options, ViewMode } from '../../types/options';
import { CalendarEvent } from '../events/event.model';

export class Calendar {
    private element: Element;
    private options: Options;
    private events: EventsMap = new Map();

    constructor(selector: string, options: Options = {}) {
        this.element = this.getElementFromSelector(selector);
        this.validateOptions(options);
        this.options = options;
    }

    private getElementFromSelector(selector: string): Element {
        if (selector === '') {
            throw new Error("Empty selector provided");
        }
        const element = document.querySelector(selector);
        if (element === null) {
            throw new Error(`"Element not found for selector: "${selector}"`);
        }
        return element;
    }

    private validateOptions(options: Options) {
        if ('viewMode' in options) {
            if (!['Month', 'Week', 'Day'].includes(options.viewMode ?? '')) {
                throw new Error(`"${options.viewMode}" is not a valid value for option "viewMode"`);
            }
        }

        if ('firstDayOfWeek' in options) {
            if (![1, 2, 3, 4, 5, 6, 7].includes(options.firstDayOfWeek ?? 0)) {
                throw new Error(
                    `"${options.firstDayOfWeek}" is not a valid value for option "firstDayOfWeek"`,
                );
            }
        }

        if ('dayNames' in options) {
            if (
                !Array.isArray(options.dayNames) ||
                options.dayNames.length !== 7 ||
                !options.dayNames.every((element) => typeof element === 'string')
            ) {
                throw new Error(`${options.dayNames}" is not a valid value for option "dayNames"`);
            }
        }

        if ('monthNames' in options) {
            if (
                !Array.isArray(options.monthNames) ||
                options.monthNames.length !== 12 ||
                !options.monthNames.every((element) => typeof element === 'string')
            ) {
                throw new Error(
                    `${options.monthNames}" is not a valid value for option "monthNames"`,
                );
            }
        }
    }

    setView(view: ViewMode) {
        this.options.viewMode = view;
    }

    getElement(): Element {
        return this.element;
    }

    addEvents(events: CalendarEvent[]) {
        this.events.set('2021-10-01', [
            ...(this.events.get('2021-10-01') ?? []), // TODO: maybe a merging function?
            new CalendarEvent({
                title: 'Event 1',
                startDate: new Date('2021-10-01'),
                endDate: new Date('2021-10-01'),
                description: 'Description 1',
                location: 'Location 1',
                members: [],
                recurrent: false,
            }),
        ]);
        this.events.set('2021-10-01', [
            ...(this.events.get('2021-10-01') ?? []), // TODO: maybe a merging function?
            new CalendarEvent({
                title: 'Event 1',
                startDate: new Date('2021-10-01'),
                endDate: new Date('2021-10-01'),
                description: 'Description 1',
                location: 'Location 1',
                members: [],
                recurrent: false,
            }),
        ]);
        this.events.set('2021-10-01', [
            ...(this.events.get('2021-10-01') ?? []), // TODO: maybe a merging function?
            new CalendarEvent({
                title: 'Event 1',
                startDate: new Date('2021-10-01'),
                endDate: new Date('2021-10-01'),
                description: 'Description 1',
                location: 'Location 1',
                members: [],
                recurrent: false,
            }),
        ]);
    }

    listEvents(): CalendarEvent[] {
        return Array.from(this.events.values()).flat();
    }

    render() {
        throw new Error('Method not implemented.');
    }
}
