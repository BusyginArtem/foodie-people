import FormButton from "@/components/Buttons/FormSubmitButton";
import ImagePicker from "@/components/Meals/ImagePicker";
import { shareMealAction } from "@/lib/actions";

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
        <form
          action={shareMealAction}
          className="flex max-w-[50rem] flex-col gap-6 text-white"
        >
          <div className="flex gap-4">
            <p className="w-full">
              <label htmlFor="name" className="share-meal__form__label">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="share-meal__form__input"
                required
              />
            </p>
            <p className="w-full">
              <label htmlFor="email" className="share-meal__form__label">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="share-meal__form__input"
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="title" className="share-meal__form__label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="share-meal__form__input"
              required
            />
          </p>
          <p>
            <label htmlFor="summary" className="share-meal__form__label">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="share-meal__form__input"
              required
            />
          </p>
          <p>
            <label htmlFor="instructions" className="share-meal__form__label">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="share-meal__form__input"
            ></textarea>
          </p>

          <ImagePicker name="image" label="Your image" />

          <p className="text-right">
            <FormButton title="Share Meal" />
          </p>
        </form>
      </main>
    </>
  );
}
