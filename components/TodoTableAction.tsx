"use client";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interface";
const TodoTableAction = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      {/* <Button size={"icon"}>
        <Pen size={16} />
      </Button> */}
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo?.id as string });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
