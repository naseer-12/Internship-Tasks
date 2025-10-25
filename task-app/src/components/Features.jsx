import React from "react";

export default function Features() {
  return (
    <section>
     <h1 id="services-title">Our Services</h1>
      <div className="features">
        <div className="card">
          <i className="fas fa-check-circle fa-2x"></i>
          <h2>Easy Task Management</h2>
          <p>Create, edit, and organize tasks with ease.</p>
        </div>
        <div className="card">
          <i className="fas fa-bell fa-2x"></i>
          <h2>Reminders</h2>
          <p>Never miss a deadline with smart reminders.</p>
        </div>
        <div className="card">
          <i className="fas fa-chart-line fa-2x"></i>
          <h2>Progress Tracking</h2>
          <p>Visualize your productivity over time.</p>
        </div>
      </div>
    </section>
  );
}