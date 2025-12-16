import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { WorkExperience } from "@/components/home/WorkExperience";
import { getArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getArticles();
  const featuredArticles = articles.slice(0, 4);

  return (
    <Container className="py-16 sm:py-24">
      <Hero />
      <FeaturedArticles articles={featuredArticles} />
      <WorkExperience />
    </Container>
  );
}
