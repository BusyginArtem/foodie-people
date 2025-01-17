import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";
//
import { Meal, MealId, RawDataMeal } from "./types";
import { randomInteger } from "./utils";

const BUCKET_URL = process.env.S3_BUCKET_URL;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const s3 = new S3({
  region: process.env.S3_BUCKET_REGION,
});
const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const meals = db.prepare<Meal[]>("SELECT * FROM meals").all() as Meal[];

  return meals.map((meal) => ({
    ...meal,
    image: `${BUCKET_URL}/${meal.image}`,
  }));
}

export async function getMeal({ slug }: { slug: MealId }): Promise<Meal> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!slug) {
    throw new Error("Invalid slug. Expected a meal slug.");
  }

  const statement = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = statement.get(slug as string) as Meal;

  return {
    ...meal,
    image: `${BUCKET_URL}/${meal.image}`,
  };
}

export async function saveMeal(meal: RawDataMeal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);
  const extension = meal.image[0].name.split(".").pop();
  const fileName = `${slug}-${randomInteger(0, 1_000_000)}.${extension}`;

  const bufferedImage = await meal.image[0].arrayBuffer();

  s3.putObject({
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image[0].type,
  });

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
  ).run({ ...meal, instructions, slug, image: fileName });
}
