import React from "react";

export default function Reviews() {
  return (
    <section>
      <h2 id="reviews">Feedback</h2>
      <div className="reviews">
        <div className="card">
          <p>"Task App changed the way I work!"</p>
          <strong>Naseer</strong>
        </div>
        <div className="card">
          <p>"I love the reminders and progress tracking."</p>
          <strong>Ali</strong>
        </div>
        <div className="card">
          <p>"The best task management tool out there."</p>
          <strong>Ahmad</strong>
        </div>
      </div>
    </section>
  );
}