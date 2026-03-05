cd backend
python -m venv .venv
source .venv/bin/activate
.venv/bin/python -m uvicorn main:app --reload


cd frontend
npm run dev
npm run build