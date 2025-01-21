import TasksFilter from "@/components/pages/home/tasks-filter";
import Container from "@/components/reusable/container";

export default function Home() {
  return (
    <Container>
      <div className="bg-primary text-primary-foreground text-center mt-0 mb-4 sm:mt-4 py-8 px-4 rounded-none sm:rounded-md">
        <h3 className="text-2xl font-bold uppercase">Today-do</h3>
      </div>
      <TasksFilter />
    </Container>
  );
}
