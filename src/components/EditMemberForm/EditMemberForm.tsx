import React, { useState, useEffect, Fragment } from 'react'
import { isEmpty, FORMS_INPUTS, ROLE_MAP } from '../../helpers/objects'
import Input from '../../UIKit/Input/Input'
import Button from '../../UIKit/Button/Button'

import { formsValidation } from '../../helpers/validation'

import { TeamMemberModel } from '../../types'

import './EditMemberForm.css'

interface Props {
  currentTeamMember: TeamMemberModel | {},
  updateTeamMember: (teamMember: TeamMemberModel) => void,
}

const EditMemberForm: React.FC<Props> = (props) => {
  //@TODO: I don't know how if it not 'any' type.
  const initialMemberState: TeamMemberModel | any = {}
  const [teamMember, setTeamMember] = useState(initialMemberState)

  const initialFieldsErrors: TeamMemberModel.TeamMembersFieldsErrorsModel = {
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  }
  const [fieldsErrors, setFieldsErrors] = useState(initialFieldsErrors)
  
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

    const err = formsValidation(teamMember)

    if (isEmpty(err)) {
      props.updateTeamMember(teamMember)
      setTeamMember(initialMemberState)
      setFieldsErrors(initialFieldsErrors)

    } else {
      setFieldsErrors(err)
    }
    
  }

  return (
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
                    <Fragment>
                      <Input
                        small
                        left
                        {...props}
                        onChange={inputChange}
                      />
                      {
                        input.name === 'isActive' &&
                        (<label>isActive</label>)
                      }
                    </Fragment>
                  )
              }
              <div className="error">{fieldsErrors[input.name]}</div>
            </div>
          )
        })
      }
      <Button fullWidth>
        Edit member
      </Button>
    </form>
  )
}

export default EditMemberForm
