const URL_API = "http://localhost:3000/api/suppliers";

export async function obtenerProveedores() {
  const response = await fetch(URL_API);
  if (!response.ok) throw new Error("Error al cargar proveedores");
  return await response.json();
}

export async function registrarProveedor(datos) {
  const response = await fetch(URL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!response.ok) throw new Error("Error al registrar proveedor");
  return await response.json();
}

export async function actualizarProveedor(id, datos) {
  const response = await fetch(`${URL_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!response.ok) throw new Error("Error al actualizar proveedor");
  return await response.json();
}

export async function eliminarProveedor(id) {
  const response = await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar proveedor");
  return await response.json();
}