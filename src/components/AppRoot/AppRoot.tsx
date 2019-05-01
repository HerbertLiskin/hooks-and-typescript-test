import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'

import { TeamMemberModel, AddTeamMemberModel } from '../../types'

import AddMemberForm from '../AddMemberForm/AddMemberForm'
import TeamList from '../TeamList/TeamList'

import './AppRoot.css'

const AppRoot: React.FC = () => {
  const defaultTeamList: TeamMemberModel[] | [] = []
  const [teamList, setTeamMember] = useState(defaultTeamList)
  const [alphabetOrder, setAlphabetOrder] = useState(true)
  const [sortValue, setSortValue] = useState('lastName')

  useEffect(() => {
    const storageTeamList = localStorage.getItem('teamList')
    const storageAlphabetOrder = localStorage.getItem('alphabetOrder')
    const storageSortValue = localStorage.getItem('sortValue')

    const initialTeamList = storageTeamList !== null
      ? JSON.parse(storageTeamList)
      : []

    const initialAlphabetOrder = storageAlphabetOrder !== null
      ? JSON.parse(storageAlphabetOrder)
      : true

    const initialSortValue = storageSortValue !== null
      ? JSON.parse(storageSortValue)
      : 'lastName'

    setTeamMember(initialTeamList)
    setAlphabetOrder(initialAlphabetOrder)
    setSortValue(initialSortValue)
  }, [])

  const addTeamMember = (teamMember: AddTeamMemberModel): void => {
    const date: Date = new Date()
    const newTeamMember: TeamMemberModel = {
      ...teamMember,
      id: uniqid(),
      registrationDate: date.toUTCString()
    }
    const newTeamList: TeamMemberModel[] = [...teamList, newTeamMember]

    sortBy({ sortTeamList: newTeamList })
  }

  const removeTeamMember = (id: string | undefined): void => {
    const newTeamList = teamList.filter((member: TeamMemberModel) => (member.id !== id))

    setTeamMember(newTeamList)
    localStorage.setItem('teamList', JSON.stringify(newTeamList));
  }

  const sortBy = (obj: { sortTeamList?: TeamMemberModel[], name?: string }): void => {
    const currentSortValue: string = obj.name || sortValue
    const currentAlphabetOrder: boolean = (
      obj.name &&
      obj.name === sortValue &&
      alphabetOrder === true
    )
      ? false
      : true
    const currentTeamList: TeamMemberModel[] = obj.sortTeamList
      ? obj.sortTeamList
      : teamList

    currentTeamList.sort((a: any, b: any): number => {
      if (a[currentSortValue] > b[currentSortValue])
        return currentAlphabetOrder ? 1 : -1

      if (a[currentSortValue] < b[currentSortValue])
        return currentAlphabetOrder ? -1 : 1

      return 0;
    })

    setTeamMember(currentTeamList)
    setAlphabetOrder(currentAlphabetOrder)

    if (obj.name)
      setSortValue(obj.name)

    localStorage.setItem('sortValue', JSON.stringify(currentSortValue));
    localStorage.setItem('alphabetOrder', JSON.stringify(currentAlphabetOrder));
    localStorage.setItem('teamList', JSON.stringify(teamList));
  }

  return (
    <div className="App">
      <AddMemberForm addTeamMember={addTeamMember} />
      <div>Sort by:&nbsp;
        <span
          onClick={() => {
            sortBy({ name: 'lastName' })
          }}
        >
          Last Name
        </span>,&nbsp;
        <span
          onClick={() => {
            sortBy({ name: 'registrationDate' })
          }}
        >
          Registration Date
        </span>
      </div>
      <TeamList
        teamList={teamList}
        removeTeamMember={removeTeamMember}
      />
    </div>
  );
}

export default AppRoot;
