import { z } from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 3MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

export const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email(),
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title should be less than 100 characters"),
  summary: z
    .string()
    .trim()
    .min(1, "Summary is required")
    .max(200, "Summary should be less than 100 characters"),
  instructions: z
    .string()
    .trim()
    .min(1, "Instructions is required")
    .max(1000, "Instructions should be less than 1000 characters"),
  image: z
    .any()
    .refine((files: FileList) => {
      return files && files.length !== 0 && files[0] && files[0].size;
    }, "Image is required")
    .refine(
      (files: FileList) => files && files[0] && files[0]?.size <= MAX_FILE_SIZE,
      `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    )
    .refine(
      (files: FileList) =>
        files && files[0] && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(
        ", ",
      )}.`,
    ),
});

export type FormSchema = z.infer<typeof formSchema>;
