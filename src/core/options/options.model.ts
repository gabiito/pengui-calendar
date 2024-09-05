import { ViewMode } from "../../enums/viewMode";
import { WeekDay } from "../../enums/weekDay";
import { Month } from "../../enums/month";

export class Options {
    viewMode: ViewMode = ViewMode.Month;
    firstDayOfWeek: WeekDay = WeekDay.Monday;
    dayNames: Array<String> = Object.keys(WeekDay);
    monthNames: Array<String> = Object.keys(Month);

    constructor() {
        
    }
}   