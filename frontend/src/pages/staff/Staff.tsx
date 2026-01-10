import { useNavigate } from "react-router-dom";
import styles from "./staff.module.css";
import { EmployeeCard } from "./components/employee-card/EmployeeCard"; //Карточка сотрудника (чтобы не засорять компонент)
import { UseStaff } from "../../hooks/UseStaff";
import { Skeleton } from "../../components";

export const Staff = () => {
  const { staff, isLoading } = UseStaff(); //Кастомный хук получения сотрудников
  const navigate = useNavigate();

  return (
    <div className={styles.staff}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        Назад
      </button>
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)
        : staff.map((item) => <EmployeeCard key={item.id} item={item} />)}
    </div>
  );
};
