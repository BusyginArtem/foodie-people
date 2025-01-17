"use client";

// {
//   error,
// }: {
//   error: Error & { digest?: string };
// }

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals data. Please try again later.</p>
    </main>
  );
}
