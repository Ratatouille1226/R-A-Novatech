from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from sqlalchemy.future import select

from .database import engine, AsyncSessionLocal, Base
from .models import Staff, Experience, Review, SecretCode

app = FastAPI()

# -----------------------------
# CORS для React
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Pydantic-схемы
# -----------------------------
class ExperienceSchema(BaseModel):
    years: str
    company: str
    role: str
    description: str

class StaffSchema(BaseModel):
    id: int
    name: str
    photo: Optional[str] = None
    slogan: Optional[str] = None
    position: Optional[str] = None
    age: Optional[int] = None
    work_experience: Optional[str] = None
    experience: List[ExperienceSchema] = []

    class Config:
        from_attributes = True

class ReviewSchema(BaseModel):
    id: int
    name: str
    descr: str

    class Config:
        from_attributes = True

class SecretCodeSchema(BaseModel):
    id: int
    code: str

    class Config:
        from_attributes = True

# -----------------------------
# Создание таблиц при старте
# -----------------------------
@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# -----------------------------
# Эндпоинты
# -----------------------------
@app.get("/staff", response_model=List[StaffSchema])
async def get_staff():
    async with AsyncSessionLocal() as session:
        result = await session.execute(
            select(Staff).options(selectinload(Staff.experience))
        )
        return result.scalars().all()

@app.get("/reviews", response_model=List[ReviewSchema])
async def get_reviews():
    async with AsyncSessionLocal() as session:
        result = await session.execute(select(Review))
        return result.scalars().all()

@app.get("/secret-codes", response_model=List[SecretCodeSchema])
async def get_secret_codes():
    async with AsyncSessionLocal() as session:
        result = await session.execute(select(SecretCode))
        return result.scalars().all()