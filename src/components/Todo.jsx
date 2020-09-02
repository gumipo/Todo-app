import React, { useState, useCallback } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

//material-ui-icon import
import CheckCicleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

//import component
import TextInput from "../components/UIkit/TextInput";

const useStyles = makeStyles({
  checkIcon: {
    float: "right",
  },

  iconCell: {
    height: 48,
    width: 48,
  },
});

const SetNewTodo = (props) => {
  const classes = useStyles();

  const [index, setIndex] = useState(0),
    [title, setTitle] = useState("");

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const addTodo = (index, title) => {
    if (title === "") {
      return false;
    } else {
      if (index === props.todos.length) {
        props.setTodos((prevState) => [...prevState, { title: title }]);
        setIndex(index + 1);
        setTitle("");
      } else {
        const newTodos = props.todos;
        newTodos[index] = { title: title };
        props.setTodos(newTodos);
        setIndex(newTodos.length);
        setTitle("");
      }
    }
  };

  const editTodo = (index, title) => {
    setIndex(index);
    setTitle(title);
  };

  const deleteTodo = (deleteIndex) => {
    const newTodos = props.todos.filter((item, i) => i !== deleteIndex);
    props.setTodos(newTodos);
  };

  const addCompleteTodo = (completeIndex) => {
    const newCompleteTodos = props.todos.filter(
      (item, i) => i == completeIndex
    );
    const newTodos = props.todos.filter((item, i) => i !== completeIndex);
    props.setTodos(newTodos);

    props.setCompleteTodos((prevState) => [...prevState, newCompleteTodos]);
  };

  return (
    <div>
      <div>
        <TextInput
          fullWidth={true}
          label={"newTodo"}
          multiline={false}
          required={true}
          rows={1}
          value={title}
          type={"text"}
          onChange={inputTitle}
        />
      </div>
      <IconButton
        className={classes.checkIcon}
        onClick={() => addTodo(index, title)}
      >
        <CheckCicleIcon />
      </IconButton>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>TodoList</h2>
              </TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>

          <TableBody>
            {props.todos.length > 0 ? (
              props.todos.map((todo, i) => (
                <TableRow key={todo.title}>
                  <TableCell>{todo.title}</TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => editTodo(i, todo.title)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => deleteTodo(i)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => addCompleteTodo(i)}
                    >
                      <CheckIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <p>no todo</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="module-spacer--medium"></div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>CompleteTodoList</h2>
              </TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>

          <TableBody>
            {props.completeTodos.length > 0 ? (
              props.completeTodos.map((completetodo, i) => (
                <TableRow key={completetodo.title}>
                  <TableCell>{completetodo.title}</TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => editTodo(i, completetodo.title)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => deleteTodo(i)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      // onClick={() => reversTodo(i)}
                    >
                      <KeyboardReturnIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <p>no todo</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default SetNewTodo;
