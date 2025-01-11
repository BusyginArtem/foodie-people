import { APP_PATH } from "./constants";

// const keyToValArray = [
//     { value: 'myValue1', label: 'myLabel1' },
//     { value: 'myValue2', label: 'myLabel2' }
//   ] as const;
//   type Keys = typeof keyToValArray[number]['value']; // 'myValue1' | 'myValue2'

type Keys = keyof typeof APP_PATH;
export type NavLinksType = (typeof APP_PATH)[Keys];

declare const __brand__type__: unique symbol;

type Brand<BaseType, BrandName> = BaseType & {
  readonly [__brand__type__]: BrandName;
};

// export const unbrand = <T>(value: T): T extends Brand<infer U, any> ? U : T =>
//   value as any;

export type MealId = Brand<string, "MEAL_ID">;

export type Meal = {
  id: MealId;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

export type MealRawData = Omit<Meal, "id">;
