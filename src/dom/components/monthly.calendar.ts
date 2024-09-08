import { CalendarEvent } from '../../core/events/event.model';
import { EventsMap } from '../../types/events';

interface BaseComponent {
    render(): void;
    unMount(): void;
}

export class MonthlyCalendarView implements BaseComponent {
    private nodeRef: Node | null = null;
    private events: EventsMap = new Map();

    render(): void {
        

        // get the value of 2021-10-01

        // a container for the calendar with 7 columns for the days of the week
        // rows are created for each week of the given month
        /*
            | componente mensual
                | lista de componentes dias
                    | lista de componentes eventos

            // CD => Component Day
            | dc  | cd  | cd | cd | cd | cd | cd |
            | dc  | cd  | cd | cd | cd | cd | cd |
            | dc  | cd  | cd | cd | cd | cd | cd |
            | dc  | cd  | cd | cd | 16 | cd | cd |
            | dc  | cd  | cd | cd | cd | cd | cd |
            | dc  | cd  | cd | cd | cd | cd | cd |

            {data} => [1,15,22,30]
            div container grid grid-cols-7 gird-rows-6(computado)
             > loop componente dia // [6] -> null
              > loop componente evento


            Calendar(...)
            -> addEvents(Events[16]) -> Objeto de evento (date)
                + cargar eventos en el calendario
            -> addEvent()

            Calendar(...)
            


        */
        throw new Error('Method not implemented.');
    }

    unMount(): void {
        throw new Error('Method not implemented.');
    }
}
