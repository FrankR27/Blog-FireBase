import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-border text-primary mt-5 spinner" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  );
};

export default Spinner;
