"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals data. Please try again later.</p>
    </main>
  );
}
