import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { SystemCard } from "@/components/home/SystemCard";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { WorkExperience } from "@/components/home/WorkExperience";
import { PullQuote } from "@/components/home/PullQuote";
import { getArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getArticles();
  const featuredArticles = articles.slice(0, 4);

  return (
    <>
      <Container size="wide">
        <Hero systemCard={<SystemCard />} />
        <WorkExperience />
      </Container>

      <PullQuote />

      <Container size="wide">
        <FeaturedArticles articles={featuredArticles} />
      </Container>
    </>
  );
}
