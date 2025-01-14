import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { createWriteStream } from "fs";
//
import { Meal, MealId, RawDataMeal } from "./types";
import { randomInteger } from "./utils";

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

  if (!slug) {
    throw new Error("Invalid slug. Expected a meal slug.");
  }

  const statement = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = statement.get(slug as string);

  return meal as Meal | undefined;
}

export async function saveMeal(meal: RawDataMeal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${slug}-${randomInteger(0, 1000)}.${extension}`;

  const stream = createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving of the image failed!");
    }
  });

  const imagePath = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `,
  ).run({ ...meal, instructions, slug, image: imagePath });
}
