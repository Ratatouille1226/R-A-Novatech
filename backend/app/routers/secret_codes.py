from fastapi import APIRouter
from app.database import load_db

router = APIRouter(prefix="/secret-codes", tags=["secretCodes"])

@router.get("/")
def get_codes():
    return load_db()["secretCodes"]