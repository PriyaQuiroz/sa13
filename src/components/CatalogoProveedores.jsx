import { useEffect, useState } from "react";
import { obtenerProveedores } from "../services/ProveedorServices";
import CardProveedor from "./CardProveedor";

export default function CatalogoProveedores({alEditar}) {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    async function listar() {
      const resultado = await obtenerProveedores();
      setProveedores(resultado.data);
      console.log(resultado);
    }
    listar();
  }, []);

  return (
    <section className="suppliers-container">
      {proveedores.map((e) => (
        <CardProveedor
          key={e.id}
          id={e.id}
          ruc={e.ruc}
          businessName={e.businessName}
          contactName={e.contactName}
          email={e.email}
          phone={e.phone}
          address={e.address}
          status={e.status}
          alEditar={alEditar}
        />
      ))}
    </section>
  );
}
