import React from 'react';
import Dashboard from './Dashboard';

const FormMy = (props) => {
    
    return (
      <div >
<p>The at bat ends when the batter makes a hit, is a hit batter, or the batter makes an out.</p>
        <Dashboard users={props.users} setUsers={props.setUsers} />
    </div>
  );
};

export default FormMy;