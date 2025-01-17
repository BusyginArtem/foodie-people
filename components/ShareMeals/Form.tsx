"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//
import FormButton from "@/components/Buttons/FormSubmitButton";
import ImagePicker from "@/components/Meals/ImagePicker";
//
import { shareMealAction } from "@/lib/actions";
import { formSchema } from "@/lib/validation/form";
import { cn } from "@/lib/utils";
import { APP_PATH } from "@/lib/constants";
import { FormState } from "@/lib/types";

export default function MealForm() {
  const [formState, formAction] = useActionState<FormState, FormData>(
    shareMealAction,
    {
      message: "",
    },
  );

  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      image: null,
      ...(formState?.fields ?? {}),
    },
    reValidateMode: "onSubmit",
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "Meal has been created!") {
      redirect(APP_PATH.MEALS);
    }
  }, [formState]);

  return (
    <>
      {formState?.errors && (
        <div className="my-8 text-red-500">
          <ul>
            {formState.errors.map((error, idx) => (
              <li key={idx} className="flex gap-1">
                {error.path} - {error.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form
        action={formAction}
        ref={formRef}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            startTransition(() => {
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
        className="flex max-w-[50rem] flex-col gap-6 text-white"
      >
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="name" className="share-meal__form__label">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className={cn("share-meal__form__input", {
                "border-red-500": form.formState.errors?.name,
              })}
              {...form.register("name")}
            />

            {form.formState.errors?.name?.message && (
              <p className="mt-2 text-red-400">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="email" className="share-meal__form__label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={cn("share-meal__form__input", {
                "border-red-500": form.formState.errors?.email,
              })}
              {...form.register("email")}
            />

            {form.formState.errors?.email?.message && (
              <p className="mt-2 text-red-400">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="title" className="share-meal__form__label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className={cn("share-meal__form__input", {
              "border-red-500": form.formState.errors?.title,
            })}
            {...form.register("title")}
          />

          {form.formState.errors?.title?.message && (
            <p className="mt-2 text-red-400">
              {form.formState.errors.title.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="summary" className="share-meal__form__label">
            Short Summary
          </label>
          <input
            type="text"
            id="summary"
            className={cn("share-meal__form__input", {
              "border-red-500": form.formState.errors?.summary,
            })}
            {...form.register("summary")}
          />

          {form.formState.errors?.summary?.message && (
            <p className="mt-2 text-red-400">
              {form.formState.errors.summary.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="instructions" className="share-meal__form__label">
            Instructions
          </label>
          <textarea
            id="instructions"
            rows={10}
            {...form.register("instructions")}
            className={cn("share-meal__form__input", {
              "border-red-500": form.formState.errors?.instructions,
            })}
          ></textarea>

          {form.formState.errors?.instructions?.message && (
            <p className="mt-2 text-red-400">
              {form.formState.errors.instructions.message}
            </p>
          )}
        </div>

        <ImagePicker
          formRegister={form.register}
          formError={form.formState.errors?.image?.message as string}
        />

        <p className="text-right">
          <FormButton title="Share Meal" />
        </p>
      </form>
    </>
  );
}
