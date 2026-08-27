export type Article = {
  slug: string; // unique, no spaces — used in the URL: /blog/<slug>
  title: string; // article title
  category: string; // e.g. 'Artificial Intelligence', 'Mathematics'
  date: string; // e.g. 'August 12, 2025'
  readTime: string; // e.g. '6 min read'
  excerpt: string; // 1-2 sentences, shown on the blog list and at the top of the article
  cover: string; // '/images/blog/your-file.png' or a full https:// URL
  coverAlt: string; // short text description of the image (for accessibility)
  content: string[]; // one entry per paragraph, shown in order on the article page
  featured?: boolean; // true = shown as the large featured post at the top of /blog (only set this on one article)
  video?: {
    src: string; // '/images/blog/your-file.mp4' or a full https:// URL
    label?: string; // caption above the video, e.g. 'Demo' (defaults to 'Demo')
  };
};

// ============================================================
// HOW TO ADD A NEW BLOG POST
// ============================================================
// 1. Put your cover image in: public/images/blog/your-file.png
// 2. Copy the block below, paste it into the `articles` array,
//    fill in your own text, and set cover to '/images/blog/your-file.png'.
// 3. Save — it shows up automatically on the Blog page.
//
// {
//   slug: 'your-post-slug',
//   title: 'Your Post Title',
//   category: 'Machine Learning',
//   date: 'January 1, 2026',
//   readTime: '5 min read',
//   excerpt: 'One or two sentences that summarize the post.',
//   cover: '/images/blog/your-file.png',
//   coverAlt: 'What the picture shows',
//   content: [
//     'First paragraph.',
//     'Second paragraph.',
//     'Third paragraph.',
//   ],
//   video: { // optional — delete this whole `video` line if you don't have one
//     src: '/images/blog/your-file.mp4',
//     label: 'Demo',
//   },
// },
// ============================================================

export const articles: Article[] = [
  {
    slug: 'khmer-news-summarization',
    title: 'Fine-tuning mBART and mT5 for Khmer news summarization',
    category: 'Natural Language Processing',
    date: 'May 1, 2025',
    readTime: '7 min read',
    excerpt:
      'Khmer has no spaces between words, which makes it one of the hardest languages to build NLP tools for. Here is how we fine-tuned two multilingual transformers to summarize Khmer news articles — and which one won.',
    cover: '/images/blog/khmer-news-summarization-cover.png',
    coverAlt: 'Summarize KH web app interface for Khmer text summarization',
    featured: true,
    video: {
      src: '/images/blog/Khmer_News_Summarization/khmer-news-summarization-demo.mp4',
      label: 'Demo',
    },
    content: [
      "News summarization means pulling the key points out of an article without reading the whole thing. That's simple to say and hard to do well, especially for Khmer: the script has no spaces between words, so even splitting a sentence into words is a research problem before summarization can begin.",
      "With four teammates — Kimlong Ngin, Chanthin Phao, Sane Bo and Ousa Ma — I built a dataset of 2,500 Khmer news articles scraped from Sabay News (1,000 articles) and Khmerload (1,500 articles), each paired with a reference summary. We used KhmerWordSegmentor to split the text into words first, since Khmer's lack of spacing makes this step essential before any tokenizer can work with it.",
      'We fine-tuned two pre-trained multilingual transformers on this dataset: mBART (facebook/bart-base) and mT5, training each for 5 epochs on an A100 GPU and stopping once validation loss started to diverge from training loss, since our dataset is small enough to overfit quickly.',
      'We scored both models with ROUGE-1, ROUGE-2 and ROUGE-L, comparing generated summaries against the human-written references. mBART clearly outperformed mT5 across all three metrics — 0.685 vs. 0.513 on ROUGE-1, 0.529 vs. 0.386 on ROUGE-2, and 0.643 vs. 0.480 on ROUGE-L. Qualitatively, mBART produced more detailed and factually complete summaries, while mT5 leaned more concise but dropped important details more often.',
      'This was presented at the 14th Scientific Day of ITC. Khmer is still an underrepresented language in NLP research, and this project is a small step toward closing that gap — the video below is a short demo of the summarization tool we built on top of the fine-tuned model.',
    ],
  },

];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
