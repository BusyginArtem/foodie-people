import MealForm from "@/components/ShareMeals/Form";

export default function ShareMealPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 flex w-[90%] max-w-[75rem] flex-col gap-12 text-[#ddd6cb]">
        <h1 className="text-4xl">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-transparent-fill">
            favorite meal
          </span>
        </h1>
        <p className="text-2xl">Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 w-[90%] max-w-[75rem]">
        <MealForm />
      </main>
    </>
  );
}
