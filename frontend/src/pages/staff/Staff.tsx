import { Link } from "react-router-dom";
import photoFace from "../../assets/employeeAndrey.png";
import styles from "./staff.module.css";
import { useEffect, useState } from "react";

interface Experience {
  years: string;
  company: string;
  role: string;
  description: string;
}
interface StaffMember {
  id: number;
  name: string;
  photo: string;
  slogan: string;
  position: string;
  age: number;
  workExperience: string;
  experience: Experience[];
}

export const Staff = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]); // по умолчанию пустой массив

  useEffect(() => {
    fetch("http://localhost:3000/staff")
      .then((res) => res.json())
      .then((data) => {
        // Если data — это массив
        if (Array.isArray(data)) {
          setStaff(data);
        } else if (Array.isArray(data.staff)) {
          setStaff(data.staff);
        } else {
          console.error("Неправильный формат данных", data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.staff}>
      <div className={styles.employees}>
        {staff &&
          staff.length > 0 &&
          staff.map((item) => (
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
          ))}
      </div>
      <Link to="/">Назад</Link>
    </div>
  );
};
