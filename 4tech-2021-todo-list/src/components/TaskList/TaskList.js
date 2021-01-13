import React,{useState} from 'react'
import styled from 'styled-components'


export const TaskList = () => {

  const [taskList, setTaskList] = useState([
    {
      status: 'To Do',
      whatToDo: 'Retrieve the Lonely Mountain',
      who: 1,
      priority: 'high'
    }
  ])

  const TaskListLayout  = styled.div`
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

  return <TaskListLayout>
    <ColumnHeaderArea>
      <ColumnHeader>  To Do </ColumnHeader>
      <ColumnHeader> Doing </ColumnHeader>
      <ColumnHeader> Done </ColumnHeader>
    </ColumnHeaderArea>
    <Divider/>
  </TaskListLayout>

}