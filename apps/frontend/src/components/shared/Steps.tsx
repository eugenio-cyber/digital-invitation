"use client";
import { useState } from "react";

export interface StepsProps {
  action: () => void;
  labels: string[];
  actionLabel: string;
  allowsNextStep?: boolean[];
  children: any;
}

export default function Steps(props: StepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  function hasPreviousStep() {
    return currentStep === 0;
  }

  function hasNextStep() {
    return currentStep === props.labels.length - 1;
  }

  function previousStep() {
    if (hasPreviousStep()) return;
    setCurrentStep(currentStep - 1);
  }

  function nextStep() {
    if (hasNextStep()) return;
    setCurrentStep(currentStep + 1);
  }

  function renderLabels() {
    return (
      <div className='flex gap-4 select-none'>
        {props.labels.map((label, i) => {
          const isSelected = currentStep === i;

          return (
            <div key={i} className='flex items-center gap-2'>
              <span
                className={`
                    flex items-center justify-center
                    w-9 h-9 rounded-full
                    ${
                      isSelected
                        ? "bg-white text-black"
                        : "bg-zinc-700 text-zinc-400"
                    }
                `}
              >
                {i + 1}
              </span>
              <span className={isSelected ? "text-white" : "text-zinc-600"}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const allowsNextStep = props.allowsNextStep?.[currentStep] ?? true;

  return (
    <div className='flex-1 flex flex-col gap-10 w-full'>
      <div className='self-center'>{renderLabels()}</div>
      <div>{props.children[currentStep]}</div>
      <div className='flex justify-between'>
        <button
          onClick={previousStep}
          className={`
            button
            ${
              hasPreviousStep()
                ? "disabled"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }
          `}
          disabled={hasPreviousStep()}
        >
          <span>Anterior</span>
        </button>
        {hasNextStep() ? (
          <button
            onClick={props.action}
            disabled={!allowsNextStep}
            className={`
                button
                ${
                  !allowsNextStep
                    ? "disabled"
                    : "bg-green-700 hover:bg-green-600 text-white"
                }
            `}
          >
            <span>{props.actionLabel}</span>
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!allowsNextStep || hasNextStep()}
            className={`
            button
            ${
              !allowsNextStep || hasNextStep()
                ? "disabled"
                : "bg-green-700 hover:bg-green-600 text-white"
            }
          `}
          >
            <span>Próximo</span>
          </button>
        )}
      </div>
    </div>
  );
}
