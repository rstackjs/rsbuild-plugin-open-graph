// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginOpenGraph } from '../dist/index.js';

define.app({
  plugins: [
    pluginOpenGraph({
      title: 'Rsbuild Home Page',
      siteName: 'Rsbuild',
      type: 'website',
      url: 'https://rsbuild.rs/',
      image: 'https://rsbuild.rs/og-image.png',
      description: 'The Rspack-based build tool',
      twitter: {
        site: '@rspack_dev',
        card: 'summary_large_image',
      },
    }),
  ],
});
