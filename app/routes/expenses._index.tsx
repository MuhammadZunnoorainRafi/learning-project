import { Link } from '@remix-run/react';

function Expenses() {
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
    </div>
  );
}

export default Expenses;
