import { UserRow } from "./UserRow";

export const UsersList = ({handlerUserSelectedForm, handlerRemoveUser, users }) => {


    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>update</th>
                        <th>update route</th>
                        <th>remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(u => (
                            <UserRow
                                key={u.id}
                                id={u.id}
                                userName={u.userName}
                                email={u.email}
                                handlerRemoveUser = {handlerRemoveUser}
                                handlerUserSelectedForm = {handlerUserSelectedForm}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}