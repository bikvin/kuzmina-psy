"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";

interface EditCertificatesFormState {
  errors: {
    certificatesArr?: string[];
    id?: string[];
    _form?: string[];
  };
}

export async function editCertificates(
  formState: EditCertificatesFormState,
  formData: FormData
): Promise<EditCertificatesFormState> {
  const certificatesArrString = formData.get("certificatesArr");

  if (!certificatesArrString || typeof certificatesArrString !== "string") {
    return {
      errors: {
        _form: ["Error updating the certificates. String must not be null."],
      },
    };
  }

  try {
    const upsertCertificates = await db.certificate.upsert({
      where: {
        id: 1, // all is stored in an entry with id=1
      },
      update: {
        fileNamesArr: certificatesArrString,
      },
      create: {
        fileNamesArr: certificatesArrString,
        id: 1,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      errors: {
        _form: ["Something went wrong"];
      }
    }
  }
  revalidatePath("/");
  revalidatePath("/admin/certificates");
  redirect("/admin");
}
