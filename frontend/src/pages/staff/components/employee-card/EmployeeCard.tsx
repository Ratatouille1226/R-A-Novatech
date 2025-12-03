import type { StaffMember } from "../../../../types/staff";
import photoFace from "../../../../assets/employeeAndrey.png"; //Временная фотка пока их нет в бд
import styles from "../../staff.module.css";

export const EmployeeCard = ({ item }: { item: StaffMember }) => {
  return (
    <div className={styles.employees}>
      <div className={styles.employee} key={item.id}>
        <div className={styles.image}>
          <img src={photoFace} alt={item.name} />
          <h3>{item.name}</h3>
          <span>"{item.slogan}"</span>
        </div>
        <div className={styles.employee__about}>
          <span>
            <i>Должность:</i> {item.position}
          </span>
          <span>
            <i>Возраст:</i> {item.age}
          </span>
          <span>
            <i>Стаж работы:</i> {item.workExperience}
          </span>
          <ul>
            <i>Опыт:</i>
            {item.experience.map((exp, index) => (
              <li key={index}>
                {exp.years} - {exp.company} ({exp.role}) <br />
                {exp.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
