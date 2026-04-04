import React from 'react';
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    // 'flex-col' stacks components vertically. 'h-screen' gives it full height.
    <div className='p-10 bg-[#1C1C1C] h-screen flex flex-col'>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;