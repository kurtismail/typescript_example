interface TodoType {
    task: string;
    id: string | number;
    isDone: boolean;
}
interface ITodoList {
    todos: TodoType[];
    toggleTodo: ToggleFn;
    deleteTodo: DeleteFn;
}
interface IListItem {
    item: TodoType;
    toggleTodo: ToggleFn;
    deleteTodo: DeleteFn;
}
type AddFn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;

type DeleteFn = (id: string | number) => void;
