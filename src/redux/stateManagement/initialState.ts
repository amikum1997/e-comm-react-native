import { State } from "./types";

export const initialState: State = {
    user: {
        isLoggedIn: false,
        accessToken  :'',
        refreshToken : '',
        profileView : 0,
        user: {
            mobile : '',
            username : '',
            usercode : '',
            referencecode : '',
            referencestarcode : '',
            email : '',
            profilepic : '',
            name : '',
            gender : '',
            dateofbirth : '',
            isuserstartype : ''
        },
    },
}
