"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error">
      <h1 className="">An error occurred!</h1>
      <p>Failed to fetch meals data. Please try again later.</p>
      <span>"{error.message}"</span>
    </main>
  );
}
