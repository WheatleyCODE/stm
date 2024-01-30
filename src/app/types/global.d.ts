declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare type WithHookResult<EL extends HTMLElement, R extends object> = Omit<React.HTMLAttributes<EL>, keyof R> & R;
