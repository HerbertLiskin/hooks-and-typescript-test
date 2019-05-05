import { TeamMemberModel } from '../types/TeamModel'

export const FIELDS_ERRORS_MAP: any = {
    login: 'разрешены только символы a-z, 0-9, _ и -',
    password: 'строка длиной не менее 6 символов',
    firstName: 'строка от 3 до 15 символов длиной',
    lastName: 'строка от 3 до 25 символов длиной',
    age: 'целое число в диапазоне от 18 до 65',
}

export const formsValidation = (teamMember: TeamMemberModel.AddTeamMemberModel) => {
    const err: any = {}
    let field: any = ''
    for (field in teamMember) {
        const fieldValue = teamMember[field]
        switch (field) {
            case 'login':
                if (!/^[a-zA-Zа-яА-Я0-9-_]+$/.test(fieldValue))
                    err[field] = FIELDS_ERRORS_MAP[field]
                break

            case 'firstName':
                if (fieldValue.length < 3 || fieldValue.length > 15)
                    err[field] = FIELDS_ERRORS_MAP[field]
                break

            case 'lastName':
                if (fieldValue.length < 3 || fieldValue.length > 25)
                    err[field] = FIELDS_ERRORS_MAP[field]
                break

            case 'password':
                if (fieldValue.length < 6)
                    err[field] = FIELDS_ERRORS_MAP[field]
                break

            case 'age':
                if (fieldValue < 18 || fieldValue > 65)
                    err[field] = FIELDS_ERRORS_MAP[field]
                break

            default:
                break
        }
    }

    return err
}