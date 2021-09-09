import React from 'react';
export interface FilterChipProps {
    /**
     * Id for filter chip button. If not provided, a unique id will be automatically generated and used.
     */
    id?: string;
    /**
     * Class to be applied to the outer `<div>` that contains filter chip button.
     */
    className?: string;
    /**
     * Text for the filter chip
     */
    label: string;
    /**
     *  For screenreaders, text to read for removal
     */
    ariaClearLabel: string;
    /**
     * Function to call when filter chip is dismissed
     */
    onDelete: () => void;
    /**
     *  Use alternate thinner close icon in place of standard
     */
    useAlternateIcon?: boolean;
    /**
     * Sets the size of the chip to larger version
     */
    size?: 'big';
}
export declare class FilterChip extends React.Component<FilterChipProps> {
    constructor(props: FilterChipProps);
    handleClick(): void;
    handleKeyDown(evt: React.KeyboardEvent): void;
    render(): React.ReactNode;
}
export default FilterChip;
