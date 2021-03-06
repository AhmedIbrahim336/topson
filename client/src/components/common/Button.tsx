import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  primary?: boolean;
  onClick(): void;
};

const Button: React.FC<Props> = ({ children, primary, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 text-sm font-medium capitalize rounded-md transition-colors duration-300 shadow-sm ${
        primary
          ? "bg-blue-500 text-white hover:bg-blue-400"
          : "bg-white border text-gray-800 border-gray-200 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
