import React from 'react';
import {IMember as IProps} from './AddMember';

//List component 
const List: React.FC<IProps> = ({members}) => {

    const renderList = ():JSX.Element[] => {
        return members.map(member =>{
          return (
            <li className="list">
                <div className="list-header">
                    <img className="list-img" src={member.imgUrl} alt="this is the profile avatar"/>
                    <h2>{member.name}</h2>
                </div>
                <p className="list-role">{member.role}</p>
                <p className="list-note">{member.note}</p>  
            </li>
           )
        })
    }
    return (
        <ul data-testid="member-list">
            {renderList()}
        </ul>
    )
}

export default List;
