export default function PostCard({ post }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{post.title}</h2>
        <p className="date">{post.date}</p>
        <p>{post.description}</p>
      </div>
    </div>
  );
}