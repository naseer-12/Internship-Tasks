import React from "react";

export default function Pricing() {
  return (
    <section>
      <h2 id="pricing">Pricing</h2>
      <div className="pricing">
        <div className="card">
          <h2>Free</h2>
          <p>$0 / month</p>
          <p>Basic features for personal use.</p>
        </div>
        <div className="card">
          <h2>Pro</h2>
          <p>$5 / month</p>
          <p>Advanced tools for professionals.</p>
        </div>
        <div className="card">
          <h2>Team</h2>
          <p>$15 / month</p>
          <p>Collaboration tools for teams.</p>
        </div>
      </div>
    </section>
  );
}