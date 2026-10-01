import { districts } from './manifesto';
import { Album, Award, NavItem, Stat, Text } from './types';

export const profile = {
  name: { mr: 'श्री. रोहित अनिल राऊत', en: 'Shri Rohit Anil Raut' } satisfies Text,
  shortName: { mr: 'रोहित राऊत', en: 'Rohit Raut' } satisfies Text,
  constituency: {
    mr: 'पदवीधर प्रकोष्ठ, महाराष्ट्र प्रदेश सरचिटणीस',
    en: 'Graduate Cell, Maharashtra Pradesh General Secretary',
  } satisfies Text,
  slogan: {
    mr: 'विद्यार्थी, युवक व पदवीधरांचे संघटन  |  महाराष्ट्रव्यापी संपर्क  |  संघटनात्मक अनुभव',
    en: 'Organising students, youth and graduates  |  A statewide network  |  Organisational experience',
  } satisfies Text,
  phone: '9049685333',
  phoneDisplay: '90496 85333',
  email: 'rohitraut0005@gmail.com',
  whatsapp: 'https://wa.me/919049685333',
  facebook: 'https://www.facebook.com/RohitAnilRaut',
  address: {
    mr: '५०५, सिल्व्हर ९, मोशी, पुणे',
    en: '505, Silver 9, Moshi, Pune',
  } satisfies Text,
  portrait: '/media/portrait.jpg',
  portraitSuit: '/media/portrait.jpg',
};

export const nav: NavItem[] = [
  { path: '/', label: { mr: 'मुख्य पान', en: 'Home' }, exact: true },
  { path: '/election', label: { mr: 'जाहीरनामा', en: 'Manifesto' } },
  { path: '/voters', label: { mr: 'मतदार यादी', en: 'Voter list' } },
  { path: '/about', label: { mr: 'व्यक्तिगत माहिती', en: 'About' } },
  { path: '/news', label: { mr: 'महत्त्वाच्या बातम्या', en: 'News' } },
  { path: '/gallery', label: { mr: 'गॅलरी', en: 'Gallery' } },
  { path: '/problems', label: { mr: 'समस्या नोंदणी', en: 'Register a problem' } },
  { path: '/contact', label: { mr: 'संपर्क', en: 'Contact' } },
];

export const stats: Stat[] = [
  { value: '१४', label: { mr: 'वर्षे संघटनात्मक कार्य (२०१२ पासून)', en: 'Years of organisational work (since 2012)' } },
  { value: '९', label: { mr: 'विद्यापीठांच्या सिनेट निवडणुका लढवून जिंकलेल्या आहेत', en: 'Universities’ senate elections contested and won' } },
  { value: '२००', label: { mr: 'सक्रिय कार्यकर्त्यांचे नेटवर्क', en: 'Active karyakartas in the network' } },
  { value: '४८,९४४', label: { mr: 'पदवीधर मतदारांचा संपर्क व डेटाबेस', en: 'Graduate voters in contact/database' } },
];

export const heroLead: Text = {
  mr: 'फलटण, जिल्हा सातारा येथून राष्ट्रीय स्वयंसेवक संघाचे बाल स्वयंसेवक ते अखिल भारतीय विद्यार्थी परिषदेचे नऊ वर्षे पूर्णवेळ कार्यकर्ता, आणि आता पदवीधर प्रकोष्ठात महाराष्ट्र प्रदेश सरचिटणीस पदाची जबाबदारी. विद्यार्थी, युवक व पदवीधर क्षेत्रातील संघटन अधिक मजबूत करण्याचा प्रवास.',
  en: 'From a Rashtriya Swayamsevak Sangh bal swayamsevak in Phaltan, Satara district, to nine years as a full-time Akhil Bharatiya Vidyarthi Parishad karyakarta, and now the responsibility of Maharashtra Pradesh General Secretary in the Graduate Cell. A journey of strengthening organisation among students, youth, and graduates.',
};

export const aboutLead: Text = {
  mr: 'जन्म ५ जानेवारी १९९५, मूळ कार्यक्षेत्र फलटण (जि. सातारा), जात हिंदू मराठा. वाणिज्य शाखेत पदवीधर — शिवाजी विद्यापीठ, कोल्हापूर; मुधोजी महाविद्यालय, फलटण. राष्ट्रीय स्वयंसेवक संघाचे बाल स्वयंसेवक व प्रथम वर्ग शिक्षित. सन २०१२ पासून अखिल भारतीय विद्यार्थी परिषदेच्या कार्यात सक्रिय — नऊ वर्षे पूर्णवेळ कार्यकर्ता म्हणून विविध जिल्हे व विभागांत प्रत्यक्ष संघटनात्मक कार्य.',
  en: 'Born 5 January 1995, native base Phaltan (Satara district), Hindu Maratha. A commerce graduate from Shivaji University, Kolhapur, studying at Mudhoji College, Phaltan. A Rashtriya Swayamsevak Sangh bal swayamsevak, first-class trained. Active in the Akhil Bharatiya Vidyarthi Parishad since 2012 — nine years as a full-time karyakarta doing hands-on organisational work across several districts and divisions.',
};

export const experience: Text[] = [
  { mr: '२०१२-२०१३ — अध्यक्ष, मुधोजी महाविद्यालय, फलटण', en: '2012–2013 — President, Mudhoji College, Phaltan' },
  { mr: '२०१४-२०१७ — शहरमंत्री, फलटण', en: '2014–2017 — City Secretary, Phaltan' },
  { mr: '२०१४-२०१५ — सचिव, मुधोजी महाविद्यालय विद्यार्थी परिषद (बिनविरोध निवड)', en: '2014–2015 — Secretary, Mudhoji College student council (elected unopposed)' },
  { mr: '२०१४-२०१५ — सचिव, शिवाजी विद्यापीठ, कोल्हापूर स्टुडंट कौन्सिल', en: '2014–2015 — Secretary, Shivaji University, Kolhapur Student Council' },
  { mr: '२०१७-२०१९ — सांगली महानगर संघटनमंत्री', en: '2017–2019 — Sangli Metro Organisation Secretary' },
  { mr: '२०१९-२०२० — अहिल्यानगर जिल्हा संघटनमंत्री', en: '2019–2020 — Ahilyanagar District Organisation Secretary' },
  { mr: '२०२०-२०२२ — पुणे विभाग संघटनमंत्री', en: '2020–2022 — Pune Division Organisation Secretary' },
  { mr: '२०२२-२०२३ — सोलापूर विभाग संघटनमंत्री', en: '2022–2023 — Solapur Division Organisation Secretary' },
  { mr: '२०२२-२०२५ — प्रदेश सहमंत्री, अखिल भारतीय विद्यार्थी परिषद', en: '2022–2025 — Pradesh Joint Secretary, Akhil Bharatiya Vidyarthi Parishad' },
  { mr: '२०२३-२०२६ — महाराष्ट्र प्रदेश संयोजक, विद्यापीठ विकास मंच (तीन वर्षे पूर्णवेळ कार्य)', en: '2023–2026 — Maharashtra Pradesh Convenor, Vidyapeeth Vikas Manch (three years full-time)' },
];

export const institutions: Text[] = [
  { mr: 'पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर', en: 'Punyashlok Ahilyadevi Holkar Solapur University, Solapur' },
  { mr: 'सावित्रीबाई फुले पुणे विद्यापीठ, पुणे', en: 'Savitribai Phule Pune University, Pune' },
  { mr: 'शिवाजी विद्यापीठ, कोल्हापूर', en: 'Shivaji University, Kolhapur' },
  { mr: 'कवियत्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ, जळगाव', en: 'Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon' },
  { mr: 'स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, नांदेड', en: 'Swami Ramanand Teerth Marathwada University, Nanded' },
  { mr: 'डॉ. बाबासाहेब आंबेडकर मराठवाडा विद्यापीठ, छत्रपती संभाजीनगर', en: 'Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar' },
  { mr: 'गोंडवाना विद्यापीठ, गडचिरोली', en: 'Gondwana University, Gadchiroli' },
  { mr: 'राष्ट्रसंत तुकडोजी महाराज नागपूर विद्यापीठ, नागपूर', en: 'Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur' },
  { mr: 'एस.एन.डी.टी. महिला विद्यापीठ', en: 'S.N.D.T. Women’s University' },
];

export const campus: Text[] = [
  { mr: '२०१३, फलटण — आयटीआय संदर्भातील आंदोलन; मागण्या मान्य.', en: '2013, Phaltan — an agitation over ITI issues; demands accepted.' },
  { mr: 'सांगली — शैक्षणिक भ्रष्टाचारमुक्त आंदोलन.', en: 'Sangli — an agitation against corruption in education.' },
  { mr: '२०१४ — शिवाजी विद्यापीठावर विद्यार्थी प्रश्नांसाठी धडक मोर्चाचे नेतृत्व.', en: '2014 — led a march on Shivaji University over student issues.' },
  { mr: '२०१७ — सांगली जिल्हाधिकारी कार्यालयावर धडक मोर्चा.', en: '2017 — a march on the Sangli Collector’s office.' },
  { mr: 'शिवाजी विद्यापीठातील परीक्षा निकाल घोटाळ्याविरोधात आंदोलन.', en: 'An agitation against an examination-result scandal at Shivaji University.' },
  { mr: 'पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठात विद्यार्थी मागण्यांसाठी धडक मोर्चा.', en: 'A march at Punyashlok Ahilyadevi Holkar Solapur University for student demands.' },
  { mr: 'परीक्षा घोटाळ्याच्या प्रश्नावर तत्कालीन उच्च व तंत्रशिक्षण मंत्री उदय सामंत यांच्यासमोर आंदोलन.', en: 'A protest before then Higher and Technical Education Minister Uday Samant over the exam-scam issue.' },
  { mr: 'सावित्रीबाई फुले पुणे विद्यापीठावर विद्यार्थी प्रश्नांसाठी धडक मोर्चा.', en: 'A march at Savitribai Phule Pune University for student issues.' },
];

export const socialWork: Text[] = [
  { mr: 'निगडी येथे एमपीएससी/यूपीएससी मार्गदर्शन केंद्र सुरू करण्यासाठी पुढाकार.', en: 'Led the effort to start an MPSC/UPSC guidance centre at Nigdi.' },
  { mr: 'गुणवंत विद्यार्थी कार्यक्रम व विद्यार्थी दत्तक योजना.', en: 'A meritorious-student programme and a student-adoption scheme.' },
  { mr: 'युवक व पदवीधरांसाठी रोजगार मेळावे; शिक्षक भरतीच्या प्रश्नावर आंदोलन.', en: 'Employment fairs for youth and graduates; an agitation on the teacher-recruitment issue.' },
  { mr: '२०१४ पासून अखिल भारतीय ग्राहक पंचायतच्या माध्यमातून ग्राहक हक्क जनजागृती, तक्रार निवारणासाठी मार्गदर्शन व पाठपुरावा.', en: 'Since 2014, consumer-rights awareness, guidance, and follow-up on grievances through the Akhil Bharatiya Grahak Panchayat.' },
  { mr: 'कोविड काळात पूर्णवेळ कोविड सेंटरची जबाबदारी सांभाळली.', en: 'Handled full-time duty at a Covid centre during the pandemic.' },
  { mr: 'रक्तदान शिबिरे व आदिवासी जनजागृती यात्रा.', en: 'Blood-donation camps and a tribal-awareness yatra.' },
  { mr: 'विद्यार्थी, युवक, पदवीधर व शैक्षणिक क्षेत्रातील प्रश्नांवर सातत्याने प्रत्यक्ष संपर्क व संघटनात्मक कार्य.', en: 'Sustained direct contact and organisational work on issues facing students, youth, graduates, and education.' },
];

export const universityWork: Text[] = [
  {
    mr: 'लोकसभा निवडणूक २०२४ — सोलापूर (श्री. राम सातपुते), माढा (श्री. रणजितसिंह नाईक निंबाळकर) व सातारा (श्रीमंत छत्रपती उदयनराजे भोसले) या तिन्ही मतदारसंघांत वराही संस्थेच्या माध्यमातून प्रत्यक्ष प्रवास व निवडणूक नियोजन — बूथ रचना, लोकसंपर्क योजना, सभा आयोजन, प्रवासी कार्यकर्त्यांचे नियोजन, प्रचार व संघटनात्मक समन्वय.',
    en: '2024 Lok Sabha election — Solapur (Ram Satpute), Madha (Ranjitsinh Naik-Nimbalkar), and Satara (Shrimant Chhatrapati Udayanraje Bhosale): on-ground travel and election planning through the Varahi organisation — booth setup, voter contact, meetings, travelling-karyakarta planning, and campaign coordination.',
  },
  {
    mr: 'विधानसभा निवडणूक २०२४ — उरण (श्री. महेश बालदी): बूथ रचना व बूथस्तरीय संघटनात्मक नियोजन. कुलाबा (श्री. राहुल नार्वेकर): प्रचार योजना व अंमलबजावणी, मतदारांचा कल तपासणे आणि निवडणूक नियोजन.',
    en: '2024 Assembly election — Uran (Mahesh Baldi): booth setup and booth-level organisation. Kulaba (Rahul Narvekar): campaign planning and execution, gauging voter sentiment, and election planning.',
  },
  {
    mr: 'पुणे पदवीधर मतदारसंघ — उमेदवार मा. संग्राम देशमुख, कार्यक्षेत्र सोलापूर ११ तालुके व पुणे ग्रामीण १२ तालुके: पदवीधर मतदार नोंदणी व तालुकानिहाय नियोजन, मतदारांचे वैयक्तिक चिन्हांकन, पदवीधर मेळावे व मतदान केंद्रनिहाय व्यवस्थापन, आणि १००% मतदानाच्या उद्दिष्टासाठी विशेष जबाबदारी. पुणे शिक्षक मतदारसंघाच्या निवडणूक प्रक्रियेचाही अनुभव.',
    en: 'Pune Graduate Constituency — candidate Sangram Deshmukh, covering 11 talukas of Solapur and 12 of Pune Rural: graduate voter registration and taluka-wise planning, individual voter tagging, graduate meets and polling-booth management, and special responsibility for the 100% turnout goal. Also experience of the Pune Teachers’ Constituency election process.',
  },
];

export const awards: Award[] = [
  { year: '२०१५', title: { mr: 'शिवाजी विद्यापीठाचा शिलेदार पुरस्कार', en: 'Shiledar Award, Shivaji University' } },
  { year: '२०१६', title: { mr: 'शिवाजी विद्यापीठ, कोल्हापूर विभागीय राष्ट्रीय सेवा योजना उत्कृष्ट स्वयंसेवक पुरस्कार', en: 'Divisional NSS Best Volunteer Award, Shivaji University, Kolhapur' } },
];

const galleryFiles = [
  'WhatsApp Image 2026-09-30 at 11.13.32 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.33 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.33 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.33 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.34 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.34 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.34 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.35 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.35 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.36 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.36 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.36 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.37 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.37 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.37 PM (3).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.37 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.38 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.38 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.38 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.39 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.39 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.39 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.40 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.40 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.40 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.41 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.41 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.41 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.42 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.42 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.42 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.43 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.43 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.43 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.44 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.44 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.44 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.45 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.45 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.45 PM (3).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.45 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.46 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.46 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.46 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.47 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.47 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.47 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.48 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.48 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.48 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.49 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.49 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.49 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.50 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.50 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.50 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.51 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.51 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.51 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.52 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.52 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.52 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.53 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.53 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.53 PM (3).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.53 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.54 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.54 PM (2).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.54 PM.jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.55 PM (1).jpeg',
  'WhatsApp Image 2026-09-30 at 11.13.55 PM.jpeg',
];

const galleryImages = galleryFiles.map((file) => encodeURI(`/media/${file}`));

export const albums: Album[] = [
  {
    id: 'programmes',
    title: { mr: 'कार्यक्रम व दौरे', en: 'Programmes & visits' },
    summary: { mr: 'संघटनात्मक कार्यक्रम, सभा व दौऱ्यांची छायाचित्रे.', en: 'Photos from organisational programmes, meetings, and visits.' },
    cover: galleryImages[0],
    images: galleryImages,
  },
];

export const galleryNote: Text = {
  mr: 'सभा, आंदोलन आणि संघटनात्मक कार्यक्रमांची छायाचित्रे येथे दिली जातील. सध्या या विभागात छायाचित्रे जोडलेली नाहीत.',
  en: 'Photos from meetings, agitations, and organisational programmes will appear here. No photos have been added to this section yet.',
};

export const videosNote: Text = {
  mr: 'सभा, आंदोलन आणि संघटनात्मक कार्यक्रमांचे व्हिडिओ येथे दिले जातील. सध्या या विभागात व्हिडिओ जोडलेले नाहीत.',
  en: 'Videos of meetings, agitations, and organisational programmes will appear here. No videos have been added to this section yet.',
};

export const pageTitles: Record<string, Text> = {
  home: { mr: 'मुख्य पान', en: 'Home' },
  election: { mr: 'संघटनात्मक कार्य', en: 'Organisational work' },
  voters: { mr: 'मतदार यादी', en: 'Voter list' },
  about: { mr: 'व्यक्तिगत माहिती', en: 'About' },
  news: { mr: 'महत्त्वाच्या बातम्या', en: 'News' },
  gallery: { mr: 'गॅलरी', en: 'Gallery' },
  problems: { mr: 'समस्या नोंदणी', en: 'Register a problem' },
  contact: { mr: 'संपर्क', en: 'Contact' },
};

export const voterDistricts: { id: string; name: Text; color: string; icon: string }[] = [
  { id: 'pune', name: { mr: 'पुणे', en: 'Pune' }, color: '#0e2b1f', icon: '/icons/pune.svg?v=3' },
  { id: 'kolhapur', name: { mr: 'कोल्हापूर', en: 'Kolhapur' }, color: '#0a6b45', icon: '/icons/kolhapur.svg?v=3' },
  { id: 'sangli', name: { mr: 'सांगली', en: 'Sangli' }, color: '#c2410c', icon: '/icons/sangli.svg?v=3' },
  { id: 'satara', name: { mr: 'सातारा', en: 'Satara' }, color: '#b8860b', icon: '/icons/satara.svg?v=3' },
  { id: 'solapur', name: { mr: 'सोलापूर', en: 'Solapur' }, color: '#f97316', icon: '/icons/solapur.svg?v=3' },
];

export interface VoterRecord {
  name: string;
  district: string;
  part: string;
  serial: string;
}

/** Public graduate-voter-roll rows. Empty until the constituency list is added. */
export const voterRoll: VoterRecord[] = [];

export { districts };
