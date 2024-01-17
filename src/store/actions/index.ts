import * as UserActionCreators from './user.ts'
import * as TodoActionCreators from './todo.action.ts'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}