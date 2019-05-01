export interface AddTeamMemberModel {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    role: number;
    isActive: boolean;
}

export interface TeamMemberModel extends AddTeamMemberModel {
    id: string;
    registrationDate: string;
}

export namespace TeamMemberModel {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active'
    }
}