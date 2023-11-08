export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, userName, email }) => {

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
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRemoveUser(id)}>Remove</button>
            </td>
        </tr>
    );
}