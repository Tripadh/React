import { useEffect } from "react";

function KeyListener() {

  useEffect(() => {
    // Event handler function
    const handleKeyPress = (event) => {
      console.log("Key pressed:", event.key);
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup (VERY IMPORTANT)
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <h2>Press any key and check the console</h2>
  );
}

export default KeyListener;
