export interface IUser {
    isLoggedIn: boolean,
    accessToken  :string,
    refreshToken : string,
    profileView : number,
    user: {
        mobile : string,
        username : string,
        usercode : string,
        referencecode : string,
        referencestarcode : string,
        email : string,
        profilepic : string,
        name : string,
        gender : string,
        dateofbirth : string,
        isuserstartype : string
    },
}

export interface State {
    user: IUser;
}