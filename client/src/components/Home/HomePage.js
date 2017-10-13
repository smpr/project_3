import React from 'react'

import User from '../Users/User'
const HomePage = (props) => {
  const userList = props.users.map((user, index)=> {
   return <User 
            firstName={user.firstName}
            lastName={user.lastName}
            />

  })
  return (
    <div>
      {userList}
    </div>
  )
}

export default HomePage