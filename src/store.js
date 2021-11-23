import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer, {initializeAnecdote} from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";
import anecdoteService from './service/anecdote';
import thunk from "redux-thunk";
const manyReducers = combineReducers({
  anecdote: reducer,
  notification: notificationReducer,
  filter: filterReducer,
});
const store = createStore(
  manyReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote => {
    store.dispatch(initializeAnecdote(anecdotes))
  })
)

export default store;
