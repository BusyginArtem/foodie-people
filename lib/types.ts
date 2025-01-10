import { APP_PATH } from "./constants";

// const keyToValArray = [
//     { value: 'myValue1', label: 'myLabel1' },
//     { value: 'myValue2', label: 'myLabel2' }
//   ] as const;
//   type Keys = typeof keyToValArray[number]['value']; // 'myValue1' | 'myValue2'

type Keys = keyof typeof APP_PATH;
export type NavLinksType = (typeof APP_PATH)[Keys];
