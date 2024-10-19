import { useState } from "react";

type InputValue = string | number | undefined;

type Values = Record<string, InputValue>;

type Rules = Record<keyof Values, (value: InputValue) => string | undefined>;

export interface UseFormValidationConfig {
    initialValues: Values;
    validate: Rules;
}

export default function useFormValidation({
    initialValues,
    validate
}: UseFormValidationConfig) {
    const [values, setValues] = useState<Values>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});

    // Handle change in input fields
    const handleChange = (name: keyof Values, value: InputValue) => {

        // Update the value for the field
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        // Validate the field and set errors if necessary
        if (validate[name]) {
            const error = validate[name](value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error ?? '', // Store error if exists, otherwise empty string
            }));
        }
    }

    // Create the get function for the field props
    const get = (fieldName: keyof Values) => ({
        value: values[fieldName] ?? '',
        error: !!errors[fieldName], // If there's an error, show error state
        helperText: errors[fieldName] ?? '', // Display error message if present
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(fieldName, e.target.value), // Handle change
    })

    // Validate all fields
    const isValid = (): boolean => {
        const newErrors: Partial<Record<keyof Values, string>> = {};
        let hasErrors = false; // Flag to track if there are any errors

        // Loop through each field and validate
        for (const key in validate) {
            const error = validate[key](values[key]);
            if (error) {
                newErrors[key] = error; // Store error if exists
                hasErrors = true; // Set flag to true if there are errors
            }
        }

        setErrors(newErrors); // Update errors state
        return !hasErrors; // Return true if there are no errors
    }

    const onSubmit = (handler: (values: Values) => void | Promise<void>) => {
        if (isValid()) handler(values);
    }

    return {
        get,
        isValid,
        onSubmit
    }
}
