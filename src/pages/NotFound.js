import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export const NotFound = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Back function using setTimeout to simulate automatic redirection after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 3000);

    // Cleanup function to clear the timer if the component is unmounted before the timeout
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      {/* Button to go back to home page */}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};
