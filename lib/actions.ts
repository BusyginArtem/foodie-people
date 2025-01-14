"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { RawDataMeal } from "./types";
import { APP_PATH } from "./constants";
import { formSchema } from "./validation/form";
import { transformZodErrors } from "./utils";

export async function shareMealAction(data: FormData) {
  try {
    for (const pair of data.entries()) {
      console.log("value >>>>>>>", pair[0], pair[1]);
    }

    const validatedFields = formSchema.parse({
      title: data.get("title"),
      image: data.get("image"),
      summary: data.get("summary"),
      creator: data.get("name"),
      instructions: data.get("instructions"),
      creator_email: data.get("email"),
    });

    console.log("validatedFields >>>>>>>>>>>>>>>>>>>>>", validatedFields);

    await saveMeal(validatedFields as RawDataMeal);

    redirect(APP_PATH.MEALS);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(
        "transformZodErrors(error) >>>>>>>>>>>>>>>>>>>>>",
        transformZodErrors(error),
      );
      //   return {
      //     errors: transformZodErrors(error),
      //     data: null,
      //   };
    }

    // return {
    //   errors: {
    //     message: "An unexpected error occurred. Could not create meal.",
    //   },
    //   data: null,
    // };
  }
}
