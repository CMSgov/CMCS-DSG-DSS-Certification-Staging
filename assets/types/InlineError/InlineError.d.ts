import React from 'react';
/**
 * <InlineError> is an internal component used by <FormLabel> and <FormControl>
 * <InlineError> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 */
interface InlineErrorProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    inversed?: boolean;
}
export declare function InlineError({ children, className, id, inversed, }: InlineErrorProps): React.ReactElement;
export default InlineError;
