"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
  color?: string;
  successMessage?: string | null;
  small?: boolean;
}

export default function FormButton({
  children,
  color = "blue",
  successMessage,
  small,
}: FormButtonProps) {
  const { pending } = useFormStatus();
  if (pending) {
    successMessage = null;
  }

  return (
    <div className="saveButtonDiv">
      <button
        className={`button ${color} ${pending ? "btn-disabled" : ""} ${
          small ? "smallButton" : ""
        }`}
        type="submit"
        disabled={pending}
      >
        {pending ? "Загружаем..." : children}
      </button>
      <p className="saveButtonSuccessText">{successMessage}</p>
    </div>
  );
}
