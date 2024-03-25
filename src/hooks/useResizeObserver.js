import { useLayoutEffect, useMemo, useState } from "react";

/**
 * @template T
 * @param {HTMLElement | null} el
 * @param {(entries: ResizeObserverEntry[]) => T} callback
 * @returns {T}
 */
export function useResizeObserver(el, callback) {
  const [state, setState] = useState(() => callback([]));
  const rs = useMemo(
    () => new ResizeObserver((entries) => setState(callback(entries))),
    [callback]
  );

  useLayoutEffect(() => {
    if (!el) return;

    rs.observe(el);

    return () => rs.unobserve(el);
  }, [rs, el]);

  return state;
}
