import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 10,
    },
  })
    .middleware(async () => {
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete");
      console.log("file url", file.url);

      return { uploadedBy: "admin" }; // You can adjust this if needed
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
