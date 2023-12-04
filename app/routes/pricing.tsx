import { Link } from '@remix-run/react';
import React from 'react';

function Pricing() {
  return (
    <div>
      Pricing
      <Link className="link-primary" to="..">
        Back
      </Link>
    </div>
  );
}

export default Pricing;
