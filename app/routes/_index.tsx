import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="text-3xl font-bold underline">
      <h1>Hello world!</h1>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}
