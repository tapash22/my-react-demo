import { lazy, type ComponentType, type LazyExoticComponent } from "react";

/**
 * Wrap React.lazy with a minimum delay
 * @param factory - function returning a Promise that resolves to a React component module
 * @param delay - minimum delay in milliseconds
 * @returns LazyExoticComponent<T> - a lazy-loaded React component
 */
export function lazyWithDelay<T extends ComponentType<T>>(
  factory: () => Promise<{ default: T }>,
  delay: number
): LazyExoticComponent<T> {
  return lazy(() =>
    Promise.all([
      factory(), // load the component
      new Promise((resolve) => setTimeout(resolve, delay)), // wait at least `delay` ms
    ]).then(([moduleExports]) => moduleExports)
  );
}
