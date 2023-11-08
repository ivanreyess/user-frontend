import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialUsers = [
    {
        id: 1,
        userName: 'pepe',
        password: '12345',
        email: 'pepe@mail.com'
    }
];

const initialUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: ''
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const handlerAddUser = (user) => {
        // console.log(user);      
        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        });

        Swal.fire(
            (user.id === 0) ? 'Created user' : 'Updated user',
            (user.id === 0) ? 'User has been created successfully' : 'User has been updated',
            'success'
        );
        handlerCloseForm();
        navigate('/users');
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user);
        setVisibleForm(true);
        setUserSelected({ ...user });

    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    };

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm)
    };

    return {
        users,
        userSelected,
        initialUserForm: initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }

}