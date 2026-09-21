type MergeTuple<T extends readonly unknown[]> = 
  T extends readonly [infer Head, ...infer Tail]
    ? Head & MergeTuple<Tail>
    : {};

type Simplify<T> = { [K in keyof T]: T[K] } & {};

type ClassValue = import("clsx").ClassValue;

type ClassObject = {[key: string]: ClassValue};

export function is(...classes: ClassValue[]) : string;
export function merge<T extends readonly object[]>(...objects: T): Simplify<MergeTuple<T>>;
