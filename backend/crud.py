from sqlalchemy.orm import Session
import models
import schemas


def create_employee(db: Session, employee: schemas.EmployeeCreate):

    db_employee = db.query(models.Employee).filter(
        models.Employee.employee_id == employee.employee_id
    ).first()

    if db_employee:
        raise Exception("Employee ID already exists")

    new_employee = models.Employee(
        employee_id=employee.employee_id,
        full_name=employee.full_name,
        email=employee.email,
        department=employee.department
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


def get_employees(db: Session):
    return db.query(models.Employee).all()


def delete_employee(db: Session, employee_id: int):

    emp = db.query(models.Employee).filter(
        models.Employee.id == employee_id
    ).first()

    if not emp:
        return None

    db.delete(emp)
    db.commit()

    return emp


def mark_attendance(db: Session, attendance: schemas.AttendanceCreate):

    existing = db.query(models.Attendance).filter(
        models.Attendance.employee_id == attendance.employee_id,
        models.Attendance.date == attendance.date
    ).first()

    if existing:
        raise Exception("Attendance already marked for this date")

    new_attendance = models.Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )

    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)

    return new_attendance


def get_attendance_by_employee(db: Session, employee_id: int):

    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()