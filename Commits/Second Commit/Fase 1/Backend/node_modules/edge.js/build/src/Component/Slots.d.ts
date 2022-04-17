/**
 * Class to ease interactions with component slots
 */
export declare class Slots {
    constructor(options: {
        component: string;
        slots: {
            [name: string]: (...args: any[]) => string;
        };
        caller: {
            filename: string;
            line: number;
            col: number;
        };
    });
    /**
     * Share object with the slots object. This will allow slot functions
     * to access these values as `this.component`
     */
    share(values: any): void;
    /**
     * Find if a slot exists
     */
    has(name: string): boolean;
    /**
     * Render slot. Raises exception when the slot is missing
     */
    render(name: string, ...args: any[]): import("../Context").SafeValue;
    /**
     * Render slot only if it exists
     */
    renderIfExists(name: string, ...args: any[]): "" | import("../Context").SafeValue;
}
