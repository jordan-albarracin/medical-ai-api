from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "¡API funcionando!"}

@app.post("/predict")
def predict(symptoms: str):
    return {"icd10": "A09.0", "treatment": "Hidratación"}