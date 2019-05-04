export const isEmpty = (obj: object): boolean => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const FORMS_INPUTS = [
    {
        name: 'login',
        type: 'text',
        label: 'Login',
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
    },
    {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
    },
    {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
    },
    {
        name: 'age',
        type: 'number',
        label: 'Age',
        min: 18,
        max: 65,
    },
    {
        name: 'role',
        type: 'select',
        options: ['1', '2', '3', '4'],
        label: 'Role',
    },
    {
        name: 'isActive',
        type: 'checkbox',
        label: 'Active'
    }
]

export const ROLE_MAP: any = {
    1: 'Team Lead',
    2: 'Back-end Developer',
    3: 'Front-end Developer',
    4: 'DB Developer',
}