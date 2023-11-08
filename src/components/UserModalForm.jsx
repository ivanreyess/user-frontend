import {UserForm} from "./UserForm";

export const UserModalForm = (userSelected, inintialUserForm, handlerAddUser, handlerCloseForm) => {
    return (
        <div className="abrir-modal animacion fadeIn">
        <div className="modal" style={ {display:"block"}} tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {userSelected.id > 0 ? 'Edit' : 'Create'} Users
                        </h5>
                    </div>
                    <div className="modal-body">

                        <UserForm
                                                       handlerCloseForm={handlerCloseForm}
                           inintialUserForm={inintialUserForm}
                            userSelected={userSelected}
                            handlerAddUser={handlerAddUser}
                           
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}