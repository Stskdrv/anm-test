import React from 'react';
import { TiWarning } from 'react-icons/ti';

interface ErrorComponentProps {
  message?: string;
  resetErrorBoundary?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = "Something went wrong. Please try again later.",
}) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#25283B] text-white px-5">
      <div className="flex flex-col items-center gap-6 text-center">
        <TiWarning className="text-6xl text-red-500 animate-pulse" />
        <h2 className="text-4xl font-bold uppercase tracking-wide">
          Oops! An Error Occurred
        </h2>
        <p className="max-w-md text-lg opacity-80">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;