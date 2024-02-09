import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  const handleClick = (e) => {
    if (ref.current === null || ref.current.contains(e.target))
      return callback(e);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
}
