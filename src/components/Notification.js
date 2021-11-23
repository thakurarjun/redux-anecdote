import React from "react";
import { connect } from "react-redux";
const successStyle = {
  color: "green",
  background: "lightgrey",
  font_size: 20,
  border_style: "solid",
  border_radius: 5,
  padding: 10,
  margin_bottom: 10,
};
const Notification = (props) => {
  const mapStateToProps = (state) => {
    return {
      notification: state.notification,
    };
  };
  return props.notification ? (
    <div style={successStyle} className="success">
    {mapStateToProps}</div>
  ) : null;
};
export default (Notification);
