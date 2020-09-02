import React, { useState, useCallback } from "react";
import TextInput from "./UIkit/TextInput";
import PrimaryButton from "./UIkit/Button";

const InputTodo = () => {
  const [newTodo, setnewTodo] = useState("");

  const inputTodo = useCallback(
    (event) => {
      setnewTodo(event.target.value);
    },
    [setnewTodo]
  );

  return (
    <div>
      <TextInput
        fullWidth={true} //画面横幅  boorean
        label={"新規タスク"} //入力内容
        margin="dense"
        multiline={true} //複数行の入力するか  boorean
        required={true} // 必須入力項目か　boorean
        rows={1} //行数　multilineがtrueの時 number
        value={newTodo} //受け取るusestate
        type={"text"} //入力タイプ "text   email   password number
        onChange={inputNewTodo} //関数　useCallback
      />
      <PrimaryButton label={"ADD TODO"} />
    </div>
  );
};

export default InputTodo;
