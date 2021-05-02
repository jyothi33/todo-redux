/*

addTodo -- add a new todo
removeTodo -- delete an existing todo
completeTodo -- mark  a todo as completed
deleteAllCompletedTodos - Delete all the todos that have been completed.

*/

export const addTodo = (todo) => (dispatch) => {
    dispatch({
        type:"ADD_TODO",
        payload:todo
    })
}

export const removeTodo = (id) => (dispatch) => {
    dispatch({
        type:"REMOVE_TODO",
        payload:id
    })
}

export const completeTodo = (id) => (dispatch) => {
    dispatch({
        type:"COMPLETE_TODO",
        payload:id
    })
}

export const deleteAllCompletedTodos = () => (dispatch) => {
    dispatch({
        type:"DELETE_ALL_COMPLETED_TODO",
    })
}