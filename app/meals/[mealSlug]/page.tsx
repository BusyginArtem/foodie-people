type Props = {
  params: Promise<{ mealSlug: string }>;
};

export default async function MealPage({ params }: Props) {
  const mealSlug = (await params).mealSlug;

  return (
    <>
      <h1>Meal Details Page</h1>
      <p className="text-xl">{mealSlug}</p>
    </>
  );
}
