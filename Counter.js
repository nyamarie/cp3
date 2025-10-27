"use client";
import { useId, useState } from "react";
import PropTypes from "prop-types";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(Math.max(0, Number(initialCount) || 0));
  const [step, setStep] = useState(Math.max(1, Number(initialStep) || 1));

  const liveRegionId = useId();
  const stepInputId = useId();

  const canDecrement = count - step >= 0;

  function handleIncrement() {
    setCount((c) => c + step);
  }
  function handleDecrement() {
    if (canDecrement) setCount((c) => Math.max(0, c - step));
  }
  function handleReset() {
    setCount(0);
  }
  function handleStepChange(e) {
    const value = Number(e.target.value);
    // enforce integer >= 1
    if (Number.isNaN(value)) return;
    setStep(Math.max(1, Math.floor(value)));
  }

  return (
    <div className="counter">
      {/* Count announcement: screen readers get polite updates */}
      <div className="countRow">
        <span className="countLabel">Current count:</span>
        <output
          id={liveRegionId}
          className="countValue"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </output>
      </div>

      <div className="controls">
        <button className="btn" type="button" onClick={handleIncrement} aria-describedby={liveRegionId}>
          +1
        </button>

        <button
          className="btn"
          type="button"
          onClick={handleDecrement}
          disabled={!canDecrement}
          aria-describedby={liveRegionId}
        >
          −1
        </button>

        <button className="btn secondary" type="button" onClick={handleReset} aria-describedby={liveRegionId}>
          Reset
        </button>
      </div>

      <div className="stepRow">
        <label htmlFor={stepInputId} className="label">
          Step amount
        </label>
        <input
          id={stepInputId}
          className="input"
          type="number"
          min={1}
          step={1}
          value={step}
          onChange={handleStepChange}
          inputMode="numeric"
          aria-describedby={liveRegionId}
        />
      </div>

      {/* Extra hint text for disabled state visibility */}
      {!canDecrement && count === 0 && (
        <p className="hint">
          Decrement is disabled at 0 to prevent negative values.
        </p>
      )}
    </div>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number,
  initialStep: PropTypes.number,
};