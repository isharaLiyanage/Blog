import CategoryList from "@/components/CategoryList";
import HeroSection from "@/components/HeroSection";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <main className="dark:bg-black bg-[#ffff]">
      <HeroSection />
      <CategoryList />
      <PostList />
    </main>
  );
}
