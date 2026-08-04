'use strict';

// ═══════════════════════════════════════════════════════════
// 1. ELEMENTS DATABASE
// ═══════════════════════════════════════════════════════════
const ELEMENTS = {
  H:{mass:1.008,name:'هيدروجين',color:'#60B4FF'},
  He:{mass:4.003,name:'هيليوم',color:'#B47FFF'},
  Li:{mass:6.941,name:'ليثيوم',color:'#FF9A3C'},
  Be:{mass:9.012,name:'بيريليوم',color:'#7DF9C8'},
  B:{mass:10.811,name:'بورون',color:'#FF9A3C'},
  C:{mass:12.011,name:'كربون',color:'#8A9BB5'},
  N:{mass:14.007,name:'نيتروجين',color:'#60B4FF'},
  O:{mass:15.999,name:'أكسجين',color:'#FF5C7A'},
  F:{mass:18.998,name:'فلور',color:'#7DF9C8'},
  Ne:{mass:20.180,name:'نيون',color:'#B47FFF'},
  Na:{mass:22.990,name:'صوديوم',color:'#FF9A3C'},
  Mg:{mass:24.305,name:'مغنيسيوم',color:'#7DF9C8'},
  Al:{mass:26.982,name:'ألومنيوم',color:'#8A9BB5'},
  Si:{mass:28.086,name:'سيليكون',color:'#B47FFF'},
  P:{mass:30.974,name:'فسفور',color:'#FF9A3C'},
  S:{mass:32.065,name:'كبريت',color:'#FFDD57'},
  Cl:{mass:35.453,name:'كلور',color:'#7DF9C8'},
  Ar:{mass:39.948,name:'أرغون',color:'#B47FFF'},
  K:{mass:39.098,name:'بوتاسيوم',color:'#FF9A3C'},
  Ca:{mass:40.078,name:'كالسيوم',color:'#7DF9C8'},
  Ti:{mass:47.867,name:'تيتانيوم',color:'#8A9BB5'},
  Cr:{mass:51.996,name:'كروم',color:'#7DF9C8'},
  Mn:{mass:54.938,name:'منغنيز',color:'#FF9A3C'},
  Fe:{mass:55.845,name:'حديد',color:'#FF9A3C'},
  Co:{mass:58.933,name:'كوبالت',color:'#60B4FF'},
  Ni:{mass:58.693,name:'نيكل',color:'#7DF9C8'},
  Cu:{mass:63.546,name:'نحاس',color:'#FF9A3C'},
  Zn:{mass:65.38,name:'زنك',color:'#8A9BB5'},
  Br:{mass:79.904,name:'بروم',color:'#FF9A3C'},
  Kr:{mass:83.798,name:'كريبتون',color:'#B47FFF'},
  Rb:{mass:85.468,name:'روبيديوم',color:'#FF9A3C'},
  Sr:{mass:87.620,name:'سترونشيوم',color:'#7DF9C8'},
  Ag:{mass:107.87,name:'فضة',color:'#8A9BB5'},
  Cd:{mass:112.41,name:'كادميوم',color:'#7DF9C8'},
  Sn:{mass:118.71,name:'قصدير',color:'#8A9BB5'},
  I:{mass:126.90,name:'يود',color:'#B47FFF'},
  Ba:{mass:137.33,name:'باريوم',color:'#7DF9C8'},
  Pb:{mass:207.20,name:'رصاص',color:'#8A9BB5'},
  Au:{mass:196.97,name:'ذهب',color:'#FFDD57'},
  Hg:{mass:200.59,name:'زئبق',color:'#8A9BB5'},
  Pt:{mass:195.08,name:'بلاتين',color:'#8A9BB5'},
  U:{mass:238.03,name:'يورانيوم',color:'#7DF9C8'},
  W:{mass:183.84,name:'تنغستن',color:'#8A9BB5'},
};

const SYM_LIST = Object.keys(ELEMENTS).sort((a,b)=>b.length-a.length);

// ═══════════════════════════════════════════════════════════
// 1b. PERIODIC TABLE DATA (118 elements — name, Z, mass#, group, period, e-config, valence e⁻)
// ═══════════════════════════════════════════════════════════
const PERIODIC_DATA = {
  H:{name:"هيدروجين",z:1,mass:1,group:1,period:1,econfig:"1s¹",valence:1},
  He:{name:"هيليوم",z:2,mass:4,group:18,period:1,econfig:"1s²",valence:2},
  Li:{name:"ليثيوم",z:3,mass:7,group:1,period:2,econfig:"[He] 2s¹",valence:1},
  Be:{name:"بيريليوم",z:4,mass:9,group:2,period:2,econfig:"[He] 2s²",valence:2},
  B:{name:"بورون",z:5,mass:11,group:13,period:2,econfig:"[He] 2s² 2p¹",valence:3},
  C:{name:"كربون",z:6,mass:12,group:14,period:2,econfig:"[He] 2s² 2p²",valence:4},
  N:{name:"نيتروجين",z:7,mass:14,group:15,period:2,econfig:"[He] 2s² 2p³",valence:5},
  O:{name:"أكسجين",z:8,mass:16,group:16,period:2,econfig:"[He] 2s² 2p⁴",valence:6},
  F:{name:"فلور",z:9,mass:19,group:17,period:2,econfig:"[He] 2s² 2p⁵",valence:7},
  Ne:{name:"نيون",z:10,mass:20,group:18,period:2,econfig:"[He] 2s² 2p⁶",valence:8},
  Na:{name:"صوديوم",z:11,mass:23,group:1,period:3,econfig:"[Ne] 3s¹",valence:1},
  Mg:{name:"مغنيسيوم",z:12,mass:24,group:2,period:3,econfig:"[Ne] 3s²",valence:2},
  Al:{name:"ألومنيوم",z:13,mass:27,group:13,period:3,econfig:"[Ne] 3s² 3p¹",valence:3},
  Si:{name:"سيليكون",z:14,mass:28,group:14,period:3,econfig:"[Ne] 3s² 3p²",valence:4},
  P:{name:"فسفور",z:15,mass:31,group:15,period:3,econfig:"[Ne] 3s² 3p³",valence:5},
  S:{name:"كبريت",z:16,mass:32,group:16,period:3,econfig:"[Ne] 3s² 3p⁴",valence:6},
  Cl:{name:"كلور",z:17,mass:35,group:17,period:3,econfig:"[Ne] 3s² 3p⁵",valence:7},
  Ar:{name:"أرغون",z:18,mass:40,group:18,period:3,econfig:"[Ne] 3s² 3p⁶",valence:8},
  K:{name:"بوتاسيوم",z:19,mass:39,group:1,period:4,econfig:"[Ar] 4s¹",valence:1},
  Ca:{name:"كالسيوم",z:20,mass:40,group:2,period:4,econfig:"[Ar] 4s²",valence:2},
  Sc:{name:"سكانديوم",z:21,mass:45,group:3,period:4,econfig:"[Ar] 3d¹ 4s²",valence:2},
  Ti:{name:"تيتانيوم",z:22,mass:48,group:4,period:4,econfig:"[Ar] 3d² 4s²",valence:2},
  V:{name:"فاناديوم",z:23,mass:51,group:5,period:4,econfig:"[Ar] 3d³ 4s²",valence:2},
  Cr:{name:"كروم",z:24,mass:52,group:6,period:4,econfig:"[Ar] 3d⁵ 4s¹",valence:1},
  Mn:{name:"منغنيز",z:25,mass:55,group:7,period:4,econfig:"[Ar] 3d⁵ 4s²",valence:2},
  Fe:{name:"حديد",z:26,mass:56,group:8,period:4,econfig:"[Ar] 3d⁶ 4s²",valence:2},
  Co:{name:"كوبالت",z:27,mass:59,group:9,period:4,econfig:"[Ar] 3d⁷ 4s²",valence:2},
  Ni:{name:"نيكل",z:28,mass:59,group:10,period:4,econfig:"[Ar] 3d⁸ 4s²",valence:2},
  Cu:{name:"نحاس",z:29,mass:64,group:11,period:4,econfig:"[Ar] 3d¹⁰ 4s¹",valence:1},
  Zn:{name:"زنك",z:30,mass:65,group:12,period:4,econfig:"[Ar] 3d¹⁰ 4s²",valence:2},
  Ga:{name:"غاليوم",z:31,mass:70,group:13,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p¹",valence:3},
  Ge:{name:"جرمانيوم",z:32,mass:73,group:14,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p²",valence:4},
  As:{name:"زرنيخ",z:33,mass:75,group:15,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p³",valence:5},
  Se:{name:"سيلينيوم",z:34,mass:79,group:16,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p⁴",valence:6},
  Br:{name:"بروم",z:35,mass:80,group:17,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p⁵",valence:7},
  Kr:{name:"كريبتون",z:36,mass:84,group:18,period:4,econfig:"[Ar] 3d¹⁰ 4s² 4p⁶",valence:8},
  Rb:{name:"روبيديوم",z:37,mass:85,group:1,period:5,econfig:"[Kr] 5s¹",valence:1},
  Sr:{name:"سترونشيوم",z:38,mass:88,group:2,period:5,econfig:"[Kr] 5s²",valence:2},
  Y:{name:"يتريوم",z:39,mass:89,group:3,period:5,econfig:"[Kr] 4d¹ 5s²",valence:2},
  Zr:{name:"زيركونيوم",z:40,mass:91,group:4,period:5,econfig:"[Kr] 4d² 5s²",valence:2},
  Nb:{name:"نيوبيوم",z:41,mass:93,group:5,period:5,econfig:"[Kr] 4d⁴ 5s¹",valence:1},
  Mo:{name:"موليبدنوم",z:42,mass:96,group:6,period:5,econfig:"[Kr] 4d⁵ 5s¹",valence:1},
  Tc:{name:"تكنيشيوم",z:43,mass:98,group:7,period:5,econfig:"[Kr] 4d⁵ 5s²",valence:2},
  Ru:{name:"روثينيوم",z:44,mass:101,group:8,period:5,econfig:"[Kr] 4d⁷ 5s¹",valence:1},
  Rh:{name:"روديوم",z:45,mass:103,group:9,period:5,econfig:"[Kr] 4d⁸ 5s¹",valence:1},
  Pd:{name:"بلاديوم",z:46,mass:106,group:10,period:5,econfig:"[Kr] 4d¹⁰",valence:0},
  Ag:{name:"فضة",z:47,mass:108,group:11,period:5,econfig:"[Kr] 4d¹⁰ 5s¹",valence:1},
  Cd:{name:"كادميوم",z:48,mass:112,group:12,period:5,econfig:"[Kr] 4d¹⁰ 5s²",valence:2},
  In:{name:"إنديوم",z:49,mass:115,group:13,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p¹",valence:3},
  Sn:{name:"قصدير",z:50,mass:119,group:14,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p²",valence:4},
  Sb:{name:"إثموني",z:51,mass:122,group:15,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p³",valence:5},
  Te:{name:"تيلوريوم",z:52,mass:128,group:16,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p⁴",valence:6},
  I:{name:"يود",z:53,mass:127,group:17,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p⁵",valence:7},
  Xe:{name:"زينون",z:54,mass:131,group:18,period:5,econfig:"[Kr] 4d¹⁰ 5s² 5p⁶",valence:8},
  Cs:{name:"سيزيوم",z:55,mass:133,group:1,period:6,econfig:"[Xe] 6s¹",valence:1},
  Ba:{name:"باريوم",z:56,mass:137,group:2,period:6,econfig:"[Xe] 6s²",valence:2},
  La:{name:"لانثانوم",z:57,mass:139,group:3,period:6,econfig:"[Xe] 5d¹ 6s²",valence:2},
  Ce:{name:"سيريوم",z:58,mass:140,group:3,period:6,econfig:"[Xe] 4f¹ 5d¹ 6s²",valence:2},
  Pr:{name:"براسيوديميوم",z:59,mass:141,group:3,period:6,econfig:"[Xe] 4f³ 6s²",valence:2},
  Nd:{name:"نيوديميوم",z:60,mass:144,group:3,period:6,econfig:"[Xe] 4f⁴ 6s²",valence:2},
  Pm:{name:"بروميثيوم",z:61,mass:145,group:3,period:6,econfig:"[Xe] 4f⁵ 6s²",valence:2},
  Sm:{name:"ساماريوم",z:62,mass:150,group:3,period:6,econfig:"[Xe] 4f⁶ 6s²",valence:2},
  Eu:{name:"يوروبيوم",z:63,mass:152,group:3,period:6,econfig:"[Xe] 4f⁷ 6s²",valence:2},
  Gd:{name:"غادولينيوم",z:64,mass:157,group:3,period:6,econfig:"[Xe] 4f⁷ 5d¹ 6s²",valence:2},
  Tb:{name:"تيربيوم",z:65,mass:159,group:3,period:6,econfig:"[Xe] 4f⁹ 6s²",valence:2},
  Dy:{name:"ديسبروسيوم",z:66,mass:163,group:3,period:6,econfig:"[Xe] 4f¹⁰ 6s²",valence:2},
  Ho:{name:"هولميوم",z:67,mass:165,group:3,period:6,econfig:"[Xe] 4f¹¹ 6s²",valence:2},
  Er:{name:"إربيوم",z:68,mass:167,group:3,period:6,econfig:"[Xe] 4f¹² 6s²",valence:2},
  Tm:{name:"ثوليوم",z:69,mass:169,group:3,period:6,econfig:"[Xe] 4f¹³ 6s²",valence:2},
  Yb:{name:"إيتربيوم",z:70,mass:173,group:3,period:6,econfig:"[Xe] 4f¹⁴ 6s²",valence:2},
  Lu:{name:"لوتيشيوم",z:71,mass:175,group:3,period:6,econfig:"[Xe] 4f¹⁴ 5d¹ 6s²",valence:2},
  Hf:{name:"هافنيوم",z:72,mass:178,group:4,period:6,econfig:"[Xe] 4f¹⁴ 5d² 6s²",valence:2},
  Ta:{name:"تنتالوم",z:73,mass:181,group:5,period:6,econfig:"[Xe] 4f¹⁴ 5d³ 6s²",valence:2},
  W:{name:"تنغستن",z:74,mass:184,group:6,period:6,econfig:"[Xe] 4f¹⁴ 5d⁴ 6s²",valence:2},
  Re:{name:"رينيوم",z:75,mass:186,group:7,period:6,econfig:"[Xe] 4f¹⁴ 5d⁵ 6s²",valence:2},
  Os:{name:"أوزميوم",z:76,mass:190,group:8,period:6,econfig:"[Xe] 4f¹⁴ 5d⁶ 6s²",valence:2},
  Ir:{name:"إيريديوم",z:77,mass:192,group:9,period:6,econfig:"[Xe] 4f¹⁴ 5d⁷ 6s²",valence:2},
  Pt:{name:"بلاتين",z:78,mass:195,group:10,period:6,econfig:"[Xe] 4f¹⁴ 5d⁹ 6s¹",valence:1},
  Au:{name:"ذهب",z:79,mass:197,group:11,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",valence:1},
  Hg:{name:"زئبق",z:80,mass:201,group:12,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",valence:2},
  Tl:{name:"ثاليوم",z:81,mass:204,group:13,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",valence:3},
  Pb:{name:"رصاص",z:82,mass:207,group:14,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",valence:4},
  Bi:{name:"بزموث",z:83,mass:209,group:15,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",valence:5},
  Po:{name:"بولونيوم",z:84,mass:209,group:16,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",valence:6},
  At:{name:"أستاتين",z:85,mass:210,group:17,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",valence:7},
  Rn:{name:"رادون",z:86,mass:222,group:18,period:6,econfig:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",valence:8},
  Fr:{name:"فرانسيوم",z:87,mass:223,group:1,period:7,econfig:"[Rn] 7s¹",valence:1},
  Ra:{name:"راديوم",z:88,mass:226,group:2,period:7,econfig:"[Rn] 7s²",valence:2},
  Ac:{name:"أكتينيوم",z:89,mass:227,group:3,period:7,econfig:"[Rn] 6d¹ 7s²",valence:2},
  Th:{name:"ثوريوم",z:90,mass:232,group:3,period:7,econfig:"[Rn] 6d² 7s²",valence:2},
  Pa:{name:"بروتكتينيوم",z:91,mass:231,group:3,period:7,econfig:"[Rn] 5f² 6d¹ 7s²",valence:2},
  U:{name:"يورانيوم",z:92,mass:238,group:3,period:7,econfig:"[Rn] 5f³ 6d¹ 7s²",valence:2},
  Np:{name:"نيبتونيوم",z:93,mass:237,group:3,period:7,econfig:"[Rn] 5f⁴ 6d¹ 7s²",valence:2},
  Pu:{name:"بلوتونيوم",z:94,mass:244,group:3,period:7,econfig:"[Rn] 5f⁶ 7s²",valence:2},
  Am:{name:"أمريسيوم",z:95,mass:243,group:3,period:7,econfig:"[Rn] 5f⁷ 7s²",valence:2},
  Cm:{name:"كوريوم",z:96,mass:247,group:3,period:7,econfig:"[Rn] 5f⁷ 6d¹ 7s²",valence:2},
  Bk:{name:"بيركليوم",z:97,mass:247,group:3,period:7,econfig:"[Rn] 5f⁹ 7s²",valence:2},
  Cf:{name:"كاليفورنيوم",z:98,mass:251,group:3,period:7,econfig:"[Rn] 5f¹⁰ 7s²",valence:2},
  Es:{name:"آينشتاينيوم",z:99,mass:252,group:3,period:7,econfig:"[Rn] 5f¹¹ 7s²",valence:2},
  Fm:{name:"فيرميوم",z:100,mass:257,group:3,period:7,econfig:"[Rn] 5f¹² 7s²",valence:2},
  Md:{name:"مندليفيوم",z:101,mass:258,group:3,period:7,econfig:"[Rn] 5f¹³ 7s²",valence:2},
  No:{name:"نوبليوم",z:102,mass:259,group:3,period:7,econfig:"[Rn] 5f¹⁴ 7s²",valence:2},
  Lr:{name:"لورنسيوم",z:103,mass:262,group:3,period:7,econfig:"[Rn] 5f¹⁴ 7s² 7p¹",valence:3},
  Rf:{name:"رذرفورديوم",z:104,mass:267,group:4,period:7,econfig:"[Rn] 5f¹⁴ 6d² 7s²",valence:2},
  Db:{name:"دوبنيوم",z:105,mass:268,group:5,period:7,econfig:"[Rn] 5f¹⁴ 6d³ 7s²",valence:2},
  Sg:{name:"سيبورجيوم",z:106,mass:271,group:6,period:7,econfig:"[Rn] 5f¹⁴ 6d⁴ 7s²",valence:2},
  Bh:{name:"بوريوم",z:107,mass:272,group:7,period:7,econfig:"[Rn] 5f¹⁴ 6d⁵ 7s²",valence:2},
  Hs:{name:"هاسيوم",z:108,mass:270,group:8,period:7,econfig:"[Rn] 5f¹⁴ 6d⁶ 7s²",valence:2},
  Mt:{name:"مايتنيريوم",z:109,mass:276,group:9,period:7,econfig:"[Rn] 5f¹⁴ 6d⁷ 7s²",valence:2},
  Ds:{name:"دارمشتاتيوم",z:110,mass:281,group:10,period:7,econfig:"[Rn] 5f¹⁴ 6d⁸ 7s²",valence:2},
  Rg:{name:"رونتجينيوم",z:111,mass:280,group:11,period:7,econfig:"[Rn] 5f¹⁴ 6d⁹ 7s²",valence:2},
  Cn:{name:"كوبرنيسيوم",z:112,mass:285,group:12,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s²",valence:2},
  Nh:{name:"نيهونيوم",z:113,mass:286,group:13,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",valence:3},
  Fl:{name:"فليروفيوم",z:114,mass:289,group:14,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",valence:4},
  Mc:{name:"موسكوفيوم",z:115,mass:290,group:15,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",valence:5},
  Lv:{name:"ليفرموريوم",z:116,mass:293,group:16,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",valence:6},
  Ts:{name:"تينيسين",z:117,mass:294,group:17,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",valence:7},
  Og:{name:"أوغانيسون",z:118,mass:294,group:18,period:7,econfig:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",valence:8},
};
const DIATOMIC = {H:'H2',O:'O2',N:'N2',F:'F2',Cl:'Cl2',Br:'Br2',I:'I2'};
const AVOGADRO = 6.02214076e23;
const MOLAR_VOL_STP = 22.4; // L/mol at STP

const NAMES = {
  'H2O':'ماء','CO2':'ثاني أكسيد الكربون','NaCl':'كلوريد الصوديوم (ملح الطعام)',
  'HCl':'حمض كلور الهيدروجين','H2SO4':'حمض الكبريتيك','HNO3':'حمض النيتريك',
  'NaOH':'هيدروكسيد الصوديوم','KOH':'هيدروكسيد البوتاسيوم',
  'CaO':'أكسيد الكالسيوم (الجير الحي)','CaCO3':'كربونات الكالسيوم',
  'NH3':'الأمونيا','CH4':'الميثان','C6H12O6':'الغلوكوز',
  'Fe2O3':'أكسيد الحديد الثالث (الصدأ)','Al2O3':'أكسيد الألومنيوم',
  'MgO':'أكسيد المغنيسيوم','KMnO4':'برمنغنات البوتاسيوم',
  'H2O2':'بيروكسيد الهيدروجين','SO2':'ثاني أكسيد الكبريت',
  'SO3':'ثالث أكسيد الكبريت','NO':'أكسيد النيتروجين',
  'Na2CO3':'كربونات الصوديوم','NaHCO3':'بيكربونات الصوديوم',
  'FeS':'كبريتيد الحديد','CuO':'أكسيد النحاس الثاني',
  'ZnO':'أكسيد الزنك','AgCl':'كلوريد الفضة',
  'BaSO4':'كبريتات الباريوم','Li2O':'أكسيد الليثيوم',
  'BaO':'أكسيد الباريوم','Na2O':'أكسيد الصوديوم',
  'K2O':'أكسيد البوتاسيوم','ZnCl2':'كلوريد الزنك',
  'MgCl2':'كلوريد المغنيسيوم','AlCl3':'كلوريد الألومنيوم',
  'FeCl2':'كلوريد الحديد الثاني','FeCl3':'كلوريد الحديد الثالث',
  'ZnSO4':'كبريتات الزنك','NH4Cl':'كلوريد الأمونيوم',
  'Na2SO4':'كبريتات الصوديوم','CaSO4':'كبريتات الكالسيوم',
  'NaNO3':'نترات الصوديوم','KNO3':'نترات البوتاسيوم',
  'CuSO4':'كبريتات النحاس','FeSO4':'كبريتات الحديد الثاني',
};

// ═══════════════════════════════════════════════════════════
// 2. FORMULA NORMALIZER (case-insensitive, avoids CO→Co bugs)
// ═══════════════════════════════════════════════════════════
function normalizeFormula(raw) {
  raw = String(raw).trim().replace(/\s/g,'');
  let out='', i=0;
  while(i<raw.length){
    if(raw[i]==='('||raw[i]===')'){out+=raw[i++];continue;}
    if(/\d/.test(raw[i])){
      let n='';while(i<raw.length&&/\d/.test(raw[i]))n+=raw[i++];
      out+=n;continue;
    }
    if(!/[A-Za-z]/.test(raw[i])){out+=raw[i++];continue;}
    let matched=false;
    for(const sym of SYM_LIST){
      const len=sym.length;
      const slice=raw.slice(i,i+len);
      if(slice.length<len)continue;
      if(len===1){
        if(slice.toUpperCase()===sym.toUpperCase()){out+=sym;i+=1;matched=true;break;}
      } else {
        const afterFirst=slice.slice(1);
        const allUpper=afterFirst===afterFirst.toUpperCase()&&/[A-Z]/.test(afterFirst);
        if(!allUpper&&slice.toUpperCase()===sym.toUpperCase()){out+=sym;i+=len;matched=true;break;}
      }
    }
    if(!matched)out+=raw[i++];
  }
  return out;
}

// For raw user typing where case is unreliable (ALL CAPS or all lowercase),
// pre-capitalize sensibly (first letter of each element up, rest down) THEN normalize.
// Used everywhere a person types a formula directly (not equation strings already well-formed).
function smartNormalize(raw){
  let s = String(raw).trim();
  if(!s) return s;
  // If mixed case already (has both upper and lower letters), trust it as-is — just normalize
  const lettersOnly = s.replace(/[^A-Za-z]/g,'');
  const isMixed = lettersOnly !== lettersOnly.toUpperCase() && lettersOnly !== lettersOnly.toLowerCase();
  if(isMixed) return normalizeFormula(s);
  // Otherwise (all caps or all lowercase): rebuild as First-letter-up, rest-down per token
  let out='', i=0, prevWasLetter=false;
  while(i<s.length){
    const ch=s[i];
    if(/[A-Za-z]/.test(ch)){
      out += prevWasLetter ? ch.toLowerCase() : ch.toUpperCase();
      prevWasLetter=true; i++;
    } else { out+=ch; prevWasLetter=false; i++; }
  }
  return normalizeFormula(out);
}

// ═══════════════════════════════════════════════════════════
// 3. FORMULA PARSER → { El: count }
// ═══════════════════════════════════════════════════════════
function parseFormula(formula){
  formula=normalizeFormula(formula);
  const counts={};
  _parse(formula,counts,1);
  return counts;
}
function _parse(str,counts,mult){
  let i=0;
  while(i<str.length){
    if(str[i]==='('){
      let depth=1,j=i+1;
      while(j<str.length&&depth>0){if(str[j]==='(')depth++;if(str[j]===')')depth--;j++;}
      let ns='';while(j<str.length&&/\d/.test(str[j]))ns+=str[j++];
      _parse(str.slice(i+1,j-1),counts,mult*(ns?parseInt(ns):1));
      i=j;
    } else if(/[A-Z]/.test(str[i])){
      let sym=str[i++];
      if(i<str.length&&/[a-z]/.test(str[i]))sym+=str[i++];
      let ns='';while(i<str.length&&/\d/.test(str[i]))ns+=str[i++];
      counts[sym]=(counts[sym]||0)+(ns?parseInt(ns):1)*mult;
    } else i++;
  }
}

function getMolarMass(formula){
  const elems=parseFormula(formula);
  if(!Object.keys(elems).length) throw new Error(`صيغة غير صحيحة: ${formula}`);
  let m=0;
  for(const[s,c]of Object.entries(elems)){
    if(!ELEMENTS[s])throw new Error(`عنصر غير معروف: ${s}`);
    m+=ELEMENTS[s].mass*c;
  }
  return m;
}

// ═══════════════════════════════════════════════════════════
// 4. EQUATION BALANCER (Gaussian Elimination + rational coeffs)
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// 4b. معالج مسبق للمعادلات الأيونية
// يحوّل 'Fe3+ + e- → Fe' إلى صيغة قابلة للمعالجة
// ═══════════════════════════════════════════════════════════

// يستبدل الأيونات بصيغة آمنة قبل الفصل بـ +
// مثال: 'Fe3+ + e-' → ['Fe3+', 'e-']
function splitIonicSide(sideStr){
  // بما أن الشحنات الآن داخل أقواس: Fe(3+)  NH4(+)  SO4(2-)
  // الـ + داخل الأقواس لا يُربك الفصل
  // نحتاج نفصل بـ + الخارجية فقط (خارج الأقواس)
  const parts = [];
  let current = '';
  let depth = 0; // عمق الأقواس

  for(let i = 0; i < sideStr.length; i++){
    const ch = sideStr[i];
    if(ch === '(') depth++;
    else if(ch === ')') depth--;
    else if(ch === '+' && depth === 0){
      // + خارج الأقواس = فاصل بين المركبات
      const part = current.trim();
      if(part) parts.push(part);
      current = '';
      continue;
    }
    current += ch;
  }
  const last = current.trim();
  if(last) parts.push(last);

  return parts.filter(Boolean);
}

// تحويل الصيغة الأيونية إلى صيغة للتحليل (تجاهل الشحنة)
function ionFormulaOnly(compound){
  const ion = parseIonFormula(compound.trim());
  if (!ion) return compound.trim();
  if (ion.isElectron) return null; // الإلكترون يُتجاهل في الموازنة الذرية
  return ion.formula;
}

function balanceEquation(eqStr){
  // تنظيف المدخل
  let eq = eqStr.replace(/[-=]>/g,'→').replace(/=/g,'→');

  // إزالة المسافات خارج الأقسام فقط
  if(!eq.includes('→')) throw new Error('المعادلة تحتاج → أو = بين الطرفين');
  const parts = eq.split('→');
  if(parts.length!==2) throw new Error('المعادلة يجب أن تحتوي على طرفين فقط');

  const [L,R] = parts.map(s=>s.trim());

  // فصل المركبات مع مراعاة الأيونات (+ قد يكون جزء من شحنة)
  const reactants = splitIonicSide(L);
  const products  = splitIonicSide(R);
  if(!reactants.length||!products.length) throw new Error('أدخل مواد في كلا الطرفين');

  // تحويل كل مركب لصيغة الذرات (تجاهل الشحنة للموازنة الذرية)
  const compounds=[...reactants,...products];
  const nR=reactants.length, nC=compounds.length;

  const parsed=compounds.map(c=>{
    const fOnly = ionFormulaOnly(c);
    if(fOnly === null) return {'_e_':1}; // إلكترون — نضيفه كعنصر وهمي للموازنة
    const p = parseFormula(fOnly);
    if(!Object.keys(p).length) throw new Error(`مركب غير معروف: ${c}`);
    return p;
  });

  const elements=[...new Set(parsed.flatMap(p=>Object.keys(p)))].sort();
  // نزيل الإلكترون الوهمي من قائمة العناصر (لا يؤثر في موازنة الكتلة)
  const elementsForBalance = elements.filter(e=>e!=='_e_');
  const nE=elementsForBalance.length;

  if(nE===0) throw new Error('لم يتم العثور على عناصر في المعادلة');

  const mat=[];
  for(let e=0;e<nE;e++){
    const row=[];
    for(let c=0;c<nC-1;c++){
      const sign=c<nR?1:-1;
      row.push(sign*(parsed[c][elementsForBalance[e]]||0));
    }
    const lastSign=(nC-1)<nR?1:-1;
    row.push(-(lastSign*(parsed[nC-1][elementsForBalance[e]]||0)));
    mat.push(row);
  }

  let pivRow=0;
  for(let col=0;col<nC-1&&pivRow<nE;col++){
    let maxV=0,maxR=-1;
    for(let r=pivRow;r<nE;r++) if(Math.abs(mat[r][col])>maxV){maxV=Math.abs(mat[r][col]);maxR=r;}
    if(maxR===-1||maxV<1e-10) continue;
    [mat[pivRow],mat[maxR]]=[mat[maxR],mat[pivRow]];
    const pv=mat[pivRow][col];
    for(let c=col;c<nC;c++) mat[pivRow][c]/=pv;
    for(let r=0;r<nE;r++){
      if(r===pivRow) continue;
      const f=mat[r][col]; if(Math.abs(f)<1e-12) continue;
      for(let c=col;c<nC;c++) mat[r][c]-=f*mat[pivRow][c];
    }
    pivRow++;
  }

  const sol=new Array(nC-1).fill(0);
  for(let r=0;r<pivRow;r++){
    let lc=-1;
    for(let c=0;c<nC-1;c++) if(Math.abs(mat[r][c])>1e-8){lc=c;break;}
    if(lc!==-1) sol[lc]=mat[r][nC-1];
  }
  sol.push(1);

  const coeffs=toIntCoeffs(sol);
  if(coeffs.some(c=>c<=0||!isFinite(c))) throw new Error('تعذّرت الموازنة — تأكد من صحة الصيغ');
  return{reactants,products,coeffs,nR};
}



function toIntCoeffs(floats){
  function toFrac(x){
    const tol=1e-8;if(Math.abs(x)<tol)return[0,1];
    let h1=1,h2=0,k1=0,k2=1,b=x;
    do{const a=Math.floor(b);[h1,h2]=[a*h1+h2,h1];[k1,k2]=[a*k1+k2,k1];b=1/(b-a);if(Math.abs(b)>1e12)break;}
    while(Math.abs(x-h1/k1)>tol);return[h1,k1];
  }
  function gcd(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=b;b=a%b;a=t;}return a;}
  function lcm(a,b){return Math.abs(a*b)/gcd(a,b);}
  const fracs=floats.map(f=>toFrac(Math.abs(f)));
  const L=fracs.reduce((acc,[,q])=>lcm(acc,q),1);
  const scaled=fracs.map(([p,q])=>Math.round(p*L/q));
  let g=scaled.reduce((a,b)=>gcd(a,b),scaled[0]);if(g===0)g=1;
  return scaled.map(v=>v/g);
}

// ═══════════════════════════════════════════════════════════
// 5. REACTIONS DATABASE (~85 reactions, university level)
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// 5b. قاعدة بيانات المركبات الشائعة
// المفتاح: العناصر مرتبة أبجدياً مفصولة بفاصلة
// القيمة: [أشهر مركب, ...احتمالات أخرى]
// الهدف: عند إدخال عناصر يعرض أشهر مركب كامل + يذكر الاحتمالات
// ═══════════════════════════════════════════════════════════
const COMMON_COMPOUNDS = {
  // ── الأكاسيد ──
  'Fe,O':    {primary:'Fe2O3', others:['FeO','Fe3O4'], label:'أكسيد الحديد الثالث (صدأ)'},
  'Ca,O':    {primary:'CaO',   others:[], label:'أكسيد الكالسيوم (جير حي)'},
  'Mg,O':    {primary:'MgO',   others:[], label:'أكسيد المغنيسيوم'},
  'Al,O':    {primary:'Al2O3', others:[], label:'أكسيد الألومنيوم'},
  'Cu,O':    {primary:'CuO',   others:['Cu2O'], label:'أكسيد النحاس الثاني'},
  'Na,O':    {primary:'Na2O',  others:[], label:'أكسيد الصوديوم'},
  'K,O':     {primary:'K2O',   others:[], label:'أكسيد البوتاسيوم'},
  'O,Zn':    {primary:'ZnO',   others:[], label:'أكسيد الزنك'},
  'Ba,O':    {primary:'BaO',   others:[], label:'أكسيد الباريوم'},
  'Li,O':    {primary:'Li2O',  others:[], label:'أكسيد الليثيوم'},
  'Mn,O':    {primary:'MnO2',  others:['MnO','Mn2O3'], label:'ثاني أكسيد المنغنيز'},
  'O,Pb':    {primary:'PbO',   others:['PbO2','Pb3O4'], label:'أكسيد الرصاص'},
  'O,Sn':    {primary:'SnO2',  others:['SnO'], label:'أكسيد القصدير'},
  'Ag,O':    {primary:'Ag2O',  others:[], label:'أكسيد الفضة'},
  'Hg,O':    {primary:'HgO',   others:[], label:'أكسيد الزئبق'},
  'Cr,O':    {primary:'Cr2O3', others:['CrO3'], label:'أكسيد الكروم'},
  'Ni,O':    {primary:'NiO',   others:[], label:'أكسيد النيكل'},
  'Co,O':    {primary:'CoO',   others:['Co2O3'], label:'أكسيد الكوبالت'},
  'O,Ti':    {primary:'TiO2',  others:[], label:'ثاني أكسيد التيتانيوم'},
  'O,P':     {primary:'P2O5',  others:['P4O6'], label:'خماسي أكسيد الفسفور'},
  'O,S':     {primary:'SO2',   others:['SO3'], label:'ثاني أكسيد الكبريت'},
  'N,O':     {primary:'NO2',   others:['NO','N2O','N2O5'], label:'ثاني أكسيد النيتروجين'},
  'C,O':     {primary:'CO2',   others:['CO'], label:'ثاني أكسيد الكربون'},
  'O,Si':    {primary:'SiO2',  others:[], label:'ثاني أكسيد السيليكون'},
  // ── الهيدروكسيدات ──
  'Ca,H,O':  {primary:'Ca(OH)2', others:[], label:'هيدروكسيد الكالسيوم (جير مطفأ)'},
  'H,Na,O':  {primary:'NaOH',    others:[], label:'هيدروكسيد الصوديوم'},
  'H,K,O':   {primary:'KOH',     others:[], label:'هيدروكسيد البوتاسيوم'},
  'Al,H,O':  {primary:'Al(OH)3', others:[], label:'هيدروكسيد الألومنيوم'},
  'Cu,H,O':  {primary:'Cu(OH)2', others:[], label:'هيدروكسيد النحاس'},
  'Fe,H,O':  {primary:'Fe(OH)3', others:['Fe(OH)2'], label:'هيدروكسيد الحديد الثالث'},
  'H,Mg,O':  {primary:'Mg(OH)2', others:[], label:'هيدروكسيد المغنيسيوم'},
  'Ba,H,O':  {primary:'Ba(OH)2', others:[], label:'هيدروكسيد الباريوم'},
  'H,O,Zn':  {primary:'Zn(OH)2', others:[], label:'هيدروكسيد الزنك'},
  'H,Mn,O':  {primary:'Mn(OH)2', others:[], label:'هيدروكسيد المنغنيز'},
  'H,Ni,O':  {primary:'Ni(OH)2', others:[], label:'هيدروكسيد النيكل'},
  // ── الأحماض ──
  'H,O,S':   {primary:'H2SO4',   others:['H2SO3'], label:'حمض الكبريتيك'},
  'H,N,O':   {primary:'HNO3',    others:['HNO2'], label:'حمض النيتريك'},
  'C,H,O':   {primary:'CH3COOH', others:['H2CO3','HCOOH','C6H12O6'], label:'حمض الأسيتيك (خل)'},
  'H,O,P':   {primary:'H3PO4',   others:['H3PO3'], label:'حمض الفسفوريك'},
  'C,H,O':   {primary:'H2CO3',   others:['CH3COOH','HCOOH'], label:'حمض الكربونيك'},
  // ── الكلوريدات ──
  'Cl,Na':   {primary:'NaCl',    others:[], label:'كلوريد الصوديوم (ملح الطعام)'},
  'Cl,K':    {primary:'KCl',     others:[], label:'كلوريد البوتاسيوم'},
  'Ca,Cl':   {primary:'CaCl2',   others:[], label:'كلوريد الكالسيوم'},
  'Cl,Mg':   {primary:'MgCl2',   others:[], label:'كلوريد المغنيسيوم'},
  'Al,Cl':   {primary:'AlCl3',   others:[], label:'كلوريد الألومنيوم'},
  'Cl,Fe':   {primary:'FeCl3',   others:['FeCl2'], label:'كلوريد الحديد الثالث'},
  'Cl,Cu':   {primary:'CuCl2',   others:[], label:'كلوريد النحاس'},
  'Cl,Zn':   {primary:'ZnCl2',   others:[], label:'كلوريد الزنك'},
  'Ba,Cl':   {primary:'BaCl2',   others:[], label:'كلوريد الباريوم'},
  'Ag,Cl':   {primary:'AgCl',    others:[], label:'كلوريد الفضة'},
  'Cl,Pb':   {primary:'PbCl2',   others:[], label:'كلوريد الرصاص'},
  'Cl,Hg':   {primary:'HgCl2',   others:['Hg2Cl2'], label:'كلوريد الزئبق'},
  'Cl,H':    {primary:'HCl',     others:[], label:'حمض كلور الهيدروجين'},
  'Br,H':    {primary:'HBr',     others:[], label:'حمض بروميد الهيدروجين'},
  'H,I':     {primary:'HI',      others:[], label:'حمض يوديد الهيدروجين'},
  'F,H':     {primary:'HF',      others:[], label:'حمض فلوريد الهيدروجين'},
  // ── الكربونات ──
  'C,Ca,O':  {primary:'CaCO3',   others:[], label:'كربونات الكالسيوم (رخام/جيرة)'},
  'C,Na,O':  {primary:'Na2CO3',  others:['NaHCO3'], label:'كربونات الصوديوم'},
  'C,K,O':   {primary:'K2CO3',   others:[], label:'كربونات البوتاسيوم'},
  'C,Cu,O':  {primary:'CuCO3',   others:[], label:'كربونات النحاس'},
  'Ba,C,O':  {primary:'BaCO3',   others:[], label:'كربونات الباريوم'},
  'C,Mg,O':  {primary:'MgCO3',   others:[], label:'كربونات المغنيسيوم'},
  'C,Fe,O':  {primary:'FeCO3',   others:[], label:'كربونات الحديد'},
  'C,O,Zn':  {primary:'ZnCO3',   others:[], label:'كربونات الزنك'},
  // ── الكبريتيدات والكبريتات ──
  'Fe,S':    {primary:'FeS',     others:['FeS2'], label:'كبريتيد الحديد'},
  'Cu,S':    {primary:'CuS',     others:['Cu2S'], label:'كبريتيد النحاس'},
  'Pb,S':    {primary:'PbS',     others:[], label:'كبريتيد الرصاص'},
  'S,Zn':    {primary:'ZnS',     others:[], label:'كبريتيد الزنك'},
  'Ag,S':    {primary:'Ag2S',    others:[], label:'كبريتيد الفضة'},
  'H,S':     {primary:'H2S',     others:[], label:'كبريتيد الهيدروجين'},
  'Ba,O,S':  {primary:'BaSO4',   others:[], label:'كبريتات الباريوم'},
  'Cu,O,S':  {primary:'CuSO4',   others:[], label:'كبريتات النحاس'},
  'Na,O,S':  {primary:'Na2SO4',  others:['Na2SO3'], label:'كبريتات الصوديوم'},
  'Fe,O,S':  {primary:'FeSO4',   others:['Fe2(SO4)3'], label:'كبريتات الحديد الثاني'},
  'O,S,Zn':  {primary:'ZnSO4',   others:[], label:'كبريتات الزنك'},
  'Al,O,S':  {primary:'Al2(SO4)3', others:[], label:'كبريتات الألومنيوم'},
  'Ca,O,S':  {primary:'CaSO4',   others:[], label:'كبريتات الكالسيوم'},
  'Mg,O,S':  {primary:'MgSO4',   others:[], label:'كبريتات المغنيسيوم'},
  // ── النترات والنتريد ──
  'N,Na,O':  {primary:'NaNO3',   others:['NaNO2'], label:'نترات الصوديوم'},
  'K,N,O':   {primary:'KNO3',    others:['KNO2'], label:'نترات البوتاسيوم'},
  'Cu,N,O':  {primary:'Cu(NO3)2', others:[], label:'نترات النحاس'},
  'Fe,N,O':  {primary:'Fe(NO3)3', others:['Fe(NO3)2'], label:'نترات الحديد'},
  'Ba,N,O':  {primary:'Ba(NO3)2', others:[], label:'نترات الباريوم'},
  'Ca,N,O':  {primary:'Ca(NO3)2', others:[], label:'نترات الكالسيوم'},
  'Ag,N,O':  {primary:'AgNO3',   others:[], label:'نترات الفضة'},
  'N,O,Pb':  {primary:'Pb(NO3)2', others:[], label:'نترات الرصاص'},
  'Al,N,O':  {primary:'Al(NO3)3', others:[], label:'نترات الألومنيوم'},
  // ── مركبات الهيدروجين (ماء، أمونيا، إلخ) ──
  'H,O':     {primary:'H2O',     others:['H2O2'], label:'ماء'},
  'H,N':     {primary:'NH3',     others:[], label:'أمونيا'},
  'Cl,H,N':  {primary:'NH4Cl',   others:[], label:'كلوريد الأمونيوم'},
  'H,N,O,S': {primary:'(NH4)2SO4', others:[], label:'كبريتات الأمونيوم'},
  // ── مركبات الكربون الشائعة ──
  'C,H':     {primary:'CH4',     others:['C2H6','C3H8','C2H2','C2H4'], label:'ميثان (أشهر هيدروكربون)'},
  'C,H,N,O': {primary:'CO(NH2)2', others:[], label:'يوريا'},
  // ── فوسفات ──
  'Ca,O,P':  {primary:'Ca3(PO4)2', others:[], label:'فوسفات الكالسيوم'},
  'Na,O,P':  {primary:'Na3PO4',  others:['Na2HPO4','NaH2PO4'], label:'فوسفات الصوديوم'},
  'K,O,P':   {primary:'K3PO4',   others:[], label:'فوسفات البوتاسيوم'},
  // ── برمنغنات وكرومات ──
  'K,Mn,O':  {primary:'KMnO4',   others:[], label:'برمنغنات البوتاسيوم'},
  'Cr,K,O':  {primary:'K2Cr2O7', others:['K2CrO4'], label:'ثنائي كرومات البوتاسيوم'},
  'Cr,Na,O': {primary:'Na2Cr2O7', others:['Na2CrO4'], label:'ثنائي كرومات الصوديوم'},
  // ── يوديد ──
  'I,K':     {primary:'KI',      others:[], label:'يوديد البوتاسيوم'},
  'I,Na':    {primary:'NaI',     others:[], label:'يوديد الصوديوم'},
  'Ag,I':    {primary:'AgI',     others:[], label:'يوديد الفضة'},
  'I,Pb':    {primary:'PbI2',    others:[], label:'يوديد الرصاص'},
};

// ═══════════════════════════════════════════════════════════
// 5c. قاعدة التفاعلات الكيميائية الكاملة
// تشمل: تعادل / ترسيب / أكسدة واختزال / أيونية / احتراق / تحلل
// المفتاح r: مصفوفة المتفاعلات (للبحث بالعناصر)
// eq: المعادلة كاملة (تُوازَن تلقائياً)
// type: نوع التفاعل
// label: الاسم العربي
// ═══════════════════════════════════════════════════════════
const REACTIONS = [

  // ══════════════════════════════════════════
  //  تعادل حمض - قاعدة
  // ══════════════════════════════════════════
  {r:['NaOH','HCl'],     eq:'NaOH + HCl → NaCl + H2O',                        type:'neutralization', label:'تعادل هيدروكسيد الصوديوم مع حمض كلور الهيدروجين'},
  {r:['KOH','HCl'],      eq:'KOH + HCl → KCl + H2O',                          type:'neutralization', label:'تعادل هيدروكسيد البوتاسيوم مع حمض كلور الهيدروجين'},
  {r:['NaOH','H2SO4'],   eq:'NaOH + H2SO4 → Na2SO4 + H2O',                    type:'neutralization', label:'تعادل هيدروكسيد الصوديوم مع حمض الكبريتيك'},
  {r:['Ca(OH)2','HCl'],  eq:'Ca(OH)2 + HCl → CaCl2 + H2O',                    type:'neutralization', label:'تعادل هيدروكسيد الكالسيوم مع حمض كلور الهيدروجين'},
  {r:['NaOH','HNO3'],    eq:'NaOH + HNO3 → NaNO3 + H2O',                      type:'neutralization', label:'تعادل هيدروكسيد الصوديوم مع حمض النيتريك'},
  {r:['KOH','H2SO4'],    eq:'KOH + H2SO4 → K2SO4 + H2O',                      type:'neutralization', label:'تعادل هيدروكسيد البوتاسيوم مع حمض الكبريتيك'},
  {r:['NH3','HCl'],      eq:'NH3 + HCl → NH4Cl',                               type:'neutralization', label:'تعادل الأمونيا مع حمض كلور الهيدروجين'},
  {r:['NaOH','H3PO4'],   eq:'NaOH + H3PO4 → Na3PO4 + H2O',                    type:'neutralization', label:'تعادل هيدروكسيد الصوديوم مع حمض الفسفوريك'},
  {r:['Ba(OH)2','H2SO4'],eq:'Ba(OH)2 + H2SO4 → BaSO4 + H2O',                  type:'neutralization', label:'تعادل هيدروكسيد الباريوم مع حمض الكبريتيك'},
  {r:['Al(OH)3','HCl'],  eq:'Al(OH)3 + HCl → AlCl3 + H2O',                    type:'neutralization', label:'تعادل هيدروكسيد الألومنيوم مع حمض كلور الهيدروجين'},

  // ══════════════════════════════════════════
  //  ترسيب
  // ══════════════════════════════════════════
  {r:['AgNO3','NaCl'],   eq:'AgNO3 + NaCl → AgCl + NaNO3',                     type:'precipitation',  label:'ترسيب كلوريد الفضة'},
  {r:['AgNO3','KCl'],    eq:'AgNO3 + KCl → AgCl + KNO3',                       type:'precipitation',  label:'ترسيب كلوريد الفضة من كلوريد البوتاسيوم'},
  {r:['BaCl2','Na2SO4'], eq:'BaCl2 + Na2SO4 → BaSO4 + NaCl',                   type:'precipitation',  label:'ترسيب كبريتات الباريوم'},
  {r:['BaCl2','H2SO4'],  eq:'BaCl2 + H2SO4 → BaSO4 + HCl',                     type:'precipitation',  label:'ترسيب كبريتات الباريوم مع حمض الكبريتيك'},
  {r:['Pb(NO3)2','KI'],  eq:'Pb(NO3)2 + KI → PbI2 + KNO3',                     type:'precipitation',  label:'ترسيب يوديد الرصاص (أصفر)'},
  {r:['CuSO4','NaOH'],   eq:'CuSO4 + NaOH → Cu(OH)2 + Na2SO4',                 type:'precipitation',  label:'ترسيب هيدروكسيد النحاس (أزرق)'},
  {r:['FeCl3','NaOH'],   eq:'FeCl3 + NaOH → Fe(OH)3 + NaCl',                   type:'precipitation',  label:'ترسيب هيدروكسيد الحديد الثالث (بني)'},
  {r:['FeCl2','NaOH'],   eq:'FeCl2 + NaOH → Fe(OH)2 + NaCl',                   type:'precipitation',  label:'ترسيب هيدروكسيد الحديد الثاني (أخضر)'},
  {r:['AlCl3','NaOH'],   eq:'AlCl3 + NaOH → Al(OH)3 + NaCl',                   type:'precipitation',  label:'ترسيب هيدروكسيد الألومنيوم'},
  {r:['ZnSO4','NaOH'],   eq:'ZnSO4 + NaOH → Zn(OH)2 + Na2SO4',                 type:'precipitation',  label:'ترسيب هيدروكسيد الزنك'},
  {r:['CaCl2','Na2CO3'], eq:'CaCl2 + Na2CO3 → CaCO3 + NaCl',                   type:'precipitation',  label:'ترسيب كربونات الكالسيوم'},
  {r:['CO2','Ca(OH)2'],  eq:'CO2 + Ca(OH)2 → CaCO3 + H2O',                     type:'precipitation',  label:'ترسيب كربونات الكالسيوم (اختبار CO₂)'},
  {r:['MgCl2','NaOH'],   eq:'MgCl2 + NaOH → Mg(OH)2 + NaCl',                   type:'precipitation',  label:'ترسيب هيدروكسيد المغنيسيوم'},
  {r:['NiCl2','NaOH'],   eq:'NiCl2 + NaOH → Ni(OH)2 + NaCl',                   type:'precipitation',  label:'ترسيب هيدروكسيد النيكل (أخضر)'},

  // ══════════════════════════════════════════
  //  إحلال أحادي (Single Displacement)
  // ══════════════════════════════════════════
  {r:['Zn','HCl'],       eq:'Zn + HCl → ZnCl2 + H2',                           type:'single',         label:'إحلال الزنك في حمض كلور الهيدروجين'},
  {r:['Mg','HCl'],       eq:'Mg + HCl → MgCl2 + H2',                           type:'single',         label:'إحلال المغنيسيوم في حمض كلور الهيدروجين'},
  {r:['Al','HCl'],       eq:'Al + HCl → AlCl3 + H2',                           type:'single',         label:'إحلال الألومنيوم في حمض كلور الهيدروجين'},
  {r:['Fe','HCl'],       eq:'Fe + HCl → FeCl2 + H2',                           type:'single',         label:'إحلال الحديد في حمض كلور الهيدروجين'},
  {r:['Na','H2O'],       eq:'Na + H2O → NaOH + H2',                            type:'single',         label:'تفاعل الصوديوم مع الماء'},
  {r:['K','H2O'],        eq:'K + H2O → KOH + H2',                              type:'single',         label:'تفاعل البوتاسيوم مع الماء'},
  {r:['Ca','H2O'],       eq:'Ca + H2O → Ca(OH)2 + H2',                         type:'single',         label:'تفاعل الكالسيوم مع الماء'},
  {r:['Fe','CuSO4'],     eq:'Fe + CuSO4 → FeSO4 + Cu',                         type:'single',         label:'إحلال الحديد في كبريتات النحاس'},
  {r:['Zn','CuSO4'],     eq:'Zn + CuSO4 → ZnSO4 + Cu',                         type:'single',         label:'إحلال الزنك في كبريتات النحاس'},
  {r:['Al','Fe2O3'],     eq:'Al + Fe2O3 → Al2O3 + Fe',                         type:'single',         label:'تفاعل ثيرميت (إحلال الألومنيوم)'},
  {r:['Fe2O3','CO'],     eq:'Fe2O3 + CO → Fe + CO2',                           type:'single',         label:'اختزال أكسيد الحديد في الفرن العالي'},
  {r:['CuO','H2'],       eq:'CuO + H2 → Cu + H2O',                             type:'single',         label:'اختزال أكسيد النحاس بالهيدروجين'},
  {r:['CuO','CO'],       eq:'CuO + CO → Cu + CO2',                             type:'single',         label:'اختزال أكسيد النحاس بأول أكسيد الكربون'},

  // ══════════════════════════════════════════
  //  تكوين (Synthesis)
  // ══════════════════════════════════════════
  {r:['N2','H2'],        eq:'N2 + H2 → NH3',                                   type:'synthesis',      label:'تفاعل هابر (تكوين الأمونيا)'},
  {r:['SO2','O2'],       eq:'SO2 + O2 → SO3',                                  type:'synthesis',      label:'أكسدة ثاني أكسيد الكبريت (صناعة H₂SO₄)'},
  {r:['SO3','H2O'],      eq:'SO3 + H2O → H2SO4',                               type:'synthesis',      label:'تكوين حمض الكبريتيك'},
  {r:['CO2','H2O'],      eq:'CO2 + H2O → H2CO3',                               type:'synthesis',      label:'تكوين حمض الكربونيك'},
  {r:['CaO','H2O'],      eq:'CaO + H2O → Ca(OH)2',                             type:'synthesis',      label:'إطفاء الجير'},
  {r:['CaO','CO2'],      eq:'CaO + CO2 → CaCO3',                               type:'synthesis',      label:'تكوين كربونات الكالسيوم'},
  {r:['Na2O','H2O'],     eq:'Na2O + H2O → NaOH',                               type:'synthesis',      label:'تكوين هيدروكسيد الصوديوم من أكسيده'},
  {r:['NO2','H2O'],      eq:'NO2 + H2O → HNO3 + NO',                           type:'synthesis',      label:'تكوين حمض النيتريك'},
  {r:['CO2','NaOH'],     eq:'CO2 + NaOH → Na2CO3 + H2O',                       type:'synthesis',      label:'امتصاص ثاني أكسيد الكربون بالقلوي'},
  {r:['P2O5','H2O'],     eq:'P2O5 + H2O → H3PO4',                              type:'synthesis',      label:'تكوين حمض الفسفوريك'},

  // ══════════════════════════════════════════
  //  احتراق (Combustion)
  // ══════════════════════════════════════════
  {r:['CH4','O2'],       eq:'CH4 + O2 → CO2 + H2O',                            type:'combustion',     label:'احتراق الميثان'},
  {r:['C2H6','O2'],      eq:'C2H6 + O2 → CO2 + H2O',                           type:'combustion',     label:'احتراق الإيثان'},
  {r:['C3H8','O2'],      eq:'C3H8 + O2 → CO2 + H2O',                           type:'combustion',     label:'احتراق البروبان'},
  {r:['C4H10','O2'],     eq:'C4H10 + O2 → CO2 + H2O',                          type:'combustion',     label:'احتراق البيوتان'},
  {r:['C8H18','O2'],     eq:'C8H18 + O2 → CO2 + H2O',                          type:'combustion',     label:'احتراق الأوكتان (بنزين)'},
  {r:['C6H6','O2'],      eq:'C6H6 + O2 → CO2 + H2O',                           type:'combustion',     label:'احتراق البنزين'},
  {r:['C2H5OH','O2'],    eq:'C2H5OH + O2 → CO2 + H2O',                         type:'combustion',     label:'احتراق الإيثانول'},
  {r:['CH3OH','O2'],     eq:'CH3OH + O2 → CO2 + H2O',                          type:'combustion',     label:'احتراق الميثانول'},
  {r:['C2H2','O2'],      eq:'C2H2 + O2 → CO2 + H2O',                           type:'combustion',     label:'احتراق الأسيتيلين'},
  {r:['CO','O2'],        eq:'CO + O2 → CO2',                                   type:'combustion',     label:'احتراق أول أكسيد الكربون'},
  {r:['C6H12O6','O2'],   eq:'C6H12O6 + O2 → CO2 + H2O',                        type:'combustion',     label:'أكسدة الغلوكوز (التنفس الخلوي)'},

  // ══════════════════════════════════════════
  //  تحلل (Decomposition)
  // ══════════════════════════════════════════
  {r:['CaCO3'],          eq:'CaCO3 → CaO + CO2',                               type:'decomp',         label:'تحلل كربونات الكالسيوم بالحرارة'},
  {r:['H2O'],            eq:'H2O → H2 + O2',                                   type:'decomp',         label:'تحليل كهربائي للماء'},
  {r:['H2O2'],           eq:'H2O2 → H2O + O2',                                 type:'decomp',         label:'تحلل بيروكسيد الهيدروجين'},
  {r:['KClO3'],          eq:'KClO3 → KCl + O2',                                type:'decomp',         label:'تحلل كلورات البوتاسيوم'},
  {r:['NaHCO3'],         eq:'NaHCO3 → Na2CO3 + H2O + CO2',                     type:'decomp',         label:'تحلل بيكربونات الصوديوم بالحرارة'},
  {r:['NH4Cl'],          eq:'NH4Cl → NH3 + HCl',                               type:'decomp',         label:'تحلل كلوريد الأمونيوم'},
  {r:['HgO'],            eq:'HgO → Hg + O2',                                   type:'decomp',         label:'تحلل أكسيد الزئبق'},
  {r:['Cu(OH)2'],        eq:'Cu(OH)2 → CuO + H2O',                             type:'decomp',         label:'تحلل هيدروكسيد النحاس بالحرارة'},
  {r:['Fe(OH)3'],        eq:'Fe(OH)3 → Fe2O3 + H2O',                           type:'decomp',         label:'تحلل هيدروكسيد الحديد بالحرارة'},
  {r:['Al(OH)3'],        eq:'Al(OH)3 → Al2O3 + H2O',                           type:'decomp',         label:'تحلل هيدروكسيد الألومنيوم بالحرارة'},
  {r:['MgCO3'],          eq:'MgCO3 → MgO + CO2',                               type:'decomp',         label:'تحلل كربونات المغنيسيوم'},
  {r:['Ca(HCO3)2'],      eq:'Ca(HCO3)2 → CaCO3 + H2O + CO2',                  type:'decomp',         label:'تحلل بيكربونات الكالسيوم'},

  // ══════════════════════════════════════════
  //  أكسدة واختزال (Redox)
  // ══════════════════════════════════════════
  {r:['KMnO4','HCl'],    eq:'KMnO4 + HCl → KCl + MnCl2 + H2O + Cl2',          type:'redox',          label:'أكسدة واختزال — برمنغنات البوتاسيوم مع HCl'},
  {r:['K2Cr2O7','HCl'],  eq:'K2Cr2O7 + HCl → KCl + CrCl3 + H2O + Cl2',        type:'redox',          label:'أكسدة واختزال — ثنائي كرومات البوتاسيوم مع HCl'},
  {r:['Fe','Cl2'],       eq:'Fe + Cl2 → FeCl3',                                type:'redox',          label:'أكسدة الحديد بالكلور'},
  {r:['Cu','Cl2'],       eq:'Cu + Cl2 → CuCl2',                                type:'redox',          label:'أكسدة النحاس بالكلور'},
  {r:['Fe','H2SO4'],     eq:'Fe + H2SO4 → FeSO4 + H2',                         type:'redox',          label:'إذابة الحديد في حمض الكبريتيك المخفف'},
  {r:['Zn','H2SO4'],     eq:'Zn + H2SO4 → ZnSO4 + H2',                         type:'redox',          label:'إذابة الزنك في حمض الكبريتيك'},
  {r:['Cu','H2SO4'],     eq:'Cu + H2SO4 → CuSO4 + H2O + SO2',                  type:'redox',          label:'إذابة النحاس في حمض الكبريتيك المركّز'},
  {r:['Cu','HNO3'],      eq:'Cu + HNO3 → Cu(NO3)2 + H2O + NO',                 type:'redox',          label:'إذابة النحاس في حمض النيتريك المخفف'},
  {r:['Fe','HNO3'],      eq:'Fe + HNO3 → Fe(NO3)3 + H2O + NO',                 type:'redox',          label:'إذابة الحديد في حمض النيتريك'},
  {r:['KMnO4','FeSO4','H2SO4'], eq:'KMnO4 + FeSO4 + H2SO4 → MnSO4 + Fe2(SO4)3 + K2SO4 + H2O', type:'redox', label:'معايرة برمنغنات مع كبريتات الحديد الثاني'},
  {r:['Mg','CO2'],       eq:'Mg + CO2 → MgO + C',                              type:'redox',          label:'اختزال ثاني أكسيد الكربون بالمغنيسيوم'},
  {r:['Cl2','NaBr'],     eq:'Cl2 + NaBr → NaCl + Br2',                         type:'redox',          label:'إزاحة البروم بالكلور'},
  {r:['Cl2','NaOH'],     eq:'Cl2 + NaOH → NaCl + NaClO + H2O',                 type:'redox',          label:'تفاعل الكلور مع القلوي'},
  {r:['Fe2O3','H2'],     eq:'Fe2O3 + H2 → Fe + H2O',                           type:'redox',          label:'اختزال أكسيد الحديد بالهيدروجين'},

  // ══════════════════════════════════════════
  //  معادلات أيونية صافية (Net Ionic)
  // ══════════════════════════════════════════
  {r:['Fe3+','e-'],      eq:'Fe3+ + e- → Fe2+',                                type:'ionic',          label:'اختزال أيون الحديد (III) إلى (II)'},
  {r:['Cu2+','Fe'],      eq:'Cu2+ + Fe → Cu + Fe2+',                           type:'ionic',          label:'أكسدة الحديد باليون النحاسي'},
  {r:['Zn','Cu2+'],      eq:'Zn + Cu2+ → Zn2+ + Cu',                           type:'ionic',          label:'أكسدة الزنك باليون النحاسي'},
  {r:['H+','OH-'],       eq:'H+ + OH- → H2O',                                  type:'ionic',          label:'المعادلة الأيونية الصافية للتعادل'},
  {r:['Ag+','Cl-'],      eq:'Ag+ + Cl- → AgCl',                                type:'ionic',          label:'ترسيب كلوريد الفضة (أيوني)'},
  {r:['Ba2+','SO4 2-'],  eq:'Ba2+ + SO4 2- → BaSO4',                           type:'ionic',          label:'ترسيب كبريتات الباريوم (أيوني)'},
  {r:['Ca2+','CO3 2-'],  eq:'Ca2+ + CO3 2- → CaCO3',                           type:'ionic',          label:'ترسيب كربونات الكالسيوم (أيوني)'},
  {r:['Pb2+','I-'],      eq:'Pb2+ + I- → PbI2',                                type:'ionic',          label:'ترسيب يوديد الرصاص (أيوني)'},
  {r:['MnO4-','Fe2+','H+'], eq:'MnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O',       type:'ionic',          label:'أكسدة الحديد (II) بالبرمنغنات (أيوني)'},
  {r:['Cr2O7 2-','Fe2+','H+'], eq:'Cr2O7 2- + Fe2+ + H+ → Cr3+ + Fe3+ + H2O', type:'ionic',          label:'أكسدة الحديد (II) بالكرومات (أيوني)'},
  {r:['NH4+','OH-'],     eq:'NH4+ + OH- → NH3 + H2O',                          type:'ionic',          label:'تعادل أيون الأمونيوم مع الهيدروكسيد'},
  {r:['Cu2+','OH-'],     eq:'Cu2+ + OH- → Cu(OH)2',                            type:'ionic',          label:'ترسيب هيدروكسيد النحاس (أيوني)'},
  {r:['Fe3+','OH-'],     eq:'Fe3+ + OH- → Fe(OH)3',                            type:'ionic',          label:'ترسيب هيدروكسيد الحديد (III) (أيوني)'},
  {r:['Al3+','OH-'],     eq:'Al3+ + OH- → Al(OH)3',                            type:'ionic',          label:'ترسيب هيدروكسيد الألومنيوم (أيوني)'},
];

// خريطة أيقونات التفاعلات
const TYPE_ICON={
  synthesis:'🔗', decomp:'💥', single:'🔄', combustion:'🔥',
  neutralization:'⚗️', precipitation:'🌊', redox:'⚡', ionic:'⚛️'
};
const TYPE_CLASS={
  synthesis:'tag-synthesis', decomp:'tag-decomp', single:'tag-single', combustion:'tag-combustion',
  neutralization:'tag-double', precipitation:'tag-double', redox:'tag-single', ionic:'tag-synthesis'
};


// ═══════════════════════════════════════════════════════════
// 6. محرك التعرف الذكي على المركب من العناصر
// ═══════════════════════════════════════════════════════════

// تحويل إدخال المستخدم (عناصر) إلى مفتاح أبجدي موحّد
// يتعامل مع: Fe,O أو Fe+O أو Fe O أو fe o أو FE,O
// ═══════════════════════════════════════════════════════════
// 6a. محرك استنتاج الناتج الكيميائي من المتفاعلات
// يحدد نوع التفاعل ويولد المعادلة كاملة تلقائياً
// ═══════════════════════════════════════════════════════════

// قائمة الفلزات الشائعة (تُستخدم لتحديد نوع التفاعل)
const METALS = new Set(['Li','Na','K','Rb','Cs','Be','Mg','Ca','Sr','Ba',
  'Al','Fe','Cu','Zn','Pb','Sn','Ag','Au','Pt','Ni','Co','Mn','Cr','Ti',
  'V','W','Hg','Cd','Bi','Sb']);

// الفلزات النشيطة (تتفاعل مع الماء)
const ACTIVE_METALS = new Set(['Li','Na','K','Rb','Cs','Ca','Sr','Ba']);

// الهيدروكربونات (تحتوي C و H فقط أو C, H, O)
function isHydrocarbon(formula){
  const elems = Object.keys(parseFormula(normalizeFormula(formula)));
  return elems.every(e => ['C','H','O'].includes(e)) && elems.includes('C') && elems.includes('H');
}

// تحديد نوع مادة من صيغتها
function classifyCompound(formula){
  try {
    const f = normalizeFormula(formula.trim());
    const elems = parseFormula(f);
    const keys = Object.keys(elems);

    // الفلز النقي
    if(keys.length===1 && METALS.has(keys[0])) return {type:'metal', metal:keys[0]};

    // الهيدروجين H2
    if(f==='H2' || f==='H') return {type:'H2'};

    // الأكسجين O2
    if(f==='O2' || f==='O') return {type:'O2'};

    // الماء H2O — يجب قبل الهيدروكربون
    if(f==='H2O') return {type:'water'};

    // ثاني أكسيد الكربون CO2 — قبل الأكاسيد العامة
    if(f==='CO2') return {type:'CO2'};

    // الهيدروكربون أولاً (CH4, C2H6, C6H6, C2H5OH...)
    // يجب قبل الحمض لأن CH4 وغيره يحتوي C+H ويُخطئ فيه التصنيف
    if(isHydrocarbon(f)) return {type:'hydrocarbon', formula:f};

    // حمض (أحماض معروفة فقط — تجنب تصنيف الهيدروكربونات أحماضاً)
    const acids = {HCl:'Cl', HBr:'Br', HI:'I', HF:'F', H2SO4:'SO4',
                   HNO3:'NO3', H3PO4:'PO4', H2CO3:'CO3', H2S:'S',
                   HClO:'ClO', HClO3:'ClO3', HClO4:'ClO4', HNO2:'NO2'};
    if(acids[f]) return {type:'acid', formula:f, anion:acids[f]};
    // حمض عام (يبدأ بـ H ولا يحتوي فلز)
    if(keys[0]==='H' && keys.length>=2 && !keys.some(k=>METALS.has(k))){
      return {type:'acid', formula:f, anion:'?'};
    }

    // قاعدة (هيدروكسيد)
    if(keys.includes('O') && keys.includes('H') && keys.some(k=>METALS.has(k))){
      const metalKey = keys.find(k=>METALS.has(k));
      return {type:'base', metal:metalKey, formula:f};
    }

    // أكسيد فلزي (فلز + أكسجين فقط)
    if(keys.length===2 && keys.includes('O') && keys.some(k=>METALS.has(k))){
      const metalKey = keys.find(k=>METALS.has(k));
      return {type:'metal_oxide', metal:metalKey, formula:f};
    }

    // أكسيد لافلزي (لافلز + أكسجين)
    if(keys.length===2 && keys.includes('O') && !keys.some(k=>METALS.has(k))){
      const nonmetal = keys.find(k=>k!=='O');
      return {type:'nonmetal_oxide', nonmetal, formula:f};
    }

    // كربونات (تحتوي CO3)
    if(keys.includes('C') && keys.includes('O') && !keys.includes('H')){
      const metalKey = keys.find(k=>METALS.has(k));
      if(metalKey) return {type:'carbonate', metal:metalKey, formula:f};
    }

    // ملح (فلز + لافلز)
    if(keys.some(k=>METALS.has(k)) && !keys.includes('O') && !keys.includes('H')){
      return {type:'salt', formula:f};
    }

    // هيدروكربون (C + H ± O)
    if(isHydrocarbon(f)) return {type:'hydrocarbon', formula:f};

    return {type:'unknown', formula:f};
  } catch(e) {
    return {type:'unknown', formula};
  }
}

// المحرك الرئيسي: يستقبل مصفوفة المتفاعلات ويولد المعادلة كاملة
// يعيد: { eq: 'المعادلة', type: نوع, label: الاسم, confidence: 'high'|'medium'|'low' }
function inferReactionFromReactants(reactantsArr){
  const classified = reactantsArr.map(r => ({raw:r, ...classifyCompound(r)}));
  const types = classified.map(c=>c.type);

  const has  = t => types.includes(t);
  const get  = t => classified.find(c=>c.type===t);
  const getAll = t => classified.filter(c=>c.type===t);

  // ── قاعدة 1: فلز نشيط + ماء → هيدروكسيد + H2 ──
  if(has('metal') && has('water')){
    const metal = get('metal');
    if(ACTIVE_METALS.has(metal.metal)){
      const m = metal.metal;
      // تحديد التكافؤ
      const valence = ['Li','Na','K','Rb','Cs'].includes(m) ? 1 : 2;
      const hydroxide = valence===1 ? `${m}OH` : `${m}(OH)2`;
      return { eq:`${m} + H2O → ${hydroxide} + H2`, type:'single', label:`تفاعل ${m} مع الماء`, confidence:'high' };
    }
  }

  // ── قاعدة 2: فلز + حمض → ملح + H2 ──
  if(has('metal') && has('acid')){
    const metal = get('metal'); const acid = get('acid');
    const m = metal.metal;
    const anion = acid.anion;
    // تحديد ملح الناتج تبعاً للأنيون
    const saltMap = {
      Cl:`${m}Cl`, Cl2:`${m}Cl`, S:`${m}S`, NO3:`${m}(NO3)`,
      SO4:`${m}SO4`, Br:`${m}Br`, I:`${m}I`, F:`${m}F`, PO4:`${m}3(PO4)`,
    };
    // تكافؤ بسيط للفلزات الشائعة
    const v = {Li:1,Na:1,K:1,Al:3,Fe:2,Zn:2,Mg:2,Ca:2,Cu:2,Pb:2,Sn:2,Ba:2,Ag:1}[m]||2;
    let salt = '';
    if(anion==='Cl') salt = v===1?`${m}Cl`:v===2?`${m}Cl2`:v===3?`${m}Cl3`:`${m}Cl`;
    else if(anion==='SO4') salt = v===1?`${m}2SO4`:v===2?`${m}SO4`:v===3?`${m}2(SO4)3`:`${m}SO4`;
    else if(anion==='NO3') salt = v===1?`${m}NO3`:v===2?`${m}(NO3)2`:v===3?`${m}(NO3)3`:`${m}(NO3)2`;
    else if(anion==='Br') salt = v===1?`${m}Br`:v===2?`${m}Br2`:v===3?`${m}Br3`:`${m}Br2`;
    else if(anion==='I') salt = v===1?`${m}I`:v===2?`${m}I2`:v===3?`${m}I3`:`${m}I2`;
    else salt = `${m}(?)`;

    if(salt && !salt.includes('?'))
      return { eq:`${m} + ${acid.formula} → ${salt} + H2`, type:'single', label:`إحلال ${m} في ${acid.formula}`, confidence:'high' };
  }

  // ── قاعدة 3: حمض + قاعدة → ملح + ماء ──
  if(has('acid') && has('base')){
    const acid = get('acid'); const base = get('base');
    const m = base.metal;
    const anion = acid.anion;
    const v = {Li:1,Na:1,K:1,Al:3,Fe:3,Zn:2,Mg:2,Ca:2,Cu:2,Ba:2,Ag:1}[m]||2;
    let salt = '';
    if(anion==='Cl') salt = v===1?`${m}Cl`:v===2?`${m}Cl2`:v===3?`${m}Cl3`:`${m}Cl2`;
    else if(anion==='SO4') salt = v===1?`${m}2SO4`:v===2?`${m}SO4`:v===3?`${m}2(SO4)3`:`${m}SO4`;
    else if(anion==='NO3') salt = v===1?`${m}NO3`:v===2?`${m}(NO3)2`:v===3?`${m}(NO3)3`:`${m}(NO3)2`;
    else if(anion==='Br') salt = v===1?`${m}Br`:v===2?`${m}Br2`:`${m}Br3`;
    else if(anion==='I') salt = v===1?`${m}I`:v===2?`${m}I2`:`${m}I3`;
    else if(anion==='PO4') salt = v===1?`${m}3PO4`:v===2?`${m}3(PO4)2`:`${m}PO4`;
    else salt = `${m}(?)`;

    if(salt && !salt.includes('?'))
      return { eq:`${base.formula} + ${acid.formula} → ${salt} + H2O`, type:'neutralization', label:`تعادل ${base.formula} مع ${acid.formula}`, confidence:'high' };
  }

  // ── قاعدة 4: أكسيد فلزي + ماء → هيدروكسيد ──
  if(has('metal_oxide') && has('water')){
    const ox = get('metal_oxide');
    const m = ox.metal;
    const v = {Li:1,Na:1,K:1,Ca:2,Ba:2,Mg:2,Sr:2}[m]||2;
    const hydroxide = v===1?`${m}OH`:`${m}(OH)2`;
    return { eq:`${ox.formula} + H2O → ${hydroxide}`, type:'synthesis', label:`أكسيد ${m} مع الماء`, confidence:'high' };
  }

  // ── قاعدة 5: أكسيد لافلزي + ماء → حمض ──
  if(has('nonmetal_oxide') && has('water')){
    const ox = get('nonmetal_oxide');
    const acidMap = {S:'H2SO3',CO:'H2CO3',N:'HNO2',P:'H3PO3'};
    const acid = ox.formula==='SO3'?'H2SO4' : ox.formula==='SO2'?'H2SO3' :
                 ox.formula==='CO2'?'H2CO3' : ox.formula==='N2O5'?'HNO3' :
                 ox.formula==='P2O5'?'H3PO4' : `H_?_`;
    if(!acid.includes('?'))
      return { eq:`${ox.formula} + H2O → ${acid}`, type:'synthesis', label:`${ox.formula} مع الماء`, confidence:'high' };
  }

  // ── قاعدة 6: أكسيد فلزي + حمض → ملح + ماء ──
  if(has('metal_oxide') && has('acid')){
    const ox = get('metal_oxide'); const acid = get('acid');
    const m = ox.metal; const anion = acid.anion;
    const v = {Na:1,K:1,Li:1,Ca:2,Mg:2,Al:3,Fe:3,Cu:2,Zn:2,Ba:2}[m]||2;
    let salt = '';
    if(anion==='Cl') salt = v===1?`${m}Cl`:v===2?`${m}Cl2`:v===3?`${m}Cl3`:`${m}Cl2`;
    else if(anion==='SO4') salt = v===1?`${m}2SO4`:v===2?`${m}SO4`:v===3?`${m}2(SO4)3`:`${m}SO4`;
    else if(anion==='NO3') salt = v===1?`${m}NO3`:v===2?`${m}(NO3)2`:v===3?`${m}(NO3)3`:`${m}(NO3)2`;
    else salt = `${m}(?)`;
    if(salt && !salt.includes('?'))
      return { eq:`${ox.formula} + ${acid.formula} → ${salt} + H2O`, type:'single', label:`أكسيد ${m} مع ${acid.formula}`, confidence:'high' };
  }

  // ── قاعدة 7: كربونات + حمض → ملح + ماء + CO2 ──
  if(has('carbonate') && has('acid')){
    const carb = get('carbonate'); const acid = get('acid');
    const m = carb.metal; const anion = acid.anion;
    const v = {Na:1,K:1,Ca:2,Mg:2,Ba:2,Cu:2,Fe:2,Zn:2,Pb:2}[m]||2;
    let salt = '';
    if(anion==='Cl') salt = v===1?`${m}Cl`:v===2?`${m}Cl2`:`${m}Cl3`;
    else if(anion==='NO3') salt = v===1?`${m}NO3`:v===2?`${m}(NO3)2`:`${m}(NO3)3`;
    else if(anion==='SO4') salt = v===1?`${m}2SO4`:v===2?`${m}SO4`:`${m}2(SO4)3`;
    else salt = `${m}(?)`;
    if(salt && !salt.includes('?'))
      return { eq:`${carb.formula} + ${acid.formula} → ${salt} + H2O + CO2`, type:'single', label:`كربونات ${m} مع ${acid.formula}`, confidence:'high' };
  }

  // ── قاعدة 8: هيدروكربون + O2 → CO2 + H2O (احتراق) ──
  if(has('hydrocarbon') && has('O2')){
    const hc = get('hydrocarbon');
    return { eq:`${hc.formula} + O2 → CO2 + H2O`, type:'combustion', label:`احتراق ${hc.formula}`, confidence:'high' };
  }

  // ── قاعدة 9: فلز + O2 → أكسيد ──
  if(has('metal') && has('O2')){
    const metal = get('metal');
    const m = metal.metal;
    const v = {Li:2,Na:2,K:2,Ca:2,Mg:2,Al:3,Fe:3,Cu:2,Zn:2,Ba:2,Pb:2,Ag:2}[m]||2;
    const oxides = {Li:'Li2O',Na:'Na2O',K:'K2O',Ca:'CaO',Mg:'MgO',Al:'Al2O3',Fe:'Fe2O3',Cu:'CuO',Zn:'ZnO',Ba:'BaO',Pb:'PbO',Ag:'Ag2O',Sn:'SnO2',Mn:'MnO2',Ni:'NiO',Co:'CoO',Cr:'Cr2O3',Ti:'TiO2'};
    const oxide = oxides[m] || `${m}O`;
    return { eq:`${m} + O2 → ${oxide}`, type:'synthesis', label:`تكوين أكسيد ${m}`, confidence:'high' };
  }

  // لم تُعرف القاعدة → ابحث في قاعدة REACTIONS
  return null;
}

function makeCompoundKey(input){
  // فصل بالفاصلة أو + أو مسافة أو فاصلة عربية
  return input
    .split(/[,،+\s]+/)
    .map(s=>{
      // إزالة الأرقام والرموز، تحويل لحروف نظيفة
      const clean = s.trim().replace(/[^A-Za-z]/g,'');
      if(!clean) return null;
      // تصحيح الحالة: الحرف الأول كبير، الباقي صغير
      return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
    })
    .filter(Boolean)
    .sort() // ترتيب أبجدي
    .join(',');
}

// البحث في قاعدة المركبات الشائعة
function lookupByElements(rawInput){
  const key = makeCompoundKey(rawInput);
  if(!key) throw new Error('أدخل رموز العناصر الكيميائية');

  const match = COMMON_COMPOUNDS[key];
  if(!match) return null; // لم يُعثر في القاعدة

  return {
    key,
    primary: match.primary,   // المركب الأشهر
    others: match.others,     // الاحتمالات الأخرى
    label: match.label,       // الاسم العربي
  };
}

// دالة smartLookup المحسّنة:
// 1. يبحث في قاعدة المركبات الشائعة أولاً
// 2. يولّد المعادلة ويوازنها تلقائياً بالخوارزمية الرياضية
// 3. يعرض أشهر مركب + يذكر الاحتمالات الأخرى
function smartLookup(rawInput){
  const v = rawInput.trim();
  if(!v) return null;

  // ── الخطوة 1: فصل المدخل إلى قائمة متفاعلات ──
  // يقبل الفصل بـ + أو , أو ، (يتجاهل + داخل الأيونات مثل Fe3+)
  const rawParts = v.split(/(?<![1-9])[,،]|(?<![1-9])\s*\+\s*(?![0-9])/)
    .map(s=>s.trim()).filter(Boolean);

  const isSingleElement = rawParts.length <= 3 &&
    rawParts.every(p => /^[A-Za-z]{1,3}[0-9]?$/.test(p.trim()));

  // ── الخطوة 2: إذا عناصر بسيطة → ابحث في قاعدة المركبات ──
  if(isSingleElement){
    const compoundInfo = lookupByElements(v);
    if(compoundInfo){
      const primaryFormula = compoundInfo.primary;
      const elements = compoundInfo.key.split(',');
      const elementFormulas = elements.map(e=>{
        const diatomic={H:'H2',O:'O2',N:'N2',F:'F2',Cl:'Cl2',Br:'Br2',I:'I2'};
        return diatomic[e] || e;
      });
      const eqStr = elementFormulas.join('+') + '→' + primaryFormula;
      let balancedData = null;
      try{ balancedData = balanceEquation(eqStr); }catch(_){}
      return {
        type:'compound_lookup',
        primary:primaryFormula,
        others:compoundInfo.others,
        label:compoundInfo.label,
        key:compoundInfo.key,
        balanced:balancedData,
        eqStr,
      };
    }
  }

  // ── الخطوة 3: بحث مباشر في قاعدة REACTIONS ──
  // يقارن المتفاعلات مع قاعدة التفاعلات (مطابقة كاملة)
  const normalParts = rawParts.map(p => smartNormalize(p));
  const makeRxnKey = arr => arr.map(s=>s.replace(/\s/g,'').toUpperCase()).sort().join('|');
  const inputKey = makeRxnKey(normalParts);

  // بحث بالمطابقة الكاملة للمتفاعلات
  for(const rxn of REACTIONS){
    const rxnKey = makeRxnKey(rxn.r);
    if(rxnKey === inputKey) return {type:'reaction', matches:[rxn]};
  }

  // بحث بالعناصر (لو ما وجد تطابق كامل)
  const userEls = new Set();
  normalParts.forEach(f=>{
    try{Object.keys(parseFormula(normalizeFormula(f))).forEach(e=>userEls.add(e));}catch(_){}
  });
  const userElKey = [...userEls].sort().join(',');
  const elMatches = [];
  for(const rxn of REACTIONS){
    const rxnEls = new Set();
    rxn.r.forEach(r=>{
      try{Object.keys(parseFormula(normalizeFormula(r))).forEach(e=>rxnEls.add(e));}catch(_){}
    });
    if([...rxnEls].sort().join(',') === userElKey) elMatches.push(rxn);
  }
  if(elMatches.length) return {type:'reaction', matches:elMatches};

  // ── الخطوة 4: محرك استنتاج الناتج من المتفاعلات ──
  // يحاول تحديد نوع التفاعل وتوليد المعادلة تلقائياً
  if(rawParts.length >= 1){
    const inferred = inferReactionFromReactants(normalParts);
    if(inferred){
      // نوازن المعادلة المولّدة رياضياً
      let balancedData = null;
      try{ balancedData = balanceEquation(inferred.eq.replace(/\s/g,'')); }catch(_){}
      return {
        type:'inferred',
        eq: inferred.eq,
        rxnType: inferred.type,
        label: inferred.label,
        confidence: inferred.confidence,
        balanced: balancedData,
      };
    }
  }

  return {type:'not_found'};
}


// ═══════════════════════════════════════════════════════════
// 7. COMPOUND ANALYSER
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// 6b. دالة تحليل الأيونات — تفصل الصيغة عن الشحنة
// تقبل: Fe3+  Cu2+  SO4 2-  SO4^2-  NH4+  e-  MnO4-
// ═══════════════════════════════════════════════════════════
function parseIonFormula(raw) {
  raw = String(raw).trim();
  if (!raw) return null;

  // الإلكترون
  if (raw === 'e(-)' || raw === 'e-' || raw === 'e')
    return { formula:'e', charge:-1, chargeStr:'−', isElectron:true };

  // الشحنة داخل أقواس: Fe(3+)  SO4(2-)  NH4(+)  MnO4(-)  Cr2O7(2-)
  // هذا الأسلوب لا يُربك مع أرقام الصيغة
  const bracketMatch = raw.match(/^(.+?)\(([1-9]?)([+-])\)$/);
  if (bracketMatch) {
    const formula = bracketMatch[1].trim();
    const num = bracketMatch[2] ? parseInt(bracketMatch[2]) : 1;
    const sign = bracketMatch[3] === '+' ? 1 : -1;
    return { formula, charge: num*sign,
             chargeStr: (num>1?num:'') + bracketMatch[3], isElectron:false };
  }

  // مركب محايد — بدون أقواس شحنة
  return { formula: raw, charge: 0, chargeStr: 'محايد', isElectron:false };
}

function formatCharge(chargeStr){
  if(!chargeStr || chargeStr==='محايد' || chargeStr==='0') return '';
  return `<sup>${chargeStr}</sup>`;
}

function analyzeCompound(raw){
  // تحقق أولاً هل يحتوي على شحنة (أيون)
  const ionData = parseIonFormula(String(raw).trim());
  const formulaToAnalyze = ionData ? ionData.formula : String(raw).trim();

  // حالة خاصة: الإلكترون
  if (ionData && ionData.isElectron) {
    return {
      formula: 'e',
      elements: {},
      molarMass: 0.000548, // كتلة الإلكترون بوحدة g/mol (5.48e-4)
      percentages: {},
      name: 'إلكترون',
      charge: -1,
      chargeStr: '−',
      isIon: true,
      isElectron: true,
    };
  }

  const formula = normalizeFormula(formulaToAnalyze);
  const elems = parseFormula(formula);
  if(!Object.keys(elems).length) throw new Error('لم يُتعرّف على أي عنصر');
  let molarMass = 0;
  for(const[sym,cnt] of Object.entries(elems)){
    if(!ELEMENTS[sym]) throw new Error(`عنصر غير معروف: ${sym}`);
    molarMass += ELEMENTS[sym].mass * cnt;
  }
  const pct = {};
  for(const[sym,cnt] of Object.entries(elems))
    pct[sym] = (ELEMENTS[sym].mass * cnt / molarMass) * 100;

  return {
    formula,
    elements: elems,
    molarMass,
    percentages: pct,
    name: NAMES[formula] || null,
    charge: ionData ? ionData.charge : 0,
    chargeStr: ionData ? ionData.chargeStr : 'محايد',
    isIon: ionData ? ionData.charge !== 0 : false,
    isElectron: false,
  };
}


// ═══════════════════════════════════════════════════════════
// 7b. PERIODIC TABLE LOOKUP
// ═══════════════════════════════════════════════════════════

// Smart-capitalize a raw user-typed element symbol (handles "fe","FE","Fe" all → "Fe")
function smartCapElement(raw){
  const s = String(raw).trim();
  if(!s) throw new Error('أدخل رمز العنصر');
  const lettersOnly = s.replace(/[^A-Za-z]/g,'');
  if(!lettersOnly) throw new Error('أدخل رمز عنصر صحيح');
  // mixed case already (e.g. "Fe") -> trust as-is
  const isMixed = lettersOnly !== lettersOnly.toUpperCase() && lettersOnly !== lettersOnly.toLowerCase();
  if(isMixed) return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  // all caps or all lowercase -> first letter up, rest down
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function getElementInfo(raw){
  const candidate = smartCapElement(raw);
  const data = PERIODIC_DATA[candidate];
  if(!data){
    // try also matching by Arabic name
    const byName = Object.entries(PERIODIC_DATA).find(([sym,d]) => d.name === raw.trim());
    if(byName) return { symbol: byName[0], ...byName[1] };
    throw new Error(`العنصر "${raw}" غير موجود. تأكد من كتابة الرمز الكيميائي الصحيح (مثال: Fe, Na, O)`);
  }
  return { symbol: candidate, ...data };
}

// Build an SVG Lewis dot diagram showing the symbol surrounded by valence electron dots
// Dots are placed in pairs on 4 sides (up/right/down/left), filling singly first then pairing,
// following the standard Lewis structure convention.
function buildLewisSVG(symbol, valence){
  const size = 160;
  const cx = size/2, cy = size/2;
  const symbolBoxHalf = 22; // distance from center to edge of the symbol "box"
  const dotR = 5;
  const dotOffset = 14; // distance of a dot from the symbol box edge

  // 4 sides in standard order: top, right, bottom, left
  // Each side holds up to 2 dots (a lone pair) drawn side-by-side
  const sides = ['top','right','bottom','left'];

  // Distribute valence electrons one at a time across the 4 sides (Hund's rule style),
  // then pair them up once all 4 sides have one electron (standard Lewis dot filling order)
  const sideElectrons = {top:0,right:0,bottom:0,left:0};
  let remaining = Math.min(valence, 8);
  let i = 0;
  // first pass: one electron per side
  while(remaining > 0 && i < 4){ sideElectrons[sides[i]] = 1; remaining--; i++; }
  // second pass: pair them up (add 2nd electron per side)
  i = 0;
  while(remaining > 0 && i < 4){ sideElectrons[sides[i]] += 1; remaining--; i++; }

  function dotsForSide(side, count){
    if(count===0) return '';
    const spacing = 10;
    let positions = [];
    if(count===1) positions = [0];
    else positions = [-spacing/2, spacing/2];

    return positions.map(offset=>{
      let x, y;
      if(side==='top'){ x = cx+offset; y = cy-symbolBoxHalf-dotOffset; }
      else if(side==='bottom'){ x = cx+offset; y = cy+symbolBoxHalf+dotOffset; }
      else if(side==='left'){ x = cx-symbolBoxHalf-dotOffset; y = cy+offset; }
      else { x = cx+symbolBoxHalf+dotOffset; y = cy+offset; }
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${dotR}" fill="#7DF9C8"/>`;
    }).join('');
  }

  const dotsHTML = sides.map(s=>dotsForSide(s, sideElectrons[s])).join('');

  return `
  <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
      font-family="JetBrains Mono, monospace" font-size="34" font-weight="700" fill="#E8F0FE">${symbol}</text>
    ${dotsHTML}
  </svg>`;
}


function parseStoichEq(eqStr){
  if(!eqStr || !eqStr.trim()) throw new Error('أدخل المعادلة الكيميائية');
  const eq=eqStr.replace(/\s/g,'').replace(/[-=]>/g,'→').replace(/=/g,'→');
  if(!eq.includes('→'))throw new Error('أدخل المعادلة بشكل صحيح مع → أو =');
  const segs=eq.split('→');
  if(segs.length!==2) throw new Error('المعادلة يجب أن تحتوي على طرفين فقط');
  const[L,R]=segs;
  function parseSide(str){
    if(!str) throw new Error('كل طرف من المعادلة يجب أن يحتوي مواد');
    return str.split('+').filter(Boolean).map(t=>{
      const m=t.match(/^(\d+)(.+)$/);
      const rawF = m ? m[2] : t;
      const c = m ? parseInt(m[1]) : 1;
      // Normalize formula case so it matches consistently everywhere (CO2, not co2/Co2 confusion)
      const f = smartNormalize(rawF);
      return{f,c};
    });
  }
  const reactants=parseSide(L);
  const products=parseSide(R);
  reactants.forEach(x=>{x.mw=getMolarMass(x.f);});
  products.forEach(x=>{x.mw=getMolarMass(x.f);});
  return{reactants,products};
}

function stoichMoles(molesA, cA, cB){ return molesA*(cB/cA); }

function fmtSci(n){
  if(n===0)return'0';
  if(!isFinite(n)) return 'غير محدد';
  if(Math.abs(n)>=0.001&&Math.abs(n)<1e7)return parseFloat(n.toFixed(4)).toString();
  const exp=Math.floor(Math.log10(Math.abs(n)));
  const mant=(n/Math.pow(10,exp)).toFixed(3).replace(/\.?0+$/,'');
  return`${mant} × 10<sup>${exp}</sup>`;
}

function findInEq(stoich, formula){
  const all=[...stoich.reactants,...stoich.products];
  // Normalize both sides for robust matching: trim spaces, fix case (handles ALL CAPS / all lowercase)
  const cleanInput = smartNormalize(String(formula).trim());
  let found = all.find(x => x.f === formula); // exact match first (fast path)
  if(!found) found = all.find(x => x.f === cleanInput);
  if(!found){
    const available = all.map(x=>x.f).join('، ');
    throw new Error(`المادة "${formula}" غير موجودة في المعادلة. المواد المتاحة: ${available}`);
  }
  return found;
}

function calcMolesCalc(eqStr, fromFormula, fromMoles, toFormula){
  if(isNaN(fromMoles)||fromMoles<=0) throw new Error('أدخل عدد مولات صحيح أكبر من صفر');
  const stoich=parseStoichEq(eqStr);
  const A=findInEq(stoich, fromFormula);
  const B=findInEq(stoich, toFormula);
  const molesB=stoichMoles(fromMoles,A.c,B.c);
  return{molesA:fromMoles,cA:A.c,cB:B.c,molesB,fA:fromFormula,fB:toFormula};
}

function calcMassCalc(eqStr, fromFormula, massA, toFormula){
  if(isNaN(massA)||massA<=0) throw new Error('أدخل كتلة صحيحة أكبر من صفر');
  const stoich=parseStoichEq(eqStr);
  const A=findInEq(stoich, fromFormula);
  const B=findInEq(stoich, toFormula);
  const molesA=massA/A.mw;
  const molesB=stoichMoles(molesA,A.c,B.c);
  const massB=molesB*B.mw;
  return{massA,mwA:A.mw,molesA,cA:A.c,cB:B.c,molesB,mwB:B.mw,massB,fA:fromFormula,fB:toFormula};
}

function calcVolumeCalc(eqStr, fromFormula, volA, toFormula, unit){
  if(isNaN(volA)||volA<=0) throw new Error('أدخل حجماً صحيحاً أكبر من صفر');
  const stoich=parseStoichEq(eqStr);
  const A=findInEq(stoich, fromFormula);
  const B=findInEq(stoich, toFormula);
  // Convert input to liters first, since molar volume (22.4) is defined in L/mol
  const volA_L = unit==='mL' ? volA/1000 : volA;
  const molesA=volA_L/MOLAR_VOL_STP;
  const molesB=stoichMoles(molesA,A.c,B.c);
  const volB_L=molesB*MOLAR_VOL_STP;
  // Convert output back to the same unit the user chose, so both sides stay consistent
  const volB = unit==='mL' ? volB_L*1000 : volB_L;
  return{volA,volB,volA_L,volB_L,molesA,cA:A.c,cB:B.c,molesB,fA:fromFormula,fB:toFormula,unit};
}

function calcParticlesCalc(eqStr, fromFormula, molesA, toFormula){
  if(isNaN(molesA)||molesA<=0) throw new Error('أدخل عدد مولات صحيح أكبر من صفر');
  const stoich=parseStoichEq(eqStr);
  const A=findInEq(stoich, fromFormula);
  const B=findInEq(stoich, toFormula);
  const molesB=stoichMoles(molesA,A.c,B.c);
  const particles=molesB*AVOGADRO;
  return{molesA,cA:A.c,cB:B.c,molesB,particles,fA:fromFormula,fB:toFormula};
}

function calcLimitingCalc(eqStr, reactantMasses, productFormula){
  const stoich=parseStoichEq(eqStr);
  const cleanProd = smartNormalize(String(productFormula).trim());
  let prod = stoich.products.find(x=>x.f===productFormula);
  if(!prod) prod = stoich.products.find(x=>x.f===cleanProd);
  if(!prod){
    const available = stoich.products.map(x=>x.f).join('، ');
    throw new Error(`الناتج "${productFormula}" غير موجود. النواتج المتاحة: ${available}`);
  }
  // Build a normalized lookup map so reactantMasses keys (which may be raw user-typed
  // formulas in any case) correctly match the canonical formulas (r.f) used internally.
  const normalizedMasses = {};
  for(const key in reactantMasses){
    normalizedMasses[smartNormalize(key.trim())] = reactantMasses[key];
  }
  const results=stoich.reactants.map(r=>{
    const mass = (r.f in reactantMasses) ? reactantMasses[r.f] : normalizedMasses[r.f];
    if(mass===undefined||isNaN(mass)||mass<=0) throw new Error(`أدخل كتلة صحيحة لـ ${r.f}`);
    const molesR=mass/r.mw;
    const molesProd=stoichMoles(molesR,r.c,prod.c);
    return{formula:r.f,mass,mw:r.mw,molesR,molesProd,coeff:r.c};
  });
  const limiting=results.reduce((a,b)=>a.molesProd<b.molesProd?a:b);
  const theoreticalMoles=limiting.molesProd;
  const theoreticalMass=theoreticalMoles*prod.mw;
  return{results,limiting,theoreticalMoles,theoreticalMass,productFormula:prod.f,prodMw:prod.mw,prodCoeff:prod.c};
}

function calcPercentYieldCalc(eqStr, fromFormula, massA, toFormula, actualMass){
  if(isNaN(actualMass)||actualMass<=0) throw new Error('أدخل الكتلة الفعلية (أكبر من صفر)');
  const theoretical=calcMassCalc(eqStr, fromFormula, massA, toFormula);
  const pct=(actualMass/theoretical.massB)*100;
  return{...theoretical,actualMass,percentYield:pct};
}

function calcMolarityCalc(mass,mw,volume,unit){
  if(isNaN(mass)||isNaN(mw)||isNaN(volume))throw new Error('أدخل جميع القيم');
  if(mass<=0||mw<=0||volume<=0)throw new Error('القيم يجب أن تكون أكبر من صفر');
  const volL=unit==='mL'?volume/1000:volume;
  return{moles:mass/mw,molarity:(mass/mw)/volL,volL};
}

// ═══════════════════════════════════════════════════════════
// 9. RENDERERS — Equation Balancer
  function fmt(f){
  return String(f).replace(/(\d+)/g,n=>n.split('').map(d=>'₀₁₂₃₄₅₆₇₈₉'[+d]).join(''));
}

function renderBalanced(data){
  const{reactants,products,coeffs,nR}=data;
  const all=[...reactants,...products];
  const side=(arr,off)=>arr.map((c,i)=>{
    const k=coeffs[off+i];
    return(k>1?`<strong style="color:var(--purple)">${k}</strong>`:'')+fmt(c);
  }).join(' + ');
  const L={},R={};
  reactants.forEach((r,i)=>{const a=parseFormula(r);for(const[e,c]of Object.entries(a))L[e]=(L[e]||0)+c*coeffs[i];});
  products.forEach((p,i)=>{const a=parseFormula(p);for(const[e,c]of Object.entries(a))R[e]=(R[e]||0)+c*coeffs[nR+i];});
  const els=[...new Set([...Object.keys(L),...Object.keys(R)])].sort();
  const ok=els.every(e=>L[e]===R[e]);
  return`
    <div class="result-section-title">المعادلة الموزونة</div>
    <div class="equation-display">
      <div class="balanced-eq" dir="ltr">${side(reactants,0)} → ${side(products,nR)}</div>
      <div class="eq-label">${ok?'✅ موزونة بشكل صحيح':'⚠️ راجع الإدخال'}</div>
    </div>
    <div class="result-section-title">المعاملات</div>
    <div class="coeff-row">
      ${all.map((c,i)=>`<div class="coeff-badge">
        <span class="coeff-num">${coeffs[i]}</span>
        <span class="coeff-mol">${fmt(c)}</span>
      </div>`).join('')}
    </div>
    <div class="result-section-title">جدول التحقق من الذرات</div>
    <table class="verify-table">
      <thead><tr><th>العنصر</th><th>المتفاعلات</th><th>النواتج</th><th>متوازن؟</th></tr></thead>
      <tbody>${els.map(e=>`<tr>
        <td>${e}</td><td>${L[e]||0}</td><td>${R[e]||0}</td>
        <td class="${(L[e]||0)===(R[e]||0)?'check-ok':'check-bad'}">${(L[e]||0)===(R[e]||0)?'✅':'❌'}</td>
      </tr>`).join('')}</tbody>
    </table>`;
}

// عرض نتيجة الموازن الذكي — يتعامل مع ثلاث حالات:
// 1. compound_lookup: عناصر بسيطة → أشهر مركب + احتمالات أخرى
// 2. reaction: تفاعل معقد موجود في قاعدة التفاعلات
// 3. not_found: لم يُعثر على شيء
function renderSmartResult(result){
  // ── الحالة: لم يُعثر ──
  if(!result || result.type==='not_found'){
    return`<div class="unknown-box">
      ⚠️ لم يُعثر على مركب أو تفاعل لهذه العناصر.<br>
      💡 تأكد من رموز العناصر (مثال: Fe, O أو Na, Cl أو Ca, O, H)
    </div>`;
  }

  // ── الحالة: بحث مركب من عناصر ──
  if(result.type==='compound_lookup'){
    const {primary, others, label, balanced, eqStr} = result;

    // نحاول عرض المعادلة الموزونة
    let balancedHTML = '';
    if(balanced){
      balancedHTML = renderBalanced(balanced);
    } else {
      // إذا فشلت الموازنة التلقائية، نعرض المعادلة كما هي
      balancedHTML = `<div class="equation-display">
        <div class="balanced-eq" dir="ltr">${fmt(eqStr.replace(/→/,' → '))}</div>
        <div class="eq-label">⚠️ تعذّرت الموازنة التلقائية — تأكد من الصيغ</div>
      </div>`;
    }

    // بناء قسم الاحتمالات الأخرى إن وُجدت
    const othersHTML = others.length > 0 ? `
      <div class="result-section-title">مركبات أخرى ممكنة لهذه العناصر</div>
      <div class="other-compounds-row">
        ${others.map(c=>`<span class="other-compound-chip" dir="ltr">${fmt(c)}</span>`).join('')}
      </div>
      <div class="input-hint">💡 المركب المعروض أعلاه هو الأكثر شيوعاً — الاحتمالات الأخرى تعتمد على ظروف التفاعل</div>
    ` : '';

    return`
      <div class="smart-reaction-header">
        <div class="smart-reaction-icon">🔗</div>
        <div class="smart-reaction-info">
          <h3>${label}</h3>
          <p>أشهر مركب لهذه العناصر — موزون تلقائياً</p>
        </div>
      </div>
      ${balancedHTML}
      ${othersHTML}
    `;
  }

  // ── الحالة: تفاعل من قاعدة التفاعلات ──
  if(result.type==='reaction'){
    const matches = result.matches;
    if(!matches || !matches.length){
      return`<div class="unknown-box">⚠️ لم يُعثر على تفاعل لهذه العناصر.</div>`;
    }
    if(matches.length===1){
      const rxn=matches[0];
      let bal;
      try{bal=balanceEquation(rxn.eq);}catch(e){return`<div class="error-box">❌ ${e.message}</div>`;}
      return`<div class="smart-reaction-header">
        <div class="smart-reaction-icon">${TYPE_ICON[rxn.type]||'⚗️'}</div>
        <div class="smart-reaction-info"><h3>${rxn.label}</h3><p>تم التعرف والموازنة تلقائياً</p></div>
      </div>${renderBalanced(bal)}`;
    }
    return`<div class="multi-header">وُجد <strong>${matches.length} تفاعلات</strong> — اختر:</div>
    <div class="reactions-list" id="rxn-list">
    ${matches.map((rxn,i)=>`<div class="reaction-option" data-idx="${i}">
      <span class="rxn-eq" dir="ltr">${fmt(rxn.eq.replace(/→/,' → '))}</span>
      <span class="rxn-type-tag ${TYPE_CLASS[rxn.type]||'tag-synthesis'}">${rxn.label}</span>
    </div>`).join('')}
    </div><div id="rxn-detail"></div>`;
  }

  // ── حالة: ناتج مستنتج من المحرك الذكي ──
  if(result.type==='inferred'){
    const icon = TYPE_ICON[result.rxnType] || '🔬';
    if(result.balanced){
      return`<div class="smart-reaction-header">
        <div class="smart-reaction-icon">${icon}</div>
        <div class="smart-reaction-info">
          <h3>${result.label}</h3>
          <p>🤖 استُنتج الناتج تلقائياً وتمت الموازنة بالخوارزمية الرياضية</p>
        </div>
      </div>${renderBalanced(result.balanced)}`;
    }
    return`<div class="smart-reaction-header">
      <div class="smart-reaction-icon">${icon}</div>
      <div class="smart-reaction-info"><h3>${result.label}</h3><p>🤖 ناتج مستنتج</p></div>
    </div>
    <div class="equation-display">
      <div class="balanced-eq" dir="ltr">${fmt(result.eq.replace(/→/,' → '))}</div>
      <div class="eq-label">⚠️ تعذّرت الموازنة الرياضية — المعادلة قد تحتاج مراجعة</div>
    </div>`;
  }

  return`<div class="unknown-box">⚠️ نتيجة غير متوقعة</div>`;
}

function renderAnalyzerResult(data){
  const{formula,elements:elems,molarMass,percentages,name,charge,chargeStr,isIon,isElectron}=data;
  const COLS=['#7DF9C8','#B47FFF','#60B4FF','#FF9A3C','#FF5C7A','#FFDD57','#FF82D7'];
  const keys=Object.keys(elems);

  // حالة خاصة: الإلكترون
  if(isElectron) return `
    <div class="compound-name-badge" style="background:var(--blue-dim);border-color:var(--blue);color:var(--blue)">⚡ إلكترون حر</div>
    <div class="compound-formula-hero" dir="ltr">e<sup>−</sup></div>
    <table class="details-table">
      <tr><td>الرمز</td><td dir="ltr">e⁻</td></tr>
      <tr><td>الشحنة</td><td>−1 (سالبة)</td></tr>
      <tr><td>الكتلة</td><td>5.486 × 10⁻⁴ g/mol (مهملة عملياً)</td></tr>
      <tr><td>الدور في التفاعل</td><td>عامل اختزال — يُنقل في تفاعلات الأكسدة والاختزال</td></tr>
    </table>`;

  // عرض بادج الشحنة لو أيون
  const ionBadge = isIon ? `
    <div class="ion-badge ${charge>0?'ion-positive':'ion-negative'}">
      ${charge>0?'⊕ أيون موجب (Cation)':'⊖ أيون سالب (Anion)'}
      &nbsp;—&nbsp; الشحنة: <strong>${charge>0?'+':''}${charge}</strong>
    </div>` : '';

  // عرض الصيغة مع الشحنة المرتفعة
  const displayFormula = isIon
    ? `${fmt(formula)}<sup style="color:var(--orange);font-size:0.7em">${chargeStr}</sup>`
    : fmt(formula);

  return`
    ${ionBadge}
    ${name?`<div class="compound-name-badge">🏷️ ${name}</div>`:''}
    <div class="compound-formula-hero">${displayFormula}</div>
    <div class="molar-mass-hero">الكتلة المولية: <strong>${molarMass.toFixed(3)} g/mol</strong>
      ${isIon?`&nbsp;|&nbsp; الشحنة الكلية: <strong style="color:var(--orange)">${charge>0?'+':''}${charge}</strong>`:''}
    </div>
    <div class="result-section-title">تركيب ${isIon?'الأيون':'المركب'}</div>
    <table class="verify-table">
      <thead><tr><th>العنصر</th><th>الاسم</th><th>عدد الذرات</th><th>الكتلة (g/mol)</th></tr></thead>
      <tbody>${keys.map(el=>`<tr>
        <td><strong style="color:${ELEMENTS[el].color}">${el}</strong></td>
        <td>${ELEMENTS[el].name}</td><td>${elems[el]}</td>
        <td>${(ELEMENTS[el].mass*elems[el]).toFixed(3)}</td>
      </tr>`).join('')}</tbody>
    </table>
    <div class="result-section-title">النسبة المئوية للعناصر</div>
    <div class="elements-grid">
      ${keys.map((el,i)=>{
        const pct=percentages[el].toFixed(2);
        const col=ELEMENTS[el].color||COLS[i%COLS.length];
        return`<div class="element-bar-wrap">
          <span class="elem-symbol" style="color:${col}">${el}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${col}"></div></div>
          <span class="elem-pct">${pct}%</span>
          <span class="elem-count">×${elems[el]}</span>
        </div>`;
      }).join('')}
    </div>`;
}


function renderElementInfo(info){
  const { symbol, name, z, mass, group, period, econfig, valence } = info;
  const color = (ELEMENTS[symbol] && ELEMENTS[symbol].color) || '#7DF9C8';
  const lewisSVG = buildLewisSVG(symbol, valence);
  return `
    <div class="element-card-header">
      <div class="element-symbol-big" style="color:${color}">${symbol}</div>
      <div class="element-name-big">${name}</div>
    </div>

    <div class="result-section-title">البيانات الأساسية</div>
    <table class="details-table">
      <tr><td>الرمز الكيميائي</td><td>${symbol}</td></tr>
      <tr><td>الاسم</td><td>${name}</td></tr>
      <tr><td>العدد الذري (Z)</td><td>${z}</td></tr>
      <tr><td>العدد الكتلي (A)</td><td>${mass}</td></tr>
      <tr><td>الزمرة (Group)</td><td>${group}</td></tr>
      <tr><td>الدورة (Period)</td><td>${period}</td></tr>
      <tr><td>التوزيع الإلكتروني</td><td dir="ltr">${econfig}</td></tr>
      <tr><td>إلكترونات التكافؤ</td><td>${valence}</td></tr>
    </table>

    <div class="result-section-title">رمز لويس (Lewis Dot Structure)</div>
    <div class="lewis-display">${lewisSVG}</div>
    <div class="input-hint" style="text-align:center">يوضح الرمز عدد إلكترونات التكافؤ (${valence}) المحيطة بالعنصر</div>
  `;
}

// ═══════════════════════════════════════════════════════════
// 10. RENDERERS —
function stoichStep(num,text){
  return`<div class="stoich-step"><span class="step-num">${num}</span><span class="step-text">${text}</span></div>`;
}

function renderMolarityModal(data,compound,mass,mw,volume,unit){
  const{moles,molarity,volL}=data;
  return`
    <div class="molarity-result-box">
      <div class="molarity-big">${molarity.toFixed(4)}</div>
      <div class="molarity-unit">mol/L (مولار)</div>
    </div>
    <div class="formula-box" dir="ltr">M = ${mass} / (${parseFloat(mw).toFixed(3)} × ${volL.toFixed(4)}) = ${molarity.toFixed(4)} mol/L</div>
    <table class="details-table">
      <tr><td>المركب</td><td>${compound?fmt(compound):'—'}</td></tr>
      <tr><td>الكتلة المولية</td><td>${parseFloat(mw).toFixed(3)} g/mol</td></tr>
      <tr><td>كتلة المذاب</td><td>${mass} g</td></tr>
      <tr><td>الحجم</td><td>${volume} ${unit} = ${volL.toFixed(4)} L</td></tr>
      <tr><td>عدد المولات</td><td>${moles.toFixed(6)} mol</td></tr>
      <tr><td>المولارية</td><td><strong style="color:var(--green)">${molarity.toFixed(4)} mol/L</strong></td></tr>
    </table>`;
}

function renderMolesResultModal(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">مولات ${fmt(d.fB)}</div>
    <div class="stoich-answer-val">${fmtSci(d.molesB)} <span>mol</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: مولات ${fmt(d.fA)} = <strong>${fmtSci(d.molesA)}</strong> mol`)}
    ${stoichStep(2,`النسبة المولية من المعادلة: ${d.cA} مول ${fmt(d.fA)} ≡ ${d.cB} مول ${fmt(d.fB)}`)}
    ${stoichStep(3,`مولات ${fmt(d.fB)} = ${fmtSci(d.molesA)} × (${d.cB}/${d.cA}) = <strong>${fmtSci(d.molesB)} mol</strong>`)}
  </div>`;
}

function renderMassResultModal(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">كتلة ${fmt(d.fB)}</div>
    <div class="stoich-answer-val">${fmtSci(d.massB)} <span>g</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: كتلة ${fmt(d.fA)} = <strong>${fmtSci(d.massA)} g</strong>`)}
    ${stoichStep(2,`الكتلة المولية لـ ${fmt(d.fA)} = ${d.mwA.toFixed(3)} g/mol`)}
    ${stoichStep(3,`مولات ${fmt(d.fA)} = ${fmtSci(d.massA)} ÷ ${d.mwA.toFixed(3)} = <strong>${fmtSci(d.molesA)} mol</strong>`)}
    ${stoichStep(4,`النسبة المولية: ${d.cA} : ${d.cB} → مولات ${fmt(d.fB)} = ${fmtSci(d.molesA)} × (${d.cB}/${d.cA}) = <strong>${fmtSci(d.molesB)} mol</strong>`)}
    ${stoichStep(5,`الكتلة المولية لـ ${fmt(d.fB)} = ${d.mwB.toFixed(3)} g/mol`)}
    ${stoichStep(6,`كتلة ${fmt(d.fB)} = ${fmtSci(d.molesB)} × ${d.mwB.toFixed(3)} = <strong>${fmtSci(d.massB)} g</strong>`)}
  </div>`;
}

function renderVolResultModal(d){
  const u = d.unit;
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">حجم ${fmt(d.fB)} عند STP</div>
    <div class="stoich-answer-val">${fmtSci(d.volB)} <span>${u}</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: حجم ${fmt(d.fA)} = <strong>${fmtSci(d.volA)} ${u}</strong> عند STP`)}
    ${u==='mL' ? stoichStep(2,`تحويل إلى لتر: ${fmtSci(d.volA)} mL ÷ 1000 = <strong>${fmtSci(d.volA_L)} L</strong>`) : ''}
    ${stoichStep(u==='mL'?3:2,`مولات ${fmt(d.fA)} = ${fmtSci(d.volA_L)} ÷ 22.4 = <strong>${fmtSci(d.molesA)} mol</strong>`)}
    ${stoichStep(u==='mL'?4:3,`النسبة المولية: ${d.cA} : ${d.cB} → مولات ${fmt(d.fB)} = <strong>${fmtSci(d.molesB)} mol</strong>`)}
    ${stoichStep(u==='mL'?5:4,`حجم ${fmt(d.fB)} = ${fmtSci(d.molesB)} × 22.4 = <strong>${fmtSci(d.volB_L)} L</strong>`)}
    ${u==='mL' ? stoichStep(6,`تحويل إلى مللي لتر: ${fmtSci(d.volB_L)} L × 1000 = <strong>${fmtSci(d.volB)} mL</strong>`) : ''}
  </div>`;
}

function renderParticlesResultModal(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">عدد جسيمات ${fmt(d.fB)}</div>
    <div class="stoich-answer-val" style="font-size:1.4rem">${fmtSci(d.particles)} <span>جسيم</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: مولات ${fmt(d.fA)} = <strong>${fmtSci(d.molesA)} mol</strong>`)}
    ${stoichStep(2,`النسبة المولية: مولات ${fmt(d.fB)} = ${fmtSci(d.molesA)} × (${d.cB}/${d.cA}) = <strong>${fmtSci(d.molesB)} mol</strong>`)}
    ${stoichStep(3,`عدد الجسيمات = ${fmtSci(d.molesB)} × 6.022×10²³ = <strong>${fmtSci(d.particles)} جسيم</strong>`)}
  </div>`;
}

function renderLimitingResultModal(d){
  const rows=d.results.map(r=>`<tr ${r.formula===d.limiting.formula?'class="limiting-row"':''}>
    <td>${fmt(r.formula)}</td>
    <td>${fmtSci(r.mass)} g</td>
    <td>${r.mw.toFixed(3)}</td>
    <td>${fmtSci(r.molesR)}</td>
    <td>${fmtSci(r.molesProd)}</td>
    <td>${r.formula===d.limiting.formula?'⛔ محدد':'✅'}</td>
  </tr>`).join('');
  return`<div class="stoich-answer-box" style="border-color:var(--red)">
    <div class="stoich-answer-label">المتفاعل المحدد</div>
    <div class="stoich-answer-val" style="color:var(--red)">${fmt(d.limiting.formula)}</div>
  </div>
  <div class="stoich-answer-box" style="margin-top:10px">
    <div class="stoich-answer-label">المردود النظري لـ ${fmt(d.productFormula)}</div>
    <div class="stoich-answer-val">${fmtSci(d.theoreticalMass)} <span>g</span></div>
  </div>
  <div class="result-section-title">جدول المقارنة</div>
  <table class="verify-table">
    <thead><tr><th>المتفاعل</th><th>الكتلة</th><th>MW</th><th>المولات</th><th>مولات الناتج</th><th>الحالة</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${d.results.map((r,i)=>stoichStep(i+1,
      `${fmt(r.formula)}: ${fmtSci(r.mass)}g ÷ ${r.mw.toFixed(3)} = ${fmtSci(r.molesR)} mol → ينتج ${fmtSci(r.molesProd)} mol من ${fmt(d.productFormula)}`
    )).join('')}
    ${stoichStep(d.results.length+1,`المتفاعل المحدد = <strong style="color:var(--red)">${fmt(d.limiting.formula)}</strong> (أقل مولات ناتج)`)}
    ${stoichStep(d.results.length+2,`المردود النظري = ${fmtSci(d.theoreticalMoles)} mol × ${d.prodMw.toFixed(3)} g/mol = <strong>${fmtSci(d.theoreticalMass)} g</strong>`)}
  </div>`;
}

function renderYieldResultModal(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">المردود النظري لـ ${fmt(d.fB)}</div>
    <div class="stoich-answer-val">${fmtSci(d.massB)} <span>g</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: كتلة ${fmt(d.fA)} = <strong>${fmtSci(d.massA)} g</strong>`)}
    ${stoichStep(2,`مولات ${fmt(d.fA)} = ${fmtSci(d.massA)} ÷ ${d.mwA.toFixed(3)} = <strong>${fmtSci(d.molesA)} mol</strong>`)}
    ${stoichStep(3,`مولات ${fmt(d.fB)} = ${fmtSci(d.molesA)} × (${d.cB}/${d.cA}) = <strong>${fmtSci(d.molesB)} mol</strong>`)}
    ${stoichStep(4,`المردود النظري = ${fmtSci(d.molesB)} × ${d.mwB.toFixed(3)} = <strong>${fmtSci(d.massB)} g</strong>`)}
  </div>`;
}

function renderPercentResultModal(d){
  const color=d.percentYield>90?'var(--green)':d.percentYield>70?'var(--orange)':'var(--red)';
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">المردود المئوي</div>
    <div class="stoich-answer-val" style="color:${color}">${d.percentYield.toFixed(2)}<span>%</span></div>
  </div>
  <div class="stoich-answer-box" style="margin-top:10px">
    <div class="stoich-answer-label">المردود النظري</div>
    <div class="stoich-answer-val">${fmtSci(d.massB)} <span>g</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`حساب المردود النظري لـ ${fmt(d.fB)}: <strong>${fmtSci(d.massB)} g</strong>`)}
    ${stoichStep(2,`الكتلة الفعلية من التجربة: <strong>${fmtSci(d.actualMass)} g</strong>`)}
    ${stoichStep(3,`المردود المئوي = (${fmtSci(d.actualMass)} ÷ ${fmtSci(d.massB)}) × 100 = <strong style="color:${color}">${d.percentYield.toFixed(2)}%</strong>`)}
  </div>`;
}

// ── Acid/Base/Ksp result renderers ──
function renderWeakAcidResult(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">pH المحلول</div>
    <div class="stoich-answer-val">${d.pH.toFixed(3)}</div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: Ka = <strong>${fmtSci(d.Ka)}</strong>، C = <strong>${fmtSci(d.C)} mol/L</strong>`)}
    ${stoichStep(2,`نسبة C/Ka = ${fmtSci(d.ratio)} → ${d.useApprox ? 'مقبول استخدام التقريب (≥100)' : 'النسبة أقل من 100، نستخدم الحل الدقيق (المعادلة التربيعية)'}`)}
    ${d.useApprox
      ? stoichStep(3,`بالتقريب: [H⁺] = √(Ka × C) = √(${fmtSci(d.Ka)} × ${fmtSci(d.C)}) = <strong>${fmtSci(d.H)} mol/L</strong>`)
      : stoichStep(3,`بالحل الدقيق: x² + Ka·x − Ka·C = 0 → [H⁺] = <strong>${fmtSci(d.H)} mol/L</strong>`)}
    ${stoichStep(4,`pH = −log[H⁺] = −log(${fmtSci(d.H)}) = <strong>${d.pH.toFixed(3)}</strong>`)}
    ${stoichStep(5,`نسبة التأين % = ([H⁺]/C) × 100 = <strong>${d.percentIonization.toFixed(3)}%</strong>`)}
  </div>`;
}

function renderWeakBaseResult(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">pH المحلول</div>
    <div class="stoich-answer-val">${d.pH.toFixed(3)}</div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`المعطى: Kb = <strong>${fmtSci(d.Kb)}</strong>، C = <strong>${fmtSci(d.C)} mol/L</strong>`)}
    ${stoichStep(2,`نسبة C/Kb = ${fmtSci(d.ratio)} → ${d.useApprox ? 'مقبول استخدام التقريب (≥100)' : 'النسبة أقل من 100، نستخدم الحل الدقيق'}`)}
    ${d.useApprox
      ? stoichStep(3,`بالتقريب: [OH⁻] = √(Kb × C) = <strong>${fmtSci(d.OH)} mol/L</strong>`)
      : stoichStep(3,`بالحل الدقيق: [OH⁻] = <strong>${fmtSci(d.OH)} mol/L</strong>`)}
    ${stoichStep(4,`pOH = −log[OH⁻] = <strong>${d.pOH.toFixed(3)}</strong>`)}
    ${stoichStep(5,`pH = 14 − pOH = 14 − ${d.pOH.toFixed(3)} = <strong>${d.pH.toFixed(3)}</strong>`)}
    ${stoichStep(6,`نسبة التأين % = <strong>${d.percentIonization.toFixed(3)}%</strong>`)}
  </div>`;
}

function renderConjugateKResult(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">${d.conjugateType} المترافق</div>
    <div class="stoich-answer-val" style="font-size:1.6rem">${fmtSci(d.conjugateK)}</div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`القانون: Ka × Kb = Kw = <strong>1.0 × 10⁻¹⁴</strong> (عند 25°C)`)}
    ${stoichStep(2,`المعطى: ${d.knownType} = <strong>${fmtSci(d.knownK)}</strong>`)}
    ${stoichStep(3,`${d.conjugateType} = Kw ÷ ${d.knownType} = 1.0×10⁻¹⁴ ÷ ${fmtSci(d.knownK)} = <strong>${fmtSci(d.conjugateK)}</strong>`)}
  </div>`;
}

function renderKspResult(d){
  return`<div class="stoich-answer-box">
    <div class="stoich-answer-label">الذوبانية المولية (s)</div>
    <div class="stoich-answer-val" style="font-size:1.6rem">${fmtSci(d.s)} <span>mol/L</span></div>
  </div>
  <div class="result-section-title">خطوات الحل</div>
  <div class="stoich-steps">
    ${stoichStep(1,`معادلة التفكك: <strong dir="ltr">${d.label}</strong>`)}
    ${stoichStep(2,`صيغة Ksp لهذا النوع: <strong dir="ltr">${d.formula}</strong>`)}
    ${stoichStep(3,`المعطى: Ksp = <strong>${fmtSci(d.Ksp)}</strong>`)}
    ${stoichStep(4,`s = (Ksp ÷ ${d.factor})^(1/${d.exponent}) = <strong>${fmtSci(d.s)} mol/L</strong>`)}
  </div>`;
}

// ═══════════════════════════════════════════════════════════
// 11. MODAL FORM TEMPLATES (the input forms shown inside modal)
// ═══════════════════════════════════════════════════════════
function eqInputBlock(idPrefix, placeholder){
  return`
    <div class="input-group">
      <label>المعادلة الكيميائية الموزونة</label>
      <div class="input-row">
        <input type="text" id="${idPrefix}-eq" placeholder="${placeholder}" autocomplete="off" spellcheck="false"/>
      </div>
      <div class="input-hint">💡 اكتب المعادلة موزونة مسبقاً، مثال: N2 + 3H2 → 2NH3</div>
    </div>`;
}

const MODAL_TEMPLATES = {

  molarity: () => `
    <div class="input-group">
      <label>المركب الكيميائي</label>
      <div class="input-row">
        <input type="text" id="mc-compound" placeholder="مثال: NaCl" autocomplete="off" spellcheck="false"/>
        <button class="btn-ghost small" id="mc-parse-btn">تحليل</button>
      </div>
      <div class="auto-fill-hint hidden" id="mc-mw-hint"></div>
    </div>
    <div class="stoich-form-grid">
      <div class="input-group">
        <label>الكتلة المولية (g/mol)</label>
        <input type="number" id="mc-mw" placeholder="تُملأ تلقائياً" step="any"/>
      </div>
      <div class="input-group">
        <label>كتلة المذاب (g)</label>
        <input type="number" id="mc-mass" placeholder="أدخل الكتلة" step="any"/>
      </div>
    </div>
    <div class="stoich-form-grid">
      <div class="input-group">
        <label>الحجم</label>
        <input type="number" id="mc-volume" placeholder="أدخل الحجم" step="any"/>
      </div>
      <div class="input-group">
        <label>الوحدة</label>
        <select id="mc-unit"><option value="L">لتر (L)</option><option value="mL">مللي لتر (mL)</option></select>
      </div>
    </div>
    <button class="btn-primary full-width" id="mc-calc-btn">احسب المولارية 🧪</button>
    <div id="mc-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  mass: () => `
    ${eqInputBlock('ms','مثال: Fe2O3 + 3CO → 2Fe + 3CO2')}
    <div class="stoich-form-grid">
      <div class="input-group"><label>المادة المعطاة (الصيغة)</label><input type="text" id="ms-from" placeholder="مثال: Fe2O3" autocomplete="off"/></div>
      <div class="input-group"><label>كتلتها (g)</label><input type="number" id="ms-from-val" placeholder="أدخل الكتلة" step="any"/></div>
    </div>
    <div class="input-group"><label>المادة المطلوبة (الصيغة)</label><input type="text" id="ms-to" placeholder="مثال: Fe" autocomplete="off"/></div>
    <button class="btn-primary full-width" id="ms-calc-btn">احسب الكتلة ⚖️</button>
    <div id="ms-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  volume: () => `
    ${eqInputBlock('vl','مثال: 2H2 + O2 → 2H2O')}
    <div class="stoich-form-grid">
      <div class="input-group"><label>المادة الغازية المعطاة</label><input type="text" id="vl-from" placeholder="مثال: H2" autocomplete="off"/></div>
      <div class="input-group"><label>حجمها عند STP</label><input type="number" id="vl-from-val" placeholder="أدخل الحجم" step="any"/></div>
    </div>
    <div class="input-group">
      <label>وحدة الحجم</label>
      <div class="unit-toggle-row">
        <button type="button" class="unit-toggle-btn active" id="vl-unit-L" data-unit="L">لتر (L)</button>
        <button type="button" class="unit-toggle-btn" id="vl-unit-mL" data-unit="mL">مللي لتر (mL)</button>
      </div>
      <input type="hidden" id="vl-unit" value="L"/>
    </div>
    <div class="input-group"><label>المادة الغازية المطلوبة</label><input type="text" id="vl-to" placeholder="مثال: H2O" autocomplete="off"/></div>
    <div class="input-hint">📌 يُفترض أن الغازات عند STP (0°C، 1 atm) — حجم المول = 22.4 L = 22400 mL</div>
    <button class="btn-primary full-width" id="vl-calc-btn">احسب الحجم 📦</button>
    <div id="vl-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  particles: () => `
    ${eqInputBlock('pt','مثال: N2 + 3H2 → 2NH3')}
    <div class="stoich-form-grid">
      <div class="input-group"><label>المادة المعطاة</label><input type="text" id="pt-from" placeholder="مثال: N2" autocomplete="off"/></div>
      <div class="input-group"><label>عدد مولاتها</label><input type="number" id="pt-from-val" placeholder="أدخل عدد المولات" step="any"/></div>
    </div>
    <div class="input-group"><label>المادة المطلوبة</label><input type="text" id="pt-to" placeholder="مثال: NH3" autocomplete="off"/></div>
    <div class="input-hint">📌 عدد أفوغادرو = 6.022 × 10²³ جسيم/مول</div>
    <button class="btn-primary full-width" id="pt-calc-btn">احسب عدد الجسيمات 🔴</button>
    <div id="pt-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  limiting: () => `
    ${eqInputBlock('lm','مثال: N2 + 3H2 → 2NH3')}
    <button class="btn-ghost" id="lm-load-btn" style="margin-bottom:14px">تحميل المتفاعلات من المعادلة</button>
    <div id="lm-inputs"></div>
    <div class="input-group" style="margin-top:12px">
      <label>الناتج المطلوب حسابه (الصيغة)</label>
      <input type="text" id="lm-product" placeholder="مثال: NH3" autocomplete="off"/>
    </div>
    <button class="btn-primary full-width" id="lm-calc-btn">حدد المتفاعل المحدد ⛔</button>
    <div id="lm-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  yield: () => `
    ${eqInputBlock('yd','مثال: N2 + 3H2 → 2NH3')}
    <div class="stoich-form-grid">
      <div class="input-group"><label>المادة المعطاة</label><input type="text" id="yd-from" placeholder="مثال: N2" autocomplete="off"/></div>
      <div class="input-group"><label>كتلتها (g)</label><input type="number" id="yd-from-val" placeholder="الكتلة بالغرام" step="any"/></div>
    </div>
    <div class="input-group"><label>الناتج المطلوب (الصيغة)</label><input type="text" id="yd-to" placeholder="مثال: NH3" autocomplete="off"/></div>
    <button class="btn-primary full-width" id="yd-calc-btn">احسب المردود النظري ✅</button>
    <div id="yd-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  percent: () => `
    ${eqInputBlock('pc','مثال: N2 + 3H2 → 2NH3')}
    <div class="stoich-form-grid">
      <div class="input-group"><label>المادة المعطاة</label><input type="text" id="pc-from" placeholder="مثال: N2" autocomplete="off"/></div>
      <div class="input-group"><label>كتلتها (g)</label><input type="number" id="pc-from-val" placeholder="الكتلة بالغرام" step="any"/></div>
    </div>
    <div class="input-group"><label>الناتج المطلوب (الصيغة)</label><input type="text" id="pc-to" placeholder="مثال: NH3" autocomplete="off"/></div>
    <div class="input-group"><label>الكتلة الفعلية للناتج (g) — من التجربة</label><input type="number" id="pc-actual" placeholder="الكتلة الفعلية" step="any"/></div>
    <button class="btn-primary full-width" id="pc-calc-btn">احسب المردود المئوي 📊</button>
    <div id="pc-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  periodic: () => `
    <div class="input-group">
      <label>رمز العنصر الكيميائي</label>
      <div class="input-row">
        <input type="text" id="pd-element" placeholder="مثال: Fe أو Na أو O" autocomplete="off" spellcheck="false"/>
        <button class="btn-primary" id="pd-calc-btn">عرض البيانات 🧬</button>
      </div>
      <div class="input-hint">💡 اكتب الرمز الكيميائي للعنصر — غير حساس لحالة الأحرف (Fe، fe، FE كلها تعمل)</div>
    </div>
    <div class="examples-row">
      <span class="examples-label">أمثلة:</span>
      <button class="example-chip" data-pd="H">H</button>
      <button class="example-chip" data-pd="O">O</button>
      <button class="example-chip" data-pd="Na">Na</button>
      <button class="example-chip" data-pd="Fe">Fe</button>
      <button class="example-chip" data-pd="C">C</button>
      <button class="example-chip" data-pd="Cl">Cl</button>
      <button class="example-chip" data-pd="Ca">Ca</button>
      <button class="example-chip" data-pd="Au">Au</button>
    </div>
    <div id="pd-result" class="result-area hidden" style="margin-top:16px"></div>
  `,

  // ── ORGANIC CHEMISTRY (fully implemented) ──
  'org-solubility': () => renderOrganicSolubilityAcidity(),
  'org-electronic': () => renderElectronicEffects(),
  'org-diagnostic': () => renderDiagnosticTests(),
  'org-spectroscopy': () => renderSpectroscopyMain(),

  // ── INORGANIC / THERMO / ELECTRO (coming soon placeholders) ──
  'inorg-coordination': () => renderCoordinationAnalyzer(),
  'inorg-ligands': () => renderLigandGuide(),
  'thermo-entropy': () => renderEntropyCalculator(),
  'thermo-gibbs': () => renderGibbsCalculator(),
  'thermo-hess': () => renderHessCalculator(),
  'electro-faraday': () => renderFaradayCalculator(),
  'electro-nernst': () => renderNernstCalculator(),
};

// ═══════════════════════════════════════════════════════════
// 13. ADVANCED TOPICS — ORGANIC CHEMISTRY DATA & CONTENT
// ═══════════════════════════════════════════════════════════

// ── 1) الذوبانية والحامضية في المركبات العضوية ──
const ORGANIC_FUNCTIONAL_GROUPS = [
  { name:'الكحولات (Alcohols)', formula:'R–OH', pKa:'16–18', acidity:'ضعيفة جداً', solubility:'تذوب في الماء (السلاسل القصيرة) بسبب الرابطة الهيدروجينية؛ تقل الذوبانية مع زيادة طول السلسلة الكربونية', example:'CH₃CH₂OH (إيثانول)' },
  { name:'الفينولات (Phenols)', formula:'Ar–OH', pKa:'~10', acidity:'أقوى من الكحولات (الحلقة العطرية تُثبّت الشحنة السالبة بالرنين)', solubility:'ذوبانية محدودة في الماء، تزداد بوجود مجموعات مزحرفة (نترو) للحلقة', example:'C₆H₅OH (فينول)' },
  { name:'حمض الكربوكسيل (Carboxylic Acids)', formula:'R–COOH', pKa:'~4–5', acidity:'حمضية واضحة (أقوى من الكحول والفينول)', solubility:'ذوبانية عالية في الماء للسلاسل القصيرة (رابطة هيدروجينية ثنائية)، تقل مع زيادة الطول', example:'CH₃COOH (حمض الأسيتيك)' },
  { name:'الأمينات (Amines)', formula:'R–NH₂', pKa:'~10–11 (للحمض المرافق)', acidity:'قاعدية (وليست حمضية) — تتفاعل كقاعدة برونستد', solubility:'تذوب جيداً في الماء للسلاسل القصيرة بسبب الرابطة الهيدروجينية مع N', example:'CH₃NH₂ (ميثيل أمين)' },
  { name:'الإيثرات (Ethers)', formula:'R–O–R′', pKa:'—', acidity:'غير حمضية ولا قاعدية بشكل ملحوظ', solubility:'ذوبانية ضعيفة–متوسطة، لا تشكل رابطة هيدروجينية مع نفسها لكنها تقبلها من الماء', example:'CH₃OCH₃ (ثنائي ميثيل الإيثر)' },
  { name:'الألدهيدات والكيتونات', formula:'R–CHO / R–CO–R′', pKa:'~20 (الهيدروجين α)', acidity:'غير حمضية بشكل مباشر، لكن هيدروجين α حمضي ضعيف', solubility:'السلاسل القصيرة تذوب في الماء (رابطة هيدروجينية مع ذرة O)', example:'CH₃CHO (أسيتالدهيد)' },
  { name:'الإسترات (Esters)', formula:'R–COO–R′', pKa:'—', acidity:'غير حمضية', solubility:'ذوبانية محدودة، تقل بشدة مع زيادة طول السلسلة', example:'CH₃COOCH₃ (أسيتات الميثيل)' },
  { name:'الأميدات (Amides)', formula:'R–CONH₂', pKa:'~25 (شديد الضعف كحمض)', acidity:'أضعف الحمضية بين مشتقات الكربوكسيل؛ قاعدية ضعيفة جداً (الرنين يُقلل التوفر على N)', solubility:'ذوبانية جيدة للسلاسل القصيرة (رابطتان هيدروجينيتان: N-H وC=O)', example:'CH₃CONH₂ (أسيتاميد)' },
];
// ── 2) السلاسل الإلكترونية العضوية (التأثيرات الإلكترونية) ──
const ELECTRONIC_EFFECTS = [
  { name:'التأثير الحثي الموجب (+I)', desc:'مجموعات تدفع الإلكترونات عبر الروابط السيجما (σ)، تزيد كثافة الإلكترونات على الكربون المجاور', examples:'الألكيل (CH₃, C₂H₅)، المجموعات المعدنية', effect:'يُضعف الحمضية، يُقوّي القاعدية، يُثبّت الشحنة الموجبة (الكاتيون)' },
  { name:'التأثير الحثي السالب (−I)', desc:'مجموعات تجذب الإلكترونات عبر الروابط السيجما، تُقلل كثافة الإلكترونات على الكربون المجاور', examples:'الهالوجينات (F>Cl>Br>I)، NO₂، CN، COOH، OH', effect:'يُقوّي الحمضية، يُضعف القاعدية، يُثبّت الشحنة السالبة (الأنيون)' },
  { name:'التأثير الترافقي الموجب (+M / +R)', desc:'مجموعات تتبرع بزوج إلكترونات حر إلى نظام π مترافق عبر الرنين', examples:'NH₂, OH, OR, NHR, الهالوجينات (ضعيف)', effect:'يزيد كثافة الإلكترونات في الحلقة العطرية، يُوجّه للموضع أورثو/بارا في الاستبدال العطري' },
  { name:'التأثير الترافقي السالب (−M / −R)', desc:'مجموعات تجذب إلكترونات π عبر الرنين بسبب وجود رابطة مضاعفة مع ذرة كهروسالبة', examples:'NO₂, CN, COOH, CHO, C=O, SO₃H', effect:'يُقلل كثافة الإلكترونات في الحلقة، يُوجّه للموضع ميتا في الاستبدال العطري' },
  { name:'التأثير الفائق (Hyperconjugation)', desc:'تداخل رابطة سيجما (C-H أو C-C) المجاورة مع نظام π أو مدار خالٍ، يُثبّت الكاتيونات والروابط الثنائية', examples:'كاتيون ثالثي البوتيل أكثر ثباتاً من الأولي', effect:'يزيد ثبات الكاتيونات الموجبة كلما زاد عدد روابط C-H المجاورة (3° > 2° > 1°)' },
  { name:'تأثير الرنين (Resonance)', desc:'توزّع الشحنة أو الإلكترونات على عدة ذرات عبر بنى رنينية متكافئة أو غير متكافئة', examples:'البنزين، الكاربوكسيلات، الفينولات', effect:'يزيد الثبات الحراري الديناميكي للجزيء أو الأيون كلما زاد عدد بنى الرنين الفعالة' },
];

// ── 3) تشخيص المركبات العضوية من الرسم (اختبارات كاشفة كلاسيكية) ──
const ORGANIC_DIAGNOSTIC_TESTS = [
  { test:'كاشف توللنز (Tollens\')', usedFor:'الألدهيدات', positiveResult:'يترسب مرآة فضية على جدار الأنبوب', negativeResult:'لا تغيّر (الكيتونات لا تتفاعل)', chemistry:'Ag(NH₃)₂⁺ يُختزل إلى Ag الفضي بواسطة الألدهيد الذي يتأكسد إلى حمض كربوكسيلي' },
  { test:'كاشف فهلنج/بندكت', usedFor:'السكريات المختزلة والألدهيدات', positiveResult:'ترسب أحمر طابوقي (Cu₂O)', negativeResult:'يبقى أزرقاً (لا تفاعل)', chemistry:'Cu²⁺ الأزرق يُختزل إلى Cu⁺ (أكسيد النحاسوز الأحمر)' },
  { test:'كاشف 2,4-DNP (دينيتروفينيل هيدرازين)', usedFor:'الألدهيدات والكيتونات (C=O)', positiveResult:'ترسب أصفر/برتقالي', negativeResult:'لا ترسب', chemistry:'تكوين هيدرازون أصفر-برتقالي عبر تفاعل تكثيف مع الكربونيل' },
  { test:'كاشف برومين/ماء البروم', usedFor:'الألكينات والفينولات', positiveResult:'يزول لون البروم البرتقالي بسرعة', negativeResult:'يبقى لون البروم', chemistry:'إضافة البروم على الرابطة الثنائية (للألكين) أو استبدال على الحلقة (للفينول)' },
  { test:'كاشف لوكاس (ZnCl₂/HCl)', usedFor:'تمييز الكحولات (أولي/ثانوي/ثالثي)', positiveResult:'عكارة فورية = ثالثي، بعد دقائق = ثانوي', negativeResult:'لا عكارة (أو بعد تسخين) = أولي', chemistry:'يتكون كلوريد الألكيل غير الذائب الذي يُسبب العكارة، والسرعة تعتمد على ثبات الكاتيون' },
  { test:'كاشف فهلنج لحمض الكربوكسيل (NaHCO₃)', usedFor:'الكشف عن وجود حمض كربوكسيلي', positiveResult:'فوران غازي (CO₂) فوري', negativeResult:'لا فوران', chemistry:'الحمض يتفاعل مع البيكربونات منتجاً CO₂ وماء وملح الصوديوم' },
  { test:'اختبار الأيودوفورم', usedFor:'الكشف عن مجموعة CH₃CO- (ميثيل كيتون) أو الكحول الثانوي CH₃CH(OH)-', positiveResult:'ترسب أصفر له رائحة مميزة (يودوفورم CHI₃)', negativeResult:'لا ترسب أصفر', chemistry:'يتكون CHI₃ الأصفر من تفاعل اليود مع القلوي على مجموعة الميثيل كيتون' },
  { test:'كاشف كلوريد الحديد الثالث FeCl₃', usedFor:'الفينولات', positiveResult:'لون بنفسجي/أزرق/أخضر مميز', negativeResult:'لا تغيّر لون', chemistry:'يتكون معقد لوني بين أيون الفينوكسيد وأيون الحديد الثالث' },
];

// ── 4) الأطياف (IR, NMR, UV-Vis, Mass) ──
const SPECTROSCOPY_DATA = {
  IR: {
    title:'الأشعة تحت الحمراء (IR Spectroscopy)',
    principle:'يقيس امتصاص الجزيء للأشعة تحت الحمراء بسبب اهتزاز الروابط (تمطط وانحناء)؛ كل نوع رابطة يمتص عند تردد (عدد موجي) مميز',
    table:[
      { group:'O-H (كحول، حمض)', range:'3200–3550 cm⁻¹', note:'حزمة عريضة' },
      { group:'N-H (أمين، أميد)', range:'3300–3500 cm⁻¹', note:'حزمة متوسطة، أحياناً مزدوجة' },
      { group:'C-H (sp³)', range:'2850–2960 cm⁻¹', note:'حزمة حادة' },
      { group:'C-H (sp² عطري/ألكيني)', range:'3000–3100 cm⁻¹', note:'حزمة حادة' },
      { group:'C≡C / C≡N', range:'2100–2260 cm⁻¹', note:'حزمة حادة ضعيفة–متوسطة' },
      { group:'C=O (كربونيل)', range:'1650–1750 cm⁻¹', note:'حزمة قوية حادة — أهم حزمة تشخيصية' },
      { group:'C=C (ألكين)', range:'1620–1680 cm⁻¹', note:'حزمة متوسطة' },
      { group:'C=C عطري (حلقة بنزين)', range:'1450–1600 cm⁻¹', note:'حزم متعددة متوسطة' },
      { group:'C-O (إيثر، إستر، كحول)', range:'1000–1300 cm⁻¹', note:'حزمة قوية' },
    ]
  },
  NMR: {
    title:'الرنين المغناطيسي النووي (¹H NMR)',
    principle:'يقيس بيئة ذرات الهيدروجين المختلفة في الجزيء بناءً على الانزياح الكيميائي (δ) الناتج عن الحماية المغناطيسية المحيطة بالنواة',
    table:[
      { group:'R-CH₃ (ألكيل)', range:'δ 0.9–1.3 ppm', note:'منطقة الألكيل المشبع' },
      { group:'R-CH₂-R', range:'δ 1.2–1.4 ppm', note:'قريب من الميثيل' },
      { group:'C=C-H (فينيل/ألكيني)', range:'δ 4.5–6.5 ppm', note:'هيدروجين الألكين' },
      { group:'Ar-H (عطري)', range:'δ 6.5–8.5 ppm', note:'حلقة البنزين' },
      { group:'R-CHO (ألدهيد)', range:'δ 9.5–10.5 ppm', note:'منطقة مميزة جداً' },
      { group:'R-COOH (حمض)', range:'δ 10–13 ppm', note:'حزمة عريضة متغيرة' },
      { group:'R-OH (كحول)', range:'δ 1–5 ppm (متغير)', note:'يعتمد على التركيز والمذيب' },
      { group:'R-O-CH₃ (إيثر/إستر)', range:'δ 3.3–4.5 ppm', note:'قرب ذرة الأكسجين' },
    ]
  },
  UV: {
    title:'فوق البنفسجي–المرئي (UV-Vis Spectroscopy)',
    principle:'يقيس امتصاص الجزيء للضوء فوق البنفسجي/المرئي بسبب انتقال الإلكترونات بين المستويات (π→π*, n→π*)؛ يكشف عن أنظمة الترافق (Conjugation)',
    table:[
      { group:'رابطة مزدوجة منعزلة (C=C)', range:'λmax ≈ 170–180 nm', note:'انتقال π→π*' },
      { group:'ديين مترافق (C=C-C=C)', range:'λmax ≈ 220–250 nm', note:'يزداد λmax مع زيادة الترافق' },
      { group:'كربونيل (C=O)', range:'λmax ≈ 270–300 nm (ضعيف)', note:'انتقال n→π*' },
      { group:'حلقة بنزين (عطري)', range:'λmax ≈ 254 nm', note:'انتقال π→π* مميز للأنظمة العطرية' },
      { group:'أنظمة متعددة الترافق (كاروتينات)', range:'λmax > 400 nm (ملوّن)', note:'كل ازدياد ترافق يزيد λmax (تأثير باثوكرومي)' },
    ]
  },
  MASS: {
    title:'مطيافية الكتلة (Mass Spectrometry)',
    principle:'يقيس نسبة الكتلة إلى الشحنة (m/z) للجزيء المؤيَّن وشذراته؛ القمة الأعلى m/z تمثل الوزن الجزيئي (الأيون الجزيئي M⁺)',
    table:[
      { group:'الأيون الجزيئي M⁺', range:'m/z = الكتلة الجزيئية الكاملة', note:'قد يكون ضعيفاً أو غائباً في بعض المركبات غير المستقرة' },
      { group:'فقدان CH₃ (مجموعة ميثيل)', range:'M − 15', note:'شذرة شائعة جداً' },
      { group:'فقدان H₂O', range:'M − 18', note:'شائع في الكحولات' },
      { group:'فقدان CO', range:'M − 28', note:'شائع في الألدهيدات والكيتونات' },
      { group:'فقدان COOH', range:'M − 45', note:'شائع في الأحماض الكربوكسيلية' },
      { group:'شذرة الأسيل R-C≡O⁺', range:'حسب R', note:'قمة قوية شائعة في الكيتونات/الألدهيدات' },
    ]
  }
};

// ═══════════════════════════════════════════════════════════
// 13b.ACID-BASE & SOLUBILITY CALCULATION ENGINE (Ka / Kb / Ksp)
// ═══════════════════════════════════════════════════════════

// Weak acid ionization: HA + H2O ⇌ H3O+ + A-
// Ka = [H+][A-]/[HA] ; approximate x = sqrt(Ka*C) when C/Ka >= 100 (valid approximation),
// otherwise solve exactly via quadratic: x^2 + Ka*x - Ka*C = 0
function calcWeakAcidPH(Ka, C){
  if(isNaN(Ka)||Ka<=0) throw new Error('أدخل قيمة Ka صحيحة أكبر من صفر');
  if(isNaN(C)||C<=0) throw new Error('أدخل التركيز الابتدائي (C) أكبر من صفر');
  const ratio = C/Ka;
  const useApprox = ratio >= 100;
  let x;
  if(useApprox){
    x = Math.sqrt(Ka*C);
  } else {
    x = (-Ka + Math.sqrt(Ka*Ka + 4*Ka*C)) / 2;
  }
  const H = x;
  const pH = -Math.log10(H);
  const percentIonization = (x/C)*100;
  return { Ka, C, H, pH, percentIonization, useApprox, ratio };
}

// Weak base ionization: B + H2O ⇌ BH+ + OH-
function calcWeakBasePOH(Kb, C){
  if(isNaN(Kb)||Kb<=0) throw new Error('أدخل قيمة Kb صحيحة أكبر من صفر');
  if(isNaN(C)||C<=0) throw new Error('أدخل التركيز الابتدائي (C) أكبر من صفر');
  const ratio = C/Kb;
  const useApprox = ratio >= 100;
  let x;
  if(useApprox){
    x = Math.sqrt(Kb*C);
  } else {
    x = (-Kb + Math.sqrt(Kb*Kb + 4*Kb*C)) / 2;
  }
  const OH = x;
  const pOH = -Math.log10(OH);
  const pH = 14 - pOH;
  const percentIonization = (x/C)*100;
  return { Kb, C, OH, pOH, pH, percentIonization, useApprox, ratio };
}

// Ka <-> Kb conjugate relationship: Ka . Kb = Kw = 1.0e-14 (at 25C)
function calcConjugateK(knownK, knownType){
  if(isNaN(knownK)||knownK<=0) throw new Error('أدخل قيمة ثابت صحيحة أكبر من صفر');
  const Kw = 1.0e-14;
  const conjugateK = Kw/knownK;
  return { knownK, knownType, conjugateK, conjugateType: knownType==='Ka'?'Kb':'Ka', Kw };
}

// Ksp -> molar solubility, supporting common stoichiometric patterns
const KSP_PATTERNS = {
  AB:   { factor:1,   exponent:2, label:'MX → M⁺ + X⁻',        formula:'Ksp = s²' },
  AB2:  { factor:4,   exponent:3, label:'MX₂ → M²⁺ + 2X⁻',     formula:'Ksp = 4s³' },
  A2B:  { factor:4,   exponent:3, label:'M₂X → 2M⁺ + X²⁻',     formula:'Ksp = 4s³' },
  AB3:  { factor:27,  exponent:4, label:'MX₃ → M³⁺ + 3X⁻',     formula:'Ksp = 27s⁴' },
  A2B3: { factor:108, exponent:5, label:'M₂X₃ → 2M³⁺ + 3X²⁻',  formula:'Ksp = 108s⁵' },
};

function calcSolubilityFromKsp(Ksp, pattern){
  if(isNaN(Ksp)||Ksp<=0) throw new Error('أدخل قيمة Ksp صحيحة أكبر من صفر');
  const p = KSP_PATTERNS[pattern];
  if(!p) throw new Error('نوع الملح غير معروف');
  const s = Math.pow(Ksp/p.factor, 1/p.exponent);
  return { Ksp, pattern, s, ...p };
}

// ═══════════════════════════════════════════════════════════
// 14. ADVANCED TOPICS — MODAL RENDERERS (Organic Chemistry)
// ═══════════════════════════════════════════════════════════

function renderOrganicSolubilityAcidity(){
  return `
    <div class="acid-base-tabs">
      <button type="button" class="ab-tab-btn active" data-ab="acid">حمض ضعيف (Ka)</button>
      <button type="button" class="ab-tab-btn" data-ab="base">قاعدة ضعيفة (Kb)</button>
      <button type="button" class="ab-tab-btn" data-ab="ksp">ذوبانية (Ksp)</button>
      <button type="button" class="ab-tab-btn" data-ab="ref">جدول مرجعي</button>
    </div>

    <div class="ab-panel active" id="ab-panel-acid">
      <div class="input-hint">📌 لحمض ضعيف HA: Ka = [H⁺][A⁻] / [HA] — يُحسب [H⁺] ثم pH</div>
      <div class="stoich-form-grid">
        <div class="input-group"><label>ثابت التأين الحمضي Ka</label><input type="number" id="ab-ka" placeholder="مثال: 0.000018" step="any"/></div>
        <div class="input-group"><label>التركيز الابتدائي C (mol/L)</label><input type="number" id="ab-ka-c" placeholder="مثال: 0.1" step="any"/></div>
      </div>
      <div class="input-hint">💡 لكتابة الأس العلمي استخدمي الصيغة: 1.8e-5 (تعني 1.8 × 10⁻⁵)</div>
      <button class="btn-primary full-width" id="ab-ka-btn">احسب pH 🧪</button>
      <div id="ab-ka-result" class="result-area hidden" style="margin-top:16px"></div>
    </div>

    <div class="ab-panel" id="ab-panel-base">
      <div class="input-hint">📌 لقاعدة ضعيفة B: Kb = [BH⁺][OH⁻] / [B] — يُحسب [OH⁻] ثم pOH ثم pH</div>
      <div class="stoich-form-grid">
        <div class="input-group"><label>ثابت التأين القاعدي Kb</label><input type="number" id="ab-kb" placeholder="مثال: 0.000018" step="any"/></div>
        <div class="input-group"><label>التركيز الابتدائي C (mol/L)</label><input type="number" id="ab-kb-c" placeholder="مثال: 0.1" step="any"/></div>
      </div>
      <button class="btn-primary full-width" id="ab-kb-btn">احسب pH 🧪</button>
      <div id="ab-kb-result" class="result-area hidden" style="margin-top:16px"></div>
      <div class="result-section-title">العلاقة بين Ka و Kb المترافقين</div>
      <div class="input-hint">📌 العلاقة: Ka × Kb = Kw = 1.0 × 10⁻¹⁴ (عند 25°C)</div>
      <div class="stoich-form-grid">
        <div class="input-group"><label>الثابت المعروف</label><input type="number" id="ab-conj-k" placeholder="مثال: 0.000018" step="any"/></div>
        <div class="input-group">
          <label>نوعه</label>
          <select id="ab-conj-type"><option value="Ka">Ka (حمض)</option><option value="Kb">Kb (قاعدة)</option></select>
        </div>
      </div>
      <button class="btn-primary full-width" id="ab-conj-btn">احسب الثابت المترافق 🔁</button>
      <div id="ab-conj-result" class="result-area hidden" style="margin-top:16px"></div>
    </div>

    <div class="ab-panel" id="ab-panel-ksp">
      <div class="input-hint">📌 أدخل Ksp ونوع الملح حسب نسبة الأيونات الناتجة عن الذوبان</div>
      <div class="input-group">
        <label>نوع الملح (نسبة الأيونات)</label>
        <select id="ab-ksp-pattern">
          <option value="AB">MX → M⁺ + X⁻  (مثل AgCl)</option>
          <option value="AB2">MX₂ → M²⁺ + 2X⁻  (مثل Mg(OH)₂)</option>
          <option value="A2B">M₂X → 2M⁺ + X²⁻  (مثل Ag₂CO₃ — نفس الصيغة)</option>
          <option value="AB3">MX₃ → M³⁺ + 3X⁻  (مثل Fe(OH)₃)</option>
          <option value="A2B3">M₂X₃ → 2M³⁺ + 3X²⁻  (مثل Al₂S₃)</option>
        </select>
      </div>
      <div class="input-group"><label>ثابت حاصل الذوبانية Ksp</label><input type="number" id="ab-ksp" placeholder="مثال: 0.00000000018" step="any"/></div>
      <button class="btn-primary full-width" id="ab-ksp-btn">احسب الذوبانية 🌊</button>
      <div id="ab-ksp-result" class="result-area hidden" style="margin-top:16px"></div>
    </div>

    <div class="ab-panel" id="ab-panel-ref">
      <div class="input-hint" style="margin-bottom:14px">📌 جدول مرجعي يوضح الذوبانية والحامضية النسبية للمجموعات الوظيفية العضوية الأساسية</div>
      ${ORGANIC_FUNCTIONAL_GROUPS.map(g=>`
        <div class="organic-card">
          <div class="organic-card-header">
            <span class="organic-card-name">${g.name}</span>
            <span class="organic-card-formula" dir="ltr">${g.formula}</span>
          </div>
          <table class="details-table">
            <tr><td>مثال</td><td dir="ltr">${g.example}</td></tr>
            <tr><td>pKa التقريبي</td><td dir="ltr">${g.pKa}</td></tr>
            <tr><td>الحامضية</td><td>${g.acidity}</td></tr>
            <tr><td>الذوبانية في الماء</td><td>${g.solubility}</td></tr>
          </table>
        </div>
      `).join('')}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// 14b. ELECTRONIC EFFECTS DETECTOR — analyze a typed compound/formula
// ═════════════════════════
const ELECTRONIC_GROUP_SIGNATURES = [
  // Strong -I withdrawing halogens / nitro / cyano / carbonyl-type groups
  { pattern:/NO2/i,            group:'NO₂ (نيترو)',        effectIdx:1, extra:'من أقوى المجموعات السالبة الحثّ والترافق معاً (−I و −M)؛ تُضعف الحمضية لو متبرعة، وتُقوّيها لو على حمض/فينول' },
  { pattern:/C#N|CN(?!a)/i,     group:'CN (سيانو/نتريل)',   effectIdx:1, extra:'تجذب الإلكترونات بقوة عبر الرابطة الثلاثية C≡N (−I و −M)' },
  { pattern:/COOH|CO2H/i,       group:'COOH (كربوكسيل)',    effectIdx:1, extra:'تُسحب الإلكترونات بسبب الأكسجين الكهروسالب المضاعف، تزيد حمضية أي حلقة أو سلسلة متصلة بها' },
  { pattern:/CHO/i,             group:'CHO (ألدهيد)',       effectIdx:1, extra:'الكربونيل يسحب الإلكترونات (−I)، ويشارك في رنين سالب (−M) عند الارتباط بحلقة عطرية' },
  { pattern:/C=O|CO(?![A-Za-z])/i, group:'C=O (كربونيل عام)', effectIdx:1, extra:'الأكسجين الكهروسالب يسحب كثافة الإلكترونات عبر سيجما وعبر بي (في الأنظمة المترافقة)' },
  { pattern:/SO3H/i,            group:'SO₃H (سلفونيك)',     effectIdx:1, extra:'مجموعة قوية السحب الحثّي بسبب الكبريت المؤكسد بثلاث ذرات أكسجين' },
  { pattern:/F(?![a-z])/,       group:'F (فلور)',           effectIdx:1, extra:'أقوى هالوجين سحباً حثّياً (−I) لكنه متبرع ضعيف بالرنين (+M) عبر زوج إلكترون حر' },
  { pattern:/Cl(?!O)/,          group:'Cl (كلور)',          effectIdx:1, extra:'سالب حثّياً (−I) ومتبرع ضعيف بالرنين (+M)؛ التأثير الحثّي يغلب عادة' },
  { pattern:/Br(?!O)/,          group:'Br (بروم)',          effectIdx:1, extra:'سالب حثّياً أضعف من الكلور، يتبرع بالرنين بدرجة محدودة' },
  { pattern:/\bI(?![a-z])/,    group:'I (يود)',            effectIdx:1, extra:'أضعف الهالوجينات سحباً حثّياً، أقواها تبرعاً بالرنين نسبياً بينها' },

  // Strong +M donors with lone pairs (amines, hydroxyl, ether/alkoxy)
  { pattern:/NH2/i,             group:'NH₂ (أمين)',         effectIdx:2, extra:'زوج الإلكترون الحر على النيتروجين يتبرع بقوة للنظام π المجاور (+M)، يوجّه أورثو/بارا في الاستبدال العطري' },
  { pattern:{ test: s => { const stripped = s.replace(/COOH|CO2H/gi,''); return /OH|HO/i.test(stripped); } },
    group:'OH (هيدروكسيل)', effectIdx:2, extra:'الأكسجين يتبرع بزوج إلكترون حر بالرنين (+M) في الفينولات، مع تأثير حثّي سالب (−I) ضعيف منافس' },
  { pattern:/OCH3|OC2H5|OR/i,   group:'OR (ألكوكسي/إيثر)',  effectIdx:2, extra:'مشابه للهيدروكسيل: تبرع بالرنين (+M) يغلب على السحب الحثّي (−I)' },
  { pattern:/NHCH3|NHR|N\(CH3\)2/i, group:'NR₂/NHR (أمين ثانوي/ثالثي)', effectIdx:2, extra:'تبرع قوي بالرنين، أقوى من الهيدروكسيل بسبب كهروسالبية النيتروجين الأقل من الأكسجين' },

  // Alkyl / metal groups (inductive donors, +I)
  { pattern:/^CH3$|^C2H5$|\(CH3\)3C|tBu/i, group:'الألكيل (CH₃, C₂H₅, ...)', effectIdx:0, extra:'يتبرع بالإلكترونات عبر الرابطة σ (+I)؛ كلما زاد التفرّع زاد التأثير (3° > 2° > 1°)' },
];

// Scan the user's typed text for any matching functional-group signatures.
// Returns an array of { group, effect (full object from ELECTRONIC_EFFECTS), extra }
function detectElectronicEffects(rawInput){
  const text = String(rawInput || '').trim();
  if(!text) throw new Error('أدخل صيغة المركب أو اسم المجموعة الوظيفية');

  const matches = [];
  for(const sig of ELECTRONIC_GROUP_SIGNATURES){
    if(sig.pattern.test(text)){
      matches.push({
        group: sig.group,
        effect: ELECTRONIC_EFFECTS[sig.effectIdx],
        extra: sig.extra,
      });
    }
  }

  if(matches.length === 0){
    throw new Error(`لم يتم العثور على مجموعة وظيفية معروفة في "${text}". جرّبي كتابة الصيغة كاملة (مثل CH3COOH أو C6H5NO2) أو اسم المجموعة (مثل NO2, OH, NH2)`);
  }

  // Deduplicate by group name (avoid showing the same group twice if pattern overlaps)
  const seen = new Set();
  return matches.filter(m=>{
    if(seen.has(m.group)) return false;
    seen.add(m.group);
    return true;
  });
}

function renderElectronicEffectsDetectorResult(matches, rawInput){
  return `
    <div class="result-section-title">نتيجة التحليل لـ "${fmt(rawInput)}"</div>
    ${matches.map(m=>`
      <div class="organic-card">
        <div class="organic-card-header">
          <span class="organic-card-name">${m.group}</span>
        </div>
        <table class="details-table">
          <tr><td>نوع التأثير</td><td><strong style="color:var(--purple)">${m.effect.name}</strong></td></tr>
          <tr><td>الوصف</td><td>${m.effect.desc}</td></tr>
          <tr><td>التأثير على الجزيء</td><td>${m.effect.effect}</td></tr>
          <tr><td>ملاحظة خاصة بهذه المجموعة</td><td>${m.extra}</td></tr>
        </table>
      </div>
    `).join('')}
  `;
}

function renderElectronicEffects(){
  return `
    <div class="acid-base-tabs">
      <button type="button" class="ee-tab-btn active" data-ee="detect">كشف التأثير 🔍</button>
      <button type="button" class="ee-tab-btn" data-ee="ref">جدول مرجعي</button>
    </div>

    <div class="ab-panel active" id="ee-panel-detect">
      <div class="input-group">
        <label>المركب أو المجموعة الوظيفية</label>
        <div class="input-row">
          <input type="text" id="ee-input" placeholder="مثال: C6H5NO2 أو NH2 أو CH3COOH" autocomplete="off" spellcheck="false"/>
          <button class="btn-primary" id="ee-btn">حدد التأثير ⚡</button>
        </div>
        <div class="input-hint">💡 اكتبي الصيغة الكاملة للمركب (مثل C6H5NO2) أو رمز المجموعة الوظيفية فقط (مثل NO2, OH, NH2, Cl)</div>
      </div>
      <div class="examples-row">
        <span class="examples-label">أمثلة:</span>
        <button class="example-chip" data-ee-ex="C6H5NO2">C6H5NO2</button>
        <button class="example-chip" data-ee-ex="C6H5NH2">C6H5NH2</button>
        <button class="example-chip" data-ee-ex="C6H5OH">C6H5OH</button>
        <button class="example-chip" data-ee-ex="CH3COOH">CH3COOH</button>
        <button class="example-chip" data-ee-ex="C6H5Cl">C6H5Cl</button>
        <button class="example-chip" data-ee-ex="CH3CHO">CH3CHO</button>
      </div>
      <div id="ee-result" class="result-area hidden" style="margin-top:16px"></div>
    </div>

    <div class="ab-panel" id="ee-panel-ref">
      <div class="input-hint" style="margin-bottom:14px">📌 التأثيرات الإلكترونية تُفسّر استقرار/عدم استقرار الجزيئات والأيونات الوسيطة في التفاعلات العضوية</div>
      ${ELECTRONIC_EFFECTS.map(e=>`
        <div class="organic-card">
          <div class="organic-card-header"><span class="organic-card-name">${e.name}</span></div>
          <table class="details-table">
            <tr><td>الوصف</td><td>${e.desc}</td></tr>
            <tr><td>أمثلة</td><td dir="ltr">${e.examples}</td></tr>
            <tr><td>التأثير على الجزيء</td><td>${e.effect}</td></tr>
          </table>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDiagnosticTests(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 اختبارات كاشفة كلاسيكية لتشخيص المجموعات الوظيفية العضوية معملياً</div>
    ${ORGANIC_DIAGNOSTIC_TESTS.map(t=>`
      <div class="organic-card">
        <div class="organic-card-header"><span class="organic-card-name">${t.test}</span></div>
        <table class="details-table">
          <tr><td>يُستخدم للكشف عن</td><td>${t.usedFor}</td></tr>
          <tr><td>النتيجة الموجبة ✅</td><td style="color:var(--green)">${t.positiveResult}</td></tr>
          <tr><td>النتيجة السالبة ❌</td><td style="color:var(--text-muted)">${t.negativeResult}</td></tr>
          <tr><td>التفسير الكيميائي</td><td>${t.chemistry}</td></tr>
        </table>
      </div>
    `).join('')}
  `;
}

function renderSpectroscopyTable(key){
  const d = SPECTROSCOPY_DATA[key];
  if(!d) return `<div class="error-box">❌ بيانات غير متوفرة</div>`;
  return `
    <div class="smart-reaction-header">
      <div class="smart-reaction-icon">📈</div>
      <div class="smart-reaction-info"><h3>${d.title}</h3><p>${d.principle}</p></div>
    </div>
    <table class="verify-table">
      <thead><tr><th>المجموعة / النوع</th><th>المدى</th><th>ملاحظة</th></tr></thead>
      <tbody>
        ${d.table.map(r=>`<tr>
          <td>${r.group}</td>
          <td dir="ltr" style="color:var(--green)">${r.range}</td>
          <td>${r.note}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  `;
}

function renderSpectroscopyMain(){
  const tabs = [
    {key:'IR', label:'IR — تحت الحمراء', icon:'🌡️'},
    {key:'NMR', label:'NMR — الرنين المغناطيسي', icon:'🧲'},
    {key:'UV', label:'UV-Vis — فوق البنفسجي', icon:'🔆'},
    {key:'MASS', label:'Mass — مطيافية الكتلة', icon:'⚛️'},
  ];
  return `
    <div class="spec-tabs">
      ${tabs.map((t,i)=>`<button class="spec-tab-btn ${i===0?'active':''}" data-spec="${t.key}">${t.icon} ${t.label}</button>`).join('')}
    </div>
    <div id="spec-content">${renderSpectroscopyTable('IR')}</div>
  `;
}

// ═══════════════════════════════════════════════════════════
// 16. COORDINATION CHEMISTRY ENGINE
// ═══════════════════════════
const LIGANDS = {
  'NH3':  { name:'أمونيا',                nameEn:'Ammonia',     charge:0,  denticity:1, donor:'N',  field:'strong' },
  'H2O':  { name:'ماء',                   nameEn:'Aqua',        charge:0,  denticity:1, donor:'O',  field:'weak'   },
  'OH':   { name:'هيدروكسو',              nameEn:'Hydroxo',     charge:-1, denticity:1, donor:'O',  field:'weak'   },
  'CN':   { name:'سيانو',                 nameEn:'Cyano',       charge:-1, denticity:1, donor:'C',  field:'strong' },
  'CO':   { name:'كربونيل',               nameEn:'Carbonyl',    charge:0,  denticity:1, donor:'C',  field:'strong' },
  'Cl':   { name:'كلورو',                 nameEn:'Chloro',      charge:-1, denticity:1, donor:'Cl', field:'weak'   },
  'Br':   { name:'برومو',                 nameEn:'Bromo',       charge:-1, denticity:1, donor:'Br', field:'weak'   },
  'F':    { name:'فلورو',                 nameEn:'Fluoro',      charge:-1, denticity:1, donor:'F',  field:'weak'   },
  'I':    { name:'يودو',                  nameEn:'Iodo',        charge:-1, denticity:1, donor:'I',  field:'weak'   },
  'NO2':  { name:'نيترو',                 nameEn:'Nitro',       charge:-1, denticity:1, donor:'N',  field:'strong' },
  'SCN':  { name:'ثيوسيانات',             nameEn:'Thiocyanato', charge:-1, denticity:1, donor:'S',  field:'weak'   },
  'NCS':  { name:'إيزوثيوسيانات',         nameEn:'Isothiocyanato', charge:-1, denticity:1, donor:'N', field:'weak' },
  'py':   { name:'بيريدين',               nameEn:'Pyridine',    charge:0,  denticity:1, donor:'N',  field:'moderate' },
  'PPh3': { name:'ثلاثي فينيل فوسفين',     nameEn:'Triphenylphosphine', charge:0, denticity:1, donor:'P', field:'strong' },
  'O':    { name:'أوكسو',                 nameEn:'Oxo',         charge:-2, denticity:1, donor:'O',  field:'strong' },
  'en':   { name:'إيثيلين ثنائي الأمين',  nameEn:'Ethylenediamine', charge:0, denticity:2, donor:'N,N', field:'strong' },
  'C2O4': { name:'أوكزالات',              nameEn:'Oxalato',     charge:-2, denticity:2, donor:'O,O', field:'weak'   },
  'bipy': { name:'ثنائي بيريدين',         nameEn:'Bipyridine',  charge:0,  denticity:2, donor:'N,N', field:'strong' },
  'phen': { name:'فينانثرولين',           nameEn:'Phenanthroline', charge:0, denticity:2, donor:'N,N', field:'strong' },
  'EDTA': { name:'رباعي خل ثنائي أمين الإيثيلين', nameEn:'EDTA', charge:-4, denticity:6, donor:'N,N,O,O,O,O', field:'strong' },
};

const DENTICITY_LABELS = {
  1:'أحادي المخلب (Monodentate)', 2:'ثنائي المخلب (Bidentate)',
  3:'ثلاثي المخلب (Tridentate)',  4:'رباعي المخلب (Tetradentate)',
  5:'خماسي المخلب (Pentadentate)',6:'سداسي المخلب (Hexadentate)',
};

// d-electron base count (= total valence d+s electrons in the neutral atom,
// i.e. the "d-block group number" convention) for common transition metals
const METAL_GROUP_D = {
  Sc:3, Ti:4, V:5, Cr:6, Mn:7, Fe:8, Co:9, Ni:10, Cu:11, Zn:12,
  Y:3,  Zr:4, Nb:5, Mo:6, Tc:7, Ru:8, Rh:9, Pd:10, Ag:11, Cd:12,
  La:3, Hf:4, Ta:5, W:6,  Re:7, Os:8, Ir:9, Pt:10, Au:11, Hg:12,
};

const METAL_NAMES_AR = {
  Sc:'سكانديوم',Ti:'تيتانيوم',V:'فاناديوم',Cr:'كروم',Mn:'منغنيز',Fe:'حديد',Co:'كوبالت',Ni:'نيكل',Cu:'نحاس',Zn:'زنك',
  Y:'يتريوم',Zr:'زيركونيوم',Nb:'نيوبيوم',Mo:'موليبدنوم',Tc:'تكنيشيوم',Ru:'روثينيوم',Rh:'روديوم',Pd:'بلاديوم',Ag:'فضة',Cd:'كادميوم',
  La:'لانثانوم',Hf:'هافنيوم',Ta:'تنتالوم',W:'تنغستن',Re:'رينيوم',Os:'أوزميوم',Ir:'إيريديوم',Pt:'بلاتين',Au:'ذهب',Hg:'زئبق',
};

const KNOWN_METALS_LIST = Object.keys(METAL_GROUP_D).sort((a,b)=>b.length-a.length);
const LIGAND_KEYS_SORTED = Object.keys(LIGANDS).sort((a,b)=>b.length-a.length);

// Parse a coordination formula like "[Co(NH3)6]3+" or "[Fe(CN)6]4-" or "[CoCl2(NH3)4]+"
function parseCoordinationFormula(raw){
  const input = String(raw).trim().replace(/\s/g,'');
  if(!input) throw new Error('أدخل الصيغة التناسقية');

  const bracketMatch = input.match(/^\[(.+)\](\d*)([+-])?$/);
  let innerContent, overallCharge = 0;
  if(bracketMatch){
    innerContent = bracketMatch[1];
    const chargeNum = bracketMatch[2] ? parseInt(bracketMatch[2]) : (bracketMatch[3] ? 1 : 0);
    const sign = bracketMatch[3] === '-' ? -1 : 1;
    overallCharge = chargeNum * sign;
  } else {
    throw new Error('الصيغة يجب أن تكون بصيغة [المعقد]الشحنة، مثال: [Co(NH3)6]3+');
  }

  // Find metal: scan outside parentheses first
  const withoutParens = innerContent.replace(/\([^)]*\)\d*/g, '·');
  let metal = null, metalIndex = -1;
  for(const m of KNOWN_METALS_LIST){
    const idx = withoutParens.indexOf(m);
    if(idx !== -1){ metal = m; metalIndex = innerContent.indexOf(m); break; }
  }
  if(!metal) throw new Error('لم يتم العثور على رمز فلز انتقالي معروف في الصيغة');

  let ligandsStr = innerContent.slice(0, metalIndex) + innerContent.slice(metalIndex + metal.length);

  const ligands = [];
  let i = 0;
  while(i < ligandsStr.length){
    if(ligandsStr[i] === '('){
      let depth=1, j=i+1;
      while(j<ligandsStr.length && depth>0){
        if(ligandsStr[j]==='(')depth++;
        if(ligandsStr[j]===')')depth--;
        j++;
      }
      const ligFormula = ligandsStr.slice(i+1, j-1);
      let countStr='';
      while(j<ligandsStr.length && /\d/.test(ligandsStr[j])) countStr += ligandsStr[j++];
      ligands.push({ formula: ligFormula, count: countStr?parseInt(countStr):1 });
      i = j;
    } else {
      let matched = false;
      for(const key of LIGAND_KEYS_SORTED){
        if(ligandsStr.slice(i, i+key.length) === key){
          let j = i + key.length;
          let countStr='';
          while(j<ligandsStr.length && /\d/.test(ligandsStr[j])) countStr += ligandsStr[j++];
          ligands.push({ formula:key, count: countStr?parseInt(countStr):1 });
          i = j; matched = true; break;
        }
      }
      if(!matched) i++;
    }
  }

  if(ligands.length === 0) throw new Error('لم يتم العثور على أي ليكاند معروف في الصيغة');
  for(const l of ligands){
    if(!LIGANDS[l.formula]) throw new Error(`الليكاند "${l.formula}" غير موجود في قاعدة البيانات`);
  }

  return { metal, ligands, overallCharge, raw: input };
}

function calcCoordinationNumber(ligands){
  return ligands.reduce((sum,l)=> sum + (LIGANDS[l.formula].denticity * l.count), 0);
}

function calcOxidationState(ligands, overallCharge){
  const totalLigandCharge = ligands.reduce((sum,l)=> sum + (LIGANDS[l.formula].charge * l.count), 0);
  return overallCharge - totalLigandCharge;
}

function calcDElectrons(metal, oxState){
  const base = METAL_GROUP_D[metal];
  if(base === undefined) return null;
  return base - oxState;
}

function overallFieldStrength(ligands){
  const strongCount = ligands.filter(l=>LIGANDS[l.formula].field==='strong').reduce((s,l)=>s+l.count,0);
  const weakCount    = ligands.filter(l=>LIGANDS[l.formula].field==='weak').reduce((s,l)=>s+l.count,0);
  return strongCount >= weakCount ? 'strong' : 'weak';
}

// Determine hybridization, geometry, and spin state via simple Valence Bond Theory (VBT),
// following the standard undergraduate-level rules:
//  CN=2 -> always sp, linear
//  CN=4 -> d10 always sp3/tetrahedral; d8+strong field -> dsp2/square planar; else sp3/tetrahedral
//  CN=6 -> low spin (d2sp3) only possible when d-count <= 6 AND field is strong;
//          otherwise sp3d2/high spin (d-count 7-10 ALWAYS high spin regardless of field,
//          since there is no room to free up 2 inner d-orbitals without violating the Pauli/octet limits)
function determineHybridization(CN, dElectrons, fieldStrength){
  if(CN === 2){
    return { hybridization:'sp', geometry:'خطي (Linear)', spin:null,
      reason:'عدد تناسقي 2 يُنتج دائماً تهجين sp وشكل خطي بزاوية 180°، بغض النظر عن نوع الفلز أو الليكاند' };
  }
  if(CN === 4){
    if(dElectrons === 10){
      return { hybridization:'sp³', geometry:'رباعي السطوح (Tetrahedral)', spin:null,
        reason:'التوزيع d¹⁰ (جميع المدارات d مكتملة) لا يحقق أي ربح في طاقة استقرار المجال البلوري (CFSE) من التحول لمربع مستوي، فيكون رباعي السطوح دائماً (مثال: Zn²⁺, Cd²⁺)' };
    }
    if(dElectrons === 8 && fieldStrength === 'strong'){
      return { hybridization:'dsp²', geometry:'مربع مستوي (Square Planar)', spin:'منخفض (Low Spin)',
        reason:'التوزيع d⁸ مع ليكاند قوي المجال (مثل CN⁻) يُفضّل الشكل المربع المستوي بسبب انخفاض طاقة المدارات الناتج عن انشطار المجال البلوري القوي (مثال: Ni²⁺, Pd²⁺, Pt²⁺)' };
    }
    return { hybridization:'sp³', geometry:'رباعي السطوح (Tetrahedral)', spin: fieldStrength==='strong' ? 'منخفض (حالة نادرة)' : 'مرتفع (High Spin)',
      reason:`التوزيع d${dElectrons} مع ليكاند ${fieldStrength==='strong'?'قوي':'ضعيف'} المجال — الشكل الرباعي السطوح هو الأكثر شيوعاً لهذا التوزيع الإلكتروني` };
  }
  if(CN === 6){
    const canBeLowSpin = dElectrons <= 6;
    if(canBeLowSpin && fieldStrength === 'strong'){
      return { hybridization:'d²sp³', geometry:'ثماني السطوح (Octahedral)', spin:'منخفض (Low Spin)',
        reason:`التوزيع d${dElectrons} (أقل من أو يساوي 6) مع ليكاند قوي المجال يسمح بإجبار الإلكترونات على الازدواج داخل مدارات t2g، مما يُحرر مدارين داخليين (n-1)d لاستخدامهما في التهجين d²sp³ (معقد المدار الداخلي)` };
    }
    return { hybridization:'sp³d²', geometry:'ثماني السطوح (Octahedral)', spin:'مرتفع (High Spin)',
      reason: dElectrons>6
        ? `التوزيع d${dElectrons} (أكبر من 6) — لا يمكن تكوين d²sp³ بغض النظر عن قوة الليكاند، لعدم توفر مدارين داخليين فارغين دون مخالفة مبدأ باولي، فيكون sp³d² (معقد المدار الخارجي) دائماً`
        : `التوزيع d${dElectrons} مع ليكاند ضعيف المجال — الإلكترونات تبقى غير متزاوجة حسب قاعدة هوند، فتُستخدم المدارات الخارجية (n)d لتكوين sp³d²` };
  }
  return { hybridization:'غير محدد لهذا العدد التناسقي', geometry:'غير محدد', spin:null, reason:'' };
}

function analyzeCoordinationCompound(rawFormula){
  const parsed = parseCoordinationFormula(rawFormula);
  const CN = calcCoordinationNumber(parsed.ligands);
  const oxState = calcOxidationState(parsed.ligands, parsed.overallCharge);
  const dElectrons = calcDElectrons(parsed.metal, oxState);
  const field = overallFieldStrength(parsed.ligands);
  const hyb = determineHybridization(CN, dElectrons, field);
  const metalName = METAL_NAMES_AR[parsed.metal] || parsed.metal;
  return { ...parsed, CN, oxState, dElectrons, field, hyb, metalName };
}

// Build a 2D SVG sketch of the complex: metal at center, ligands arranged per geometry
function buildComplexSVG(metalSymbol, ligandLabels, geometry){
  const size = 280;
  const cx = size/2, cy = size/2;
  const metalR = 26;
  const n = ligandLabels.length;
  let positions = [];

  if(geometry.includes('Linear')){
    const dist = 95;
    positions = [{x:cx-dist,y:cy},{x:cx+dist,y:cy}];
  } else if(geometry.includes('Square Planar')){
    const dist = 95;
    const angles = [0,90,180,270];
    positions = angles.slice(0,n).map(a=>({x:cx+dist*Math.cos(a*Math.PI/180), y:cy+dist*Math.sin(a*Math.PI/180)}));
  } else if(geometry.includes('Tetrahedral')){
    const dist = 95;
    const angles = [45,135,225,315];
    positions = angles.slice(0,n).map(a=>({x:cx+dist*Math.cos(a*Math.PI/180), y:cy+dist*Math.sin(a*Math.PI/180)*0.75}));
  } else if(geometry.includes('Octahedral')){
    const distEq = 95, distAx = 70;
    positions = [
      {x:cx, y:cy-distAx-20},
      {x:cx, y:cy+distAx+20},
      {x:cx-distEq, y:cy-25},
      {x:cx+distEq, y:cy-25},
      {x:cx-distEq*0.55, y:cy+45},
      {x:cx+distEq*0.55, y:cy+45},
    ].slice(0,n);
  } else {
    positions = Array.from({length:n},(_, idx)=>{
      const a = (360/n)*idx;
      return { x:cx+95*Math.cos(a*Math.PI/180), y:cy+95*Math.sin(a*Math.PI/180) };
    });
  }

  const bonds = positions.map(p=>
    `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#4A5A72" stroke-width="2"/>`
  ).join('');

  const ligandNodes = positions.map((p,i)=>`
    <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="22" fill="#192030" stroke="#60B4FF" stroke-width="2"/>
    <text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central"
      font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#E8F0FE">${ligandLabels[i]}</text>
  `).join('');

  return `
  <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    ${bonds}
    ${ligandNodes}
    <circle cx="${cx}" cy="${cy}" r="${metalR}" fill="#7DF9C8" opacity="0.15" stroke="#7DF9C8" stroke-width="2.5"/>
    <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
      font-family="JetBrains Mono, monospace" font-size="20" font-weight="800" fill="#7DF9C8">${metalSymbol}</text>
  </svg>`;
}

function renderCoordinationAnalyzer(){
  return `
    <div class="input-group">
      <label>الصيغة التناسقية الكاملة</label>
      <div class="input-row">
        <input type="text" id="coord-input" placeholder="مثال: [Co(NH3)6]3+" autocomplete="off" spellcheck="false" dir="ltr"/>
        <button class="btn-primary" id="coord-btn">حلل المعقد ⚛️</button>
      </div>
      <div class="input-hint">💡 اكتبي الصيغة بصيغة [الفلز(الليكاندات)]الشحنة — مثال: [Fe(CN)6]4- أو [Ni(CN)4]2-</div>
    </div>
    <div class="examples-row">
      <span class="examples-label">أمثلة:</span>
      <button class="example-chip" data-coord="[Co(NH3)6]3+">[Co(NH3)6]3+</button>
      <button class="example-chip" data-coord="[Fe(CN)6]4-">[Fe(CN)6]4-</button>
      <button class="example-chip" data-coord="[Ni(NH3)6]2+">[Ni(NH3)6]2+</button>
      <button class="example-chip" data-coord="[Ni(CN)4]2-">[Ni(CN)4]2-</button>
      <button class="example-chip" data-coord="[NiCl4]2-">[NiCl4]2-</button>
      <button class="example-chip" data-coord="[Zn(NH3)4]2+">[Zn(NH3)4]2+</button>
      <button class="example-chip" data-coord="[Co(en)3]3+">[Co(en)3]3+</button>
      <button class="example-chip" data-coord="[CoCl2(NH3)4]+">[CoCl2(NH3)4]+</button>
    </div>
    <div id="coord-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function renderCoordinationResult(r){
  const ligandRows = r.ligands.map(l=>{
    const lig = LIGANDS[l.formula];
    return `<tr>
      <td dir="ltr">${l.formula}${l.count>1?` ×${l.count}`:''}</td>
      <td>${lig.name}</td>
      <td>${DENTICITY_LABELS[lig.denticity]}</td>
      <td>${lig.field==='strong'?'قوي':lig.field==='weak'?'ضعيف':'متوسط'}</td>
    </tr>`;
  }).join('');

  const ligandLabelsForSVG = r.ligands.flatMap(l => Array(l.count).fill(l.formula));

  return `
    <div class="compound-formula-hero" dir="ltr">${r.raw}</div>

    <div class="result-section-title">1️⃣ الفلز المركزي</div>
    <table class="details-table">
      <tr><td>الفلز المركزي</td><td>${r.metalName} (${r.metal})</td></tr>
      <tr><td>عدد تأكسد الفلز</td><td><strong style="color:var(--orange)">${r.oxState>0?'+':''}${r.oxState}</strong></td></tr>
      <tr><td>عدد إلكترونات d</td><td>d<sup>${r.dElectrons}</sup></td></tr>
    </table>

    <div class="result-section-title">2️⃣ العدد التناسقي (CN)</div>
    <div class="stoich-answer-box">
      <div class="stoich-answer-label">Coordination Number</div>
      <div class="stoich-answer-val">CN = ${r.CN}</div>
    </div>

    <div class="result-section-title">3️⃣ الليكاندات ونوع المخلب</div>
    <table class="verify-table">
      <thead><tr><th>الليكاند</th><th>الاسم</th><th>نوع المخلب</th><th>قوة المجال</th></tr></thead>
      <tbody>${ligandRows}</tbody>
    </table>

    <div class="result-section-title">4️⃣ التهجين والشكل الهندسي</div>
    <table class="details-table">
      <tr><td>التهجين</td><td><strong style="color:var(--purple)">${r.hyb.hybridization}</strong></td></tr>
      <tr><td>الشكل الهندسي</td><td><strong style="color:var(--green)">${r.hyb.geometry}</strong></td></tr>
      ${r.hyb.spin ? `<tr><td>حالة الدوران (Spin)</td><td>${r.hyb.spin}</td></tr>` : ''}
    </table>
    <div class="input-hint">📌 ${r.hyb.reason}</div>

    <div class="result-section-title">5️⃣ رسم المعقد</div>
    <div class="lewis-display">${buildComplexSVG(r.metal, ligandLabelsForSVG, r.hyb.geometry)}</div>
  `;
}

function renderLigandGuide(){
  const rows = Object.entries(LIGANDS).map(([key,l])=>`
    <tr>
      <td dir="ltr">${key}</td>
      <td>${l.name}</td>
      <td dir="ltr">${l.nameEn}</td>
      <td>${l.charge>0?'+':''}${l.charge}</td>
      <td>${DENTICITY_LABELS[l.denticity]}</td>
      <td>${l.donor}</td>
      <td>${l.field==='strong'?'🔴 قوي':l.field==='weak'?'🔵 ضعيف':'🟡 متوسط'}</td>
    </tr>
  `).join('');
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 السلسلة الطيفية (Spectrochemical Series) من الأضعف إلى الأقوى: I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; H₂O &lt; py &lt; NH3 &lt; en &lt; NO₂⁻ &lt; CN⁻ &lt; CO</div>
    <table class="verify-table">
      <thead><tr><th>الرمز</th><th>الاسم</th><th>Name</th><th>الشحنة</th><th>نوع المخلب</th><th>ذرة الارتباط</th><th>قوة المجال</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}


// ═══════════════════════════════════════════════════════════
// 17. THERMODYNAMICS ENGINE (Entropy, Gibbs Free Energy, Hess's Law)
// ═══════════════════════════════════════════════════════════

// ── Entropy: ΔS° = Σn·S°(products) - Σn·S°(reactants) ──
function calcEntropyChange(reactantRows, productRows){
  if(!reactantRows.length || !productRows.length) throw new Error('أدخل مادة واحدة على الأقل في كل من المتفاعلات والنواتج');

  function validateRows(rows, label){
    return rows.map((r,i)=>{
      if(!r.name || !r.name.trim()) throw new Error(`أدخل اسم المادة رقم ${i+1} في ${label}`);
      if(isNaN(r.S)) throw new Error(`أدخل قيمة S صحيحة للمادة "${r.name}" في ${label}`);
      const n = isNaN(r.n) || r.n===''? 1 : r.n;
      if(n<=0) throw new Error(`عدد المولات يجب أن يكون أكبر من صفر للمادة "${r.name}"`);
      return { name:r.name.trim(), S:r.S, n };
    });
  }

  const reactants = validateRows(reactantRows, 'المتفاعلات');
  const products = validateRows(productRows, 'النواتج');

  const sumReactants = reactants.reduce((s,r)=> s + r.n*r.S, 0);
  const sumProducts = products.reduce((s,r)=> s + r.n*r.S, 0);
  const deltaS = sumProducts - sumReactants;

  return { reactants, products, sumReactants, sumProducts, deltaS };
}

// ── Gibbs Free Energy: ΔG = ΔH - TΔS ──
// Convention: ΔH in kJ/mol, ΔS in J/(mol·K) (must convert to kJ before combining), T in Kelvin
function calcGibbsFreeEnergy(deltaH_kJ, deltaS_JperK, T_kelvin){
  if(isNaN(deltaH_kJ)) throw new Error('أدخل قيمة ΔH صحيحة');
  if(isNaN(deltaS_JperK)) throw new Error('أدخل قيمة ΔS صحيحة');
  if(isNaN(T_kelvin) || T_kelvin<=0) throw new Error('أدخل درجة حرارة صحيحة بالكلفن (أكبر من صفر)');

  const deltaS_kJperK = deltaS_JperK / 1000; // convert J/K to kJ/K to match ΔH units
  const deltaG = deltaH_kJ - (T_kelvin * deltaS_kJperK);

  let spontaneity, spontaneityClass;
  if(deltaG < -0.001){ spontaneity = 'تلقائي (Spontaneous)'; spontaneityClass = 'spontaneous'; }
  else if(deltaG > 0.001){ spontaneity = 'غير تلقائي (Non-spontaneous)'; spontaneityClass = 'nonspontaneous'; }
  else { spontaneity = 'حالة اتزان (Equilibrium)'; spontaneityClass = 'equilibrium'; }

  return { deltaH_kJ, deltaS_JperK, deltaS_kJperK, T_kelvin, deltaG, spontaneity, spontaneityClass };
}

// ── Hess's Law: ΔH_target = Σ(multiplier_i × sign_i × ΔH_i) ──
function calcHessLaw(equationRows){
  if(!equationRows.length) throw new Error('أضيفي معادلة مساعدة واحدة على الأقل')

  const rows = equationRows.map((r,i)=>{
    if(isNaN(r.dH)) throw new Error(`أدخل قيمة ΔH صحيحة للمعادلة رقم ${i+1}`);
    const multiplier = isNaN(r.multiplier) || r.multiplier==='' ? 1 : r.multiplier;
    if(multiplier===0) throw new Error(`معامل الضرب لا يمكن أن يكون صفراً (المعادلة رقم ${i+1})`);
    const sign = r.sign === 'subtract' ? -1 : 1;
    const contribution = sign * multiplier * r.dH;
    return { label: r.label || `معادلة ${i+1}`, dH: r.dH, multiplier, sign, contribution };
  });

  const totalDH = rows.reduce((s,r)=> s + r.contribution, 0);
  return { rows, totalDH };
}

// ── Entropy modal template (dynamic table for reactants/products) ──
function renderEntropyCalculator(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 القانون: ΔS° = Σn·S°(نواتج) − Σn·S°(متفاعلات)</div>

    <div class="result-section-title">المتفاعلات (Reactants)</div>
    <div id="entropy-reactants-rows"></div>
    <button class="btn-ghost small" id="entropy-add-reactant">+ إضافة متفاعل</button>

    <div class="result-section-title" style="margin-top:18px">النواتج (Products)</div>
    <div id="entropy-products-rows"></div>
    <button class="btn-ghost small" id="entropy-add-product">+ إضافة ناتج</button>

    <button class="btn-primary full-width" id="entropy-calc-btn" style="margin-top:18px">احسب ΔS 🌀</button>
    <div id="entropy-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function thermoRowHTML(prefix, idx){
  return `
    <div class="thermo-row" data-idx="${idx}">
      <input type="text" class="thermo-name" placeholder="اسم المادة (مثل N2)" dir="ltr"/>
      <input type="number" class="thermo-n" placeholder="عدد المولات (n)" step="any" value="1"/>
      <input type="number" class="thermo-s" placeholder="S° (J/mol·K)" step="any"/>
      <button type="button" class="thermo-row-remove" title="حذف">✕</button>
    </div>`;
}

function renderEntropyResult(d){
  const rowsHTML = (label, rows) => `
    <table class="details-table">
      ${rows.map(r=>`<tr><td>${r.name}</td><td>n=${r.n} × S°=${r.S} = ${(r.n*r.S).toFixed(2)} J/K</td></tr>`).join('')}
      <tr><td><strong>${label}</strong></td><td><strong>${rows.reduce((s,r)=>s+r.n*r.S,0).toFixed(2)} J/K</strong></td></tr>
    </table>`;

  const sign = d.deltaS >= 0 ? 'موجب (+)' : 'سالب (−)';
  const meaning = d.deltaS >= 0
    ? 'العشوائية (الانتروبي) تزداد — النظام يتجه نحو حالة أكثر اضطراباً'
    : 'العشوائية (الانتروبي) تقل — النظام يتجه نحو حالة أكثر تنظيماً';
  const color = d.deltaS >= 0 ? 'var(--green)' : 'var(--red)';

  return `
    <div class="stoich-answer-box" style="border-color:${color}">
      <div class="stoich-answer-label">ΔS° للتفاعل</div>
      <div class="stoich-answer-val" style="color:${color}">${d.deltaS.toFixed(2)} <span>J/K</span></div>
    </div>

    <div class="result-section-title">إشارة ΔS والتفسير</div>
    <table class="details-table">
      <tr><td>الإشارة</td><td><strong style="color:${color}">${sign}</strong></td></tr>
      <tr><td>التفسير</td><td>${meaning}</td></tr>
    </table>

    <div class="result-section-title">تفاصيل الحساب</div>
    ${rowsHTML('Σn·S° (متفاعلات)', d.reactants)}
    <div style="height:8px"></div>
    ${rowsHTML('Σn·S° (نواتج)', d.products)}

    <div class="result-section-title">خطوات الحل</div>
    <div class="stoich-steps">
      ${stoichStep(1,`Σn·S° (نواتج) = <strong>${d.sumProducts.toFixed(2)} J/K</strong>`)}
      ${stoichStep(2,`Σn·S° (متفاعلات) = <strong>${d.sumReactants.toFixed(2)} J/K</strong>`)}
      ${stoichStep(3,`ΔS° = ${d.sumProducts.toFixed(2)} − ${d.sumReactants.toFixed(2)} = <strong style="color:${color}">${d.deltaS.toFixed(2)} J/K</strong>`)}
    </div>
  `;
}

// ── Gibbs Free Energy modal template ──
function renderGibbsCalculator(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 القانون: ΔG = ΔH − TΔS</div>
    <div class="stoich-form-grid">
      <div class="input-group"><label>ΔH (kJ/mol)</label><input type="number" id="gibbs-dh" placeholder="مثال: -92.4" step="any"/></div>
      <div class="input-group"><label>ΔS (J/mol·K)</label><input type="number" id="gibbs-ds" placeholder="مثال: -198.1" step="any"/></div>
    </div>
    <div class="input-group"><label>درجة الحرارة T (كلفن)</label><input type="number" id="gibbs-t" placeholder="مثال: 298" step="any"/></div>
    <div class="input-hint">💡 لتحويل من سيلسيوس إلى كلفن: T(K) = T(°C) + 273</div>
    <button class="btn-primary full-width" id="gibbs-calc-btn">احسب ΔG ⚖️</button>
    <div id="gibbs-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function renderGibbsResult(d){
  const colorMap = { spontaneous:'var(--green)', nonspontaneous:'var(--red)', equilibrium:'var(--orange)' };
  const color = colorMap[d.spontaneityClass];
  return `
    <div class="stoich-answer-box" style="border-color:${color}">
      <div class="stoich-answer-label">ΔG</div>
      <div class="stoich-answer-val" style="color:${color}">${d.deltaG.toFixed(3)} <span>kJ</span></div>
    </div>
    <div class="result-section-title">نوع التفاعل</div>
    <table class="details-table">
      <tr><td>الحالة</td><td><strong style="color:${color}">${d.spontaneity}</strong></td></tr>
      <tr><td>القاعدة</td><td>${d.spontaneityClass==='spontaneous' ? 'ΔG &lt; 0 → تفاعل تلقائي' : d.spontaneityClass==='nonspontaneous' ? 'ΔG &gt; 0 → تفاعل غير تلقائي' : 'ΔG = 0 → حالة اتزان'}</td></tr>
    </table>
    <div class="result-section-title">خطوات الحل</div>
    <div class="stoich-steps">
      ${stoichStep(1,`المعطى: ΔH = <strong>${d.deltaH_kJ} kJ</strong>، ΔS = <strong>${d.deltaS_JperK} J/K</strong> = <strong>${d.deltaS_kJperK.toFixed(5)} kJ/K</strong>، T = <strong>${d.T_kelvin} K</strong>`)}
      ${stoichStep(2,`TΔS = ${d.T_kelvin} × ${d.deltaS_kJperK.toFixed(5)} = <strong>${(d.T_kelvin*d.deltaS_kJperK).toFixed(3)} kJ</strong>`)}
      ${stoichStep(3,`ΔG = ΔH − TΔS = ${d.deltaH_kJ} − (${(d.T_kelvin*d.deltaS_kJperK).toFixed(3)}) = <strong style="color:${color}">${d.deltaG.toFixed(3)} kJ</strong>`)}
    </div>
  `;
}

// ── Hess's Law modal template ──
function renderHessCalculator(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 القانون: ΔH الكلي = Σ(معامل الضرب × إشارة × ΔH لكل معادلة مساعدة)</div>
    <div id="hess-rows"></div>
    <button class="btn-ghost small" id="hess-add-row">+ إضافة معادلة مساعدة</button>
    <button class="btn-primary full-width" id="hess-calc-btn" style="margin-top:18px">احسب ΔH الكلية ➕</button>
    <div id="hess-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function hessRowHTML(idx){
  return `
    <div class="hess-row" data-idx="${idx}">
      <input type="text" class="hess-label" placeholder="مثال: C+½O2→CO" dir="ltr"/>
      <input type="number" class="hess-dh" placeholder="ΔH (kJ)" step="any"/>
      <input type="number" class="hess-mult" placeholder="المعامل" step="any" value="1"/>
      <select class="hess-sign">
        <option value="add">جمع (+)</option>
        <option value="subtract">طرح (−)</option>
      </select>
      <button type="button" class="hess-row-remove" title="حذف">✕</button>
    </div>`;
}

function renderHessResult(d){
  return `
    <div class="stoich-answer-box">
      <div class="stoich-answer-label">ΔH الكلية للتفاعل المطلوب</div>
      <div class="stoich-answer-val">${d.totalDH.toFixed(2)} <span>kJ</span></div>
    </div>
    <div class="result-section-title">خطوات الجمع والطرح</div>
    <table class="details-table">
      ${d.rows.map(r=>`<tr>
        <td dir="ltr">${r.label}</td>
        <td>${r.sign===1?'+':'−'} ${r.multiplier} × (${r.dH}) = <strong>${r.contribution.toFixed(2)} kJ</strong></td>
      </tr>`).join('')}
      <tr><td><strong>المجموع النهائي</strong></td><td><strong style="color:var(--green)">${d.totalDH.toFixed(2)} kJ</strong></td></tr>
    </table>
    <div class="result-section-title">المعادلة النهائية</div>
    <div class="input-hint">ΔH الكلي = ${d.rows.map(r=>`${r.sign===1?'+':'−'}${r.multiplier}×(${r.dH})`).join(' ')} = <strong>${d.totalDH.toFixed(2)} kJ</strong></div>
  `;
}

// ═══════════════════════════════════════════════════════════
// 18. ELECTROCHEMISTRY ENGINE (Faraday's
const FARADAY_CONSTANT = 96485; // C/mol
const GAS_CONSTANT = 8.314;     // J/(mol·K)

// ── Faraday's Law: mass deposited/liberated = (I × t × M) / (n × F) ──
// I = current (A), t = time (s), M = molar mass (g/mol), n = electrons transferred per ion
function calcFaraday(I, t, M, n){
  if(isNaN(I) || I<=0) throw new Error('أدخل قيمة التيار I صحيحة أكبر من صفر (بالأمبير)');
  if(isNaN(t) || t<=0) throw new Error('أدخل قيمة الزمن t صحيحة أكبر من صفر (بالثانية)');
  if(isNaN(M) || M<=0) throw new Error('أدخل الكتلة المولية M صحيحة أكبر من صفر (g/mol)');
  if(isNaN(n) || n<=0) throw new Error('أدخل عدد الإلكترونات المتبادلة n صحيح أكبر من صفر');

  const charge = I * t;                          // Q = I×t (Coulombs)
  const molesElectrons = charge / FARADAY_CONSTANT; // mol e⁻ = Q/F
  const molesSubstance = molesElectrons / n;      // mol substance = mol e⁻ / n
  const mass = molesSubstance * M;                // mass = moles × M

  return { I, t, M, n, charge, molesElectrons, molesSubstance, mass };
}

// Time unit conversion helper (always work in seconds internally)
function convertTimeToSeconds(value, unit){
  if(unit === 'min') return value * 60;
  if(unit === 'hr') return value * 3600;
  return value; // already seconds
}

// ── Nernst Equation: E = E° - (RT/nF)·ln(Q) = E° - (0.0592/n)·log10(Q)  [at 25°C/298K] ──
function calcNernst(E_standard, n, Q, T){
  if(isNaN(E_standard)) throw new Error('أدخل قيمة جهد الخلية القياسي E° صحيحة');
  if(isNaN(n) || n<=0) throw new Error('أدخل عدد الإلكترونات n صحيح أكبر من صفر');
  if(isNaN(Q) || Q<=0) throw new Error('أدخل قيمة حاصل التفاعل Q صحيحة أكبر من صفر');
  const temperature = isNaN(T) || T<=0 ? 298 : T;

  const RT_over_nF = (GAS_CONSTANT * temperature) / (n * FARADAY_CONSTANT);
  const lnQ = Math.log(Q);
  const E_cell = E_standard - (RT_over_nF * lnQ);

  // Also compute via the common simplified 0.0592/n·log10(Q) form (valid specifically at 298K)
  const log10Q = Math.log10(Q);
  const simplifiedTerm = temperature === 298 ? (0.0592/n) * log10Q : null;

  return { E_standard, n, Q, temperature, RT_over_nF, lnQ, log10Q, E_cell, simplifiedTerm };
}

// ── Faraday's Law modal template ──
function renderFaradayCalculator(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 القانون: m = (I × t × M) / (n × F)  حيث F = 96485 C/mol</div>
    <div class="stoich-form-grid">
      <div class="input-group"><label>شدة التيار I (أمبير)</label><input type="number" id="far-i" placeholder="مثال: 2" step="any"/></div>
      <div class="input-group">
        <label>الزمن t</label>
        <div class="input-row">
          <input type="number" id="far-t" placeholder="مثال: 3600" step="any"/>
          <select id="far-t-unit">
            <option value="s">ثانية</option>
            <option value="min">دقيقة</option>
            <option value="hr">ساعة</option>
          </select>
        </div>
      </div>
    </div>
    <div class="stoich-form-grid">
      <div class="input-group"><label>الكتلة المولية M (g/mol)</label><input type="number" id="far-m" placeholder="مثال: 63.546 (Cu)" step="any"/></div>
      <div class="input-group"><label>عدد الإلكترونات n</label><input type="number" id="far-n" placeholder="مثال: 2" step="any"/></div>
    </div>
    <div class="input-hint">💡 n = عدد الإلكترونات في معادلة الاختزال (مثال: Cu²⁺ + 2e⁻ → Cu فـ n=2)</div>
    <button class="btn-primary full-width" id="far-calc-btn">احسب الكتلة المترسبة 🔌</button>
    <div id="far-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function renderFaradayResult(d){
  return `
    <div class="stoich-answer-box">
      <div class="stoich-answer-label">الكتلة المترسبة/المتحررة</div>
      <div class="stoich-answer-val">${fmtSci(d.mass)} <span>g</span></div>
    </div>
    <div class="result-section-title">خطوات الحل</div>
    <div class="stoich-steps">
      ${stoichStep(1,`الشحنة الكلية: Q = I × t = ${d.I} × ${d.t} = <strong>${fmtSci(d.charge)} C</strong>`)}
      ${stoichStep(2,`مولات الإلكترونات: n(e⁻) = Q ÷ F = ${fmtSci(d.charge)} ÷ 96485 = <strong>${fmtSci(d.molesElectrons)} mol</strong>`)}
      ${stoichStep(3,`مولات المادة المترسبة: = n(e⁻) ÷ n = ${fmtSci(d.molesElectrons)} ÷ ${d.n} = <strong>${fmtSci(d.molesSubstance)} mol</strong>`)}
      ${stoichStep(4,`الكتلة = المولات × M = ${fmtSci(d.molesSubstance)} × ${d.M} = <strong>${fmtSci(d.mass)} g</strong>`)}
    </div>
    <div class="result-section-title">ملخص القيم</div>
    <table class="details-table">
      <tr><td>التيار I</td><td>${d.I} A</td></tr>
      <tr><td>الزمن t</td><td>${d.t} s</td></tr>
      <tr><td>الشحنة Q</td><td>${fmtSci(d.charge)} C</td></tr>
      <tr><td>عدد الإلكترونات n</td><td>${d.n}</td></tr>
      <tr><td>الكتلة المولية M</td><td>${d.M} g/mol</td></tr>
      <tr><td>الكتلة الناتجة</td><td><strong style="color:var(--green)">${fmtSci(d.mass)} g</strong></td></tr>
    </table>
  `;
}

// ── Nernst Equation modal template ──
function renderNernstCalculator(){
  return `
    <div class="input-hint" style="margin-bottom:14px">📌 القانون: E = E° − (RT/nF)·lnQ = E° − (0.0592/n)·logQ  (عند 25°C)</div>
    <div class="stoich-form-grid">
      <div class="input-group"><label>جهد الخلية القياسي E° (فولت)</label><input type="number" id="ner-e0" placeholder="مثال: 1.10" step="any"/></div>
      <div class="input-group"><label>عدد الإلكترونات المتبادلة n</label><input type="number" id="ner-n" placeholder="مثال: 2" step="any"/></div>
    </div>
    <div class="stoich-form-grid">
      <div class="input-group"><label>حاصل التفاعل Q</label><input type="number" id="ner-q" placeholder="مثال: 1000" step="any"/></div>
      <div class="input-group"><label>درجة الحرارة T (كلفن) — اختياري</label><input type="number" id="ner-t" placeholder="افتراضي 298" step="any"/></div>
    </div>
    <div class="input-hint">💡 Q = [نواتج]/[متفاعلات] حسب معادلة التفاعل الكلية للخلية — اتركي T فارغة لاستخدام 298K (25°C)</div>
    <button class="btn-primary full-width" id="ner-calc-btn">احسب جهد الخلية E 🔋</button>
    <div id="ner-result" class="result-area hidden" style="margin-top:16px"></div>
  `;
}

function renderNernstResult(d){
  const trend = d.Q > 1
    ? 'Q > 1 → التفاعل لم يصل للتوازن وهناك فائض نواتج، فينخفض الجهد عن القياسي'
    : d.Q < 1
    ? 'Q < 1 → فائض متفاعلات، فيرتفع الجهد عن القياسي'
    : 'Q = 1 → جهد الخلية يساوي الجهد القياسي تماماً';

  return `
    <div class="stoich-answer-box">
      <div class="stoich-answer-label">جهد الخلية E (تحت الظروف الفعلية)</div>
      <div class="stoich-answer-val">${d.E_cell.toFixed(4)} <span>V</span></div>
    </div>
    <div class="result-section-title">خطوات الحل</div>
    <div class="stoich-steps">
      ${stoichStep(1,`المعطى: E° = <strong>${d.E_standard} V</strong>، n = <strong>${d.n}</strong>، Q = <strong>${d.Q}</strong>، T = <strong>${d.temperature} K</strong>`)}
      ${stoichStep(2,`RT/nF = (8.314 × ${d.temperature}) ÷ (${d.n} × 96485) = <strong>${d.RT_over_nF.toFixed(6)} V</strong>`)}
      ${stoichStep(3,`lnQ = ln(${d.Q}) = <strong>${d.lnQ.toFixed(4)}</strong>`)}
      ${stoichStep(4,`E = E° − (RT/nF)×lnQ = ${d.E_standard} − (${d.RT_over_nF.toFixed(6)} × ${d.lnQ.toFixed(4)}) = <strong style="color:var(--green)">${d.E_cell.toFixed(4)} V</strong>`)}
      ${d.simplifiedTerm!==null ? stoichStep(5,`(بالصيغة المبسطة عند 25°C: E = E° − (0.0592/n)×log(Q) = ${d.E_standard} − ${(0.0592/d.n).toFixed(5)}×${d.log10Q.toFixed(4)} = <strong>${(d.E_standard-d.simplifiedTerm).toFixed(4)} V</strong> — تتطابق مع الناتج أعلاه)`) : ''}
    </div>
    <div class="result-section-title">التفسير</div>
    <div class="input-hint">📌 ${trend}</div>
  `;
}

function renderComingSoon(topicName){
  return `<div class="unknown-box">
    🚧 قسم <strong>${topicName}</strong> قيد الإضافة حالياً.<br><br>
    سيتم تفعيله في تحديث قادم — شكراً لصبرك! 🙏
  </div>`;
}

// ═══════════════════════════════════════════════════════════
// 15. ADVANCED SECTIONS DEFINITION (hierarchical menu)
// ═══════════════════════════════
const ADVANCED_SECTIONS = {
  organic: {
    title:'🧪 الكيمياء العضوية',
    items:[
      { calc:'org-solubility', icon:'💧', label:'الذوبانية والحامضية' },
      { calc:'org-electronic', icon:'⚡', label:'السلاسل الإلكترونية' },
      { calc:'org-diagnostic', icon:'🔬', label:'تشخيص المركبات' },
      { calc:'org-spectroscopy', icon:'📈', label:'الأطياف (IR,NMR,UV)' },
    ]
  },
  inorganic: {
    title:'🔷 الكيمياء اللاعضوية والتناسقية',
    items:[
      { calc:'inorg-coordination', icon:'⚛️', label:'محلل المركبات التناسقية' },
      { calc:'inorg-ligands', icon:'🔗', label:'دليل الليكاندات' },
    ]
  },
  thermo: {
    title:'🔥 الكيمياء الفيزيائية (الثرموداينمك)',
    items:[
      { calc:'thermo-entropy', icon:'🌀', label:'الإنتروبي' },
      { calc:'thermo-gibbs', icon:'⚖️', label:'طاقة غبس الحرة' },
      { calc:'thermo-hess', icon:'➕', label:'قانون هس' },
    ]
  },
  electro: {
    title:'⚡ الكيمياء الكهربائية',
    items:[
      { calc:'electro-faraday', icon:'🔌', label:'التحليل الكهربائي وفاراداي' },
      { calc:'electro-nernst', icon:'🔋', label:'معادلة نرنست' },
    ]
  },
};

const MODAL_TITLES = {
  molarity:'🧪 حساب المولارية',
  mass:'⚖️ حساب الكتلة',
  volume:'📦 حساب الحجم',
  particles:'🔴 حساب عدد الجسيمات',
  limiting:'⛔ المتفاعل المحدد',
  yield:'✅ المردود النظري',
  percent:'📊 المردود المئوي',
  periodic:'🧬 الجدول الدوري',
  'org-solubility':'💧 الذوبانية والحامضية',
  'org-electronic':'⚡ السلاسل الإلكترونية العضوية',
  'org-diagnostic':'🔬 تشخيص المركبات العضوية',
  'org-spectroscopy':'📈 الأطياف',
  'inorg-coordination':'⚛️ محلل المركبات التناسقية',
  'inorg-ligands':'🔗 دليل الليكاندات',
  'thermo-entropy':'🌀 الإنتروبي',
  'thermo-gibbs':'⚖️ طاقة غبس الحرة',
  'thermo-hess':'➕ قانون هس',
  'electro-faraday':'🔌 التحليل الكهربائي وفاراداي',
  'electro-nernst':'🔋 معادلة نرنست',
};

// ═══════════════════════════════════════════════════════════
// 12. UI WIRING
document.addEventListener('DOMContentLoaded',()=>{

  // ── TABS ──
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-section').forEach(s=>s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });

  // ── DRAWER (FAB button: feedback + about) ──
  const drawerOverlay = document.getElementById('drawer-overlay');
  const fabBtn = document.getElementById('fab-drawer-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer(){ drawerOverlay.classList.remove('hidden'); }
  function closeDrawer(){ drawerOverlay.classList.add('hidden'); }

  fabBtn.addEventListener('click', openDrawer);
  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', e=>{ if(e.target===drawerOverlay) closeDrawer(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !drawerOverlay.classList.contains('hidden')) closeDrawer(); });

  // Drawer tab switching (feedback <-> about)
  document.querySelectorAll('.drawer-tab-btn').forEach(tabBtn=>{
    tabBtn.addEventListener('click', ()=>{
      document.querySelectorAll('.drawer-tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.drawer-panel').forEach(p=>p.classList.remove('active'));
      tabBtn.classList.add('active');
      document.getElementById(`drawer-panel-${tabBtn.dataset.drawerTab}`).classList.add('active');
    });
  });

  // Feedback form -> mailto submission
  const FEEDBACK_EMAIL = 'wasit.chem.lab@gmail.com';
  document.getElementById('fb-send-btn').addEventListener('click', ()=>{
    const name = document.getElementById('fb-name').value.trim();
    const type = document.getElementById('fb-type').value;
    const message = document.getElementById('fb-message').value.trim();

    if(!message){
      alert('يرجى كتابة رسالتك أولاً قبل الإرسال');
      return;
    }

    const subject = `[كيمياء Lab] ${type}`;
    const bodyLines = [
      name ? `الاسم: ${name}` : 'الاسم: (لم يُذكر)',
      `نوع الملاحظة: ${type}`,
      '',
      'الرسالة:',
      message,
    ];
    const body = bodyLines.join('\n');

    const mailtoUrl = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  });

  // ══════════════════════════════════════════════════════
  // دالة AI مشتركة — تُرسل الطلب لـ Netlify Function
  // المفتاح مخفي على السيرفر — المستخدم لا يراه أبداً
  // ══════════════════════════════════════════════════════

  async function askAI(question, systemType, resultEl, btnEl, btnTextEl) {
    if (!question) return;

    // حالة التحميل
    btnEl.classList.add('loading');
    if (btnTextEl) btnTextEl.textContent = 'جاري المعالجة...';
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = `
      <div class="ai-loading">
        <div class="ai-spinner"></div>
        <div class="ai-loading-text">🤖 الذكاء الاصطناعي يعمل...</div>
      </div>`;

    try {
      // الإرسال لـ Netlify Function (المفتاح مخفي على السيرفر)
      const response = await fetch('/.netlify/functions/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, systemType }),
      });

      if (!response.ok) throw new Error('خطأ في الاتصال HTTP ' + response.status);

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const text = data.content.filter(b=>b.type==='text').map(b=>b.text).join('\n');
      if (!text) throw new Error('لم تصل إجابة من الذكاء الاصطناعي');

      resultEl.innerHTML = `
        <div class="ai-answer-header">
          <div class="ai-answer-icon">${systemType==='balancer'?'⚖️':systemType==='analyzer'?'🔬':'🤖'}</div>
          <div>
            <div class="ai-answer-title">${systemType==='balancer'?'نتيجة الموازنة':systemType==='analyzer'?'تحليل المركب':'حل المسألة'}</div>
            <div class="ai-answer-sub">بواسطة Claude AI • كيمياء Lab</div>
          </div>
        </div>
        <div class="ai-question-display"><strong>📝 الإدخال:</strong> ${question}</div>
        <div class="ai-content">${formatAIResponse(text)}</div>`;

    } catch(err) {
      resultEl.innerHTML = `<div class="error-box">❌ <strong>خطأ:</strong> ${err.message}<br><small>تأكد من الاتصال بالإنترنت وحاول مجدداً</small></div>`;
    } finally {
      btnEl.classList.remove('loading');
      if (btnTextEl) btnTextEl.textContent = systemType==='balancer'?'⚗️ وازن':systemType==='analyzer'?'حلل 🔬':'حل المسألة 🤖';
    }
  }

  // تنسيق نص الإجابة
  function formatAIResponse(text) {
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    text = text.replace(/^(\d+)[.)]\s+(.+)$/gm,'<div class="ai-step"><strong>$1.</strong> $2</div>');
    text = text.replace(/`([^`]+)`/g,'<span class="ai-math">$1</span>');
    text = text.replace(/\n\n+/g,'</p><p>');
    text = text.replace(/\n/g,'<br>');
    return '<p>' + text + '</p>';
  }

  // ── موازن المعادلات (AI) ──
  const balancerInput   = document.getElementById('balancer-input');
  const balancerAIBtn   = document.getElementById('balancer-ai-btn');
  const balancerBtnText = balancerAIBtn;
  const balancerResult  = document.getElementById('balancer-ai-result');

  function runBalancer() {
    const v = balancerInput.value.trim();
    if (!v) { balancerInput.focus(); return; }
    askAI(v, 'balancer', balancerResult, balancerAIBtn, balancerAIBtn.querySelector('span')||balancerAIBtn);
  }
  balancerAIBtn.addEventListener('click', runBalancer);
  balancerInput.addEventListener('keydown', e => e.key==='Enter' && runBalancer());
  document.getElementById('balancer-clear-btn').addEventListener('click', ()=>{
    balancerInput.value=''; balancerResult.classList.add('hidden'); balancerInput.focus();
  });
  document.querySelectorAll('.example-chip[data-bal]').forEach(c=>
    c.addEventListener('click', ()=>{ balancerInput.value=c.dataset.bal; runBalancer(); }));

  // ── محلل المركبات (AI) ──
  const analyzerInput   = document.getElementById('analyzer-input');
  const analyzerAIBtn   = document.getElementById('analyzer-ai-btn');
  const analyzerResult  = document.getElementById('analyzer-ai-result');

  function runAnalyzer() {
    const v = analyzerInput.value.trim();
    if (!v) { analyzerInput.focus(); return; }
    askAI(v, 'analyzer', analyzerResult, analyzerAIBtn, analyzerAIBtn.querySelector('span')||analyzerAIBtn);
  }
  analyzerAIBtn.addEventListener('click', runAnalyzer);
  analyzerInput.addEventListener('keydown', e => e.key==='Enter' && runAnalyzer());
  document.getElementById('analyzer-clear-btn').addEventListener('click', ()=>{
    analyzerInput.value=''; analyzerResult.classList.add('hidden'); analyzerInput.focus();
  });
  document.querySelectorAll('.example-chip[data-ana]').forEach(c=>
    c.addEventListener('click', ()=>{ analyzerInput.value=c.dataset.ana; runAnalyzer(); }));

  // ── الحاسبة الذكية (AI) ──
  const aiQuestion = document.getElementById('ai-question');
  const aiSendBtn  = document.getElementById('ai-send-btn');
  const aiBtnText  = document.getElementById('ai-btn-text');
  const aiResult   = document.getElementById('ai-result');

  function sendToAI() {
    const v = aiQuestion.value.trim();
    if (!v) { aiQuestion.focus(); return; }
    askAI(v, 'stoich', aiResult, aiSendBtn, aiBtnText);
  }
  aiSendBtn.addEventListener('click', sendToAI);
  aiQuestion.addEventListener('keydown', e => (e.ctrlKey||e.metaKey) && e.key==='Enter' && sendToAI());
  document.querySelectorAll('.example-chip[data-ai]').forEach(c=>
    c.addEventListener('click', ()=>{ aiQuestion.value=c.dataset.ai; sendToAI(); }));

  // ── الجدول الدوري — التبويب الرئيسي المستقل ──
  // (نفس المنطق الداخلي لكن يشتغل من tab-periodic مباشرة بدل modal)
  const pdMainInput = document.getElementById('pd-main-element');
  const pdMainResult = document.getElementById('pd-main-result');

  function runPeriodicMain(){
    const v = pdMainInput.value.trim();
    if(!v) return;
    try{
      const info = getElementInfo(v);
      pdMainResult.innerHTML = renderElementInfo(info);
      pdMainResult.classList.remove('hidden');
      pdMainResult.scrollIntoView({behavior:'smooth',block:'nearest'});
    }catch(e){
      pdMainResult.innerHTML = `<div class="error-box">❌ ${e.message}</div>`;
      pdMainResult.classList.remove('hidden');
    }
  }

  // ربط زر البحث وحقل الإدخال والأمثلة
  document.getElementById('pd-main-btn').addEventListener('click', runPeriodicMain);
  pdMainInput.addEventListener('keydown', e => e.key==='Enter' && runPeriodicMain());
  document.getElementById('pd-main-clear').addEventListener('click', ()=>{
    pdMainInput.value='';
    pdMainResult.classList.add('hidden');
    pdMainInput.focus();
  });
  document.querySelectorAll('.example-chip[data-pdm]').forEach(c=>
    c.addEventListener('click', ()=>{ pdMainInput.value=c.dataset.pdm; runPeriodicMain(); }));

  // ── الموازن الذكي (يبحث بالعناصر ويولّد المركب/المعادلة تلقائياً) ──
  const smartInput=document.getElementById('smart-input');
  const balRes=document.getElementById('balancer-result');
  let lastResult=null; // يحفظ آخر نتيجة للتعامل مع قوائم التفاعلات المتعددة

  function runSmart(){
    const v=smartInput.value.trim();
    if(!v)return;

    // استدعاء المحرك الجديد
    lastResult=smartLookup(v);
    balRes.innerHTML=renderSmartResult(lastResult);
    balRes.classList.remove('hidden');
    balRes.scrollIntoView({behavior:'smooth',block:'nearest'});

    // إذا كانت النتيجة قائمة تفاعلات متعددة — نربط أزرار الاختيار
    if(lastResult && lastResult.type==='reaction' && lastResult.matches && lastResult.matches.length>1){
      const matches = lastResult.matches;
      document.querySelectorAll('.reaction-option').forEach((el,i)=>{
        el.addEventListener('click',()=>{
          document.querySelectorAll('.reaction-option').forEach(e=>e.classList.remove('selected'));
          el.classList.add('selected');
          const det=document.getElementById('rxn-detail');
          try{
            const bal=balanceEquation(matches[i].eq);
            det.innerHTML=`<div class="smart-reaction-header" style="margin-top:16px">
              <div class="smart-reaction-icon">${TYPE_ICON[matches[i].type]||'⚗️'}</div>
              <div class="smart-reaction-info"><h3>${matches[i].label}</h3><p>المعادلة الموزونة</p></div>
            </div>${renderBalanced(bal)}`;
          }catch(e){det.innerHTML=`<div class="error-box">❌ ${e.message}</div>`;}
        });
      });
      // تلقائياً انقر على أول خيار
      const first=document.querySelector('.reaction-option');
      if(first)first.click();
    }
  }

  document.getElementById('smart-btn').addEventListener('click',runSmart);
  smartInput.addEventListener('keydown',e=>e.key==='Enter'&&runSmart());
  document.getElementById('clear-smart-btn').addEventListener('click',()=>{
    smartInput.value='';balRes.classList.add('hidden');smartInput.focus();
  });
  document.querySelectorAll('.example-chip[data-smart]').forEach(c=>
    c.addEventListener('click',()=>{smartInput.value=c.dataset.smart;runSmart();}));


  // ── ANALYZER ──
  const cmpInput=document.getElementById('compound-input');
  const anaRes=document.getElementById('analyzer-result');
  function runAnalyzer(){
    const v=cmpInput.value.trim();if(!v)return;
    try{anaRes.innerHTML=renderAnalyzerResult(analyzeCompound(v));}
    catch(e){anaRes.innerHTML=`<div class="error-box">❌ ${e.message}</div>`;}
    anaRes.classList.remove('hidden');
    anaRes.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
  document.getElementById('analyze-btn').addEventListener('click',runAnalyzer);
  cmpInput.addEventListener('keydown',e=>e.key==='Enter'&&runAnalyzer());
  document.getElementById('clear-compound-btn').addEventListener('click',()=>{
    cmpInput.value='';anaRes.classList.add('hidden');cmpInput.focus();
  });
  document.querySelectorAll('.example-chip[data-compound]').forEach(c=>
    c.addEventListener('click',()=>{cmpInput.value=c.dataset.compound;runAnalyzer();}));

  // ── MODAL SYSTEM ──
  const modalTitle=document.getElementById('modal-title')||{textContent:''};

});
