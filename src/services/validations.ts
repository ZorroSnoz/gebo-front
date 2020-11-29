/*
File contains functions for validation fields in forms.
 */

// Validator for required field
export let required = (value: string): string | undefined => {

    if (value) return undefined
    return `Обов'язкове поле.`

}

// Function creator for max length validation
let maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {

    if (value.length > maxLength) return `Максимальна кількість символів ${maxLength}.`
    return undefined
}

// Function creator for min length validation
let minLengthCreator = (minLength: number) => (value: string): string | undefined => {

    if (value.length < minLength) return `Мінімальна кількість символів ${minLength}.`
    return undefined
}

// Validator for field where need input only letters
export let letter = (value: string): string | undefined => {

    let VRegExp = new RegExp(/[^\D]{1,}/)
    if(VRegExp.test(value)) return `Тільки букви.`
    return undefined
}

// for login form
export let maxLength15 = maxLengthCreator(15)
export let minLength2 = minLengthCreator(2)

// for ad form
export let maxLength200 = maxLengthCreator(200)
export let minLength10 = minLengthCreator(10)