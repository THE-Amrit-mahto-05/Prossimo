declare module 'react' {
    export function useState<S>(initialState: S | (() => S)): [S, (newState: S | ((prevState: S) => S)) => void];

    export type FC<P = {}> = (props: P) => any;
    export type FormEvent<T = any> = any;
    export type ChangeEvent<T = any> = any;

    const React: any;
    export default React;
}
