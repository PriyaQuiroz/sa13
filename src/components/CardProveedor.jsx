import { eliminarProveedor } from "../services/ProveedorServices";

export default function CardProveedor({
  id,
  ruc,
  businessName,
  contactName,
  email,
  phone,
  address,
  status,
  alEditar,
}) {
  async function handleEliminar() {
    await eliminarProveedor(id);
    window.location.reload();
  }

  return (
    <article className="supplier-card">
      <header className="supplier-header">
        <span className="supplier-status">{status}</span>
        <h3>{businessName}</h3>
      </header>

      <ul className="supplier-info">
        <li><strong>RUC:</strong> {ruc}</li>
        <li><strong>Contacto:</strong> {contactName}</li>
        <li><strong>Correo:</strong> {email}</li>
        <li><strong>Teléfono:</strong> {phone}</li>
        <li><strong>Dirección:</strong> {address}</li>
      </ul>

      <footer className="card-acciones">
        <button
          type="button"
          className="btn-editar"
          onClick={() =>
            alEditar({ id, ruc, businessName, contactName, email, phone, address, status })
          }
        >
          Editar
        </button>
        <button type="button" className="btn-eliminar" onClick={handleEliminar}>
          Eliminar
        </button>
      </footer>
    </article>
  );
}
