import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import prismaDb from '~/server/db.server';

export async function action({ request, params }: ActionFunctionArgs) {
  // if (request.method === 'DELETE') {
  //   await prismaDb.task.delete({
  //     where: {
  //       id: params.id,
  //     },
  //   });
  // }
  // return redirect('/expenses');
}

function SingleExpense() {
  return <div>SingleExpense</div>;
}

export default SingleExpense;
