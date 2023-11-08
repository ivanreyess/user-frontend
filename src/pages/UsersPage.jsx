import { UserForm } from "../components/UserForm";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";


export const UsersPage = ({ 
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    }) => {



    return (
        <>

            {/* {!visibleForm ||
            <UserModalForm
            userSelected={userSelected}
            initialUserForm={initialUserForm}
            handlerAddUser={handlerAddUser}
            handlerCloseForm={handlerCloseForm}

        />
    } */}

            {!visibleForm ||
                <div className="abrir-modal animacion fadeIn">
                    <div className="modal" style={{ display: "block" }} tabIndex="-1">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {userSelected.id > 0 ? 'Edit' : 'Create'} Users
                                    </h5>
                                </div>
                                <div className="modal-body">

                                    <UserForm
                                         initialUserForm={initialUserForm}
                                         userSelected={userSelected}
                                         handlerAddUser={handlerAddUser}
                                         handlerCloseForm={handlerCloseForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm ||
                            <button onClick={handlerOpenForm}
                                className="btn btn-primary my-2 ">
                                Add user
                            </button>
                        }

                        {users.length === 0
                            ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                            :
                            <UsersList handlerUserSelectedForm={handlerUserSelectedForm} users={users} handlerRemoveUser={handlerRemoveUser} />
                        }

                    </div>
                </div>
            </div>
        </>
    );
}