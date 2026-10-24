export interface FaqItem {
  question: string;
  answer: string;
  category: "Implementation" | "Features" | "Shop-Floor Sync" | "Security";
}

export const HOME_FAQS: FaqItem[] = [
  {
    category: "Features",
    question: "Why can't we just keep using Excel and WhatsApp for quotation and customer updates?",
    answer:
      "Excel breaks the moment raw material prices shift, an estimator leaves, or multiple team members work on revisions simultaneously. Shops lose 3% to 7% of gross margin simply because metal rate increases weren't reflected in pending quotes, or operators machined Rev B instead of Rev C drawings. KanchanFlow brings strict version control and automated margin guardrails.",
  },
  {
    category: "Shop-Floor Sync",
    question: "How does the shop-floor pipeline link with real machine capacity?",
    answer:
      "KanchanFlow links your estimation cycle times directly to each machine group's calendar. When a customer RFQ requires 80 hours on a 5-axis machining centre, the system shows actual available capacity before your sales engineer quotes a delivery date—preventing overpromising and expensive overtime rush penalties.",
  },
  {
    category: "Features",
    question: "How does the WhatsApp integration work for dispatch and approvals?",
    answer:
      "KanchanFlow connects to the official WhatsApp Business API. It sends watermarked PDF previews when an engineering drawing needs customer sign-off. Once parts are loaded on a truck, it automatically triggers a message with the vehicle number, driver contact, and LR docket photo, cutting down daily 'Where is my order?' phone calls by up to 78%.",
  },
  {
    category: "Implementation",
    question: "We run a 2-shift plant in Bhosari/Peenya. How fast can our floor supervisors adopt this?",
    answer:
      "KanchanFlow was built specifically for Indian and global manufacturing ecosystems. The shop-floor mobile interface uses large touch-friendly buttons, high-contrast indicators, and local vernacular support. Supervisors typically learn the barcode scanning flow in under 45 minutes.",
  },
  {
    category: "Security",
    question: "Can our sales engineers see each other's margin calculations?",
    answer:
      "You have complete control through role-based permissions. Plant owners and General Managers can view the true raw margin per machine hour, while sales executives only see approved discount limits and final quoted selling prices.",
  },
  {
    category: "Implementation",
    question: "Does KanchanFlow replace our ERP or work alongside it?",
    answer:
      "KanchanFlow is engineered as the high-velocity 'front-of-house' manufacturing CRM and shop-floor pipeline. It replaces brittle spreadsheets and unorganized WhatsApp groups, while pushing approved orders, material purchase requests, and dispatch invoices into accounting backends like Tally Prime or legacy ERPs.",
  },
];
