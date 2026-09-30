import { DistrictNote, ManifestoPoint, Text } from './types';

export const manifestoIntro: Text = {
  mr: 'सन २०१२ पासून सलग चौदा वर्षे विद्यार्थी, युवक व पदवीधर क्षेत्रात संघटनात्मक कार्य. महाविद्यालयीन स्तरापासून प्रदेश स्तरापर्यंतचा अनुभव, नऊ वर्षांचे पूर्णवेळ विद्यार्थी परिषद कार्य, नऊ विद्यापीठांच्या सिनेट निवडणुकांचा अनुभव, पदवीधर मतदार नोंदणी व निवडणूक व्यवस्थापनाचा प्रत्यक्ष अनुभव आणि महाराष्ट्रव्यापी शैक्षणिक संपर्क यांचा उपयोग भारतीय जनता पार्टीचे पदवीधर व युवा क्षेत्रातील संघटन अधिक मजबूत करण्यासाठी करण्याची इच्छा.',
  en: 'Fourteen consecutive years of organisational work among students, youth, and graduates since 2012. Experience from the college level to the state level, nine years of full-time ABVP work, senate-election experience across nine universities, hands-on experience of graduate voter registration and election management, and a statewide educational network — all put to use in strengthening the BJP’s organisation among graduates and youth.',
};

export const manifestoPoints: ManifestoPoint[] = [
  {
    id: 'rss-abvp',
    title: { mr: 'राष्ट्रीय स्वयंसेवक संघ व विद्यार्थी परिषद', en: 'RSS and Vidyarthi Parishad' },
    lead: {
      mr: 'बाल स्वयंसेवक ते नऊ वर्षे पूर्णवेळ कार्यकर्ता.',
      en: 'From a bal swayamsevak to nine years as a full-time karyakarta.',
    },
    items: [
      { mr: 'राष्ट्रीय स्वयंसेवक संघाचे बाल स्वयंसेवक; प्रथम वर्ग शिक्षित.', en: 'A Rashtriya Swayamsevak Sangh bal swayamsevak; first-class trained.' },
      { mr: 'सन २०१२ पासून अखिल भारतीय विद्यार्थी परिषदेच्या कार्यात सक्रिय — नऊ वर्षे पूर्णवेळ कार्यकर्ता म्हणून विविध जिल्हे व विभागांत प्रत्यक्ष संघटनात्मक कार्य.', en: 'Active in the Akhil Bharatiya Vidyarthi Parishad since 2012 — nine years as a full-time karyakarta with hands-on organisational work across several districts and divisions.' },
      { mr: 'वाणिज्य शाखेत पदवीधर — शिवाजी विद्यापीठ, कोल्हापूर; मुधोजी महाविद्यालय, फलटण.', en: 'A commerce graduate from Shivaji University, Kolhapur, studying at Mudhoji College, Phaltan.' },
    ],
  },
  {
    id: 'abvp-roles',
    title: { mr: 'संघटनात्मक जबाबदाऱ्या (२०१२-२०२६)', en: 'Organisational roles (2012–2026)' },
    lead: {
      mr: 'महाविद्यालय स्तरापासून प्रदेश स्तरापर्यंत टप्प्याटप्प्याने वाढलेली जबाबदारी.',
      en: 'Responsibility that grew step by step, from the college level to the state level.',
    },
    items: [
      { mr: '२०१२-२०१३ — अध्यक्ष, मुधोजी महाविद्यालय, फलटण', en: '2012–2013 — President, Mudhoji College, Phaltan' },
      { mr: '२०१४-२०१७ — शहरमंत्री, फलटण', en: '2014–2017 — City Secretary, Phaltan' },
      { mr: '२०१७-२०१९ — सांगली महानगर संघटनमंत्री', en: '2017–2019 — Sangli Metro Organisation Secretary' },
      { mr: '२०१९-२०२० — अहिल्यानगर जिल्हा संघटनमंत्री', en: '2019–2020 — Ahilyanagar District Organisation Secretary' },
      { mr: '२०२०-२०२२ — पुणे विभाग संघटनमंत्री', en: '2020–2022 — Pune Division Organisation Secretary' },
      { mr: '२०२२-२०२३ — सोलापूर विभाग संघटनमंत्री', en: '2022–2023 — Solapur Division Organisation Secretary' },
      { mr: '२०२२-२०२५ — प्रदेश सहमंत्री, अखिल भारतीय विद्यार्थी परिषद', en: '2022–2025 — Pradesh Joint Secretary, Akhil Bharatiya Vidyarthi Parishad' },
      { mr: '२०२३-२०२६ — महाराष्ट्र प्रदेश संयोजक, विद्यापीठ विकास मंच (तीन वर्षे पूर्णवेळ कार्य)', en: '2023–2026 — Maharashtra Pradesh Convenor, Vidyapeeth Vikas Manch (three years full-time)' },
    ],
  },
  {
    id: 'senate',
    title: { mr: 'सिनेट निवडणूक अनुभव — नऊ विद्यापीठे', en: 'Senate election experience — nine universities' },
    lead: {
      mr: 'महाराष्ट्रातील ११ पैकी ९ शासकीय विद्यापीठांच्या सिनेट निवडणुकांचे काम सांभाळण्याचा अनुभव.',
      en: 'Experience of handling senate elections in 9 of Maharashtra’s 11 state universities.',
    },
    items: [
      { mr: 'पुण्यश्लोक अहिल्यादेवी होळकर सोलापूर विद्यापीठ, सोलापूर', en: 'Punyashlok Ahilyadevi Holkar Solapur University, Solapur' },
      { mr: 'सावित्रीबाई फुले पुणे विद्यापीठ, पुणे', en: 'Savitribai Phule Pune University, Pune' },
      { mr: 'शिवाजी विद्यापीठ, कोल्हापूर', en: 'Shivaji University, Kolhapur' },
      { mr: 'कवियत्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ, जळगाव', en: 'Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon' },
      { mr: 'स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, नांदेड', en: 'Swami Ramanand Teerth Marathwada University, Nanded' },
      { mr: 'डॉ. बाबासाहेब आंबेडकर मराठवाडा विद्यापीठ, छत्रपती संभाजीनगर', en: 'Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar' },
      { mr: 'गोंडवाना विद्यापीठ, गडचिरोली', en: 'Gondwana University, Gadchiroli' },
      { mr: 'राष्ट्रसंत तुकडोजी महाराज नागपूर विद्यापीठ, नागपूर', en: 'Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur' },
      { mr: 'एस.एन.डी.टी. महिला विद्यापीठ', en: 'S.N.D.T. Women’s University' },
      { mr: 'पदवीधर मतदार नोंदणी, गावोगावी कार्यकर्ता जोडणी, पदवीधर मेळावे व मतदार संपर्क.', en: 'Graduate voter registration, village-level karyakarta linkage, graduate meets, and voter contact.' },
      { mr: 'मतदान केंद्रनिहाय नियोजन, मतदारांचे वैयक्तिक चिन्हांकन, मतदानासाठी मतदारांना केंद्रावर आणण्याची योजना व पसंतीक्रम मतदानाचे नियोजन.', en: 'Booth-wise planning, individual voter tagging, plans to bring voters to the booth, and preference-order voting planning.' },
      { mr: 'पदवीधर व उच्च शिक्षणाशी संबंधित प्रश्नांवर आंदोलने व संघटनात्मक पाठपुरावा.', en: 'Agitations and organisational follow-up on issues concerning graduates and higher education.' },
    ],
  },
  {
    id: 'elections-2024',
    title: { mr: 'निवडणूक कार्य २०२४ — लोकसभा, विधानसभा व पदवीधर मतदारसंघ', en: 'Election work 2024 — Lok Sabha, Assembly, and Graduate Constituency' },
    items: [
      {
        mr: 'लोकसभा निवडणूक — सोलापूर (श्री. राम सातपुते), माढा (श्री. रणजितसिंह नाईक निंबाळकर) व सातारा (श्रीमंत छत्रपती उदयनराजे भोसले): वराही संस्थेच्या माध्यमातून तिन्ही मतदारसंघांत प्रत्यक्ष प्रवास व उमेदवार विजयासाठी निवडणूक नियोजन — बूथ रचना, लोकसंपर्क योजना, सभा आयोजन, प्रवासी कार्यकर्त्यांचे नियोजन, प्रचार व संघटनात्मक समन्वय.',
        en: 'Lok Sabha election — Solapur (Ram Satpute), Madha (Ranjitsinh Naik-Nimbalkar), and Satara (Shrimant Chhatrapati Udayanraje Bhosale): on-ground travel across all three constituencies through the Varahi organisation and election planning for the candidates’ victory — booth setup, voter-contact planning, meetings, travelling-karyakarta planning, and campaign coordination.',
      },
      {
        mr: 'विधानसभा निवडणूक — उरण (श्री. महेश बालदी): बूथ रचना व बूथस्तरीय संघटनात्मक नियोजन. कुलाबा (श्री. राहुल नार्वेकर): प्रचार योजना व अंमलबजावणी, मतदारांचा कल तपासणे आणि निवडणूक नियोजन.',
        en: 'Assembly election — Uran (Mahesh Baldi): booth setup and booth-level organisational planning. Kulaba (Rahul Narvekar): campaign planning and execution, gauging voter sentiment, and election planning.',
      },
      {
        mr: 'पुणे पदवीधर मतदारसंघ — उमेदवार मा. संग्राम देशमुख, कार्यक्षेत्र सोलापूर ११ तालुके व पुणे ग्रामीण १२ तालुके: पदवीधर मतदार नोंदणी व तालुकानिहाय नियोजन, मतदारांचे वैयक्तिक चिन्हांकन, पदवीधर मेळावे व मतदान केंद्रनिहाय व्यवस्थापन, आणि १००% मतदानाच्या उद्दिष्टासाठी विशेष जबाबदारी.',
        en: 'Pune Graduate Constituency — candidate Sangram Deshmukh, covering 11 talukas of Solapur and 12 of Pune Rural: graduate voter registration and taluka-wise planning, individual voter tagging, graduate meets and polling-booth management, and special responsibility for the 100% turnout goal.',
      },
    ],
  },
  {
    id: 'social-work',
    title: { mr: 'सामाजिक व लोकहिताचे कार्य', en: 'Social work' },
    items: [
      { mr: 'निगडी येथे एमपीएससी/यूपीएससी मार्गदर्शन केंद्र सुरू करण्यासाठी पुढाकार.', en: 'Led the effort to start an MPSC/UPSC guidance centre at Nigdi.' },
      { mr: 'गुणवंत विद्यार्थी कार्यक्रम व विद्यार्थी दत्तक योजना.', en: 'A meritorious-student programme and a student-adoption scheme.' },
      { mr: 'युवक व पदवीधरांसाठी रोजगार मेळावे; शिक्षक भरतीच्या प्रश्नावर आंदोलन.', en: 'Employment fairs for youth and graduates; an agitation on the teacher-recruitment issue.' },
      { mr: '२०१४ पासून अखिल भारतीय ग्राहक पंचायतच्या माध्यमातून ग्राहक हक्क जनजागृती, तक्रार निवारणासाठी मार्गदर्शन व पाठपुरावा.', en: 'Since 2014, consumer-rights awareness, guidance, and follow-up on grievances through the Akhil Bharatiya Grahak Panchayat.' },
      { mr: 'कोविड काळात पूर्णवेळ कोविड सेंटरची जबाबदारी सांभाळली.', en: 'Handled full-time duty at a Covid centre during the pandemic.' },
      { mr: 'रक्तदान शिबिरे व आदिवासी जनजागृती यात्रा.', en: 'Blood-donation camps and a tribal-awareness yatra.' },
    ],
  },
  {
    id: 'network',
    title: { mr: 'महाराष्ट्रव्यापी संघटनात्मक नेटवर्क', en: 'Statewide organisational network' },
    items: [
      { mr: 'महाराष्ट्रातील सर्व जिल्ह्यांमध्ये थेट संपर्क.', en: 'Direct contact across every district of Maharashtra.' },
      { mr: 'सुमारे २०० सक्रिय कार्यकर्त्यांचे नेटवर्क.', en: 'A network of about 200 active karyakartas.' },
      { mr: 'सुमारे १५,००० पदवीधर मतदारांचा संपर्क व डेटाबेस.', en: 'Contact and a database of about 15,000 graduate voters.' },
      { mr: 'मुंबई वगळता महाराष्ट्रातील विद्यापीठांमध्ये थेट संपर्क.', en: 'Direct contact with universities across Maharashtra except Mumbai.' },
      { mr: 'पश्चिम महाराष्ट्रातील विविध शैक्षणिक संस्थांमध्ये प्रत्यक्ष प्रवासातून निर्माण झालेला संपर्क.', en: 'Contacts built through personal travel to educational institutions across western Maharashtra.' },
    ],
  },
];

export const districts: DistrictNote[] = [
  {
    id: 'solapur',
    name: { mr: 'सोलापूर — लोकसभा', en: 'Solapur — Lok Sabha' },
    note: {
      mr: 'उमेदवार श्री. राम सातपुते यांच्यासाठी वराही संस्थेच्या माध्यमातून बूथ रचना, लोकसंपर्क योजना व निवडणूक नियोजन.',
      en: 'Booth setup, voter-contact planning, and election planning for candidate Ram Satpute through the Varahi organisation.',
    },
  },
  {
    id: 'madha',
    name: { mr: 'माढा — लोकसभा', en: 'Madha — Lok Sabha' },
    note: {
      mr: 'उमेदवार श्री. रणजितसिंह नाईक निंबाळकर यांच्यासाठी प्रचार व संघटनात्मक समन्वय.',
      en: 'Campaign work and organisational coordination for candidate Ranjitsinh Naik-Nimbalkar.',
    },
  },
  {
    id: 'satara',
    name: { mr: 'सातारा — लोकसभा', en: 'Satara — Lok Sabha' },
    note: {
      mr: 'उमेदवार श्रीमंत छत्रपती उदयनराजे भोसले यांच्यासाठी सभा आयोजन व प्रवासी कार्यकर्त्यांचे नियोजन.',
      en: 'Meeting organisation and travelling-karyakarta planning for candidate Shrimant Chhatrapati Udayanraje Bhosale.',
    },
  },
  {
    id: 'uran-kulaba',
    name: { mr: 'उरण व कुलाबा — विधानसभा', en: 'Uran & Kulaba — Assembly' },
    note: {
      mr: 'उरणमध्ये श्री. महेश बालदी यांच्यासाठी बूथस्तरीय संघटनात्मक नियोजन; कुलाब्यात श्री. राहुल नार्वेकर यांच्यासाठी प्रचार योजना व अंमलबजावणी.',
      en: 'Booth-level organisational planning for Mahesh Baldi in Uran; campaign planning and execution for Rahul Narvekar in Kulaba.',
    },
  },
  {
    id: 'pune-graduate',
    name: { mr: 'पुणे पदवीधर मतदारसंघ', en: 'Pune Graduate Constituency' },
    note: {
      mr: 'उमेदवार मा. संग्राम देशमुख यांच्यासाठी सोलापूर ११ तालुके व पुणे ग्रामीण १२ तालुक्यांत पदवीधर मतदार नोंदणी, मेळावे व मतदान केंद्रनिहाय व्यवस्थापन.',
      en: 'Graduate voter registration, meets, and polling-booth management across 11 talukas of Solapur and 12 of Pune Rural for candidate Sangram Deshmukh.',
    },
  },
];
