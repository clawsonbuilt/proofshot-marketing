export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Marketing" | "Documentation" | "Industry Tips";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-ways-to-get-customers-from-before-after-images",
    title: "Top 5 Ways to Get Customers from Before & After Images",
    excerpt:
      "Before and after images are your secret weapon for winning new customers. Here's how to turn your project photos into a customer-generating machine.",
    content: `
# Top 5 Ways to Get Customers from Before & After Images

Your before and after images aren't just proof of great work—they're one of the most powerful marketing tools in your arsenal. Here's how to turn those project photos into a steady stream of new customers.

## 1. Create Scroll-Stopping Social Media Content

Before and after images consistently outperform ordinary job photos on social media. Here's why they work:

- **Instant visual impact**: The transformation grabs attention in a crowded feed
- **Proof without words**: People see the quality before reading anything
- **Highly shareable**: Homeowners love sharing amazing transformations

**Pro tip**: Use ProofShot Pro to create perfectly branded before/after comparisons in 30 seconds. Add your logo, contact info, and share directly to Instagram, Facebook, or LinkedIn.

### Where to post:
- **Instagram Stories & Reels** - Use the swipe feature for dramatic reveals
- **Facebook business page** - Tag the location for local SEO boost
- **LinkedIn** - Especially effective for commercial work
- **Nextdoor** - Hyper-local targeting for neighborhood projects

## 2. Build a Portfolio That Sells Itself

Your website portfolio should do the selling for you while you sleep. Here's how:

### Organize by project type
Don't just dump all your photos in one gallery. Create separate sections:
- Kitchen remodels
- Bathroom renovations  
- Exterior painting
- Deck restoration
- Landscape transformations

### Tell the story
Add brief context to each before/after:
- What was the problem?
- What solution did you provide?
- How long did it take?
- Approximate budget range (optional but builds trust)

### Make it easy to contact you
Put a "Get a Quote" button on every portfolio page. Don't make prospects hunt for your contact info.

## 3. Leverage Google My Business

This is the **#1 most overlooked** opportunity for contractors:

- Post before/after images weekly to your Google Business Profile
- Add detailed descriptions with relevant keywords
- Encourage customers to leave reviews mentioning the transformation

**Why it matters**: When someone searches "kitchen remodeler near me," your profile with stunning before/afters will stand out in the map pack.

**Bonus**: Google loves fresh content. Regular photo updates can improve your local search ranking dramatically.

## 4. Create Targeted Ads That Convert

Before and after images make Facebook and Instagram ads **incredibly effective**. Here's the strategy:

### Facebook/Instagram Ads:
1. **Target by location**: Focus on zip codes where you want to work
2. **Use carousel ads**: Show multiple transformations in one ad
3. **Include a clear CTA**: "Get Your Free Estimate" or "Transform Your Home"
4. **Retarget website visitors**: Show them specific before/afters related to pages they viewed

**Budget tip**: Start with $10-15/day. A few quality leads can pay for months of ads.

### Google Local Service Ads:
Upload your best before/afters to build trust. Customers comparing multiple contractors will choose the one with visual proof every time.

## 5. Turn Happy Customers Into Referral Machines

Your best before and after images come from real customer projects. Here's how to maximize their referral potential:

### Ask permission the right way:
"We'd love to share your amazing transformation to help other homeowners see what's possible. Can we feature your project on our website and social media?"

**Most people say yes** when:
- You ask at project completion (when they're happiest)
- You offer to tag/credit them (if they want)
- You send them the final branded image to share themselves

### Make sharing easy:
Send customers a branded before/after of their project. Many will:
- Post it on their own social media (free advertising!)
- Show it to friends and neighbors (word-of-mouth referrals)
- Leave it as part of their review (social proof)

**ProofShot Pro makes this effortless**: Create a branded before/after in 30 seconds and send it directly to your customer. They'll appreciate the professional touch and you get free marketing.

## Bonus: Consistency is Key

The contractors who win with before/after marketing:
- Capture photos on **every single project** (make it non-negotiable)
- Post consistently (at least 2-3x per week minimum)
- Keep branding uniform across all images (builds recognition)
- Track which images get the most engagement (double down on what works)

**The biggest mistake?** Taking great photos but never sharing them. Your before/afters only generate customers when people actually see them.

## Ready to Turn Your Photos Into Customers?

With ProofShot Pro, you can document every project, create scroll-stopping before/afters, and share them across all your marketing channels—all in less time than it takes to write an email.

**Your next customer is looking at someone else's before and after images right now. Make sure they're looking at yours.**

[Try ProofShot Pro Free](https://app.proofshotpro.com/signup) • [See Pricing](/pricing)
    `,
    category: "Marketing",
    author: {
      name: "ProofShot Pro Team",
      role: "Marketing",
    },
    publishedAt: "2026-01-20",
    readTime: "7 min read",
    featured: false,
    image: "/blog/before-after-marketing.jpg",
  },
  {
    slug: "how-to-take-better-before-after-photos",
    title: "How to Take Better Before & After Photos",
    excerpt:
      "Learn the techniques professional contractors use to capture compelling before and after documentation that wins customers and protects your business.",
    content: `
# How to Take Better Before & After Photos

Before and after photos are one of the most powerful tools in a contractor's marketing arsenal. They tell a story that words simply can't match. Here's how to take photos that actually convert viewers into customers.

## 1. Same Angle, Same Lighting

The most common mistake contractors make is taking the before photo from one angle and the after from another. This makes it hard for customers to see the transformation.

**Pro tip:** Stand in the exact same spot for both photos. Use a landmark like a tree or fence post to help you remember your position.

## 2. Clean Your Lens

It sounds obvious, but a smudged camera lens is the number one cause of blurry, unprofessional photos. Wipe your phone lens before every shot.

## 3. Shoot in Good Lighting

Natural daylight is your friend. Avoid shooting directly into the sun, and try to take photos during the "golden hours" — the first hour after sunrise and the last hour before sunset.

## 4. Include Context

Don't zoom in too tight. Include some surrounding context so viewers can understand the scale of the transformation.

## 5. Take Multiple Shots

Don't rely on a single photo. Take several from different angles so you have options. You can always delete the ones you don't use.

## 6. Use ProofShot Pro

With ProofShot Pro, you can turn your before and after photos into branded, professional images and share them in seconds. [Try it free today](https://app.proofshotpro.com/signup).
    `,
    category: "Documentation",
    author: {
      name: "Trey",
      role: "Founder",
    },
    publishedAt: "2026-01-15",
    readTime: "4 min read",
    featured: true,
    image: "/blog/how-to-take-better-before-after-photos.jpg",
  },
  {
    slug: "complete-guide-documenting-your-work",
    title: "The Complete Guide to Documenting Your Work",
    excerpt:
      "Everything you need to know about job documentation — from protecting your business to building your portfolio.",
    content: `
# The Complete Guide to Documenting Your Work

Documentation isn't glamorous, but it's essential. Whether you're protecting against disputes, building your portfolio, or creating marketing content, good documentation makes everything easier.

## Why Document Every Job?

### 1. Dispute Protection
When a customer claims work wasn't done or wasn't done right, photos are your best defense. Timestamped before/after images prove exactly what condition things were in and what work was completed.

### 2. Insurance Claims
If something goes wrong — property damage, injury claims, etc. — documentation can be the difference between a covered claim and an expensive lawsuit.

### 3. Portfolio Building
Every job is a potential portfolio piece. With consistent documentation, you build a library of work samples you can use forever.

### 4. Marketing Content
Social media demands constant content. Document every job and you'll never run out of things to post.

## What to Document

- **Before condition** — Always photograph the starting state
- **Problem areas** — Damage, wear, issues you're addressing
- **During** — Progress shots for multi-day jobs
- **After** — The completed work, obviously
- **Details** — Close-ups of quality workmanship

## How to Stay Consistent

The hardest part of documentation is doing it consistently. Here's how to build the habit:

1. **Make it part of your process** — Before any work starts, photos first
2. **Use the right tools** — Apps like ProofShot Pro make it fast and easy
3. **Train your team** — Everyone should know the documentation expectations

## Get Started Today

Don't let another job go undocumented. [Try ProofShot Pro free](https://app.proofshotpro.com/signup) and start building your professional portfolio today.
    `,
    category: "Documentation",
    author: {
      name: "Trey",
      role: "Founder",
    },
    publishedAt: "2026-01-05",
    readTime: "6 min read",
    image: "/blog/complete-guide-documenting-your-work.jpg",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
