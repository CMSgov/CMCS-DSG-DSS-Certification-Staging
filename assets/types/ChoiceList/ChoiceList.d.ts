import { ChoiceProps as ChoiceComponentProps } from './Choice';
import React from 'react';
declare type OmitChoiceProp = 'inversed' | 'name' | 'onBlur' | 'onChange' | 'size' | 'type' | 'inputRef';
declare type ChoiceProps = Omit<ChoiceComponentProps, OmitChoiceProp>;
export interface ChoiceListProps {
    /**
     * Array of [`Choice`]({{root}}/components/choice/#components.choice.react) data objects to be rendered.
     */
    choices: ChoiceProps[];
    /**
     * Additional classes to be added to the root element.
     */
    className?: string;
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
     * Additional hint text to display
     */
    hint?: React.ReactNode;
    /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
    requirementLabel?: React.ReactNode;
    /**
     * Applies the "inverse" UI theme
     */
    inversed?: boolean;
    /**
     * Label for the field
     */
    label: React.ReactNode;
    /**
     * Additional classes to be added to the `FormLabel`.
     */
    labelClassName?: string;
    /**
     * @hide-prop [Deprecated] This prop is deprecated after changing `type` to a required prop
     */
    multiple?: boolean;
    /**
     * The field's `name` attribute
     */
    name: string;
    /**
     * Called anytime any choice is blurred
     */
    onBlur?: (...args: any[]) => any;
    /**
     * Called when any choice is blurred and the focus does not land on one
     * of the other choices inside this component (i.e., when the whole
     * component loses focus)
     */
    onComponentBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    /**
     * Sets the size of the checkbox or radio button
     */
    size?: 'small';
    /**
     * Sets the type to render `checkbox` fields or `radio` buttons
     */
    type: 'checkbox' | 'radio';
}
export declare class ChoiceList extends React.PureComponent<ChoiceListProps, any> {
    constructor(props: ChoiceListProps);
    choiceRefs: [any?];
    handleBlur(evt: React.FocusEvent<HTMLInputElement>): void;
    handleComponentBlur(evt: React.FocusEvent<HTMLInputElement>): void;
    render(): React.ReactNode;
}
export default ChoiceList;
