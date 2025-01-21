import TasksFilterOption from "./tasks-filter-option";

export default function TasksFilter() {
  return (
    <div className="flex w-1/2 mx-auto">
      <TasksFilterOption className="w-full rounded-l-md" active={true}>
        Tasks
      </TasksFilterOption>
      <TasksFilterOption className="w-full">Pending</TasksFilterOption>
      <TasksFilterOption className="w-full rounded-r-md">
        Completed
      </TasksFilterOption>
    </div>
  );
}
