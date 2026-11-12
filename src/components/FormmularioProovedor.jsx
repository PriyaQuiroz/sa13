import { useEffect, useState } from "react";
import { registrarProveedor, actualizarProveedor } from "../services/ProveedorServices";

export default function FormmularioProovedor({ proveedorEditar }) {
  const [ruc, setRuc] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("Activo");

  useEffect(() => {
    if (proveedorEditar) {
      setRuc(proveedorEditar.ruc);
      setBusinessName(proveedorEditar.businessName);
      setContactName(proveedorEditar.contactName);
      setEmail(proveedorEditar.email);
      setPhone(proveedorEditar.phone);
      setAddress(proveedorEditar.address);
      setStatus(proveedorEditar.status);
    }
  }, [proveedorEditar]);

  async function manejarEnvio(e) {
    e.preventDefault();
    const datos = { ruc, businessName, contactName, email, phone, address, status };

    if (proveedorEditar) {
      await actualizarProveedor(proveedorEditar.id, datos);
    } else {
      await registrarProveedor(datos);
    }
    window.location.reload();
  }

  return (
    <form className="form-proveedor" onSubmit={manejarEnvio}>
      <h2>{proveedorEditar ? "Editar Proveedor" : "Registrar Proveedor"}</h2>

      <label>
        RUC
        <input type="text" value={ruc} onChange={(e) => setRuc(e.target.value)} required />
      </label>

      <label>
        Razón Social
        <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required />
      </label>

      <label>
        Nombre de Contacto
        <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
      </label>

      <label>
        Correo Electrónico
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>

      <label>
        Teléfono
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>

      <label>
        Dirección
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>

      <label>
        Estado
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </label>

      <button type="submit">
        {proveedorEditar ? "Guardar Cambios" : "Guardar Proveedor"}
      </button>
    </form>
  );
}
