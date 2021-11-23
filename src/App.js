import React, { useEffect } from "react";
import AnecdoteList from "../src/components/AnecdoteList";
import Notification from "../src/components/Notification";
import CreateAnecdote from "../src/components/CreateAnecdote";
import FilterAnecdote from "../src/components/FilterAnecdote";
import { initializeAnecdote } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdote());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <FilterAnecdote />
      <Notification />
      <AnecdoteList />
      <CreateAnecdote />
    </div>
  );
};
export default App;
