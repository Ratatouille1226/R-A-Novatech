import os
import json
import asyncio
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from .database import AsyncSessionLocal, engine, Base
from .models import Staff, Experience, Review, SecretCode

DB_JSON_PATH = os.path.join(os.path.dirname(__file__), "..", "db.json")

async def truncate_tables():
    async with AsyncSessionLocal() as session:
        await session.execute(
            text("TRUNCATE TABLE experience, staff, reviews, secret_codes RESTART IDENTITY CASCADE;")
        )
        await session.commit()

async def seed():
    # создаем таблицы, если их нет
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    # очищаем таблицы
    await truncate_tables()

    # загружаем данные из JSON
    with open(DB_JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    # открываем новую сессию для вставки данных
    async with AsyncSessionLocal() as session:
        # ---------------- staff ----------------
        for s in data.get("staff", []):
            staff = Staff(
                name=s["name"],
                photo=s.get("photo"),
                slogan=s.get("slogan"),
                position=s.get("position"),
                age=s.get("age"),
                work_experience=s.get("workExperience")
            )

            for e in s.get("experience", []):
                exp = Experience(
                    years=e.get("years"),
                    company=e.get("company"),
                    role=e.get("role"),
                    description=e.get("description")
                )
                staff.experience.append(exp)

            session.add(staff)

        # ---------------- reviews ----------------
        for r in data.get("reviews", []):
            review = Review(
                name=r.get("name"),
                descr=r.get("descr")
            )
            session.add(review)

        # ---------------- secret codes ----------------
        for c in data.get("secretCodes", []):
            code = SecretCode(code=c.get("code"))
            session.add(code)

        # сохраняем все изменения
        await session.commit()
        print("Данные успешно загружены в БД!")

if __name__ == "__main__":
    asyncio.run(seed())