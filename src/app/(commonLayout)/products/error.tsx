"use client"

const ErrorPage = ({error, reset}: {
    error: Error & { digest?: string },
    reset: () => void
}) => {

  return (
    <div className="text-red-500 text-center text-2xl font-bold">
      <h3>Something Went Wrong</h3>
      <p>{error?.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default ErrorPage;