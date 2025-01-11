import sql from "better-sqlite3";
//
import { Meal, MealId } from "./types";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare<Meal[]>("SELECT * FROM meals").all() as Meal[];
}

export async function getMeal({
  slug,
}: {
  slug: MealId;
}): Promise<Meal | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (typeof slug !== "string") {
    throw new Error("Invalid slug type. Expected a string.");
  }

  const statement = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = statement.get(slug as string);

  return meal as Meal | undefined;
}
