import React from 'react';

const UserInfo = (props) => {
    return (
        <div>
            <div>{props.firstName} {props.lastName}</div>
            <div>Test</div>
        </div>
    );
};

export default UserInfo;