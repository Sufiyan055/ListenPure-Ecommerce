/* product data are store in ProductData array */
let productData = [
  {
    id: "kxlkmklm",
    itemname: "Earphone",
    price: 45,
    img: "../Images/boat1.avif",
    previ: "p-1",
    viewprevi: "p-1",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhgjhgjh",
    itemname: "Earphone",
    price: 42,
    rate: "bx bxs-star-half",
    img: "../Images/boat2.avif",
    previ: "p-2",
    viewprevi: "p-2",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjgncnb",
    itemname: "Earphone",
    price: 75,
    img: "../Images/boat3.webp",
    previ: "p-3",
    viewprevi: "p-3",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "esdfygu",
    itemname: "Neck band",
    price: 86,
    img: "../Images/boat4.webp",
    previ: "p-4",
    viewprevi: "p-4",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjkjhkjh",
    itemname: "JBL earphone",
    price: 96,
    img: "../Images/jbl1.webp",
    previ: "p-5",
    viewprevi: "p-5",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjkxex",
    itemname: "JBL True wirless",
    price: 58,
    img: "../Images/jbl2.webp",
    previ: "p-6",
    viewprevi: "p-6",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjkjhxams",
    itemname: "JBL Cinema",
    price: 559,
    img: "../Images/jblcinema1.webp",
    previ: "p-7",
    viewprevi: "p-7",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjmnmmkams",
    itemname: "JBL Speaker",
    price: 239,
    img: "../Images/jbls1.webp",
    previ: "p-8",
    viewprevi: "p-8",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "ksxkjxlknms",
    itemname: "JBL Speaker",
    price: 339,
    img: "../Images/jbls2.webp",
    previ: "p-9",
    viewprevi: "p-9",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde
    iste, inventore cupiditate.`,
  },
  {
    id: "kskjnknlknms",
    itemname: "Neck band",
    price: 259,
    img: "../Images/nb1.avif",
    previ: "p-10",
    viewprevi: "p-10",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "eryijmm",
    itemname: "Neck band",
    price: 256,
    img: "../Images/nb2.avif",
    previ: "p-11",
    viewprevi: "p-11",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjcnd",
    itemname: "Neck band",
    price: 266,
    img: "../Images/nb3.avif",
    previ: "p-12",
    viewprevi: "p-12",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhbcjns",
    itemname: "Partly Speaker",
    price: 336,
    img: "../Images/nb4.avif",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhcbskj",
    itemname: "Boalt earphone",
    price: 266,
    img: "../Images/earphone/baoltear6.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jkjdcnskjxskj",
    itemname: "Earphone",
    price: 499,
    img: "../Images/earphone/wear10.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "yugkjnkdfg",
    itemname: "Boat Earphone",
    price: 499,
    img: "../Images/earphone/wear.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjhbnewetr",
    itemname: "Boat Earphone",
    price: 329,
    img: "../Images/earphone/wear2.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde
    iste, inventore `,
  },
  {
    id: "fdgbjnsdcg",
    itemname: "Earphone",
    price: 239,
    img: "../Images/earphone/wear3.avif",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid `,
  },
  {
    id: "kjnkbrres",
    itemname: "Earphone",
    price: 429,
    img: "../Images/earphone/wear4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde
    iste.`,
  },
  {
    id: "mhbmntrdgf",
    itemname: "Earphone",
    price: 579,
    img: "../Images/earphone/wear5.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde
    iste.`,
  },
  {
    id: "kjbjftrdgb",
    itemname: "Boalt earphone",
    price: 679,
    img: "../Images/earphone/bltear7.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde
    iste.`,
  },
  {
    id: "jhbbytrdgfcg",
    itemname: "Earphone",
    price: 319,
    img: "../Images/earphone/wear8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia unde.`,
  },
  {
    id: "kjbhvghfhgb",
    itemname: "Earphone",
    price: 399,
    img: "../Images/earphone/wear9.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhbhjbwe",
    itemname: "Earphone",
    price: 559,
    img: "../Images/earphone/wear10.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores? Mollitia.`,
  },
  {
    id: "jhtygcbqw",
    itemname: "Earphone",
    price: 569,
    img: "../Images/earphone/wear11.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjbnjetwad",
    itemname: "Earphone",
    price: 639,
    img: "../Images/earphone/wear12.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnbtuywqedx",
    itemname: "JBL Earphone",
    price: 489,
    img: "../Images/earphone/wear13.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "hjbjhbwredcgbn",
    itemname: "JBL Earphone",
    price: 589,
    img: "../Images/earphone/jblear3.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "khbjrtdfsdc",
    itemname: "JBL Earphone",
    price: 549,
    img: "../Images/earphone/jblear4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnmnytrtxc",
    itemname: "Boult Earphone",
    price: 349,
    img: "../Images/earphone/bltear7.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjbnhvfda",
    itemname: "Boat headphone",
    price: 649,
    img: "../Images/headphone/boathear.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjbaztyol",
    itemname: "Boat headphone",
    price: 779,
    img: "../Images/headphone/boathear2.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnbhtaaa",
    itemname: "Boat headphone",
    price: 479,
    img: "../Images/headphone/boathear3.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "xkbhsaratgaa",
    itemname: "Boat headphone",
    price: 489,
    img: "../Images/headphone/boathear4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjbtatatatat",
    itemname: "Boat headphone",
    price: 1089,
    img: "../Images/headphone/boatbhear4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "zkjabzkazalkmz",
    itemname: "Sony headphone",
    price: 889,
    img: "../Images/headphone/sonyheadphone1.jpg",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnagahakjkj",
    itemname: "Zerbonic headphone",
    price: 689,
    img: "../Images/headphone/Zerbonicheadph1.jpg",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjbmbjhaaakjnlkm",
    itemname: "Boat headphone",
    price: 629,
    img: "../Images/headphone/boatph2.jpg",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnjhghnkmjkkj",
    itemname: "Boat neckband",
    price: 389,
    img: "../Images/neckband/boatnb1.avif",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "hjbmnbatykjn",
    itemname: "Boat neckband",
    price: 489,
    img: "../Images/neckband/boatnb2.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "lkjnjhbbfgvaauu",
    itemname: "Boat neckband",
    price: 689,
    img: "../Images/neckband/boatnb3.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "lkmnjhgvbauu",
    itemname: "Boat neckband",
    price: 539,
    img: "../Images/neckband/boatnb4.avif",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jgbghvgnm",
    itemname: "Oneplus neckband",
    price: 439,
    img: "../Images/neckband/onenb5.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jkgyjnjhbkjn",
    itemname: "Boat neckband",
    price: 535,
    img: "../Images/neckband/boaltnb6.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "ghvjklkjkjbn",
    itemname: "Realme neckband",
    price: 568,
    img: "../Images/neckband/realmenb7.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "hgvbjanbhaanoo",
    itemname: "Oppo neckband",
    price: 469,
    img: "../Images/neckband/opponb8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjhkajnkjabknskjhs",
    itemname: "Aroma neckband",
    price: 529,
    img: "../Images/neckband/aromanb8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "khbambamijyyi",
    itemname: "Techfire neckband",
    price: 669,
    img: "../Images/neckband/techfirenb9.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "sjhaznamlkamlm",
    itemname: "Boat true wireless",
    price: 559,
    img: "../Images/true/boattrue1.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kuhnlkndkjxsxn",
    itemname: "Boult true wireless",
    price: 523,
    img: "../Images/true/boult12.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "nklanagnsbjksd",
    itemname: "Realme true wireless",
    price: 565,
    img: "../Images/true/realme2.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "hnmnkjlkamankj",
    itemname: "Oneplus true wireless",
    price: 575,
    img: "../Images/true/one3.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "klujnaknklahakl",
    itemname: "Noise true wireless",
    price: 455,
    img: "../Images/true/noise4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhbmankankakjhlkmk",
    itemname: "Noise true wireless",
    price: 555,
    img: "../Images/true/noise5.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjanklismlskwqqwqw",
    itemname: "Noise true wireless",
    price: 551,
    img: "../Images/true/noise6.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnkaqqwqmwlkqmk",
    itemname: "Noise true wireless",
    price: 455,
    img: "../Images/true/noise7.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "lkloskxsxl",
    itemname: "Noise true wireless",
    price: 455,
    img: "../Images/true/noise8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kbhknnkll",
    itemname: "Oppo true wireless",
    price: 655,
    img: "../Images/true/oppo9.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnlkkdlkeosxok",
    itemname: "Truke true wireless",
    price: 885,
    img: "../Images/true/truke10.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "uhjkanjhkjol",
    itemname: "Mivi true wireless",
    price: 541,
    img: "../Images/true/mivi11.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnknklmlklss",
    itemname: "Boat speaker",
    price: 891,
    img: "../Images/speaker/boat.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjnkmliujaoakz",
    itemname: "JBL speaker",
    price: 781,
    img: "../Images/speaker/jbl1.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jsxnsklmop",
    itemname: "JBL speaker",
    price: 681,
    img: "../Images/speaker/jbl2.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kxjsnxslk",
    itemname: "JBL speaker",
    price: 689,
    img: "../Images/speaker/jbl3.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "akjanoklopnm",
    itemname: "JBL speaker",
    price: 789,
    img: "../Images/speaker/jbl4.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjsnaopoonnbx",
    itemname: "Boat speaker",
    price: 589,
    img: "../Images/speaker/boat5.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "xkjsmxmlmxopgh",
    itemname: "Boat speaker",
    price: 759,
    img: "../Images/speaker/boat6.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjanakjikjmb",
    itemname: "Boat speaker",
    price: 755,
    img: "../Images/speaker/boat8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kxjnzdxjksnxo",
    itemname: "Sony speaker",
    price: 1055,
    img: "../Images/speaker/sony7.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjdckjdxopliuhj",
    itemname: "Sony speaker",
    price: 1125,
    img: "../Images/speaker/sony8.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jhbmnzlzkoijlk",
    itemname: "Sony speaker",
    price: 1225,
    img: "../Images/speaker/sony9.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "kjzbkjzcxghbjh",
    itemname: "JBL speaker",
    price: 625,
    img: "../Images/speaker/jbl5.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "jknxkasdnxkjs",
    itemname: "JBL speaker",
    price: 629,
    img: "../Images/speaker/jbl6.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "dkcjnsxducnjskj",
    itemname: "Intex speaker",
    price: 2029,
    img: "../Images/speaker/intex10.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
  {
    id: "siuxnazlkkjsxns",
    itemname: "Intex speaker",
    price: 2039,
    img: "../Images/speaker/intex11.webp",
    previ: "p-13",
    viewprevi: "p-13",
    descInfo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    cumque eum ut nemo optio aliquid tempora asperiores.`,
  },
];
/*  */
