import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, userName, email }) => {

    const {handlerUserSelectedForm, handlerRemoveUser} = useContext(UserContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() =>
                    handlerUserSelectedForm({
                        id: id,
                        userName: userName,
                        email: email
                    })
                }>Update</button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + id} >
                    update route
                </NavLink>
            </td>
            <td>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRemoveUser(id)}>Remove</button>
            </td>
        </tr>
    );
}