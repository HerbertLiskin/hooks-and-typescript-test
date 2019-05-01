import React, { useState, useEffect } from 'react'

import { isEmpty } from '../../helpers/objects'

import { TeamMemberModel } from '../../types'

import './EditMemberForm.css'

interface Props {
  currentTeamMember: TeamMemberModel | {},
  updateTeamMember: (teamMember: TeamMemberModel) => void,
}

const EditMemberForm: React.FC<Props> = (props) => {
  //@TODO: I don't know how if it not 'any' type.
  const initialState: TeamMemberModel | any = {}
  const [teamMember, setTeamMember] = useState(initialState)

  useEffect(() => {
    setTeamMember(props.currentTeamMember)
  }, [props])

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target
    setTeamMember({ ...teamMember, [name]: type !== 'checkbox' ? value : checked })
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target
    setTeamMember({ ...teamMember, [name]: value })
  }

  const updateTeamMember = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    props.updateTeamMember(teamMember)
  }

  return !isEmpty(props.currentTeamMember)
    ? (
      <form onSubmit={updateTeamMember}>
        <div>
          <label>Login</label>
          <input
            type="text"
            name="login"
            value={teamMember.login}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={teamMember.password}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Firts Name</label>
          <input
            type="text"
            name="firstName"
            value={teamMember.firstName}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={teamMember.lastName}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={teamMember.age}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Role</label>
          <select
            name="role"
            value={teamMember.role}
            onChange={selectChange}
          >
            <option value="1">Team Lead</option>
            <option value="2">Back-end Developer</option>
            <option value="3">Front-end Developer</option>
            <option value="4">DB Developer</option>
          </select>
        </div>
        <div>
          <label>Active</label>
          <input
            type="checkbox"
            name="isActive"
            checked={teamMember.isActive}
            onChange={inputChange}
          />
        </div>
        <button>Edit Member</button>
      </form>
    )
    : null
}

export default EditMemberForm
