/**
 * Functions for sending events to Tealium/Google Analytics
 * Based on HRA Tool & SEP screener & Coverage Tools analytics service:
 * - hra-tool/src/services/analytics.js
 * - screener/src/assets/js/utils/analytics-util.js
 * - coverage-tools-frontend/src/helpers/objectUtilities.ts
 */
declare global {
    interface Window {
        utag?: {
            link: (params: AnalyticsPayload) => void;
        };
    }
}
declare type EventType = 'link';
export interface AnalyticsPayload {
    ga_eventAction: string;
    ga_eventCategory: string;
    ga_eventLabel: string;
    ga_eventType: string;
    ga_eventValue: string;
    [additional_props: string]: unknown;
}
export declare const EVENT_CATEGORY: {
    contentTools: string;
    uiComponents: string;
    uiInteraction: string;
};
export declare const MAX_LENGTH = 100;
interface AnalyticsEventProps {
    ga_eventAction: string;
    ga_eventCategory: string;
    ga_eventLabel: string;
    ga_eventType?: string;
    ga_eventValue?: string;
    [additional_props: string]: unknown;
}
export declare function sendAnalytics(event: EventType, props: AnalyticsPayload, retry?: number): string;
export declare function sendAnalyticsEvent(overrides: boolean | Record<string, unknown>, defaultPayload: AnalyticsEventProps): string;
export default sendAnalytics;
