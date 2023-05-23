// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션 함수 선언
let nextId = 1  // todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,   // 새 항목을 추가하고 nextId 값에 1을 더함
    text
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

// 초기 상태 선언
const initaialState = []

export default function todos(state = initaialState, action){
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo
      )
    default:
      return state
  }
}