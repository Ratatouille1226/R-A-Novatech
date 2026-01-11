from fastapi import APIRouter
from app.database import load_db

router = APIRouter(prefix="/staff", tags=["staff"])

@router.get("/")
def get_staff():
    db = load_db()
    return db["staff"]

@router.get("/{staff_id}")
def get_staff_by_id(staff_id: int):
    db = load_db()
    for s in db["staff"]:
        if s["id"] == staff_id:
            return s
    return {"error": "Not found"}
