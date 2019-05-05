import React from 'react'
import { TeamMemberModel } from '../../types'
import { Table, Tbody, Tr, Td, Thead } from '../../UIKit/Table/'
import { ROLE_MAP } from '../../helpers/objects'
import { timestampToDate } from '../../helpers/date'

import './TeamList.css'

interface Props {
  teamList: TeamMemberModel[],
  onlyActive: boolean,
  sortValue: string,

  sortBy: (obj: { sortTeamList?: TeamMemberModel[], name?: string }) => void,
  setCurrentTeamMember: (id: string | undefined) => void,
  removeTeamMember: (id: string | undefined) => void,
}

const HEADER_TABLE_FIELDS = [
  { name: 'lastName', type: 'left' },
  { name: 'login', type: 'left' },
  { name: 'role', type: 'left' },
  { name: 'age', type: 'center' },
  { name: 'registrationDate', type: 'left' },
  { name: 'isActive', type: 'center' },
]

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

  const sortBy = (e: any): void => {
    e.preventDefault()
    const fieldName = e.target.dataset.sortName
    props.sortBy({ name: fieldName })
  }


  return props.teamList.length ? (
    <div>
      <Table>
        <Thead>
          <Tr>
            {HEADER_TABLE_FIELDS.map((field) => (
              <Td
                key={`td-${field.name}`}
                header
                isActive={props.sortValue === field.name}
                isHovering
                type={field.type}
                data-sort-name={field.name}
                onClick={sortBy}
              >
                {field.name}
              </Td>
            ))}
            <Td header type="right">cntrls</Td>
          </Tr>
        </Thead>
        <Tbody>
          {
            props.teamList.map((member: TeamMemberModel) => {
              if (props.onlyActive && !member.isActive)
                return null

              const isActiveClassName = `isActive ${member.isActive === true && 'active'}`

              return (
                <Tr key={member.id}>
                  <Td type="left">{member.lastName}, {member.firstName}</Td>
                  <Td type="left">{member.login}</Td>
                  <Td type="left">{ROLE_MAP[member.role]}</Td>
                  <Td type="center">{member.age}</Td>
                  <Td type="left">{timestampToDate(member.registrationDate)}</Td>
                  <Td type="center" className={isActiveClassName}>{member.isActive ? 'Yes' : 'No'}</Td>
                  <Td type="right">
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
                  </Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </div>
  )
    : <div className="emptyList">{'Список пуст'}</div>
}

export default TeamList;
