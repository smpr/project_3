import React from 'react';

const UserInfo = (props) => {
    return (
        <div>
            <div>{props.firstName} {props.lastName}</div>
        </div>
    );
};

export default UserInfo;