import React from 'react';
import Dashboard from './Dashboard';

const FormMy = (props) => {
    
    return (
      <div >
        <Dashboard users={props.users} setUsers={props.setUsers} />
    </div>
  );
};

export default FormMy;