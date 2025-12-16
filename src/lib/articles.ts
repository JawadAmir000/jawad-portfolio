import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readingTime: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

export async function getArticles(): Promise<Article[]> {
  // Return default articles if directory doesn't exist
  if (!fs.existsSync(articlesDirectory)) {
    return getDefaultArticles();
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  if (mdxFiles.length === 0) {
    return getDefaultArticles();
  }

  const articles = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: readingTime(content).text,
      content,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    // Check default articles
    const defaults = getDefaultArticles();
    return defaults.find((a) => a.slug === slug) || null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    featured: data.featured || false,
    readingTime: readingTime(content).text,
    content,
  };
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return getDefaultArticles().map((a) => a.slug);
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const slugs = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));

  return slugs.length > 0 ? slugs : getDefaultArticles().map((a) => a.slug);
}

function getDefaultArticles(): Article[] {
  return [
    {
      slug: "building-multi-agent-systems",
      title: "Building Multi-Agent Systems with Claude Agent SDK",
      description:
        "A deep dive into orchestrating autonomous AI agents for complex workflows using Python, Django, and the Claude Agent SDK.",
      date: "2025-01-15",
      tags: ["AI", "Agents", "Python", "Claude SDK"],
      featured: true,
      readingTime: "8 min read",
      content: `Multi-agent systems represent the next evolution in AI applications...`,
    },
    {
      slug: "rag-architecture-production",
      title: "RAG Architecture: From Theory to Production",
      description:
        "Implementing Retrieval-Augmented Generation systems at scale with Pinecone, OpenAI, and enterprise considerations.",
      date: "2025-01-10",
      tags: ["AI", "RAG", "Pinecone", "OpenAI"],
      featured: true,
      readingTime: "12 min read",
      content: `RAG systems combine the best of retrieval and generation...`,
    },
    {
      slug: "clean-architecture-dotnet",
      title: "Clean Architecture with .NET Core 8",
      description:
        "Building maintainable, testable applications using Clean Architecture, CQRS, and Domain-Driven Design in .NET.",
      date: "2025-01-05",
      tags: [".NET", "Architecture", "CQRS", "DDD"],
      featured: false,
      readingTime: "10 min read",
      content: `Clean Architecture provides a way to organize code...`,
    },
    {
      slug: "microservices-at-scale",
      title: "Microservices at Scale: Lessons from Fortune 500",
      description:
        "Real-world patterns and anti-patterns from building distributed systems serving millions of users.",
      date: "2024-12-20",
      tags: ["Microservices", "Architecture", "DevOps"],
      featured: false,
      readingTime: "15 min read",
      content: `Scaling microservices requires careful consideration...`,
    },
  ];
}
