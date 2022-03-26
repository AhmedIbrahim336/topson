import React from "react";

type Props = {
  placeholder: string;
  error?: string;
  isPassword?: boolean;
};

const TextField: React.FC<Props> = ({ placeholder, error, isPassword }) => {
  return (
    <div className="px-1">
      <input
        className={`placeholder:text-gray-400 py-3 px-4 focus:outline-none rounded-md w-full text-gray-800 text-sm font-medium ${
          error
            ? "border-2 border-red-100 placeholder:text-red-300"
            : "border border-gray-200"
        }`}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
      />
      {error && (
        <p className="ml-1 text-xs font-medium text-red-400">{error}</p>
      )}
    </div>
  );
};

export default TextField;
