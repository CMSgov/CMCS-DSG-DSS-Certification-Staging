import React from 'react';
export { unmaskValue } from './maskHelpers';
export declare type TextFieldDefaultValue = string | number;
export declare type TextFieldRows = number | string;
export declare type TextFieldValue = string | number;
export interface TextFieldProps {
    /**
     * Apply an `aria-label` to the text field to provide additional
     * context to assistive devices.
     */
    ariaLabel?: string;
    /**
     * Additional classes to be added to the root `div` element
     */
    className?: string;
    /**
     * Sets the initial value. Use this for an uncontrolled component; otherwise,
     * use the `value` property.
     */
    defaultValue?: TextFieldDefaultValue;
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
     * Additional classes to be added to the field element
     */
    fieldClassName?: string;
    /**
     * Used to focus `input` on `componentDidMount()`
     */
    focusTrigger?: boolean;
    /**
     * Additional hint text to display
     */
    hint?: React.ReactNode;
    /**
     * A unique `id` to be used on the text field.
     */
    id?: string;
    /**
     * Access a reference to the `input` or `textarea` element
     */
    inputRef?: (...args: any[]) => any;
    /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
    requirementLabel?: React.ReactNode;
    /**
     * Applies the "inverse" UI theme
     */
    inversed?: boolean;
    /**
     * Label for the input
     */
    label: React.ReactNode;
    /**
     * Additional classes to be added to the `FormLabel`.
     */
    labelClassName?: string;
    /**
     * A unique `id` to be used on the label field.
     */
    labelId?: string;
    /**
     * Apply formatting to the field that's unique to the value
     * you expect to be entered. Depending on the mask, the
     * field's appearance and functionality may be affected.
     */
    mask?: 'currency' | 'phone' | 'ssn' | 'zip';
    /**
     * Whether or not the text field is a multiline text field
     */
    multiline?: boolean;
    name: string;
    /**
     * Sets `inputMode`, `type`, and `pattern` to improve accessiblity and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.
     */
    numeric?: boolean;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    /**
     * @hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
     */
    pattern?: string;
    /**
     * Optionally specify the number of visible text lines for the field. Only
     * applicable if this is a multiline field.
     */
    rows?: TextFieldRows;
    /**
     * Set the max-width of the input either to `'small'` or `'medium'`.
     */
    size?: 'small' | 'medium';
    /**
     * HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.
     */
    type?: string;
    /**
     * Sets the input's `value`. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultValue`.
     */
    value?: TextFieldValue;
}
declare type OmitProps = 'size' | 'label' | 'className' | 'defaultValue' | 'disabled' | 'id' | 'onBlur' | 'onChange' | 'type' | 'value' | 'name';
export declare class TextField extends React.PureComponent<Omit<React.ComponentPropsWithoutRef<'input'>, OmitProps> & TextFieldProps, any> {
    static defaultProps: {
        type: string;
    };
    constructor(props: TextFieldProps);
    render(): React.ReactNode;
}
export default TextField;
