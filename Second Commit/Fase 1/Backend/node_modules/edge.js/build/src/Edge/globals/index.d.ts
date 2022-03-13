import { safeValue } from '../../Context';
export declare const GLOBALS: {
    inspect: (value: any) => import("../../Context").SafeValue;
    truncate: (value: string, length?: number, options?: {
        strict: boolean;
        suffix: string;
    } | undefined) => any;
    raise: (message: string, options?: any) => never;
    excerpt: (value: string, length?: number, options?: {
        strict: boolean;
        suffix: string;
    } | undefined) => any;
    safe: typeof safeValue;
};
