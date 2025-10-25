import { useState } from "react";
import postsData from "./data/posts";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";
import "./index.css";

export default function App() {
  const categories = ["All", "Tech", "Travel", "Food"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = postsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      <Header />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
      />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="grid">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="no-posts">No posts found.</p>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
