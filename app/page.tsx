import { getTodoActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  // This can come from your database or API.
  const todos = await getTodoActions({ userId });
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul> */}

        <AddTodoForm userId={userId} />
        <TodoTable todos={todos} />
      </main>
    </div>
  );
}
