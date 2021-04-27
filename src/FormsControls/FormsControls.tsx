import React from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {

    return (
        <div >
            <div>
                {children}
            </div>
        </div>
    )
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}>
        <input />
    </FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validators: any,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
            validate={validators} component={component}
            {...props} /> {text}
    </div>
}