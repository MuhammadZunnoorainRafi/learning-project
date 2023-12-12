import { json, type ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import prismaDb from '~/server/db.server';
import { expenseValidations } from '~/utils/validations';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const validation = expenseValidations.safeParse(Object.fromEntries(formData));

  if (!validation.success) {
    return json({ error: validation.error.flatten().fieldErrors });
  }

  const { title, description } = validation.data;

  await prismaDb.task.create({
    data: {
      title,
      description,
    },
  });

  return redirect('/expenses');
}

function ExpensesAdd() {
  const error = useActionData<typeof action>();
  return (
    <div className="text-center pt-10">
      <h1 className="font-bold text-3xl mb-3">Add expense here</h1>
      <Form className="w-96 mx-auto space-y-2" method="post">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered input-md w-full "
        />
        <p className="text-sm text-left text-red-500">{error?.error.title}</p>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered input-md w-full "
        />
        <p className="text-sm text-left text-red-500">
          {error?.error.description}
        </p>
        <button type="submit" className="btn btn-sm btn-secondary">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default ExpensesAdd;
