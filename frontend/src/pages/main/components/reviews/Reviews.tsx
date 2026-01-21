import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./reviews.module.css";
import avatar from "../../../../assets/notFoundImg.png";
import { UseReviews } from "../../../../hooks/UseReviews";
import type { ReviewForm } from "../../../../types/reviewForm";
import { Loader } from "../../../../components";

export const Reviews = () => {
  const { reviews, addReview, error, loading } = UseReviews();

  const [index, setIndex] = useState(0); //Слайды
  const [hintOpen, setHintOpen] = useState(false); //Подсказка по кодовому слову
  const hintRef = useRef<HTMLDivElement>(null);

  //Валидация формы
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewForm>({ mode: "onSubmit" });

  //Логика слайдера
  const next = () =>
    setIndex((i) => (reviews.length ? (i + 1) % reviews.length : 0));
  const prev = () =>
    setIndex((i) =>
      reviews.length ? (i - 1 + reviews.length) % reviews.length : 0,
    );

  //Отправка формы
  const onSubmit = async (data: ReviewForm) => {
    // if (data.code !== )

    await addReview(data.name, data.descr, data.code);
    reset();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hintRef.current && !hintRef.current.contains(event.target as Node)) {
        setHintOpen(false);
      }
    };

    if (hintOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hintOpen]);

  return (
    <div className={styles.wrapper}>
      {/* ФОРМА */}
      <div data-aos="fade-right" className={styles.formBlock}>
        <h2 className={styles.title}>Оставьте отзыв</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ваше имя"
            {...register("name", {
              required: "Введите имя",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
          <input
            className={styles.input}
            type="text"
            placeholder="Ваш отзыв"
            {...register("descr", {
              required: "Введите отзыв",
              minLength: { value: 10, message: "Минимум 10 символов" },
              maxLength: { value: 300, message: "Максимум 300 символов" },
            })}
          />

          {errors.descr && (
            <span className={styles.error}>{errors.descr.message}</span>
          )}

          {/* Кодовое слово */}
          <div className={styles.codeField} ref={hintRef}>
            <input
              className={styles.input}
              type="text"
              placeholder="Кодовое слово"
              {...register("code", {
                required: "Введите кодовое слово",
              })}
            />

            <button
              type="button"
              className={styles.hintIcon}
              onClick={() => setHintOpen((v) => !v)}
            >
              ?
            </button>

            {hintOpen && (
              <div className={styles.hint}>
                Оставить отзыв могут только клиенты, которые сотрудничали с
                нами. Кодовое слово Вы получаете в конце работы.
              </div>
            )}
          </div>

          {errors.code && (
            <span className={styles.error}>{errors.code.message}</span>
          )}

          <button className={styles.button}>Отправить</button>
        </form>
      </div>

      {/* ОТЗЫВЫ */}
      <div data-aos="fade-left" className={styles.reviewsBlock}>
        <div className={styles.slider}>
          <button className={styles.arrow} onClick={prev}>
            ‹
          </button>

          {error ? (
            <span className={styles.error}>
              Ошибка загрузки данных с сервера
            </span>
          ) : loading ? (
            <Loader />
          ) : (
            reviews.length > 0 && (
              <div className={styles.card}>
                <img className={styles.avatar} src={avatar} alt="" />
                <h3 className={styles.name}>{reviews[index].name}</h3>
                <span className={styles.post}>{reviews[index].post}</span>
                <p className={styles.text}>{reviews[index].descr}</p>
              </div>
            )
          )}

          <button className={styles.arrow} onClick={next}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
