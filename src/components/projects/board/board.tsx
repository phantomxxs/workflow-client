import { Status, Task } from "@/types/task";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "../task/task-column";

interface Props {
  projectId: number;
  tasks: Task[];
}

const taskStatus: Status[] = ["to do", "in progress", "under review", "completed"];
// eslint-disable-next-line
const Board = ({ projectId, tasks }: Props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {taskStatus.map((s) => (
          <TaskColumn key={s} status={s} tasks={tasks} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;
