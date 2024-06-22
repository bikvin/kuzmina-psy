"use client";

import S3UploadForm from "@/components/admin/s3upload/s3uploadForm";
import S3UploadFormDropzone from "@/components/admin/s3uploadDropzone/s3uploadFormDropZone";

export default function Page() {
  return (
    <>
      <h1>Upload files to s3 bucket</h1>
      {/* <S3UploadForm /> */}
      <S3UploadFormDropzone />
    </>
  );
}
