import React, { useState, useActionState } from 'react';

const CountDisplay: React.FC<{ count: number }> = ({ count }) => (
  <p>Count: {count}</p>
);

const DataDisplay: React.FC<{ data: any[] }> = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
);

const Counter: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  const [count, increment, isPending] = useActionState(async (currentCount) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    });
    const result = await response.json();
    setData(result);
    return currentCount + 1;
  }, 0);

  const handleClick = () => {
    increment();
  };

  return (
    <div>
      <CountDisplay count={count} />
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
      >
        Increment
      </button>

      {data.length > 0 && <DataDisplay data={data} />}
    </div>
  );
}

export default Counter;
