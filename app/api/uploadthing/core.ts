import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  carImageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
