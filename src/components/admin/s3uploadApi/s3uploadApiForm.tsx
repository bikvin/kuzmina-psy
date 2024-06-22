"use client";
import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState<null | File>(null);
  const [uploading, setUploading] = useState(false);

  type FileEventTarget = EventTarget & { files: FileList };

  const handleFileChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    if (!target.files) return;

    setFile(target.files[0]);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </>
  );
};

export default UploadForm;
