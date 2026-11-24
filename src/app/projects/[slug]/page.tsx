import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { getPortfolioItemBySlug } from "@/data/portfolio";
import styles from "./page.module.css";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function ProjectContent({ slug }: { slug: string }) {
  const result = getPortfolioItemBySlug(slug);
  if (!result) notFound();

  const { item, section } = result;

  return (
    <>
      <Link href="/#projects" className={styles.back}>
        ← BACK TO GALLERY
      </Link>

      <p className={styles.crumb}>
        {section.number}. {section.title}
      </p>
      <h1 className={`font-display ${styles.title}`}>{item.title}</h1>

      <dl className={styles.metaGrid}>
        <div>
          <dt className={styles.dt}>Year</dt>
          <dd className={styles.dd}>{item.year}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Role</dt>
          <dd className={styles.dd}>{item.role}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Tools</dt>
          <dd className={styles.dd}>{item.tools.join(" · ")}</dd>
        </div>
      </dl>

      <div
        className={styles.heroImage}
        style={{ aspectRatio: section.aspectRatio.replace("/", " / ") }}
      >
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.body}>
        <h2 className={`font-display ${styles.bodyTitle}`}>CASE STUDY</h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>{item.description}</p>
      </div>

      <div className={styles.links}>
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            LIVE DEMO
          </a>
        )}
        {item.repoUrl && (
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            REPOSITORY
          </a>
        )}
      </div>
    </>
  );
}

function ProjectFallback() {
  return (
    <p className={styles.loading} role="status">
      Loading project…
    </p>
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getPortfolioItemBySlug(slug);
  if (!result) {
    return { title: "Project Not Found" };
  }
  return {
    title: result.item.title,
    description: result.item.description,
    openGraph: {
      title: result.item.title,
      description: result.item.description,
      type: "article",
    },
  };
}

export default function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  return (
    <div id="top">
      <FloatingNavbar />
      <main className={`section ${styles.page}`}>
        <div className="container">
          <Suspense fallback={<ProjectFallback />}>
            {params.then(({ slug }) => (
              <ProjectContent slug={slug} />
            ))}
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}