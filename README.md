**Automatically suggests ICD-10 codes, treatments, and required medical tests based on doctor's input.**  
*(FastAPI + React + Transformers NLP)*

## ✨ Key Features
- **ICD-10 Prediction**: Analyzes doctor's notes to suggest accurate diagnoses codes.
- **Treatment Plans**: Recommends evidence-based treatments for predicted conditions.
- **Test Suggestions**: Lists required lab/imaging studies for each diagnosis.
- **Secure Access**: JWT authentication for doctors and admins.
- **Responsive UI**: Clean React interface optimized for clinical workflows.

## 🛠️ Tech Stack
| **Area**       | **Technologies**                                |
|----------------|-----------------------------------------------|
| Backend        | FastAPI, Python, JWT, SQLite/PostgreSQL      |
| AI/NLP         | Hugging Face Transformers (BioBERT), spaCy   |
| Frontend       | React, Axios, Material-UI                    |
| Deployment     | Docker, Render (Backend), Vercel (Frontend) |

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL (optional)

### Installation
1. **Backend**:
   ```bash
    cd backend
    pip install -r requirements.txt
    uvicorn app.main:app --reload   
2. **Frontend**:
    ```bash
    cd frontend
    npm install
    npm start

### Project Structure
    ```bash
    medical-ai-api/
    ├── backend/
    │   ├── app/               # FastAPI core
    │   │   ├── ai/            # NLP models
    │   │   └── api/           # Endpoints
    ├── frontend/
    │   ├── src/components/    # React UI
    │   └── src/services/      # API calls
    └── docs/                  # Architecture diagrams

### How to Works

    1. **input symptoms**
        ```json
        {
          "symptoms": "fever, cough, chest pain"
        }
        ```

    2. **AI system returns**:
    ```json
    {
      "icd10": "J18.9",
      "diagnosis": "Pneumonia, unspecified",
      "treatments": ["Amoxicillin 500mg 3x/day", "Rest"],
      "required_tests": ["Chest X-ray", "CBC with differential"]
    }
    ```

### Roadmap
MVP with mock data

React-FastAPI connection

Integrate BioBERT model

Add patient history tracking

HIPAA compliance features

### Contributing
Fork the repo

Create a feature branch (git checkout -b feature/new-feature)

Submit a PR with detailed description

 ### License
MIT © 2024 [Jordan Albarracin]

### Contact
GitHub: jordan-albarracin

LinkedIn: https://www.linkedin.com/in/jordan-albarracin-0b6a34103

Email: jordanalbarracin@gmail.com


