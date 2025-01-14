"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);
  const pendingStatus = useRef<boolean>(false);

  const { data, pending } = useFormStatus();

  useEffect(() => {
    if (pendingStatus.current && !data) {
      setImagePreview(null);
      setError(null);
    }

    pendingStatus.current = pending;
  }, [pending, data]);

  useEffect(() => {
    return () => {
      setImagePreview(null);
      setError(null);
    };
  }, []);

  function handleClickPickImage() {
    imageInput.current?.click();
  }

  function handleChoosePickImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setError("No file selected");
      setImagePreview(null);

      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePreview(fileReader.result as string);
      setError(null);
    };

    fileReader.onerror = () => {
      setError("Failed to read file");
      setImagePreview(null);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={name} className="share-meal__form__label">
        {label}
      </label>

      <div className="mb-4 flex w-full flex-col items-start gap-6">
        <input
          ref={imageInput}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className="hidden"
          onChange={handleChoosePickImage}
          required
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

        {error && <p className="text-red-400">{error}</p>}

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
