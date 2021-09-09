import React from 'react';
export interface ChoiceProps {
    /**
     * @hide-prop In order to be consistent with form elements, use `label` instead
     */
    children?: React.ReactNode;
    /**
     * Sets the input's `checked` state. Use this in combination with `onChange`
     * for a controlled component; otherwise, set `defaultChecked`.
     */
    checked?: boolean;
    /**
     * Content to be shown when the choice is checked. See
     * **Checked children and the expose within pattern** on
     * the Guidance tab for detailed instructions.
     */
    checkedChildren?: React.ReactNode;
    /**
     * Content to be shown when the choice is not checked
     */
    uncheckedChildren?: React.ReactNode;
    /**
     * Additional classes to be added to the root `div` element.
     */
    className?: string;
    /**
     * Additional classes to be added to the `input` element.
     */
    inputClassName?: string;
    /**
     * Label text or HTML.
     */
    label?: React.ReactNode;
    /**
     * Additional classes to be added to the `FormLabel`.
     */
    labelClassName?: string;
    /**
     * Sets the initial `checked` state. Use this for an uncontrolled component;
     * otherwise, use the `checked` property.
     */
    defaultChecked?: boolean;
    disabled?: boolean;
    /**
     * Access a reference to the `input` element
     */
    inputRef?: (...args: any[]) => any;
    /**
     * Additional hint text to display below the choice's label
     */
    hint?: React.ReactNode;
    /**
     * A unique ID to be used for the input field, as well as the label's
     * `for` attribute. A unique ID will be generated if one isn't provided.
     */
    id?: string;
    /**
     * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
     */
    requirementLabel?: React.ReactNode;
    /**
     * Applies the "inverse" UI theme
     */
    inversed?: boolean;
    size?: 'small';
    /**
     * The `input` field's `name` attribute
     */
    name: string;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    /**
     * Sets the type to render `checkbox` fields or `radio` buttons
     */
    type: 'checkbox' | 'radio';
    /**
     * The `input` `value` attribute
     */
    value: number | string;
}
declare type OmitProps = 'size' | 'type' | 'value' | 'label' | 'checked' | 'defaultChecked' | 'onBlur' | 'onChange' | 'name' | 'id' | 'className' | 'disabled';
export declare class Choice extends React.PureComponent<Omit<React.ComponentPropsWithRef<'input'>, OmitProps> & ChoiceProps, any> {
    constructor(props: ChoiceProps);
    componentWillUnmount(): void;
    input: any;
    id: string;
    isControlled: boolean;
    uncheckEventName: string;
    checked(): boolean;
    /**
     * A radio button doesn't receive an onChange event when it is unchecked,
     * so we fire an "uncheck" event when any radio option is selected. This
     * allows us to check each radio options' checked state.
     * @param {String} checkedId - ID of the checked radio option
     */
    handleUncheck(checkedId: string): void;
    handleChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.ReactNode;
}
export default Choice;
