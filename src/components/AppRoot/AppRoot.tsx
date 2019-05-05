import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { isEmpty } from '../../helpers/objects'

import AddMemberForm from '../AddMemberForm/AddMemberForm'
import EditMemberForm from '../EditMemberForm/EditMemberForm'
import TeamList from '../TeamList/TeamList'

import { TeamMemberModel } from '../../types'

import './AppRoot.css'

const AppRoot: React.FC = () => {
  const defaultTeamList: TeamMemberModel[] = []
  const [teamList, setTeamMember] = useState(defaultTeamList)
  const [alphabetOrder, setAlphabetOrder] = useState(true)
  const [sortValue, setSortValue] = useState('lastName')
  const [onlyActive, setOnlyActive] = useState(false)
  const [editForm, setEditForm] = useState({})

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

  const addTeamMember = (teamMember: TeamMemberModel.AddTeamMemberModel): void => {
    const newTeamMember: TeamMemberModel = {
      ...teamMember,
      id: uniqid(),
      registrationDate: Date.now()
    }
    const newTeamList: TeamMemberModel[] = [...teamList, newTeamMember]

    sortBy({ sortTeamList: newTeamList })
  }

  const setCurrentTeamMember = (id: string | undefined): void => {
    const currentTeamMemberId = teamList.findIndex((el) => (el.id === id))
    setEditForm(teamList[currentTeamMemberId])
  }

  const updateTeamMember = (teamMember: TeamMemberModel): void => {
    const newTeamList = teamList.map((member) => {
      return member.id === teamMember.id ? teamMember : member
    })
    sortBy({ sortTeamList: newTeamList })
    setEditForm({})
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
    localStorage.setItem('teamList', JSON.stringify(currentTeamList));
  }

  const toggleActive = () => {
    setOnlyActive(!onlyActive)
  }

  return (
    <div className="app">
      <div className="layout">
        <div className="forms">
          <AddMemberForm addTeamMember={addTeamMember} />
          {
            !isEmpty(editForm) &&
            (
              <EditMemberForm
                currentTeamMember={editForm}
                updateTeamMember={updateTeamMember}
              />
            )
          }

        </div>
        <div
          onClick={toggleActive}
          className="onlyActive"
        >
          Only Active: {onlyActive ? 'Yes' : 'No'} (click Me)
        </div>
        <TeamList
          teamList={teamList}
          onlyActive={onlyActive}
          setCurrentTeamMember={setCurrentTeamMember}
          removeTeamMember={removeTeamMember}
          sortValue={sortValue}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}

export default AppRoot;
