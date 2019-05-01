import React from 'react'
import { TeamMemberModel } from '../../types'

import './TeamList.css'

interface Props {
  removeTeamMember: (id: string | undefined) => void
  teamList: TeamMemberModel[]
}

const TeamList: React.FC<Props> = (props) => {

  const remove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const memberId = (e.target as HTMLButtonElement).dataset.memberId
    props.removeTeamMember(memberId)
  }

  return props.teamList.length ? (
    <div>
      {
        props.teamList.map((member: TeamMemberModel) => {
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
                onClick={remove}
              >
                delete
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
