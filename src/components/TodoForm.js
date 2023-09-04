import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() !== '') {
      addTodo(value);
      setValue('');
    }
  } 

  return (
	<form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' placeholder='Task name'
      value={value}
      onChange={(e) => { setValue(e.target.value) }}
      />
    <button className="todo-btn">Add task</button>
  </form>
  )
}
