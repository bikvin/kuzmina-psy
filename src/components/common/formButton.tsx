"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
  color?: string;
}

export default function FormButton({
  children,
  color = "blue",
}: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`button ${color} ${pending ? "btn-disabled" : ""}`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Загружаем..." : children}
    </button>
  );
}
