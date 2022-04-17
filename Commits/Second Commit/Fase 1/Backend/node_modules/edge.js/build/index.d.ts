export * from './src/Contracts';
import { Edge } from './src/Edge';
import { safeValue } from './src/Context';
import { GLOBALS } from './src/Edge/globals';
/**
 * Default export
 */
declare const edge: Edge;
export default edge;
export { Edge, safeValue, GLOBALS };
