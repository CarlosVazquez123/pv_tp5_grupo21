import React from "react";

const AcercaDe = () => {
  return (
    <div className="acerca-de">
      <h2>Integrantes del grupo 21 PV</h2>
      <hr />
      <div className="integrante">
        <p><strong>Apellido y Nombre:</strong> Vilte Figueroa, Alexis Gabriel</p>
        <p><strong>DNI:</strong> 44856576</p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a href="https://www.instagram.com/gabriel_vilte23/profilecard/?igsh=MTlrNjQyaWQ2NXN1ZQ==" target="_blank" rel="noopener noreferrer">
            @gabriel_vilte23
          </a>
        </p>
        <p><strong>Edad:</strong> 21 años</p>
      </div>
      <div className="integrante">
        <p><strong>Apellido y Nombre:</strong>Vargas,Franco Sebastian</p>
        <p><strong>DNI:</strong> 33627566</p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a href="https://www.instagram.com/fraan654?igsh=MWVwZnI5bjh4ZHNsdg==" target="_blank" rel="noopener noreferrer">
            @fraan654
          </a>
        </p>
        <p><strong>Edad:</strong> 37 años</p>
      </div>

    </div>
  );
};
export default AcercaDe;
