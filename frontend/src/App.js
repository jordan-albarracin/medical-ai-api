import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/predict", { symptoms });
    setDiagnosis(response.data);
  };

  return (
    <div>
      <h1>Sistema de Diagnóstico Médico</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Ingresa síntomas"
        />
        <button type="submit">Predecir</button>
      </form>
      {diagnosis && (
        <div>
          <p>CIE-10: {diagnosis.icd10}</p>
          <p>Tratamiento: {diagnosis.treatment}</p>
        </div>
      )}
    </div>
  );
}

export default App;