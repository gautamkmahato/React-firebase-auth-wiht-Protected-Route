import React, { useContext } from 'react'
import { userAuthContext } from '../context/userAuthContext';

const About = () => {
  const {user} = useContext(userAuthContext); 

  return (
    <div>
      <h1>About</h1>
        {user ? <h3>{user.email}</h3> : <></>}
    </div>
  )
}

export default About