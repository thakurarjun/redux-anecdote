import React from "react";
import { useSelector, useDispatch } from "react-redux";
import anecdoteService from '../service/anecdote';
  
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();
  const vote = (anecdote) => {
  anecdoteService.updateVotes(anecdote);
    dispatch({
      type: "VOTE",
      id: anecdote.id, 
    });
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
