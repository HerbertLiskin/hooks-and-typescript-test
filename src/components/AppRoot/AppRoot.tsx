import React, { useState } from 'react'
import uniqid from 'uniqid'

import { TeamMemberModel, AddTeamMemberModel } from '../../types'

import AddMemberForm from '../AddMemberForm/AddMemberForm'
import TeamList from '../TeamList/TeamList'

import './AppRoot.css'

const AppRoot: React.FC = () => {

  const storageTeamList = localStorage.getItem('teamList')

  const initialState: TeamMemberModel[] = storageTeamList !== null
    ? JSON.parse(storageTeamList)
    : []

  const [teamList, setTeamMember] = useState(initialState)

  const addTeamMember = (teamMember: AddTeamMemberModel): void => {
    const date: Date = new Date()

    const newTeamMember: TeamMemberModel = {
      ...teamMember,
      id: uniqid(),
      registrationDate: date.toUTCString()
    }

    const newTeamList = [...teamList, newTeamMember]

    setTeamMember(newTeamList)
    localStorage.setItem('teamList', JSON.stringify(newTeamList));
  }

  const removeTeamMember = (id: string | undefined): void => {
    setTeamMember(teamList.filter((member) => (member.id !== id)))
  }

  return (
    <div className="App">
      <AddMemberForm addTeamMember={addTeamMember} />

      <TeamList
        teamList={teamList}
        removeTeamMember={removeTeamMember}
      />
    </div>
  );
}

export default AppRoot;
