import React from 'react';
export declare type MaskMask = 'currency' | 'phone' | 'ssn' | 'zip';
export interface MaskProps {
    /**
     * Must contain a `TextField` component
     */
    children: React.ReactNode;
    mask?: MaskMask;
}
export declare class Mask extends React.PureComponent<MaskProps, any> {
    constructor(props: MaskProps);
    componentDidUpdate(prevProps: MaskProps): void;
    debouncedOnBlurEvent: any;
    /**
     * Get the child text field. Called as a method so that
     * updates to the field cause the mask to re-render
     * @returns {React.ReactElement} Child TextField
     */
    field(): React.ReactElement;
    /**
     * To avoid a jarring experience for screen readers, we only
     * add/remove characters after the field has been blurred,
     * rather than when the user is typing in the field
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */
    handleBlur(evt: React.ChangeEvent<HTMLInputElement>, field: React.ReactElement): void;
    /**
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */
    handleChange(evt: React.ChangeEvent<HTMLInputElement>, field: React.ReactElement): void;
    render(): React.ReactNode;
}
export default Mask;
