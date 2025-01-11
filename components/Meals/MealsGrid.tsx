import { Meal } from "@/lib/types";
import MealItem from "./MealItem";

type Props = {
  meals: Meal[];
};

export default async function MealsGrid({ meals }: Props) {
  return (
    <ul className="grid w-full list-none grid-cols-[repeat(auto-fill,minmax(clamp(20rem,20vw,30rem),1fr))] gap-20">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            creator={meal.creator}
            image={meal.image}
            slug={meal.slug}
            summary={meal.summary}
            title={meal.title}
          />
        </li>
      ))}
    </ul>
  );
}
