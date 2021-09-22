import React, { FunctionComponent } from 'react';
export interface AccordionProps {
    /**
     * Applies a border to the accordion content.
     */
    bordered?: boolean;
    children?: React.ReactNode;
    /**
     * Class to be applied to the outer `<div>` that contains all accordion items.
     */
    className?: string;
}
export declare const Accordion: FunctionComponent<AccordionProps>;
export default Accordion;
