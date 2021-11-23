import React from "react";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import { createAnecdote } from "../reducers/anecdoteReducer";

const CreateAnecdote = (props) => {
  const generateId = () => Math.floor(Math.random() * 1000000);
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    // dispatch({
    //   type: "NEW",
    //   data: {
    //     id: generateId(),
    //     content,
    //     votes: 0,
    //   },
    // });
    props.createAnecdote(content);
    props.setNotification(`Anecdote '${content}' successfully added`)
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createAnecdote, 
  setNotification
}
export default  (CreateAnecdote);
