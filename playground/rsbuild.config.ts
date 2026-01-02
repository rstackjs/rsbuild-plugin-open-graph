import { defineConfig } from '@rsbuild/core';
import { pluginOpenGraph } from '../src';

export default defineConfig({
  plugins: [
    pluginOpenGraph({
      title: 'Rsbuild',
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
