import React, { useState } from "react";
import {IMember as IProps} from "./AddMember";

interface Props{
    members: IProps["members"]
    setMembers: React.Dispatch<React.SetStateAction<IProps["members"]>>
}

const MemberForm: React.FC<Props> = ({members, setMembers}) => {

    const [input,setInput] = useState({
        name:"",
        role:"",
        note:"",
        img:""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = ():void =>{
        if(!input.name || !input.role){
            return
        }
        setMembers([
            ...members,
            {
                name:input.name,
                role:input.role,
                imgUrl:input.img,
                note:input.note
            }
        ])
        setInput({
            name:"",
            role:"",
            note:"",
            img:""
        })
    }
    return(
        <div className="form">
            <input type="text"
                placeholder="Name"
                className="form-input"
                value={input.name}
                onChange={handleChange}
                name="name"
                data-testid="name"
            />
            <input
                type="text"
                placeholder="Role"
                className="form-input"
                value={input.role}
                onChange={handleChange}
                name="role"
                data-testid="role"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="form-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Notes"
                className="form-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="form-button"
                onClick={handleClick}
                data-testid="button"
            >
                Add Member
            </button>
                
        </div>
    )

}

export default MemberForm;