import React from 'react';

const User = (props) => {
    return (
        <div>
            <div>{props.firstName} {props.lastName}</div>
            
        </div>
    );
};

export default User;