"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { UseFormRegister } from "react-hook-form";
//
import { formSchema } from "@/lib/validation/form";

type Props = {
  formRegister: UseFormRegister<z.output<typeof formSchema>>;
  formError?: string;
};

const FIELD_NAME = "image";

export default function ImagePicker({ formRegister, formError }: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);
  const pendingStatus = useRef<boolean>(false);

  const { data, pending } = useFormStatus();
  let { onChange, name, ref: formRef } = formRegister(FIELD_NAME);

  useEffect(() => {
    if (pendingStatus.current && !data) {
      setImagePreview(null);
    }

    pendingStatus.current = pending;
  }, [pending, data]);

  useEffect(() => {
    return () => {
      setImagePreview(null);
    };
  }, []);

  function handleClickPickImage() {
    imageInput.current?.click();
  }

  function handleChoosePickImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    onChange({ target: event.target });

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePreview(fileReader.result as string);
    };

    fileReader.onerror = () => {
      setImagePreview(null);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={name} className="share-meal__form__label">
        Your image
      </label>

      <div className="mb-4 flex w-full flex-col items-start gap-6">
        <input
          ref={(ref) => {
            formRef(ref);
            imageInput.current = ref;
          }}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className="hidden"
          onChange={handleChoosePickImage}
        />

        {imagePreview && (
          <div className="relative flex min-h-80 w-[50%] items-center justify-center border-2 border-[#a4abb9] text-center">
            <Image
              fill
              src={imagePreview}
              alt="The image selected by the user."
              className="object-contain"
            />
          </div>
        )}

        {formError && <p className="text-red-400">{formError}</p>}

        <button
          className="cursor-pointer rounded-sm border-0 bg-[#a4abb9] px-6 py-2 text-inherit transition-colors hover:bg-[#8e94a0] focus:bg-[#8e94a0]"
          type="button"
          onClick={handleClickPickImage}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
