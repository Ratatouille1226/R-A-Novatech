from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Staff(Base):
    __tablename__ = "staff"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    photo = Column(String)
    slogan = Column(String)
    position = Column(String)
    age = Column(Integer)
    work_experience = Column(String)

    experience = relationship("Experience", back_populates="staff", cascade="all, delete-orphan")

class Experience(Base):
    __tablename__ = "experience"

    id = Column(Integer, primary_key=True)
    years = Column(String)
    company = Column(String)
    role = Column(String)
    description = Column(String)
    staff_id = Column(Integer, ForeignKey("staff.id"))

    staff = relationship("Staff", back_populates="experience")

class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    descr = Column(String)

class SecretCode(Base):
    __tablename__ = "secret_codes"

    id = Column(Integer, primary_key=True)
    code = Column(String)