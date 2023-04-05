/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface String {
  log(mark?: string): void
}

interface Number {
  log(mark?: string): void
}

interface Object {
  log(mark?: string): void
}
