import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import User from './User'

const Content = ({ users, setUsers }) => {

return (
    <div className='max-w-[1640px] bg-slate-100 p-2'>
            {users.map((user, id) => {
                return(
                    <User user = {user}/>
                )
            })
              }      
    </div>
  )
}

export default Content
