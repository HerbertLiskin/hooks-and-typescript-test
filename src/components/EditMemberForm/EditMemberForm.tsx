import React, { useState, useEffect } from 'react'
import { isEmpty, FORMS_INPUTS, ROLE_MAP } from '../../helpers/objects'
import Input from '../../UIKit/Input/Input'
import Button from '../../UIKit/Button/Button'

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

  const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value, type } = e.target

    const checked = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : null

    setTeamMember({ ...teamMember, [name]: type !== 'checkbox' ? value : checked })
  }

  const updateTeamMember = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    props.updateTeamMember(teamMember)
  }

  return !isEmpty(props.currentTeamMember)
    ? (
      <form className='form' onSubmit={updateTeamMember}>
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

            if (input.type !== 'checkbox') {
              props.value = teamMember[input.name]
            } else {
              props.checked = teamMember[input.name]
            }

            return (
              <div className="formField" key={`add-form-${input.name}`}>
                {
                  input.type === 'select'
                    ? (
                      <select name={input.name} value={teamMember.role} onChange={inputChange}>
                        {
                          input.options && input.options.map((option) => (
                            <option
                              key={`add-form-option-${input.name}-${option}`}
                              value={option}
                            >
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
          Edit member
        </Button>
      </form>
    )
    : null
}

export default EditMemberForm
