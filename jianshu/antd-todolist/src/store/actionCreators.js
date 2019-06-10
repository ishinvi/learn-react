import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});
export const getInitListAction = data => ({
  type: INIT_LIST,
  data
});
export const getTodoList = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5aa7f4296c44cb7f54c255ab/example/api/todolist"
      )
      .then(res => {
        const data = res.data;
        const action = getInitListAction(data);
        dispatch(action);
      });
  };
};
