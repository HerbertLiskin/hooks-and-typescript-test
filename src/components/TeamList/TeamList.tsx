import React from 'react'
import { TeamMemberModel } from '../../types'

import './TeamList.css'

interface Props {
  setCurrentTeamMember: (id: string | undefined) => void,
  removeTeamMember: (id: string | undefined) => void,
  teamList: TeamMemberModel[],
  onlyActive: boolean
}

const TeamList: React.FC<Props> = (props) => {
  const edit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const memberId = (e.target as HTMLButtonElement).dataset.memberId
    props.setCurrentTeamMember(memberId)
  }

  const remove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const memberId = (e.target as HTMLButtonElement).dataset.memberId
    props.removeTeamMember(memberId)
  }

  return props.teamList.length ? (
    <div>
      {
        props.teamList.map((member: TeamMemberModel) => {
          if (props.onlyActive && !member.isActive)
            return null

          return (
            <div className="teamMember" key={member.id}>
              <div className="fullName">
                {member.lastName}, {member.firstName}
              </div>
              <div className="login">
                {member.login}
              </div>
              <div className="role">
                {member.role}
              </div>
              <div className="age">
                {member.age}
              </div>
              <div className="registrationDate">
                {member.registrationDate}
              </div>
              <div className="isActive">
                {member.isActive ? 'Yes' : 'No'}
              </div>
              <button
                data-member-id={member.id}
                onClick={edit}
              >
                Edit
              </button>
              <button
                data-member-id={member.id}
                onClick={remove}
              >
                Delete
              </button>
            </div>
          )
        })
      }
    </div>
  )
    : <div>{'Список пуст'}</div>
}

export default TeamList;
