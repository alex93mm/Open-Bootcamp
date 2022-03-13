import { TagContract } from '../Contracts';
/**
 * Yield tag is a shorthand of `if/else` for markup based content.
 *
 * ```edge
 * @yield($slots.main)
 *   <p> This is the fallback content, when $slots.main is missing </p>
 * @endyield
 * ```
 *
 * The longer version of above is following
 *
 * ```@edge
 * @if ($slots.main)
 *   {{{ $slots.main }}}
 * @else
 *   <p> This is the fallback content, when $slots.main is missing </p>
 * @endif
 * ```
 */
export declare const yieldTag: TagContract;
