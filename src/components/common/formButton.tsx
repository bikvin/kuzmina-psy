"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
  color?: string;
  disabledColor?: string;
  successMessage?: string | null;
  small?: boolean;
}

export default function FormButton({
  children,
  color = "blue",
  disabledColor = "disabledBlue",
  successMessage,
  small,
}: FormButtonProps) {
  const { pending } = useFormStatus();
  if (pending) {
    successMessage = null;
  }

  const disabledClass = pending ? disabledColor : "";

  return (
    <div className="saveButtonDiv">
      <button
        className={`button ${color} ${disabledClass} ${
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
