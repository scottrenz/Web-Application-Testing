import React from 'react';
import FormikLoginForm from './Dashboard';

const FormMy = (props) => {
    
    return (
      <div >
        <FormikLoginForm users={props.users} setUsers={props.setUsers} />
    </div>
  );
};

export default FormMy;