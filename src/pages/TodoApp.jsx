import { useState } from 'react'

const TodoApp = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState('')

  const addTodo = () => {
    if (!task.trim()) return
    setTodos([...todos, task])
    setTask('')
  }

  const removeTodo = index => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const startEdit = index => {
    setEditingIndex(index)
    setEditText(todos[index])
  }

  const saveEdit = () => {
    if (!editText.trim()) return
    const updatedTodos = [...todos]
    updatedTodos[editingIndex] = editText
    setTodos(updatedTodos)
    setEditingIndex(null)
    setEditText('')
  }

  const cancelEdit = () => {
    setEditingIndex(null)
    setEditText('')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-cyan-700 mb-4">
        Todo App
      </h2>

      <div className="bg-white rounded shadow p-4 md:p-6">
        <div className="flex flex-col sm:flex-row md:flex-row gap-2 mb-4">
          <input
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 px-3 py-2 text-sm md:text-base border rounded focus:ring-2 focus:ring-cyan-700 outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-cyan-700 text-white px-4 py-2 text-sm md:text-base rounded hover:bg-cyan-800 transition-colors whitespace-nowrap"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border p-3 rounded"
            >
              {editingIndex === i ? (
                <div className="flex flex-col sm:flex-row gap-2 flex-1">
                  <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && saveEdit()}
                    className="flex-1 px-3 py-2 text-sm md:text-base border rounded focus:ring-2 focus:ring-cyan-700 outline-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="flex-1 break-words">{todo}</span>
                  <div className="flex gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => startEdit(i)}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTodo(i)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp



// const addtodo = () => {
  // if(!task.trim()) return
  // setTodos([...todos , task])
  // setTask("")
  // }


  // const removeTodo = index=>  {
    // setTodos (todos.filter((_, i)=> i ==! index))
    // }
