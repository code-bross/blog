import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';

export function Analytics() {
  useEffect(() => {
    // Initialize dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-8ZXX6PQ6KP');
    }
  }, []);

  return (
    <Head>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZXX6PQ6KP"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8ZXX6PQ6KP');
      `}</script>
    </Head>
  );
}