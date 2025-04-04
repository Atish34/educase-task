import { Avatar } from '@mui/material'
import React from 'react'

const Profile = () => {
  return <>
  <div className="col-sm-6 offset-sm-3">
  <h1>Account Settings</h1>
  <div className='d-flex gap-5'>
<div>
  <Avatar sx={{ width: 56, height: 56 }}/>
</div>
<div >
  <h3>Marry Doe</h3>
  <span>Marry@Gmail.Com</span>
</div>
  </div>

<div className="mt-3">
  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius earum quis, reiciendis iste necessitatibus nisi maxime autem a cumque ut in eos maiores, praesentium saepe perspiciatis? Earum, quam ipsam!</span>
</div>

<hr/>

  </div>
  </>
}

export default Profile