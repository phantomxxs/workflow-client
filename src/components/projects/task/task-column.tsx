import { useUpdateTaskStatus } from "@/hooks/mutations/tasks";
import { cn } from "@/lib/utils";
import { Status, Task } from "@/types/task";
import { EllipsisVertical, Plus } from "lucide-react";
import { useDrop } from "react-dnd";

interface Props {
  key: Status;
  status: Status;
  tasks: Task[];
}

const TaskColumn = ({ status, tasks }: Props) => {
  const { mutate: updateTaskStatus } = useUpdateTaskStatus();
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) =>
      updateTaskStatus({ taskId: item.id, body: { status } }),
  }));

  const statusColor: Record<string, string> = {
    "to do": "#2563EB",
    "in progress": "#059669",
    "under review": "#D97706",
    completed: "#000000",
  };
  const tasksCount = tasks.filter((task) => task.status === status).length;

  console.log(status);
  return (
    <div
      ref={(instance) => {
        drop(instance);
      }}
      className={cn(
        "sl:py-4 rounded-lg py-2 xl:px-2",
        isOver && "bg-blue-100 dark:bg-neutral-950",
      )}
    >
      <div className="flex mb-3 w-full">
        <div
          className={cn("w-2 rounded-s-lg", `!bg-${statusColor[status]}`)}
          style={{ backgroundColor: statusColor[status] }}
        />
        <div className="flex w-full items-center justify-between rounded-e-lg bg-white px-5 py-4 dark:bg-dark-secondary">
          <h3 className="flex items-center text-lg font-semibold dark:text-white capitalize whitespace-nowrap max-w-[70%] text-ellipsis">
            {status}{" "}
            <span
              className="ml-2 inline-block rounded-full bg-gray-200 p-1 text-center text-sm leading-none dark:bg-dark-tertiary"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              {tasksCount}
            </span>
          </h3>
          <div className="flex items-center gap-1">
            <button className="flex h-6 w-5 items-center justify-center dark:text-neutral-500">
              <EllipsisVertical size={26} />
            </button>
            <button className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 dark:bg-dark-tertiary dark:text-white">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
