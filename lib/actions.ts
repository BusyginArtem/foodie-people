"use server";

import { saveMeal } from "./meals";
import { FormState, RawDataMeal } from "./types";
import { formSchema } from "./validation/form";
import { transformZodErrors } from "./utils";
import { revalidatePath } from "next/cache";
import { APP_PATH } from "./constants";

export async function shareMealAction(prevState: FormState, data: FormData) {
  const formData = Object.fromEntries(data);
  const parsedFields = formSchema.safeParse({
    ...formData,
    image: [formData.image],
  });

  if (parsedFields.success) {
    await saveMeal({
      ...parsedFields.data,
      creator: parsedFields.data.name,
      creator_email: parsedFields.data.email,
    } as RawDataMeal);

    revalidatePath(APP_PATH.MEALS);

    return {
      message: "Meal has been created!",
      errors: undefined,
      fields: parsedFields.data,
    };
  }

  if (parsedFields.error) {
    const fields: Record<string, string | File> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key];
    }

    return {
      message: "Invalid form data",
      errors: transformZodErrors(parsedFields.error),
      fields,
    };
  }

  return {
    message: "An unexpected error occurred. Could not create meal.",
    errors: undefined,
    fields: undefined,
  };
}
