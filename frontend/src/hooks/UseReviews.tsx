import { useEffect, useState } from "react";
import type { Reviews } from "../types/reviews";
import type { SecretCode } from "../types/secretCode";

const API_URL = "http://localhost:3000";

export const UseReviews = () => {
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //Получение отзывов с бэка
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${API_URL}/reviews`);
      if (!response.ok) {
        throw new Error("Ошибка загрузки отзывов");
      }
      const data: Reviews[] = await response.json();
      setReviews(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  //Проверяем наличие кодового слова
  const checkSecretCode = async (code: string): Promise<SecretCode | null> => {
    const res = await fetch(
      `${API_URL}/secretCodes?code=${encodeURIComponent(code)}`
    );
    const data: SecretCode[] = await res.json();

    return data.length ? data[0] : null;
  };

  //Метод добаления нового отзыва и проверки(удаления) кодового слова
  const addReview = async (name: string, descr: string, code: string) => {
    setLoading(true);
    setError(null);

    try {
      //Проверяем кодовое слово
      const secretCode = await checkSecretCode(code);
      if (!secretCode) {
        throw new Error("Неверное кодовое слово");
      }

      //Добавляем отзыв
      const response = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, descr }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении отзыва");
      }

      const newReview: Reviews = await response.json();
      setReviews((prevReviews) => [...prevReviews, newReview]);

      //Удаляем использованное кодовое слово
      await fetch(`${API_URL}/secretCodes/${secretCode.id}`, {
        method: "DELETE",
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews, addReview, loading, error };
};
