import React, { useState } from 'react'
import './AddMemberForm.css'
import { AddTeamMemberModel } from '../../types'

interface Props {
  addTeamMember: (teamMember: AddTeamMemberModel) => void
}

const AddMemberForm: React.FC<Props> = (props) => {
  const initialState: AddTeamMemberModel = {
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    age: 18,
    role: 2,
    isActive: false,
  }

  const [teamMember, setTeamMember] = useState(initialState)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target
    setTeamMember({ ...teamMember, [name]: type !== 'checkbox' ? value : checked })
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target
    setTeamMember({ ...teamMember, [name]: value })
  }

  const addMember = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    props.addTeamMember(teamMember)
  }

  return (
    <form onSubmit={addMember}>
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
      <button>Add member</button>
    </form>
  );
}

export default AddMemberForm;
