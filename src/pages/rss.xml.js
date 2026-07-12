import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('articles', ({ data }) => !data.draft)).sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
  return rss({
    title: 'The Code Insight',
    description: 'Clear notes on code, tools, and the craft of software.',
    site: context.site,
    items: posts.map((post) => ({ ...post.data, pubDate: post.data.published, link: `/articles/${post.id}/` })),
  });
}
