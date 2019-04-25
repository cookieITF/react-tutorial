import dispatcher from "../dispatcher";

export default {
  createTodo: function(text) {
    dispatcher.dispatch({ type: "CREATE_TODO", text });
  },
  deleteTodo: function(id) {
    dispatcher.dispatch({
      type: "DELETE_TODO",
      id
    });
  }
};
