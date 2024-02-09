import useEventListener from "./useEventListener";

export default function useClickOutside(ref, cb) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null) return cb(e);
    },
    document
  );
}
