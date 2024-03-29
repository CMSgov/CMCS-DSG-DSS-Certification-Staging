import React from 'react';
export declare type SelectDefaultValue = number | string;
export interface SelectOptions {
    label: React.ReactNode;
    value: number | string;
}
export declare type SelectSize = 'small' | 'medium';
export declare type SelectValue = number | string;
export declare type SelectErrorPlacement = 'top' | 'bottom';
export interface SelectProps {
    /**
     * Adds `aria-label` attribute. When using `aria-label`, `label` should be empty string.
     */
    ariaLabel?: string;
    /**
     * Used to define custom Select options (i.e. option groups). When using the `children` prop, `options` should be an empty list.
     */
    children?: React.ReactNode;
    /**
     * Sets the initial selected state. Use this for an uncontrolled component;
     * otherwise, use the `value` property.
     */
    defaultValue?: SelectDefaultValue;
    /**
     * Disables the entire field.
     */
    disabled?: boolean;
    /**
     * The ID of the error message applied to the Select field.
     */
    errorId?: string;
    errorMessage?: React.ReactNode;
    /**
     * Location of the error message relative to the field input
     */
    errorPlacement: SelectErrorPlacement;
    /**
     * Additional classes to be added to the select element
     */
    fieldClassName?: string;
    /**
     * A unique ID to be used for the Select field.
     */
    id: string;
    /**
     * Applies the "inverse" UI theme
     */
    inversed?: boolean;
    /**
     * The field's `name` attribute
     */
    name: string;
    /**
     * The list of options to be rendered. Provide an empty list if using custom options via the `children` prop.
     */
    options: SelectOptions[];
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    setRef?: (...args: any[]) => any;
    /**
     * If the component renders a select, set the max-width of the input either to `'small'` or `'medium'`.
     */
    size?: SelectSize;
    /**
     * Sets the field's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
    value?: SelectValue;
}
declare type OmitProps = 'size' | 'value';
/**
 * <Select> is an internal component used by <Dropdown>, which wraps it and handles common form controls like labels, error messages, etc
 * <Select> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 * As an internal component, it's subject to more breaking changes. Exercise caution using <Select> outside of those special cases
 */
export declare class Select extends React.PureComponent<Omit<React.ComponentPropsWithoutRef<'select'>, OmitProps> & SelectProps, any> {
    constructor(props: SelectProps);
    render(): React.ReactNode;
}
export default Select;
