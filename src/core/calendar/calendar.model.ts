import { Options } from "../options/options.model";
import { ViewMode } from "../options/enums/viewMode";

export class Calendar {
    private selector: String;
    private options: Options;
    private date: Date = new Date();

    constructor(
        selector: String,
        options?: Options,
    ) {
        this.selector = selector;
        this.options = options ?? {};
    }

    setView(view: ViewMode) {
        this.options.viewMode = view;
    }

    setDate(date: Date) {
        this.date = date;
    }

}