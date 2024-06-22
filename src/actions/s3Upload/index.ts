"use server";

import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const region = process.env.NEXT_AWS_S3_REGION;
const accessKeyId = process.env.NEXT_AWS_S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY;

if (!region || !accessKeyId || !secretAccessKey) {
  throw new Error("Credential not found");
}

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

interface prevState {
  status: string | null;
  message: string | null;
}

async function uploadFileToS3(file: Buffer, fileName: string) {
  const fileBuffer = file;

  // const params = {
  //   Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
  //   key: `${fileName}`,
  //   Body: file,
  //   ContentType: "image/jpg",
  // };

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);

  try {
    const response = await s3Client.send(command);
    console.log("File Uploaded Successfully", response);
    return fileName;
  } catch (error) {
    throw error;
  }
}

export async function uploadFile(
  prevState: prevState,
  formData: FormData
): Promise<prevState> {
  try {
    const file = formData.get("file");

    console.log("File ", file);

    if (!(file instanceof File)) {
      return { status: "error", message: "Failed to upload file." };
    }

    if (!file || file.size === 0) {
      return { status: "error", message: "Failed to upload file." };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    await uploadFileToS3(buffer, file.name);

    revalidatePath("/");
    return { status: "success", message: "File has been uploaded." };
  } catch (error) {
    return { status: "error", message: "Failed to upload file." };
  }
}
