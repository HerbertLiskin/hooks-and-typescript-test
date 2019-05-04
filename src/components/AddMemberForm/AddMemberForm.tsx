import React, { useState } from 'react'
import { FORMS_INPUTS, ROLE_MAP } from '../../helpers/objects'
import Input from '../../UIKit/Input/Input'
import Button from '../../UIKit/Button/Button'

import { TeamMemberModel } from '../../types'

import './AddMemberForm.css'

interface Props {
  addTeamMember: (teamMember: TeamMemberModel.AddTeamMemberModel) => void
}

const AddMemberForm: React.FC<Props> = (props) => {
  const initialState: TeamMemberModel.AddTeamMemberModel = {
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    age: 18,
    role: 2,
    isActive: false,
  }

  const [teamMember, setTeamMember] = useState(initialState)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value, type } = e.target

    const checked = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : null

    setTeamMember({ ...teamMember, [name]: type !== 'checkbox' ? value : checked })
  }

  const addMember = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    props.addTeamMember(teamMember)
  }

  return (
    <form className="form" onSubmit={addMember}>
      {
        FORMS_INPUTS.map((input) => {
          let props: any = {
            type: input.type,
            name: input.name,
            placeholder: input.label,
            value: teamMember[input.name],
          }

          if (input.type === 'number') {
            props.min = input.min
            props.max = input.max
          }

          return (
            <div className="formField" key={`add-form-${input.name}`}>
              {
                input.type === 'select'
                  ? (
                    <select>
                      {
                        input.options && input.options.map((option) => (
                          <option
                            key={`add-form-option-${input.name}-${option}`}
                            value={option}>
                            {ROLE_MAP[option]}
                          </option>
                        ))
                      }
                    </select>
                  )
                  : (
                    <Input
                      small
                      left
                      {...props}
                      onChange={inputChange}
                    />
                  )
              }
              <div className="error"></div>
            </div>
          )
        })
      }
      <Button fullWidth>
        Add member
      </Button>
    </form>
  )
}

export default AddMemberForm
