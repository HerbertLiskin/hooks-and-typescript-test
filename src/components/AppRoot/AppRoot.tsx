import React, { useState } from 'react'
import uniqid from 'uniqid'

import { TeamMemberModel, AddTeamMemberModel } from '../../types'

import AddMemberForm from '../AddMemberForm/AddMemberForm'

import './AppRoot.css'

const AppRoot: React.FC = () => {
  const initialState: TeamMemberModel[] = []
  const [teamMembersList, setTeamMember] = useState(initialState)

  const addTeamMember = (teamMember: AddTeamMemberModel): void => {
    const newTeamMember: TeamMemberModel = {
      ...teamMember,
      id: uniqid(),
      registrationDate: new Date()
    }

    setTeamMember([...teamMembersList, newTeamMember])
  }

  const deleteTeamMember = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const memberId = (e.target as HTMLButtonElement).dataset.memberId
    setTeamMember(teamMembersList.filter((member) => (member.id !== memberId)))
  }

  return (
    <div className="App">
      <AddMemberForm addTeamMember={addTeamMember} />
      {
        teamMembersList.map((el: any) => {
          return (
            <div key={el.id}>{el.firstName} {el.id} <button data-member-id={el.id} onClick={deleteTeamMember}>delete</button></div>
          )
        })
      }
    </div>
  );
}

export default AppRoot;
