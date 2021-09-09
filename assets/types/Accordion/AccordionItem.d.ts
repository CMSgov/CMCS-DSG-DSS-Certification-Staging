import React from 'react';
export interface AccordionItemProps {
    /**
     * Class to be applied to the header `<button>` of an accordion item.
     */
    buttonClassName?: string;
    children?: React.ReactNode;
    /**
     * Class to be applied to the content `<div>` tag of an accordion item.
     */
    contentClassName?: string;
    /**
     * Boolean to expand the accordion.
     */
    defaultOpen?: boolean;
    /**
     * Text for the accordion item heading.
     */
    heading: React.ReactNode | string;
    /**
     *  Heading type to override default `<h2>`.
     */
    headingLevel?: '1' | '2' | '3' | '4' | '5' | '6';
    /**
     *  If not provided, a unique id will be automatically generated and used.
     */
    id?: string;
    /**
     * Sets the accordion panel's open state. Use this in combination with `onChange`
     * for a controlled accordion; otherwise, set `defaultOpen`.
     */
    isControlledOpen?: boolean;
    /**
     * A callback function that's invoked when a controlled accordion panel is selected or deselected.
     */
    onChange?: () => void;
}
export interface AccordionItemState {
    isOpen?: boolean;
}
export declare class AccordionItem extends React.Component<AccordionItemProps, AccordionItemState> {
    static defaultProps: {
        headingLevel: string;
    };
    buttonId: string;
    contentId: string;
    isControlled: boolean;
    constructor(props: AccordionItemProps);
    handleClick(): void;
    render(): React.ReactNode;
}
export default AccordionItem;
