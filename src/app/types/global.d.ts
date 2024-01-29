declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare interface FCProps {
  children?: React.ReactNode;
}

declare type WithHookResult<EL extends HTMLElement, SP extends object> = Omit<React.HTMLAttributes<EL>, keyof SP> & SP;
