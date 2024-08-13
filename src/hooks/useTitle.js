import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - FittoApp`;
  }, [title]);
  return null;
};
