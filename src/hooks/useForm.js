// write your custom hook here to control your checkout form

import React, {useState} from 'react' 

import {useLocalStorage} from './useLocalStorage'

export const useForm = (key, initialValue) => {
    const [formValue, setFormValue] = useLocalStorage(key, initialValue);

    return [formValue, setFormValue];
}