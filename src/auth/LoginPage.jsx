import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    userName: '',
    password: '',
}
export const LoginPage = ({ handlerLogin }) => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { userName, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!userName || !password) {
            Swal.fire('Validation error', 'Username and password required', 'error');
        }

        handlerLogin({userName, password});
        
        setLoginForm(initialLoginForm);
    }
    return (
        <div className="modal" style={ {display: 'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="userName"
                                value={userName}
                                onChange={ onInputChange }
                            />
                            
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}