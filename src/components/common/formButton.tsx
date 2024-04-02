"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`button blue ${pending ? "btn-disabled" : ""}`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Загружаем..." : children}
    </button>
  );
}
