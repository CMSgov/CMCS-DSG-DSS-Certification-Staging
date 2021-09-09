import React from 'react';
export interface DropdownProps {
    /**
     * Adds `aria-label` attribute. When using `aria-label`, `label` should be empty string.
     */
    ariaLabel?: string;
    /**
     * Additional classes to be added to the root element.
     */
    className?: string;
    /**
     * Used to define custom dropdown options (i.e. option groups). When using the `children` prop, `options` should be an empty list.
     */
    children?: React.ReactNode;
    /**
     * Sets the initial selected state. Use this for an uncontrolled component;
     * otherwise, use the `value` property.
     */
    defaultValue?: number | string;
    /**
     * Disables the entire field.
     */
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    /**
     * Additional classes to be added to the error message
     */
    errorMessageClassName?: string;
    /**
     * Location of the error message relative to the field input
     */
    errorPlacement?: 'top' | 'bottom';
    /**
     * Additional classes to be added to the select element
     */
    fieldClassName?: string;
    /**
     * Used to focus `select` on `componentDidMount()`
     */
    focusTrigger?: boolean;
    /**
     * Additional hint text to display
     */
    hint?: React.ReactNode;
    /**
     * A unique ID to be used for the dropdown field. If one isn't provided, a unique ID will be generated.
     */
    id?: string;
    /**
     * Access a reference to the `select` element
     */
    inputRef?: (...args: any[]) => any;
    /**
     * Applies the "inverse" UI theme
     */
    inversed?: boolean;
    /**
     * Label for the field. If using `Dropdown` without a label, provide an empty string for `label` and use the `ariaLabel` prop instead.
     */
    label: React.ReactNode;
    /**
     * Additional classes to be added to the `FormLabel`.
     */
    labelClassName?: string;
    /**
     * The field's `name` attribute
     */
    name: string;
    /**
     * The list of options to be rendered. Provide an empty list if using custom options via the `children` prop.
     */
    options: {
        label: React.ReactNode;
        value: number | string;
    }[];
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
    requirementLabel?: React.ReactNode;
    /**
     * If the component renders a select, set the max-width of the input either to `'small'` or `'medium'`.
     */
    size?: 'small' | 'medium';
    /**
     * Sets the field's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
    value?: number | string;
}
declare type OmitProps = 'size' | 'value' | 'label' | 'className' | 'children' | 'defaultValue' | 'disabled' | 'id' | 'name' | 'onBlur' | 'onChange';
export declare class Dropdown extends React.PureComponent<Omit<React.ComponentPropsWithoutRef<'select'>, OmitProps> & DropdownProps, any> {
    constructor(props: DropdownProps);
    render(): React.ReactNode;
}
export default Dropdown;
