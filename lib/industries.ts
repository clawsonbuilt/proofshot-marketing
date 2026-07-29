export interface BeforeAfterPair {
  before: string;
  after: string;
  alt: string;
  label: string;
}

export interface Industry {
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  gallery: BeforeAfterPair[];
  relatedIndustries: string[];
  metaDescription: string;
}

export const industries: Record<string, Industry> = {
  "owner-operator": {
    slug: "owner-operator",
    name: "Owner Operators",
    headline: "Professional Documentation Without the Enterprise Price",
    tagline: "Finally, a photo app priced for solo and small operators.",
    painPoints: [
      {
        title: "Other Apps Are Priced for Big Companies",
        description:
          "You've looked at CompanyCam, Jobber, ServiceTitan. CompanyCam starts at $79/month. Jobber with their Marketing Suite is $118/month. That's a truck payment, not a photo app.",
      },
      {
        title: "You're Too Busy for Complicated Software",
        description:
          "You're quoting jobs, doing the work, handling billing, AND trying to grow your business. You don't have time for complex project management software.",
      },
      {
        title: "You Know You Should Be Documenting",
        description:
          "You've seen other contractors killing it on social media with before/after content. You know documentation protects you. But who has time?",
      },
    ],
    useCases: [
      {
        title: "Affordable Professional Documentation",
        description:
          "Free to start, just $29.99/month for Pro. No per-seat pricing that punishes small businesses.",
      },
      {
        title: "30 Second Workflow",
        description:
          "Open app, tap before, do the job, tap after. Done. No project setup, no complexity.",
      },
      {
        title: "Turn Work Into Growth",
        description:
          "Every job becomes marketing content with AI-generated captions. Grow without ad spend.",
      },
      {
        title: "Protect Your Business",
        description:
          "Timestamped documentation protects you when customers question your work.",
      },
    ],
    gallery: [],
    relatedIndustries: ["pressure-washing", "pest-control", "landscaping", "cleaning"],
    metaDescription:
      "Finally, a contractor photo app priced for owner operators. Free to start, just $29.99/mo for Pro. No per-seat pricing.",
  },
  "pressure-washing": {
    slug: "pressure-washing",
    name: "Pressure Washing",
    headline: "Before & After Photos for Pressure Washing",
    tagline: "Show the transformation. Win more jobs.",
    painPoints: [
      {
        title: "Customers Forget How Dirty It Was",
        description:
          "By the time you're done, customers can't remember how bad it looked before. Without proof, your amazing work goes unappreciated.",
      },
      {
        title: "Can't Prove You Did the Work",
        description:
          "When disputes arise, you have nothing but your word. Timestamped before/after photos protect your business and your reputation.",
      },
      {
        title: "Amazing Results Not Being Shared",
        description:
          "Pressure washing transformations are incredibly satisfying to watch. But without easy documentation, you're missing out on free marketing.",
      },
    ],
    useCases: [
      {
        title: "Post to Social Media",
        description:
          "Turn every driveway, deck, and siding job into viral content. AI-generated captions and hashtags included.",
      },
      {
        title: "Send to Customers",
        description:
          "Email professional PDF reports or text branded images directly to customers after every job.",
      },
      {
        title: "Attach to Invoices",
        description:
          "Include before/after proof with every invoice. Customers pay faster when they see the value.",
      },
      {
        title: "Protect Against Disputes",
        description:
          "Timestamped documentation protects you if a customer claims work wasn't done or wasn't satisfactory.",
      },
    ],
    gallery: [
      { before: "/industries/pressure-washing/before-1.jpg", after: "/industries/pressure-washing/after-1.jpg", alt: "Concrete entryway washing", label: "Entryway" },
    ],
    relatedIndustries: ["cleaning", "painting", "roofing", "pool-service"],
    metaDescription:
      "Document pressure washing jobs professionally. Combine before/afters, add your logo, share to social. Free to start.",
  },
  "pest-control": {
    slug: "pest-control",
    name: "Pest Control",
    headline: "Document Your Pest Control Results",
    tagline: "Proof of service that protects your business.",
    painPoints: [
      {
        title: "Invisible Results Hard to Prove",
        description:
          "Unlike other trades, pest control results often can't be seen. Document entry points sealed, nests removed, and treatments applied.",
      },
      {
        title: "Customers Question If Service Was Done",
        description:
          "When technicians visit while customers are away, questions arise. Photo documentation proves the work was completed.",
      },
      {
        title: "No Visual Marketing Content",
        description:
          "Pest control isn't glamorous, but before/after documentation of infestations, damage, and solutions tells a powerful story.",
      },
    ],
    useCases: [
      {
        title: "Document Every Service Call",
        description:
          "Photograph entry points, treatment areas, and any pest activity before and after service.",
      },
      {
        title: "Send Service Reports",
        description:
          "Generate professional PDF reports showing exactly what was done at each visit.",
      },
      {
        title: "Build Your Portfolio",
        description:
          "Dramatic infestations and successful treatments make compelling marketing content (with permission).",
      },
      {
        title: "Protect Against Liability",
        description:
          "Timestamped photos prove condition before treatment and work completed.",
      },
    ],
    gallery: [
      { before: "/industries/pest-control/before-1.jpg", after: "/industries/pest-control/after-1.jpg", alt: "Wasp nest removal", label: "Wasp Nest" },
    ],
    relatedIndustries: ["cleaning", "hvac", "roofing", "landscaping"],
    metaDescription:
      "Prove your pest control work with timestamped before/after photos. Professional reports in seconds. Free to start.",
  },
  landscaping: {
    slug: "landscaping",
    name: "Landscaping",
    headline: "Showcase Your Landscaping Transformations",
    tagline: "Let your work speak for itself.",
    painPoints: [
      {
        title: "Big Transformations Not Captured",
        description:
          "Landscaping projects create dramatic changes, but without documentation, that impact fades from memory.",
      },
      {
        title: "Portfolio Scattered Across Devices",
        description:
          "Your best work is buried in camera rolls across multiple phones. No organized way to showcase your projects.",
      },
      {
        title: "Time-Consuming to Document",
        description:
          "Between the physical work and travel, who has time to organize photos, add branding, and post to social media?",
      },
    ],
    useCases: [
      {
        title: "Build a Stunning Portfolio",
        description:
          "Every completed project becomes a professional portfolio piece with consistent branding.",
      },
      {
        title: "Win More Bids",
        description:
          "Show potential customers exactly what you've done for others. Before/afters sell better than words.",
      },
      {
        title: "Dominate Social Media",
        description:
          "Landscaping transformations perform incredibly well on Instagram and Facebook. Post consistently with AI captions.",
      },
      {
        title: "Document Plant Health",
        description:
          "Track lawn treatments, tree health, and garden progress over time with dated photos.",
      },
    ],
    gallery: [
      { before: "/industries/landscaping/before-1.jpg", after: "/industries/landscaping/after-1.jpg", alt: "Front yard landscaping", label: "Front Yard" },
    ],
    relatedIndustries: ["pool-service", "painting", "cleaning", "pressure-washing"],
    metaDescription:
      "Showcase landscaping transformations with professional before/after photos. Build your portfolio, win more bids. Free to start.",
  },
  cleaning: {
    slug: "cleaning",
    name: "Cleaning Services",
    headline: "Professional Photos for Cleaning Services",
    tagline: "The proof is in the pictures.",
    painPoints: [
      {
        title: "Before State Quickly Forgotten",
        description:
          "Customers forget how messy things were. Without documentation, your thorough work goes unrecognized.",
      },
      {
        title: "Disputes About What Was Cleaned",
        description:
          "When customers claim areas were missed, you need proof of the condition before and after your visit.",
      },
      {
        title: "No Way to Show Quality",
        description:
          "Quality cleaning is invisible when done right. Before/after photos make your excellence visible.",
      },
    ],
    useCases: [
      {
        title: "Document Move-Out Cleans",
        description:
          "Protect yourself with comprehensive before/after documentation for move-out and deep cleaning jobs.",
      },
      {
        title: "Impress Property Managers",
        description:
          "Send professional reports that property managers can share with owners and tenants.",
      },
      {
        title: "Market Your Services",
        description:
          "Dramatic cleaning transformations make compelling social media content.",
      },
      {
        title: "Train Your Team",
        description:
          "Use documented examples to show new cleaners what 'done right' looks like.",
      },
    ],
    gallery: [
      { before: "/industries/cleaning/before-1.jpg", after: "/industries/cleaning/after-1.jpg", alt: "Kitchen deep clean", label: "Kitchen" },
    ],
    relatedIndustries: ["pressure-washing", "painting", "handyman", "pest-control"],
    metaDescription:
      "Document cleaning jobs professionally. Before/after photos that prove your quality. Free to start.",
  },
  painting: {
    slug: "painting",
    name: "Painting",
    headline: "Paint Job Documentation Made Easy",
    tagline: "From prep to perfection, documented.",
    painPoints: [
      {
        title: "Color Changes Hard to Remember",
        description:
          "Once the new color is up, no one remembers the old one. Before/afters show the true transformation.",
      },
      {
        title: "Prep Work Not Valued",
        description:
          "Customers don't see the patching, priming, and prep that makes a great paint job. Document it all.",
      },
      {
        title: "Quality Craftsmanship Not Showcased",
        description:
          "Clean lines, smooth finishes, and attention to detail deserve to be shown off.",
      },
    ],
    useCases: [
      {
        title: "Showcase Color Transformations",
        description:
          "Before/after comparisons make color changes dramatic and shareable.",
      },
      {
        title: "Document Prep Work",
        description:
          "Show customers the patching, sanding, and priming that goes into quality work.",
      },
      {
        title: "Build Your Portfolio",
        description:
          "Every interior and exterior job becomes a professional portfolio piece.",
      },
      {
        title: "Win More Estimates",
        description:
          "Show potential customers your work history during estimates.",
      },
    ],
    gallery: [],
    relatedIndustries: ["pressure-washing", "home-remodeling", "cleaning", "landscaping"],
    metaDescription:
      "Document paint jobs professionally. Before/after photos from prep to perfection. Free to start.",
  },
  roofing: {
    slug: "roofing",
    name: "Roofing",
    headline: "Roof Repair & Replacement Documentation",
    tagline: "Before, during, and after — all in one place.",
    painPoints: [
      {
        title: "Customers Can't See the Roof",
        description:
          "Most homeowners never see their roof up close. Photo documentation shows them exactly what you found and fixed.",
      },
      {
        title: "Hard to Prove Damage",
        description:
          "For insurance claims and estimates, clear before photos of damage are essential.",
      },
      {
        title: "Insurance Documentation Needed",
        description:
          "Insurance companies require thorough documentation. Make it easy with organized before/after photos.",
      },
    ],
    useCases: [
      {
        title: "Document Storm Damage",
        description:
          "Capture hail damage, missing shingles, and repairs for insurance claims.",
      },
      {
        title: "Show Homeowners Their Roof",
        description:
          "Give customers a clear view of what's happening on their roof.",
      },
      {
        title: "Track Repair Progress",
        description:
          "Document multi-day jobs with before, during, and after photos.",
      },
      {
        title: "Professional Estimates",
        description:
          "Include photos with estimates to justify your pricing.",
      },
    ],
    gallery: [
      { before: "/industries/roofing/before-1.jpg", after: "/industries/roofing/after-1.jpg", alt: "Weathered roof restored", label: "Roof" },
    ],
    relatedIndustries: ["hvac", "painting", "pressure-washing", "pest-control"],
    metaDescription:
      "Document roofing jobs for insurance and customers. Before/after photos, professional reports. Free to start.",
  },
  hvac: {
    slug: "hvac",
    name: "HVAC",
    headline: "HVAC Service Documentation",
    tagline: "Show customers exactly what you did.",
    painPoints: [
      {
        title: "Invisible Work Inside Units",
        description:
          "Customers can't see inside their HVAC system. Photos show the dirty filters, clogged coils, and repairs you made.",
      },
      {
        title: "Customers Question What Was Done",
        description:
          "Without visual proof, customers wonder if the service was really necessary or thorough.",
      },
      {
        title: "Hard to Explain Value",
        description:
          "HVAC work is technical. Before/after photos make the value of your service instantly clear.",
      },
    ],
    useCases: [
      {
        title: "Document Maintenance Visits",
        description:
          "Show dirty vs. clean filters, coils, and components at every maintenance call.",
      },
      {
        title: "Justify Repairs",
        description:
          "Photo evidence of worn parts and damage helps customers understand why repairs are needed.",
      },
      {
        title: "Track Equipment Condition",
        description:
          "Document equipment condition over time to predict replacement needs.",
      },
      {
        title: "Professional Service Reports",
        description:
          "Send detailed PDF reports showing exactly what was serviced.",
      },
    ],
    gallery: [
      { before: "/industries/hvac/before-1.jpg", after: "/industries/hvac/after-1.jpg", alt: "Condenser unit replacement", label: "AC Install" },
    ],
    relatedIndustries: ["pest-control", "roofing", "cleaning", "painting"],
    metaDescription:
      "Document HVAC service calls with before/after photos. Show customers exactly what you did. Free to start.",
  },
  "pool-service": {
    slug: "pool-service",
    name: "Pool Service",
    headline: "Pool Cleaning Before & After",
    tagline: "Crystal clear results, crystal clear proof.",
    painPoints: [
      {
        title: "Water Clarity Changes Fast",
        description:
          "A green pool can be clear in hours. Without before photos, customers don't appreciate the transformation.",
      },
      {
        title: "Weekly Service Blurs Together",
        description:
          "When you service pools regularly, customers forget what you're preventing. Documentation shows ongoing value.",
      },
      {
        title: "Hard to Show Ongoing Value",
        description:
          "Maintenance prevents problems, but prevention is invisible. Document the work you do each visit.",
      },
    ],
    useCases: [
      {
        title: "Document Green-to-Clean",
        description:
          "Green pool transformations are incredibly satisfying. Document them for marketing gold.",
      },
      {
        title: "Log Weekly Service",
        description:
          "Document each visit to show customers the consistent care you provide.",
      },
      {
        title: "Market Your Services",
        description:
          "Before/after pool photos perform incredibly well on social media.",
      },
      {
        title: "Equipment Documentation",
        description:
          "Photograph pump, filter, and equipment condition for maintenance records.",
      },
    ],
    gallery: [],
    relatedIndustries: ["landscaping", "pressure-washing", "cleaning", "pest-control"],
    metaDescription:
      "Document pool cleaning with stunning before/after photos. Crystal clear results, crystal clear proof. Free to start.",
  },
  "home-remodeling": {
    slug: "home-remodeling",
    name: "Home Remodeling",
    headline: "Document Your Remodeling Projects",
    tagline: "From demo to done, every transformation captured.",
    painPoints: [
      {
        title: "Long Projects Lose Impact",
        description:
          "A kitchen remodel takes weeks. By the time you're done, customers forget how bad it looked at the start.",
      },
      {
        title: "Progress Gets Lost",
        description:
          "Without consistent documentation, you can't show clients the work behind the walls — framing, wiring, plumbing.",
      },
      {
        title: "Portfolio is Scattered",
        description:
          "Your best work is buried across phones, folders, and years of photos with no organization.",
      },
    ],
    useCases: [
      {
        title: "Document Every Phase",
        description:
          "Demo, framing, rough-in, finish — create a visual timeline that shows the full scope of your work.",
      },
      {
        title: "Impress Future Clients",
        description:
          "Show potential customers dramatic transformations from your past projects during estimates.",
      },
      {
        title: "Protect Against Disputes",
        description:
          "Timestamped photos prove what was there before and exactly what work was completed.",
      },
      {
        title: "Build Social Proof",
        description:
          "Remodeling before/afters are some of the most engaging content on social media.",
      },
    ],
    gallery: [
      { before: "/industries/home-remodeling/before-1.jpg", after: "/industries/home-remodeling/after-1.jpg", alt: "Bathroom remodel", label: "Bathroom" },
    ],
    relatedIndustries: ["painting", "roofing", "handyman", "cleaning"],
    metaDescription:
      "Document home remodeling projects professionally. Before/after photos from demo to done. Free to start.",
  },
  handyman: {
    slug: "handyman",
    name: "Handyman Services",
    headline: "Document Your Handyman Work",
    tagline: "Every fix. Every improvement. Documented.",
    painPoints: [
      {
        title: "Small Jobs Add Up",
        description:
          "You do dozens of small jobs a week. Without documentation, customers forget the value of all those fixes.",
      },
      {
        title: "Variety Makes Marketing Hard",
        description:
          "You fix faucets, hang TVs, repair drywall, and more. Hard to showcase such diverse work consistently.",
      },
      {
        title: "No Time for Photos",
        description:
          "You're in and out quickly. Who has time to organize photos when you've got three more jobs today?",
      },
    ],
    useCases: [
      {
        title: "Quick Job Documentation",
        description:
          "Document repairs in seconds — before, after, done. Perfect for the fast pace of handyman work.",
      },
      {
        title: "Build a Diverse Portfolio",
        description:
          "Showcase the full range of your skills with organized before/after comparisons.",
      },
      {
        title: "Send Professional Receipts",
        description:
          "Include before/after photos with invoices to remind customers of the value you provided.",
      },
      {
        title: "Get More Referrals",
        description:
          "Make it easy for customers to share your work. Professional images get shared more.",
      },
    ],
    gallery: [
      { before: "/industries/handyman/before-1.jpg", after: "/industries/handyman/after-1.jpg", alt: "Backyard deck build", label: "Deck Build" },
    ],
    relatedIndustries: ["home-remodeling", "painting", "cleaning", "hvac"],
    metaDescription:
      "Document handyman jobs quickly and professionally. Before/after photos for every fix. Free to start.",
  },
};

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug];
}

export function getAllIndustries(): Industry[] {
  return Object.values(industries);
}

export function getRelatedIndustries(slug: string): Industry[] {
  const industry = industries[slug];
  if (!industry) return [];
  return industry.relatedIndustries
    .map((s) => industries[s])
    .filter(Boolean);
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

/**
 * Trade-specific FAQs.
 *
 * Question-shaped headings with direct answers are what answer engines extract, and
 * the industry pages previously had none. Every answer is distinct across trades —
 * eleven pages repeating the same text would read as duplicate content.
 */
export const industryFaqs: Record<string, IndustryFaq[]> = {
  "roofing": [
    {
      question: "What photos should a roofer take on every job?",
      answer:
        "Wide shots of each slope before anything comes off, close-ups of the damage or wear you were called out for, whatever you find once the old material is up, and matching wide shots from the same angles at the end. The before angles matter most \u2014 adjusters and homeowners both judge the work against them.",
    },
    {
      question: "Do before and after photos help with roofing insurance claims?",
      answer:
        "They are often the difference between an approved claim and a disputed one. Timestamped photos taken before work begins establish the condition you arrived to, and matching after photos document what was actually replaced. Keeping them together per job means you are not digging through a camera roll when an adjuster asks.",
    },
    {
      question: "How do I photograph a roof I cannot get far enough back from?",
      answer:
        "Shoot from fixed points on the ground \u2014 a driveway corner, the edge of the lawn \u2014 and return to the same spots afterwards, rather than trying to fit the whole roof into one frame. A consistent vantage point makes the comparison obvious even when you can only capture one plane at a time.",
    },
    {
      question: "Can I put my roofing company's logo on the photos?",
      answer:
        "Yes. Your logo and company details are applied to reports and templates automatically once you set them up. The free plan puts ProofShot branding on outputs; Pro at $29.99 a month replaces it with yours.",
    },
  ],
  "pressure-washing": [
    {
      question: "What is the best way to shoot before and after pressure washing photos?",
      answer:
        "Stand in the same spot for both, at a similar time of day, with a fixed reference in frame \u2014 a downspout, a step, a planter. Wet concrete reads far darker than dry concrete, so either let the after shot dry or take it wet in both, otherwise the comparison undersells the work.",
    },
    {
      question: "Why do my pressure washing before and afters look less impressive than the job did?",
      answer:
        "Almost always one of three things: the angle moved, the light changed, or the after was shot while the surface was still soaked. Matching the framing fixes most of it. On long runs of concrete, a single frame showing the clean line halfway across often reads better than two separate photos.",
    },
    {
      question: "How do pressure washing companies use photos to win more work?",
      answer:
        "The before and after is the pitch. Posted to social it explains the service faster than any description. Sent with the invoice it justifies the price while the result is still fresh. Attached to a review request, it makes the review far more persuasive to whoever reads it next.",
    },
    {
      question: "How long does documenting a pressure washing job actually take?",
      answer:
        "About as long as taking the two photos. You tap before when you arrive, tap after when you pack up, and the layout, branding, and caption are generated for you. There is no project to set up first.",
    },
  ],
  "pest-control": [
    {
      question: "What should pest control technicians photograph on a service call?",
      answer:
        "Entry points, activity or damage you find, the treatment areas, and any nest or harbourage before removal \u2014 then the same locations afterwards. Much of pest work is invisible when done properly, so the before photo is what makes the value legible to the customer.",
    },
    {
      question: "How do photos protect a pest control business in a dispute?",
      answer:
        "They establish what the property looked like before you treated it. If a customer later reports activity or damage, timestamped documentation of the original conditions and the work performed answers the question directly instead of turning into one word against another.",
    },
    {
      question: "Do customers actually want to see pest control photos?",
      answer:
        "Many do, particularly for wasp nests, rodent exclusion, and termite damage where the removal is dramatic and the customer never saw the problem up close. For routine treatments, a short branded report tends to land better than photos alone.",
    },
    {
      question: "Can I document a route of several stops without setting up each one?",
      answer:
        "Yes. Each job is just a before photo and an after photo \u2014 there is no project scaffolding to fill in first. The free plan covers 5 projects a month; Pro removes the cap for routes where every stop gets documented.",
    },
  ],
  "landscaping": [
    {
      question: "What landscaping photos are worth taking on every job?",
      answer:
        "A wide establishing shot of the whole area from the street or the patio door, plus detail shots of the beds, edging, or hardscape you are actually changing. Return to the exact same standing positions at the end \u2014 landscaping comparisons fall apart when the angle drifts.",
    },
    {
      question: "How do I show a landscaping transformation that took several days?",
      answer:
        "Photograph the same fixed vantage points at the start of each day rather than only at the beginning and end. Multi-day jobs make better content when the sequence is visible, and it also protects you if weather or a change order stretches the timeline.",
    },
    {
      question: "Why do landscaping before and afters matter more than a portfolio description?",
      answer:
        "Because the customer cannot picture the outcome from words. A photographed transformation of a yard that looked like theirs does the selling on its own, which is why before and after content tends to outperform written service lists on social.",
    },
    {
      question: "Can I add my company details to landscaping photos automatically?",
      answer:
        "Yes. Once your logo and contact details are saved they appear on every branded output and PDF report without you doing anything per job. Pro at $29.99 a month removes ProofShot branding so only yours shows.",
    },
  ],
  "cleaning": [
    {
      question: "What should a cleaner photograph to prove the work was done?",
      answer:
        "The areas most likely to be questioned later \u2014 kitchens, bathrooms, floors, and any spot the client flagged in advance. Shoot from the doorway for consistency, then repeat the identical frame afterwards. Good cleaning is invisible, so the before photo is what makes it visible.",
    },
    {
      question: "How do before and after photos help with move-out and deep cleans?",
      answer:
        "They settle deposit disputes. Documented condition on arrival and on completion gives the property manager or landlord something concrete to look at, rather than relying on recollection weeks later when the deposit is being argued over.",
    },
    {
      question: "A client says an area was missed. How do photos help?",
      answer:
        "Comparable photos of that specific area, timestamped, answer it immediately. It turns a difficult conversation into a factual one, and in most cases the customer resolves it themselves once they can see the state you left it in.",
    },
    {
      question: "Is this practical for a cleaner working alone?",
      answer:
        "Yes, that is the case it was built for. Two taps per room you want documented, no project setup, and a branded report ready to send before you have loaded the van. The free plan is permanent rather than a trial.",
    },
  ],
  "painting": [
    {
      question: "What painting photos should I take before starting?",
      answer:
        "The existing colour and condition from the same positions you intend to shoot at the end, plus close-ups of any damage, patching, or prep you will be charging for. Prep is the part customers forget was necessary \u2014 photograph it before it disappears under primer.",
    },
    {
      question: "How do I make a colour change read clearly in a photo?",
      answer:
        "Keep the light consistent. Colour is the one thing that shifts most between a grey morning and a bright afternoon, so shoot both frames under similar conditions and avoid mixing daylight with interior lamps. Include a fixed element such as trim or a doorway in both frames.",
    },
    {
      question: "Why do painters lose credit for their work?",
      answer:
        "Because once the new colour is up, nobody remembers the old one. Within a week the customer has stopped seeing the change entirely. A before and after is the only thing that keeps the scale of the improvement in view when it comes to referrals and reviews.",
    },
    {
      question: "Can I document interior and exterior jobs the same way?",
      answer:
        "Yes, the workflow does not change. The practical difference is that exteriors reward returning at the same time of day, since the sun moves a lot more than a ceiling light does.",
    },
  ],
  "hvac": [
    {
      question: "What should an HVAC technician photograph on a service call?",
      answer:
        "The equipment as found, including the model plate, any corrosion, blockage, or failed component, and the same views after the repair or replacement. HVAC work is largely hidden and technical, so photos are what translate it into something the customer can evaluate.",
    },
    {
      question: "How do photos help explain an HVAC repair the customer cannot see?",
      answer:
        "A blocked coil, a rusted condenser, or a filter that has not been changed in a year explains the invoice better than any line item. Showing the state you found the equipment in makes the recommendation feel like a diagnosis rather than an upsell.",
    },
    {
      question: "Should I photograph the equipment before quoting a replacement?",
      answer:
        "Yes. Condition documented before the conversation protects the quote later, and gives you something to reference if the customer delays and the unit degrades further before they approve the work.",
    },
    {
      question: "Does this work for a technician documenting several calls a day?",
      answer:
        "It is built for it \u2014 each call is two photos and no setup. If you document every stop, Pro removes the free plan's 5-project monthly cap and raises stored projects to 100.",
    },
  ],
  "pool-service": [
    {
      question: "What pool service photos are worth taking?",
      answer:
        "The water condition on arrival, any staining, scale, or equipment issue you find, and the same shots once treated. Green-to-clear is the most persuasive image in the trade, and it is also the one customers most often fail to appreciate because they never saw the worst of it.",
    },
    {
      question: "How do I photograph a pool that takes days to clear?",
      answer:
        "Shoot from the same corner each visit rather than only at the start and end. A sequence across several visits shows the work involved, which matters when the customer only sees the final result and wonders what they paid for.",
    },
    {
      question: "Do pool before and afters perform well on social media?",
      answer:
        "Green-to-clear transformations are among the most watchable content in home services, because the change is total and immediate. Consistent framing is what makes them work \u2014 the same corner, the same distance, every time.",
    },
    {
      question: "Can I include water chemistry notes with the photos?",
      answer:
        "Yes. Captions and report descriptions can carry whatever detail you want alongside the images, so the customer receives the readings and the visual evidence in the same branded document.",
    },
  ],
  "home-remodeling": [
    {
      question: "What should I photograph during a remodel?",
      answer:
        "The original space from several fixed positions, everything behind the walls once they are open, and the finished result from those same original positions. The in-progress photos are what justify the price on a job where the customer only ever sees the start and the end.",
    },
    {
      question: "How do I document a remodel that runs for weeks?",
      answer:
        "Return to the same vantage points at each stage rather than photographing whatever is interesting that day. Consistency is what makes a sequence readable later, and it gives you a record of hidden conditions if a dispute or change order comes up.",
    },
    {
      question: "Why do remodel before and afters matter for winning bids?",
      answer:
        "Because prospective customers are trying to picture their own space transformed. A documented job that resembles theirs answers that better than a price or a description ever will, which is why remodel comparisons are among the most shared content in the trade.",
    },
    {
      question: "Can I produce a report for the homeowner at the end?",
      answer:
        "Yes. A branded PDF combining the before and after images with your company details can be generated per job, which also serves as a record for warranty or resale conversations later.",
    },
  ],
  "handyman": [
    {
      question: "What should a handyman photograph on small jobs?",
      answer:
        "Whatever you were called out to fix, before you touch it, and the same view once it is done. Small jobs are the easiest to under-document and the easiest to have questioned later, precisely because the work is quick and the customer often was not watching.",
    },
    {
      question: "Is it worth documenting a job that takes twenty minutes?",
      answer:
        "Usually yes, because a twenty-minute job is where disputes are cheapest to prevent and hardest to prove. Two photos take a fraction of the visit and give you a record proportionate to the work.",
    },
    {
      question: "How do I keep photos organised across many small jobs?",
      answer:
        "Photograph per job rather than into one camera roll. The problem with a rolling library is not capacity, it is that finding the right before photo three weeks later is effectively impossible once you have a few hundred similar shots.",
    },
    {
      question: "What does the free plan cover for a handyman?",
      answer:
        "Five documented jobs a month, ten stored at a time, one user, and every core feature including AI captions, all templates, and PDF reports. It is permanent, not a trial. Pro at $29.99 a month removes the limits.",
    },
  ],
  "owner-operator": [
    {
      question: "Is photo documentation worth the time when I am running the job alone?",
      answer:
        "Two photos per job is the whole commitment. The comparison is whether that is worth fewer payment disputes, better reviews, and a stream of content you did not have to create separately \u2014 which for most solo operators it comfortably is.",
    },
    {
      question: "Why is contractor photo software so expensive for one person?",
      answer:
        "Most of it is priced per seat for companies coordinating crews, so a solo operator ends up paying for scheduling and team features they will never open. ProofShot Pro is $29.99 a month flat for Pro, and the free tier is permanent rather than a trial.",
    },
    {
      question: "What does a one-person operation actually need from documentation?",
      answer:
        "Proof of what you did, something professional to send the customer, and content for social \u2014 without project setup, assignments, or a dashboard to maintain. Anything beyond that is overhead you will stop using within a month.",
    },
    {
      question: "Can I upgrade later if I take on help?",
      answer:
        "Yes. Pro includes three team members, and additional seats are $9.99 per user per month, so the cost tracks the size of the crew rather than assuming one up front.",
    },
  ],
};

export function getIndustryFaqs(slug: string): IndustryFaq[] {
  return industryFaqs[slug] ?? [];
}
