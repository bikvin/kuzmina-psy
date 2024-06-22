"use client";

import DropzoneInput from "@/components/admin/dropzone/dropzoneInput";

export default function DropzonePage() {
  return (
    <>
      <h1>Upload files to s3 bucket</h1>
      <DropzoneInput />
    </>
  );
}
