export interface DateObject {
    day: string;
    month: string;
    year: string;
}
export declare const defaultDateFormatter: (dateObject: DateObject) => DateObject;
export default defaultDateFormatter;
