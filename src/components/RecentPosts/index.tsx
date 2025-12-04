import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Import generated blog list props produced by Docusaurus
// This path is provided by the build (`~blog/...`) and resolves to
// .docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json
import blogList from '~blog/default/blog-post-list-prop-default.json';

export default function RecentPosts({max = 6}: {max?: number}) {
  const items = (blogList.items || []).slice(0, max);

  if (items.length === 0) {
    return <p className={styles.empty}>아직 게시물이 없습니다.</p>;
  }

  return (
    <div className={styles.grid}>
      {items.map((post: any) => (
        <Link
          key={post.permalink}
          to={post.permalink}
          className={styles.card}
          aria-label={`Open post: ${post.title}`}>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.meta}>{new Date(post.date).toLocaleDateString()}</p>
          <p className={styles.excerpt}>{post.description || post.excerpt || ''}</p>
        </Link>
      ))}
    </div>
  );
}
