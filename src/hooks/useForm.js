// write your custom hook here to control your checkout form

import React, {useState} from 'react' 


export const useForm = initialValue => {
    const [formValue, setFormValue] = useState(initialValue);
    const handleChanges = updatedValue => {
        setFormValue(updatedValue)
    }
    return [formValue, setFormValue, handleChanges];
}