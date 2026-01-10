import { useEffect, useState } from "react";
import type { Reviews } from "../types/reviews";

export const UseReviews = () => {
  const [reviews, setReviews] = useState<Reviews[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка загрузки reviews");
        }
        return res.json();
      })
      .then((data: Reviews[]) => {
        setReviews(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { reviews };
};
