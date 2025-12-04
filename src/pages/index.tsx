import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RecentPosts from '@site/src/components/RecentPosts';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="국내 MTS 프로젝트에서 겪은 개발 경험과 팁을 공유하는 블로그입니다.">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section className={styles.postsSection}>
          <div className="container">
            <h2>최신글</h2>
            <RecentPosts />
          </div>
        </section>
      </main>
    </Layout>
  );
}

