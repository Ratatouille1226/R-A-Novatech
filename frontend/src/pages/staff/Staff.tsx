import { Link } from "react-router-dom";
import employeeAndrey from "../../assets/employeeAndrey.png";
import styles from "./staff.module.css";

export const Staff = () => {
  return (
    <div className={styles.staff}>
      <div className={styles.employees}>
        <div className={styles.employee}>
          <div className={styles.image}>
            <img src={employeeAndrey} alt="employeeAndrey" />
            <h3>Андрей</h3>
            <span>"Строю интерфейсы, которыми хочется пользоваться."</span>
          </div>
          <div className={styles.employee__about}>
            <span>Должность: Frontend-разработчик</span>
            <span>Возраст: 22 года</span>
            <span>Стаж работы: 2 года 5 месяцев</span>
            <ul>
              Опыт:
              <li>
                2023 год - Result School (Стажёр frontend-разработчик) <br />{" "}
                Создание коммерческих SPA-приложений. Освоил полный цикл
                разработки — от архитектуры до деплоя. Работал в команде под
                руководством менторов и участвовал в командных проектах.
              </li>
              <li>
                2023-2025 год - СмартМедиа (Frontend-разработчик) <br />{" "}
                Разработка и поддержание внутренних и клиентских веб-проектов
                компании. Участие в проектировании интерфейсов, улучшении
                архитектуры и оптимизации производительности приложений.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.employee}>
          <div className={styles.image}>
            <img src={employeeAndrey} alt="employeeAndrey" />
            <h3>Андрей</h3>
            <span>"Строю интерфейсы, которыми хочется пользоваться."</span>
          </div>
          <div className={styles.employee__about}>
            <span>Должность: Frontend-разработчик</span>
            <span>Возраст: 22 года</span>
            <span>Стаж работы: 2 года 5 месяцев</span>
            <ul>
              Опыт:
              <li>
                2023 год - Result School (Стажёр frontend-разработчик) <br />{" "}
                Создание коммерческих SPA-приложений. Освоил полный цикл
                разработки — от архитектуры до деплоя. Работал в команде под
                руководством менторов и участвовал в командных проектах.
              </li>
              <li>
                2023-2025 год - СмартМедиа (Frontend-разработчик) <br />{" "}
                Разработка и поддержание внутренних и клиентских веб-проектов
                компании. Участие в проектировании интерфейсов, улучшении
                архитектуры и оптимизации производительности приложений.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/">Назад</Link>
    </div>
  );
};
