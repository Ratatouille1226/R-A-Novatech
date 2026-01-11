from fastapi import APIRouter
from app.database import load_db

router = APIRouter(prefix="/reviews", tags=["reviews"])

@router.get("/")
def get_reviews():
    return load_db()["reviews"]