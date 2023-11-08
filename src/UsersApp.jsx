import { LoginPage } from "./auth/LoginPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import { UsersPage } from "./pages/UsersPage";
import { usersReducer } from "./reducers/usersReducer";


const initialLogin = {
    iAuth: false,
    user: undefined
}

export const UsersApp = () => {

    const [login, dispatch] = usersReducer(loginReducer, initialLogin);

    return (
        <>
        <LoginPage/>
        {/* <UsersPage/> */}
        </>
    );

}
