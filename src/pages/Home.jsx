import React from "react";
import { Alert, Button } from "react-bootstrap";
import { ArrowRepeat, Dash, Plus, PlusSlashMinus } from "react-bootstrap-icons";
import useCounter from "../hooks/useCounter";

const Home = () => {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter();

  return (
    <div className="counter d-flex flex-column">
      <h1 className="counter_title text-bg-success px-2">
        <PlusSlashMinus /> Count Me
      </h1>

      <Alert className="counter_display text-center" variant="success">
        <h2 className="counter_number mb-0">{counter}</h2>
      </Alert>

      <div className="counter_controls d-flex flex-column gx-5">
        <div className="d-flex">
          <Button onClick={() => incrementCounter()} size="lg">
            <Plus /> Increment
          </Button>
          <Button
            onClick={() => decrementCounter()}
            variant="danger"
            size="lg"
            disabled={!Boolean(counter)}
          >
            <Dash /> Decrement
          </Button>
        </div>
        <Button
          onClick={() => resetCounter()}
          variant="warning"
          disabled={!Boolean(counter)}
        >
          <ArrowRepeat /> Reset
        </Button>
      </div>
    </div>
  );
};

export default Home;
