import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function is(...styles) {
  return twMerge(clsx(styles))
}

export function merge(...objects) {
  // console.log('Merge!')
  let map = {};
  objects.forEach(o => {
    Object.entries(o).forEach(([key, value]) => {
      map[key] = map[key] ? [...map[key], value] : [value];
    });
  });
  let result = {};
  Object.entries(map).forEach(([key, values]) => {
    result[key] = twMerge(clsx(values));
  });
  return result;
}