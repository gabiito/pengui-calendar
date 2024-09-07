export type ViewMode = 'Month' | 'Week' | 'Day';

export type WeekDayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Options = {
    viewMode?: ViewMode;
    firstDayOfWeek?: WeekDayNumber;
    dayNames?: [string, string, string, string, string, string, string];
    monthNames?: [string, string, string, string, string, string, string, string, string, string, string, string];
}