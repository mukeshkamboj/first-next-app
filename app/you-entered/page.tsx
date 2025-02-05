"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function YouEntered() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get('data');
  const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

  return (
    <div className="container">
      <h1 className="my-4">You Entered</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <YouEntered />
    </Suspense>
  );
}