/**
 * Class to ease interactions with component props
 */
export declare class Props {
    constructor(options: {
        component: string;
        state: any;
    });
    /**
     * Find if a key exists inside the props
     */
    has(key: string): boolean;
    /**
     * Validate prop value
     */
    validate(key: string, validateFn: (key: string, value?: any) => any): void;
    /**
     * Return values for only the given keys
     */
    only(keys: string[]): any;
    /**
     * Return values except the given keys
     */
    except(keys: string[]): any;
    /**
     * Serialize all props to a string of HTML attributes
     */
    serialize(mergeProps?: any): import("../Context").SafeValue;
    /**
     * Serialize only the given keys to a string of HTML attributes
     */
    serializeOnly(keys: string[], mergeProps?: any): import("../Context").SafeValue;
    /**
     * Serialize except the given keys to a string of HTML attributes
     */
    serializeExcept(keys: string[], mergeProps?: any): import("../Context").SafeValue;
}
