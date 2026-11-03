export const services = [
  { id: 'gst', title: 'GST Services', icon: '🧾' },
  { id: 'income-tax', title: 'Income Tax Returns', icon: '📑' },
  { id: 'financial-statements', title: 'Financial Statements', icon: '📊' },
  { id: 'registration', title: 'Business Registration', icon: '🏢' },
  { id: 'accounting', title: 'Accounting & Bookkeeping', icon: '📒' },
].map((s) => ({ ...s, whatsappMessage: `Hello TaxwithAbdul, I am interested in your ${s.title}. Please share more details.` }));

export const steps = [
  ['Contact Us', 'Message us on WhatsApp or call.'],
  ['Requirement Review', 'We understand your needs and documents.'],
  ['Professional Assistance', 'We prepare and handle your work.'],
  ['Completion & Updates', 'You get status updates through to completion.'],
];
