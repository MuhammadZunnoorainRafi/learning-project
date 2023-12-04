import { Outlet } from '@remix-run/react';
import React from 'react';

function ExpensesOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ExpensesOutlet;
