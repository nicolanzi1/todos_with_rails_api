import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

import { deleteTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';

const MapDispatchToProps = (dispatch, { todo }) => ({
    requestSteps: () => dispatch(requestSteps(todo.id)),
    destroyTodo: () => dispatch(deleteTodo(todo))
});

export default connect(
        null,
        MapDispatchToProps
    )(TodoDetailView);