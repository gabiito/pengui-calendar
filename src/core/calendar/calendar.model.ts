import { Options, ViewMode } from '../../types/options';
import { Event } from '../events/event.model';

export class Calendar {
    private element: Element;
    private options: Options;
    private events: Event[] = [];

    constructor(selector: string, options: Options = {}) {
        this.element = this.getElementFromSelector(selector);
        this.validateOptions(options);
        this.options = options;
    }

    private getElementFromSelector(selector: string): Element {
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

    addEvents(events: Event[]) {
        //todo: validate Event structure
        this.events = events;
    }

    listEvents(): Event[] {
        return this.events;
    }

    render() {
        throw new Error('Method not implemented.');
    }
}
