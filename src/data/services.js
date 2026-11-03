const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const categories = [
  { id: 'gst', title: 'GST Services', icon: '🧾',
    who: 'Businesses, traders, freelancers and service providers who need to register for GST or keep their returns on track.',
    docs: ['Business PAN and identity proofs', 'Sales and purchase invoices', 'Previous returns, if any', 'Bank statements for the period'],
    items: [
      ['GSTR-1 Filing', 'Outward supplies return preparation and filing support.'],
      ['GSTR-3B Filing', 'Monthly summary return support, with input tax credit review.'],
      ['GSTR-4', 'Return support for composition taxpayers.'],
      ['GSTR-9', 'Annual return preparation and reconciliation help.'],
      ['GSTR-9C', 'Reconciliation statement support for applicable taxpayers.'],
      ['GST Registration', 'Guided application and documentation for new registration.'],
      ['Other GST Compliance', 'Amendments, notices and other GST-related support.'],
    ] },
  { id: 'income-tax', title: 'Income Tax Returns', icon: '📑',
    who: 'Individuals, HUFs, firms and companies who want their income tax return prepared correctly. Form applicability depends on your income sources and current rules — we help you choose the right one.',
    docs: ['PAN and identity proofs', 'Income details (salary, business, other sources)', 'Investment and deduction proofs', 'Bank statements for the year'],
    items: [
      ['ITR-1', 'Generally suits resident individuals with salary/pension or simple income.'],
      ['ITR-2', 'Generally suits individuals and HUFs without business income.'],
      ['ITR-3', 'Generally suits individuals and HUFs with business or professional income.'],
      ['ITR-4', 'Generally suits eligible taxpayers under presumptive taxation.'],
      ['ITR-5', 'Generally suits firms, LLPs, AOPs and BOIs.'],
      ['ITR-6', 'Generally suits companies.'],
    ] },
  { id: 'financial-statements', title: 'Financial Statements', icon: '📊',
    who: 'Businesses and professionals who need statements for planning, reporting, or a loan application.',
    docs: ['Books of accounts or transaction records', 'Bank statements', 'Details of assets and liabilities', 'Previous statements, if any'],
    items: [
      ['Provisional Financial Statements', 'Provisional statements prepared from your records.'],
      ['Estimated Financial Statements', 'Estimated figures for planning and reporting needs.'],
      ['Projected Financial Statements', 'Forward-looking projections for business plans.'],
      ['Financial Statements for Loan Applications', 'Statements formatted for lender requirements.'],
    ] },
  { id: 'registration', title: 'Business Registration', icon: '🏢',
    who: 'New and growing businesses, startups and MSMEs that need registrations and compliance support.',
    docs: ['Identity and address proofs of owner(s)', 'Business PAN, if available', 'Business address proof', 'Other details as we advise after review'],
    items: [
      ['MSME (Udyam) Registration', 'Assistance with Udyam registration and paperwork.'],
      ['Documentation Assistance', 'Help organising and preparing required documents.'],
      ['Other Registrations and Compliance', 'Guidance on other registrations and ongoing compliance.'],
    ] },
  { id: 'accounting', title: 'Accounting & Bookkeeping', icon: '📒',
    who: 'Small businesses, traders and freelancers who want clean, up-to-date books and records.',
    docs: ['Sales and purchase records', 'Expense bills and vouchers', 'Bank statements', 'Existing books or software exports'],
    items: [
      ['Regular Bookkeeping', 'Day-to-day entries kept accurate and up to date.'],
      ['Record Maintenance', 'Organised, accessible financial records.'],
      ['Accounting Assistance', 'Support with ledgers, reconciliations and reports.'],
      ['Financial Documentation', 'Clean documentation ready for filings and reviews.'],
    ] },
];

export const services = categories.flatMap((c) =>
  c.items.map(([title, description]) => ({
    slug: slugify(title), category: c.id, categoryTitle: c.title, title, description, icon: c.icon,
    who: c.who, documents: c.docs,
    whatsappMessage: `Hello TaxwithAbdul, I am interested in your ${title} services. Please share more details.`,
  }))
);
export const getService = (slug) => services.find((s) => s.slug === slug);
export const steps = [
  ['Contact Us', 'Reach out by form, call or WhatsApp.'],
  ['Requirement Review', 'We understand your needs and documents.'],
  ['Professional Assistance', 'We prepare and handle your work.'],
  ['Completion & Updates', 'You get status updates through to completion.'],
];
