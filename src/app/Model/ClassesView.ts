export class ClassesViews {
    UserEmail: string;
    UserId: number;
    UserName: string;
    role: string;

    OwnClassess: ClassesOwned[];
    JoinClassess: ClassesJoined[];
}
export class ClassesOwned {
    OwnClassId: number;
    OwnClassName: string;
    // Description: string;
    OwnClassCode: string;
    // ImagePath: string;
    // Active: boolean;
}
export class ClassesJoined {

    JoinClassId: number;
    JoinClassName: string;
    // Description: string;
    JoinClassCode: string;
    // ImagePath: string;
    // Active: boolean;
}
