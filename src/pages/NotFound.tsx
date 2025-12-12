import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-neutral-50">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-neutral-600 dark:text-neutral-400">Oops! Page not found</p>
        <a href="/" className="text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
