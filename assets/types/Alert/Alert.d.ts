import React from 'react';
export interface AnalyticsEventShape {
    event_name?: string;
    event_type?: string;
    ga_eventAction?: string;
    ga_eventCategory?: string;
    ga_eventLabel?: string;
    ga_eventType?: string;
    ga_eventValue?: string;
    heading?: string;
    type?: string;
}
interface AnalyticsObjectShape {
    onComponentDidMount?: boolean | AnalyticsEventShape;
}
export interface AlertProps {
    /**
     * Access a reference to the `alert` `div` element
     */
    alertRef?: (...args: any[]) => any;
    /**
     * Analytics events tracking is enabled by default.
     * The `analytics` prop is an object of events that is either a nested `objects` with key-value
     * pairs, or `boolean` for disabling the event tracking. To disable an event tracking, set the
     * event object value to `false`.
     * When an event is triggered, the object value is populated and sent to google analytics
     * if `window.utag` instance is loaded.
     */
    analytics?: AnalyticsObjectShape;
    /**
     * Sets the focus on Alert during the first mount
     */
    autoFocus?: boolean;
    /**
     * The alert's body content
     */
    children?: React.ReactNode;
    className?: string;
    /**
     * Text for the alert heading
     */
    heading?: string;
    /**
     * Optional id used to link the `aria-labelledby` attribute to the heading. If not provided, a unique id will be automatically generated and used.
     */
    headingId?: string;
    /**
     * Heading type to override default `<h2>`.
     */
    headingLevel?: '1' | '2' | '3' | '4' | '5' | '6';
    /**
     * Boolean to hide the `Alert` icon
     */
    hideIcon?: boolean;
    /**
     * ARIA `role`, defaults to 'region'
     */
    role?: 'alert' | 'alertdialog' | 'region' | 'status';
    /**
     * A string corresponding to the `Alert` variation classes (`error`, `warn`, `success`)
     */
    variation?: 'error' | 'warn' | 'success';
    [key: string]: any;
}
export declare class Alert extends React.PureComponent<AlertProps, any> {
    constructor(props: AlertProps);
    componentDidMount(): void;
    alertTextRef: any;
    focusRef: any;
    headingId: string;
    eventHeadingText: string;
    heading(): React.ReactElement | void;
    render(): React.ReactNode;
}
export default Alert;
