const STEPS = [
  {
    number: 1,
    title: 'Create Your First Funnel',
    icon: '🚀',
    content: (
      <>
        <p>
          Click <strong>+ New Funnel</strong> in the sidebar to create a new funnel, or choose one of the
          ready-made <strong>Templates</strong> to get started quickly.
        </p>
        <p>Give your funnel a memorable name — e.g. &ldquo;Summer Sale Funnel&rdquo;.</p>
      </>
    ),
  },
  {
    number: 2,
    title: 'Add Funnel Steps',
    icon: '🧱',
    content: (
      <>
        <p>
          Inside the <strong>Builder</strong> tab, click any step type in the left panel to add it to your
          funnel. Common step types include:
        </p>
        <ul>
          <li>
            <strong>Landing Page</strong> – The first page visitors see. Keep it focused on one call to
            action.
          </li>
          <li>
            <strong>Opt-In Page</strong> – Capture email addresses in exchange for a free gift or lead
            magnet.
          </li>
          <li>
            <strong>Sales Page</strong> – Present your offer, benefits, and testimonials.
          </li>
          <li>
            <strong>Order Form</strong> – Collect payment details.
          </li>
          <li>
            <strong>Upsell Page</strong> – Offer a complementary product at a special price.
          </li>
          <li>
            <strong>Thank You Page</strong> – Confirm the purchase and set next-step expectations.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: 3,
    title: 'Reorder Steps with Drag & Drop',
    icon: '↕️',
    content: (
      <>
        <p>
          Every step has a <strong>drag handle</strong> (⠿) on the left side. Click and hold it, then drag
          the step to a new position in the funnel to reorder it.
        </p>
        <p>
          You can rearrange your funnel as many times as you like — nothing is saved until you release the
          step.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: 'Edit Step Details',
    icon: '✏️',
    content: (
      <>
        <p>
          Click the <strong>✏️ Edit</strong> button on any step to customise it:
        </p>
        <ul>
          <li>
            <strong>Name</strong> – Give it a descriptive name (e.g. &ldquo;Free PDF Download Page&rdquo;).
          </li>
          <li>
            <strong>Visits</strong> – How many people reach this step (used in analytics).
          </li>
          <li>
            <strong>Conversions</strong> – How many people complete the step&#39;s goal.
          </li>
        </ul>
        <p>Press <strong>Save</strong> when you&#39;re done.</p>
      </>
    ),
  },
  {
    number: 5,
    title: 'Analyse Your Funnel',
    icon: '📊',
    content: (
      <>
        <p>
          Switch to the <strong>Analyzer</strong> tab to see your funnel&#39;s performance:
        </p>
        <ul>
          <li>Summary cards for total visitors, conversions, and overall conversion rate.</li>
          <li>A visual funnel chart showing how traffic flows through each step.</li>
          <li>A side-by-side bar chart comparing visits and conversions per step.</li>
          <li>A detailed table with per-step conversion rates and drop-off percentages.</li>
        </ul>
        <p>
          Use this data to identify <strong>bottlenecks</strong> — steps where a large percentage of people
          drop off — and focus your optimisation efforts there first.
        </p>
      </>
    ),
  },
  {
    number: 6,
    title: 'Use Templates to Learn',
    icon: '📋',
    content: (
      <>
        <p>
          Visit the <strong>Templates</strong> tab for five ready-built funnels across different strategies:
        </p>
        <ul>
          <li>
            <strong>Lead Magnet</strong> – Great starting point for beginners.
          </li>
          <li>
            <strong>Product Launch</strong> – Build hype then sell to a warm list.
          </li>
          <li>
            <strong>Webinar</strong> – Fill your live or automated online event.
          </li>
          <li>
            <strong>Tripwire</strong> – Convert cold traffic with a low-cost entry offer.
          </li>
          <li>
            <strong>Quiz</strong> – Segment and personalise for higher conversions.
          </li>
        </ul>
        <p>
          Click <strong>Use Template</strong> to load a copy into your workspace, then customise it freely.
        </p>
      </>
    ),
  },
  {
    number: 7,
    title: 'Save & Manage Multiple Funnels',
    icon: '💾',
    content: (
      <>
        <p>
          All your funnels are <strong>automatically saved</strong> in your browser&#39;s local storage —
          no account or internet connection required.
        </p>
        <p>
          Use the sidebar to switch between funnels, rename them (click the pencil icon), or delete ones
          you no longer need.
        </p>
        <p>
          <strong>Tip:</strong> Create separate funnels for different products, campaigns, or traffic
          sources so you can compare them side-by-side.
        </p>
      </>
    ),
  },
];

export default function HowToGuide() {
  return (
    <div className="guide">
      <div className="guide-header">
        <h2>📖 How to Use Lean Tech Funnel Banger</h2>
        <p className="guide-subtitle">
          Follow these seven steps to build, analyse, and optimise your first sales funnel — no experience
          needed!
        </p>
      </div>

      <div className="guide-steps">
        {STEPS.map((step) => (
          <div key={step.number} className="guide-step">
            <div className="guide-step-header">
              <div className="guide-step-number">{step.number}</div>
              <span className="guide-step-icon">{step.icon}</span>
              <h3 className="guide-step-title">{step.title}</h3>
            </div>
            <div className="guide-step-body">{step.content}</div>
          </div>
        ))}
      </div>

      <div className="guide-tips">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>
            A good landing page should convert at <strong>20–40%</strong> of cold traffic. Below 10% means
            your headline or offer needs work.
          </li>
          <li>
            Always test one element at a time (headline, CTA button colour, price) so you know what caused
            any change in conversion rate.
          </li>
          <li>
            The biggest drop-off is usually between the sales page and the order form — simplifying the
            checkout process can recover significant revenue.
          </li>
          <li>
            Upsells typically convert at 20–30% of buyers. If yours is below 10%, revisit the offer
            relevance and price point.
          </li>
        </ul>
      </div>
    </div>
  );
}
