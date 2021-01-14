import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { TaskCard } from './TaskCard/TaskCard'


export const TaskList = () => {

  const [taskList, setTaskList] = useState([
    {
      status: 'Doing',
      whatToDo: 'Retrieve the Lonely Mountain',
      who: 1,
      priority: 'high'
    }
  ])

  const TaskListLayout = styled.div`
  grid-column: 2 / 5;
  grid-row: 3;
  `

  const ColumnHeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  `

  const ColumnHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 30px;
  `
  const Divider = styled.div`
  border: 0.1rem solid #6d6a6a;
  background-color: #6d6a6a;
  margin-bottom: 2rem;
  `
  const generateTaskColumns = () => {

    const Column = styled.div`
    padding: 0 1%;
    width: calc(100% / 3);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    `
    const Row = styled.div`
    display: flex;
    `

    return <Row>
      <Column>
        {
          taskList
            .filter(x => x.status === 'To Do')
            .map(x => {
              return <TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority} />
            })
        }
      </Column>
      <Column>
        {
          taskList
            .filter(x => x.status === 'Doing')
            .map(x => {
              return <TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority} />
            })
        }
      </Column>
      <Column>
        {
          taskList
            .filter(x => x.status === 'Done')
            .map(x => {
              return <TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority} />
            })
        }
      </Column>
    </Row>
  }

  return <TaskListLayout>
    <ColumnHeaderArea>
      <ColumnHeader>  To Do </ColumnHeader>
      <ColumnHeader> Doing </ColumnHeader>
      <ColumnHeader> Done </ColumnHeader>
    </ColumnHeaderArea>
    <Divider />
    {
      generateTaskColumns()
    }
  </TaskListLayout>

}