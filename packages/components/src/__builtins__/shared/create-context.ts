import type { Component } from 'vue'
import {
  defineComponent,
  provide,
  inject,
  readonly,
  InjectionKey,
  ref,
  Ref,
  toRef,
} from 'vue'

// export type CreateContext<T> = {
//   Provider: Component
//   Consumer: Component
//   injectKey: InjectionKey<Ref<T>>
// }

export type CreateContext<T> = any

export const createContext = <T>(defaultValue?: T): CreateContext<T> => {
  const injectKey: InjectionKey<Ref<T>> = Symbol('some description')

  return {
    Provider: defineComponent({
      name: 'ContextProvider',
      props: {
        value: {
          type: null,
          default() {
            return defaultValue ?? null
          },
        },
      },
      setup(props: any, { slots }) {
        const value = toRef(props, 'value')
        provide(injectKey, readonly(value))

        return () => slots?.default?.()
      },
    }),

    Consumer: defineComponent({
      name: 'ContextConsumer',
      setup(_props, { slots }) {
        const value = inject(injectKey)

        return () => slots?.default?.(value)
      },
    }),
    injectKey,
  }
}

export const useContext = <T>(context: CreateContext<T>) => {
  const key = context.injectKey

  return inject(key, ref(null))
}
