import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {

    const {users} = useContext(UserContext);

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
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}