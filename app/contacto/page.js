import React from 'react';

const Contacto = () => {
  return (
    <div className="container ml-32">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Medios de Contacto</h3>
        <p>
          Para consultas y asistencia, no dudes en contactarnos a través de los siguientes medios:
        </p>
        <ul className="list-disc pl-4">
          <li>Correo Electrónico: info@tuempresa.com</li>
          <li>Teléfono: +123 456 789</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Horario de Atención</h3>
        <p>Nuestro equipo está disponible para ayudarte en los siguientes horarios:</p>
        <ul className="list-disc pl-4">
          <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
          <li>Sábados: 10:00 AM - 2:00 PM</li>
          <li>Domingos: Cerrado</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;
