import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Если переходим НА сотрудников — всегда скроллим вверх
    if (pathname === "/staff") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Если переходим назад — вернуть сохранённую позицию (дефолт браузера)
    if (navigationType === "POP") {
      return;
    }

    // Если переходим вперёд на другие страницы — тоже скроллим вверх
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, navigationType]);

  return null;
};
