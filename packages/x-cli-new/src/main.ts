import { awesomeFn } from "@quramy/x-core";

export function cli() {
  console.log("cli-new")
  awesomeFn();
  return Promise.resolve(true);
}

cli();