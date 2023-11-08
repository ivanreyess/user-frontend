import { useEffect, useState } from "react";
import Swal from "sweetalert2";



export const UserForm = ({userSelected, handlerAddUser, initialUserForm, handlerCloseForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, userName, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected])

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!userName || (!password && id === 0) || !email) {
            Swal.fire(
                'Validation error',
                'Complete all fields!',
                'error'
            );
            return;
        }
        // console.log(userForm)

        // save user form
        handlerAddUser(userForm);
        setUserForm(initialUserForm);

    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input className="form-control my-3 w-75" placeholder="Username" name="userName"
                    value={userName}
                    onChange={onInputChange}
                />
                {id > 0 ||
                    <input className="form-control my-3 w-75" placeholder="Password" name="password" type="password"
                        value={password}
                        onChange={onInputChange}
                    />}

                <input className="form-control my-3 w-75" placeholder="email" name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <input type="hidden" name="id" value={id} />
                <button className="btn btn-primary" type="submit">
                    {
                        id > 0 ? 'Editar' : 'Crear '
                    }
                </button>
                {!handlerCloseForm || <button type="button" onClick={() => onCloseForm()}
                        className="btn btn-outline-danger mx-2 ">
                        Close
                    </button>}
            </form>
        </div>
    );
}