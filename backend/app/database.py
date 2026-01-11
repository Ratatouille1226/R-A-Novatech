from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

# -----------------------------
# Параметры подключения к PostgreSQL
# -----------------------------
DATABASE_URL = "postgresql+asyncpg://postgres:QS1YR8URQ6@localhost:5432/ranovatech"

engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

Base = declarative_base()