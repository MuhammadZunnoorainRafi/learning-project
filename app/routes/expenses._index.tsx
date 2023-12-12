import { Form, Link, useLoaderData } from '@remix-run/react';
import prismaDb from '~/server/db.server';

export async function loader() {
  const res = await prismaDb.task.findMany();
  return res;
}

function Expenses() {
  const task = useLoaderData<typeof loader>();
  return (
    <div className="max-w-3xl mx-auto py-3">
      <div className="flex items-center justify-between border-b pb-2">
        <div>
          <h1 className="font-bold text-lg text-slate-900">
            Add expenses here
          </h1>
          <p className="text-slate-800">Your favorite expenses comes here</p>
        </div>
        <Link to="add" className="btn btn-sm text-white btn-primary">
          + Add
        </Link>
      </div>
      <div className="space-y-2 pt-3">
        {task.length > 0 ? (
          task.map((task) => {
            return (
              <div
                className="p-2 rounded-md flex gap-4 items-center justify-between shadow-md border border-slate-400"
                key={task.id}
              >
                <div className="flex-1">
                  <h1 className="font-semibold text-slate-900">{task.title}</h1>
                  <p className="text-slate-800">{task.description}</p>
                  <p className="text-sm italic">
                    {new Date(task.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex-0 space-x-2 ">
                  <button className="btn btn-xs btn-success text-white">
                    Edit
                  </button>
                  <Form method='DELETE' action={`/expenses/${task.id}`}>
                    <button className="btn btn-xs btn-error text-white">
                      Delete
                    </button>
                  </Form>
                </div>
              </div>
            );
          })
        ) : (
          <p>No tasks yet</p>
        )}
      </div>
    </div>
  );
}

export default Expenses;
