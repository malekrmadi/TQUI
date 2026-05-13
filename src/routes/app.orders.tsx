import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS, FAKE_ORDERS } from "@/data/profiles";

export const Route = createFileRoute("/app/orders")({
  component: Orders,
});

function Orders() {
  const [cart, setCart] = useState<string[]>([]);
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Commandes</h1>
          <p>Produits NFC premium liés à vos profils Tqui.</p>
        </div>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="card product-card">
            <div className="product-img" style={{ background: p.image }} />
            <div className="product-body">
              <strong>{p.name}</strong>
              <p className="muted" style={{ fontSize: 13 }}>{p.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <span className="product-price">€{p.price}</span>
                <button className="btn btn-primary btn-sm" onClick={() => setCart([...cart, p.id])}>
                  {cart.includes(p.id) ? "✓ Ajouté" : "Ajouter au panier"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, margin: "40px 0 16px" }}>Historique des commandes</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>Commande</th><th>Produit</th><th>Qté</th><th>Total</th><th>Statut</th><th>Date</th></tr></thead>
          <tbody>
            {FAKE_ORDERS.map((o) => (
              <tr key={o.id}>
                <td style={{ fontFamily: "ui-monospace, monospace" }}>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.qty}</td>
                <td>€{o.total}</td>
                <td><span className="badge">{o.status}</span></td>
                <td className="muted">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
