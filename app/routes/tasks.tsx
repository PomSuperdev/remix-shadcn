import Task from "~/components/pages/tasks/page";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "../components/pages/tasks/data/schema";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/components/pages/tasks/data/task.json")
  );

  let tasks = JSON.parse(data.toString());
  tasks = z.array(taskSchema).parse(tasks);
  return json({ tasks });
};

export default function TasksPage() {
  const { tasks } = useLoaderData<typeof loader>();

  return <>{tasks.length > 0 && <Task tasks={tasks} />}</>;
}
