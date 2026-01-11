import { useEffect, useState } from "react";
import type { StaffMember } from "../types/staff";

export const UseStaff = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]); // по умолчанию пустой массив
  const [isLoading, setIsLoading] = useState(true); // состояние загрузки

  useEffect(() => {
    // fetch("http://localhost:3000/staff")
    fetch("http://127.0.0.1:8000/staff") // для обращения к бэку
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
        setIsLoading(false); // данные загружены, отключаем загрузку
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); // в случае ошибки также отключаем загрузку
      });
  }, []);

  return { staff, isLoading };
};
