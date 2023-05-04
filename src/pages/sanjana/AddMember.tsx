import React, { useState } from 'react';
import './AddMember.css';
import List from './List'
import MemberForm from './MemberForm';

export interface IMember{
    members: {
      name:string
      role:string
      imgUrl:string
      note?:string
    }[]
}

const AddMember = () => {
    const [members, setMembers] = useState<IMember["members"]>([
        {
          name:"Sanjana Reddy",
          imgUrl:"https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
          role:"QA Leader",
          note:"Hi! I will be designing the acceptance criteria and validation techniques. I am excited to work on this project!"
        }
      ]);
    return (
        <div className='page'>
            <h1>The Medical App Developers' Team</h1>
            <List members={members}/>
            <MemberForm members={members} setMembers={setMembers}/>
        </div>
        
    )
}

export default AddMember;