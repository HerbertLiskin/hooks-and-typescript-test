export namespace TeamMemberModel {
    export interface AddTeamMemberModel {
        login: string;
        password: string;
        firstName: string;
        lastName: string;
        age: number;
        role: number;
        isActive: boolean;
    }
}

export interface TeamMemberModel extends TeamMemberModel.AddTeamMemberModel {
    id: string;
    registrationDate: string;
}