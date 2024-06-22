"use client";

import S3UploadApiForm from "@/components/admin/s3uploadApi/s3uploadApiForm";

export default function Page() {
  return (
    <>
      <h1>Upload files to s3 bucket</h1>
      {/* <S3UploadForm /> */}
      {/* <S3UploadFormDropzone /> */}
      <S3UploadApiForm />
    </>
  );
}
