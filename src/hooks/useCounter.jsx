import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useCounter = () => {
  // states
  const [counter, setCounter] = useState(0);

  // icrement the counter
  const incrementCounter = (increment = 1) => {
    // verify parameters
    if (typeof increment !== "number" || increment < 1) return;

    // update counter
    setCounter((prevState) => prevState + increment);
  };

  // decrease the counter
  const decrementCounter = (decrement = 1) => {
    // verify parameters
    if (typeof decrement !== "number" || decrement < 1 || counter < 1) return;

    // update counter
    setCounter((prevState) => prevState - decrement);
  };

  // reset counter
  const resetCounter = () => {
    MySwal.fire({
      title: "Do you want reset the counter?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCounter(0);
      }
    });
  };

  return {
    counter,
    resetCounter,
    incrementCounter,
    decrementCounter,
  };
};

export default useCounter;
