import { Link } from '@remix-run/react';
import React from 'react';

function Expenses() {
  return (
    <div>
      <div className="flex items-center justify-between pb-3 max-w-2xl border-b  mx-auto">
        <h1 className="font-semibold">Create new expense</h1>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-sm"
            onClick={() =>
              (document.getElementById(
                'my_modal_5'
              ) as HTMLDialogElement)!.showModal()
            }
          >
            + Add
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
