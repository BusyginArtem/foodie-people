import { z } from "zod";

// Define the file size limit and accepted file types as constants
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

export const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().trim().min(1, { message: "Email is required" }).email(),
  title: z
    .string({ message: "Title is required" })
    .min(1, "Title should be at least 3 characters")
    .max(200, "Title should be less than 100 characters"),
  summary: z
    .string({ message: "Summary is required" })
    .min(1, "Summary should be at least 3 characters")
    .max(200, "Summary should be less than 100 characters"),
  instructions: z
    .string({ message: "Instructions is required" })
    .min(10, "Instructions should be at least 10 characters long"),
  image: z
    .any()
    .refine((file) => file?.length !== 0, "Image is required")
    .refine(
      (file) => file instanceof Blob && file.size <= MAX_FILE_SIZE,
      `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    )
    .refine(
      (file) =>
        file instanceof Blob && ACCEPTED_IMAGE_TYPES.includes(file.type),
      `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(
        ", ",
      )}.`,
    ),
});

export type FormSchema = z.infer<typeof formSchema>;
