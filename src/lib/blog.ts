export type BlogSource = {
  title: string;
  href: string;
};

export type SareeTradition = {
  id: string;
  name: string;
  region: string;
  signature: string;
  character: string;
  paragraphs: string[];
};

export type OccasionGuide = {
  id: string;
  name: string;
  priority: string;
  direction: string;
  paragraphs: string[];
  considerations: string[];
};

export type StylingPrinciple = {
  id: string;
  name: string;
  focus: string;
  effect: string;
  paragraphs: string[];
  experiments: string[];
};

export type DrapingStep = {
  id: string;
  name: string;
  checkpoint: string;
  paragraphs: string[];
  tip: string;
};

export type CarePractice = {
  id: string;
  name: string;
  principle: string;
  outcome: string;
  paragraphs: string[];
  checklist: string[];
};

export type FabricProfile = {
  id: string;
  name: string;
  composition: string;
  character: string;
  paragraphs: string[];
  questions: string[];
};

export type BlouseDecision = {
  id: string;
  name: string;
  priority: string;
  result: string;
  paragraphs: string[];
  questions: string[];
};

export type ColourApproach = {
  id: string;
  name: string;
  relationship: string;
  effect: string;
  paragraphs: string[];
  questions: string[];
};

type BlogPostBase = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  primaryKeyword: string;
  hero: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition?: string;
    caption: string;
  };
  introduction: string[];
  sources: BlogSource[];
  sourceNote: string;
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    href: string;
    label: string;
  };
};

export type TraditionsBlogPost = BlogPostBase & {
  kind: "traditions";
  introductionHeading: string;
  traditions: SareeTradition[];
};

export type OccasionsBlogPost = BlogPostBase & {
  kind: "occasions";
  introductionHeading: string;
  framework: Array<{
    title: string;
    prompt: string;
  }>;
  occasions: OccasionGuide[];
};

export type StylingBlogPost = BlogPostBase & {
  kind: "styling";
  introductionHeading: string;
  startingPoints: Array<{
    frame: string;
    continuousLine: string;
    moreContrast: string;
  }>;
  principles: StylingPrinciple[];
};

export type DrapingBlogPost = BlogPostBase & {
  kind: "draping";
  introductionHeading: string;
  preparation: Array<{
    item: string;
    guidance: string;
  }>;
  steps: DrapingStep[];
  troubleshooting: Array<{
    issue: string;
    likelyCause: string;
    adjustment: string;
  }>;
};

export type CareBlogPost = BlogPostBase & {
  kind: "care";
  introductionHeading: string;
  decisionChecklist: string[];
  practices: CarePractice[];
  materialNotes: Array<{
    material: string;
    everydayApproach: string;
    caution: string;
  }>;
};

export type FabricsBlogPost = BlogPostBase & {
  kind: "fabrics";
  introductionHeading: string;
  foundationTerms: Array<{
    term: string;
    meaning: string;
  }>;
  profiles: FabricProfile[];
  constructionTerms: Array<{
    term: string;
    description: string;
    question: string;
  }>;
};

export type BlouseBlogPost = BlogPostBase & {
  kind: "blouse";
  introductionHeading: string;
  fitChecks: Array<{
    area: string;
    goodFit: string;
    problemSigns: string;
  }>;
  decisions: BlouseDecision[];
  tailorBrief: string[];
};

export type ColourBlogPost = BlogPostBase & {
  kind: "colour";
  introductionHeading: string;
  colourTerms: Array<{
    term: string;
    meaning: string;
  }>;
  approaches: ColourApproach[];
  blouseDirections: Array<{
    direction: string;
    effect: string;
    check: string;
  }>;
  testingChecklist: string[];
};

export type BlogPost =
  | TraditionsBlogPost
  | OccasionsBlogPost
  | StylingBlogPost
  | DrapingBlogPost
  | CareBlogPost
  | FabricsBlogPost
  | BlouseBlogPost
  | ColourBlogPost;

const typesOfSareesPost: BlogPost = {
  kind: "traditions",
  slug: "types-of-sarees-in-india",
  title: "Types of Sarees in India: 8 Regional Traditions",
  eyebrow: "The Saree Guide / 01",
  description:
    "Explore eight types of sarees in India, their regional origins, textile techniques and distinctive character in this introductory guide.",
  excerpt:
    "An introduction to eight regional saree traditions, from Banarasi brocade and Kanjeevaram silk to Bandhani resist dyeing and Patola double ikat.",
  publishedAt: "2026-07-23",
  updatedAt: "2026-07-23",
  readingTime: "10 minute read",
  primaryKeyword: "types of sarees in India",
  hero: {
    src: "/images/campaign/house-textile-closeup.png",
    alt: "Close view of an ANURRAKTI textile showing its colour, surface and border",
    width: 2220,
    height: 1481,
    caption: "Textile study / ANURRAKTI",
  },
  introductionHeading: "A vocabulary of cloth and place",
  introduction: [
    "There is no single way to describe an Indian saree. Across the country, saree traditions have developed around different fibres, looms, dyeing methods, motifs and ceremonial customs. Their names may refer to a place, a community or a textile technique, and each carries its own visual language.",
    "This guide introduces eight widely recognised types of sarees in India. It is a starting point rather than an exhaustive catalogue: India has many more regional and community-specific traditions, and even within one named tradition, materials and designs can vary. Learning to notice construction, surface, border and drape is more useful than reducing a saree to a label alone.",
  ],
  traditions: [
    {
      id: "banarasi",
      name: "Banarasi",
      region: "Varanasi, Uttar Pradesh",
      signature: "Brocade weaving, silk and zari",
      character: "Ornate, luminous and ceremonial",
      paragraphs: [
        "Banarasi sarees are closely associated with Varanasi's brocade-weaving tradition. They are recognised for richly patterned surfaces, zari work and motifs built into the cloth rather than simply placed on top of it. Depending on the weave and complexity, the effect may range from a restrained field of butis to an elaborate all-over composition.",
        "The density of the brocade and the prominence of the border or pallu give many Banarasi sarees a distinctly formal presence. They are often chosen for weddings and significant celebrations, but lighter interpretations can be styled with considerably less ceremony.",
      ],
    },
    {
      id: "kanjeevaram",
      name: "Kanjeevaram",
      region: "Kanchipuram, Tamil Nadu",
      signature: "Structured silk, zari and defined borders",
      character: "Architectural, lustrous and enduring",
      paragraphs: [
        "Kanjeevaram sarees come from the temple town of Kanchipuram and are known for their substantial silk, lustre and strongly articulated borders. Traditional imagery often draws from temple architecture, nature and geometric forms, giving the cloth a sense of rhythm and structure.",
        "A Kanjeevaram usually holds its shape more firmly than a very light or fluid saree. That body makes the pleats and pallu visually pronounced, which is one reason the tradition remains closely connected with South Indian weddings, festivals and heirloom dressing.",
      ],
    },
    {
      id: "chanderi",
      name: "Chanderi",
      region: "Chanderi, Madhya Pradesh",
      signature: "Light, translucent silk-cotton cloth",
      character: "Airy, polished and quietly formal",
      paragraphs: [
        "Chanderi is associated with a fine, lightweight and often translucent fabric woven in silk, cotton or combinations of the two. Small motifs, delicate checks and a measured use of zari are characteristic of many classic Chanderi sarees.",
        "Its lightness gives Chanderi an elegant formality without the visual weight of dense brocade. It can work particularly well for daytime celebrations, warmer weather and occasions that call for refinement rather than heavy ornament.",
      ],
    },
    {
      id: "paithani",
      name: "Paithani",
      region: "Paithan and Yeola, Maharashtra",
      signature: "Silk with tapestry-like borders and pallus",
      character: "Jewel-toned, intricate and celebratory",
      paragraphs: [
        "Paithani takes its name from Paithan in Maharashtra and is distinguished by richly worked borders and pallus created with a tapestry-like weaving approach. Colour is central to its identity: contrasting warp and weft can produce a shifting, luminous effect as the fabric moves in light.",
        "Birds, flowers and geometric forms frequently appear in Paithani design. Its detail, colour and ceremonial associations make it a prominent choice for Maharashtrian weddings and festive wardrobes, with the pallu often serving as the visual centre of the saree.",
      ],
    },
    {
      id: "bandhani",
      name: "Bandhani",
      region: "Gujarat and Rajasthan",
      signature: "Tied resist-dye patterns",
      character: "Graphic, vibrant and full of movement",
      paragraphs: [
        "Bandhani is created by tying many small sections of cloth before dyeing it. When the ties are opened, they leave undyed dots that form fields, waves, circles and intricate figurative patterns. The word is connected to bandh, meaning to tie.",
        "Because the design comes from the relationship between tied points and colour, Bandhani can feel both precise and alive. Red, yellow, green and deep blue are strongly associated with the tradition, although contemporary pieces move well beyond a fixed palette.",
      ],
    },
    {
      id: "sambalpuri",
      name: "Sambalpuri",
      region: "Western Odisha",
      signature: "Ikat-patterned yarns",
      character: "Graphic, rhythmic and culturally rooted",
      paragraphs: [
        "Sambalpuri sarees are closely associated with Odisha's ikat traditions. In ikat, sections of yarn are resist-dyed before weaving, so the pattern is planned in the threads and then resolved on the loom. The slight softness at the edges of a motif is part of the technique's distinctive visual character.",
        "Geometric forms, flowers, animals and symbols connected with Odisha's cultural life often appear in Sambalpuri textiles. The combination of disciplined planning and small variations created through dyeing gives each composition its energy.",
      ],
    },
    {
      id: "jamdani",
      name: "Jamdani",
      region: "Bengal",
      signature: "Supplementary-weft inlay motifs",
      character: "Fine, floating and intricately detailed",
      paragraphs: [
        "Jamdani is recognised for motifs that appear to float across a fine ground. The design is formed during weaving through a supplementary-weft inlay technique, allowing individual motifs to be built into the cloth with exceptional control.",
        "The space around each motif matters as much as the motif itself. That balance can make Jamdani feel light and restrained even when the weaving is technically complex. Variations are produced across Bengal in cotton, silk and blended grounds.",
      ],
    },
    {
      id: "patola",
      name: "Patola",
      region: "Patan, Gujarat",
      signature: "Double-ikat weaving",
      character: "Precise, vivid and highly complex",
      paragraphs: [
        "Patola from Patan is celebrated for double ikat, a demanding process in which both warp and weft yarns are resist-dyed before they meet on the loom. The pattern emerges only when the separately planned threads align during weaving.",
        "This method produces compositions that can appear exceptionally crisp despite being constructed through dyed yarn. Geometric grids, flowers, birds and other symbolic motifs are characteristic, and the technical complexity places Patola among India's most exacting textile traditions.",
      ],
    },
  ],
  sources: [
    {
      title: "Woven Narratives — Ministry of Culture, Government of India",
      href: "https://www.indiaculture.gov.in/node/38441",
    },
    {
      title: "Woven Narratives exhibition catalogue — Ministry of Culture",
      href: "https://www.indiaculture.gov.in/sites/default/files/pdf/Woven_Narratives_16012024.pdf",
    },
    {
      title: "Varanasi weaving and Banarasi sarees — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/let-us-walk-in-varanasi",
    },
    {
      title: "Kanchipuram, home of the Kanjeevaram saree — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/tamil-nadu/kanchipuram",
    },
    {
      title: "Chanderi fabric — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/madhya-pradesh/chanderi-fabric",
    },
    {
      title: "Paithani sarees — Incredible India",
      href: "https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/aurangabad/paithani-sarees.html",
    },
    {
      title: "Jamnagari Bandhani — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/gujarat/dwarka/jamnagari-bandhani",
    },
    {
      title: "Sambalpuri sarees and Odisha's ikat tradition — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/odisha/cuttack/discover-a-canvas-of-creativity-and-culture-in-cuttack",
    },
    {
      title: "Geographical Indications: an introduction — Intellectual Property India",
      href: "https://ipindia.gov.in/page-content/geographical-indications-an-introduction",
    },
  ],
  sourceNote:
    "This introductory guide was checked against Government of India cultural, tourism and geographical-indication resources. Textile terminology and regional practices can contain further local variations.",
  cta: {
    eyebrow: "Continue exploring",
    heading: "Discover the current ANURRAKTI collections.",
    body: "View each one-of-one saree as a complete composition, followed by its border, surface and drape details.",
    href: "/collection",
    label: "Explore collections",
  },
};

const sareeForEveryOccasionPost: BlogPost = {
  kind: "occasions",
  slug: "how-to-choose-saree-for-every-occasion",
  title: "How to Choose a Saree for Every Occasion",
  eyebrow: "The Saree Guide / 02",
  description:
    "Learn how to choose a saree for every occasion by considering formality, venue, time, movement, comfort and the complete look.",
  excerpt:
    "A practical framework for choosing a saree for weddings, receptions, festivals, formal events and intimate celebrations.",
  publishedAt: "2026-07-27",
  updatedAt: "2026-07-27",
  readingTime: "9 minute read",
  primaryKeyword: "how to choose a saree for every occasion",
  hero: {
    src: "/images/campaign/blue-check-portrait-anurrakti.png",
    alt: "Woman wearing a blue checked ANURRAKTI saree with floral embroidery",
    width: 1122,
    height: 1402,
    objectPosition: "50% 28%",
    caption: "NAAZ campaign study / ANURRAKTI",
  },
  introductionHeading: "Start with the event, not the trend",
  introduction: [
    "Knowing how to choose a saree for an occasion is less about memorising a list of fabrics and more about understanding the event. A morning ceremony, an evening reception and a formal work gathering can all call for a saree, but they ask different things of the person wearing it.",
    "Begin with the practical details: your role, the dress code, the venue, the weather, the length of the event and how much you will move. Then consider the saree's weight, surface, border, pallu and drape. The most successful choice is one that belongs in the room and still feels like you.",
  ],
  framework: [
    {
      title: "Your role",
      prompt: "Are you the host, close family, a wedding guest, a colleague or attending in a professional capacity?",
    },
    {
      title: "Formality",
      prompt: "Is the gathering ceremonial, festive, formal, semi-formal or intimate?",
    },
    {
      title: "Time and place",
      prompt: "Will you be indoors or outdoors, in daylight or evening light, and in heat, humidity or air-conditioning?",
    },
    {
      title: "Movement",
      prompt: "Will you sit through rituals, stand for hours, travel between venues, dine or dance?",
    },
    {
      title: "The complete look",
      prompt: "Do the blouse, footwear, jewellery, bag and drape support the same degree of formality?",
    },
  ],
  occasions: [
    {
      id: "weddings",
      name: "Weddings and ceremonies",
      priority: "Role, ritual and duration",
      direction: "Ceremonial presence with dependable comfort",
      paragraphs: [
        "For a wedding, first establish how close you are to the couple and which function you are attending. Immediate family may need more ceremonial presence than a guest at a daytime ceremony. The invitation, venue and local customs are better guides than a generic idea of wedding dressing.",
        "An all-day function rewards a saree that can hold its drape through sitting, standing and photographs. Look at the total composition rather than ornament alone: a defined border, an expressive pallu or a richly worked surface can create occasion without making every element compete.",
      ],
      considerations: [
        "Confirm the function and dress expectations with the host when they are unclear.",
        "Choose the blouse and footwear before finalising the drape length.",
        "Secure the pallu and pleats according to how much you expect to move.",
      ],
    },
    {
      id: "receptions",
      name: "Receptions and evening celebrations",
      priority: "Light, movement and proportion",
      direction: "A stronger focal point with a clean silhouette",
      paragraphs: [
        "Evening events allow colour, sheen and surface detail to respond to artificial light. This does not require maximum embellishment. One decisive element—a graphic pallu, an unusual blouse, a luminous border or a saturated colour—often has more impact than several competing statements.",
        "Receptions also tend to involve greetings, dining and dancing. A controlled pallu and a drape you have worn before can matter more than choosing the most dramatic fabric in the wardrobe. Test how the saree looks while walking and sitting, not only while standing in front of a mirror.",
      ],
      considerations: [
        "View the saree in both warm indoor light and phone-camera light.",
        "Let either the saree or the jewellery lead the composition.",
        "Use discreet pins where needed without flattening the natural fall.",
      ],
    },
    {
      id: "festivals",
      name: "Festivals and religious gatherings",
      priority: "Custom, comfort and ease",
      direction: "Festive colour with a secure, respectful drape",
      paragraphs: [
        "Festival dressing often carries family or regional meaning, so the best starting point may already be in your wardrobe. A familiar weave, inherited piece or colour connected with the occasion can feel more appropriate than something selected only because it is new.",
        "Think about the physical rhythm of the day. If the event includes a puja, floor seating, cooking, visiting several homes or managing children, choose a saree and drape that let you participate comfortably. A beautiful saree should not keep you at the edge of the celebration.",
      ],
      considerations: [
        "Respect family or community customs around colour and draping.",
        "Choose a blouse that remains comfortable through a long day.",
        "Keep the hem and pallu manageable around lamps, stairs and crowded spaces.",
      ],
    },
    {
      id: "formal-events",
      name: "Formal work and cultural events",
      priority: "Context, clarity and restraint",
      direction: "Polished structure without ceremonial excess",
      paragraphs: [
        "A conference dinner, awards evening, office celebration and cultural programme may all be described as formal, but they do not share exactly the same atmosphere. Read the room: professional events usually benefit from a clear silhouette, a controlled pallu and surface detail that remains secondary to your presence.",
        "Restraint does not mean removing personality. An interesting border, thoughtful colour pairing or distinctive blouse can make the look memorable. The goal is versatility—the same saree should be able to move from a formal gathering to a dinner with a change of jewellery or styling.",
      ],
      considerations: [
        "Keep pleats neat and the pallu secure if you will be presenting or networking.",
        "Check that the blouse remains comfortable while seated for long periods.",
        "Carry one layer or shawl if the venue is heavily air-conditioned.",
      ],
    },
    {
      id: "daytime-events",
      name: "Daytime and outdoor gatherings",
      priority: "Climate, daylight and terrain",
      direction: "Lightness, movement and visible textile detail",
      paragraphs: [
        "Natural light reveals colour, weave and texture very clearly. Daytime dressing can therefore rely on the quality of the textile and a considered palette rather than heavy surface decoration. Light and mid-tone colours are options, not rules; deeper shades can work beautifully when the fabric and styling feel balanced.",
        "For gardens, terraces and destination events, investigate the ground and weather. A very long hem, delicate surface or complicated drape may become difficult on grass, steps or in wind. Choose footwear for the terrain before setting the final saree length.",
      ],
      considerations: [
        "Check how the fabric feels in the expected temperature and humidity.",
        "Use a secure pallu if the venue is exposed to wind.",
        "Consider sunscreen, perspiration and contact with outdoor seating when choosing colour and care.",
      ],
    },
    {
      id: "intimate-celebrations",
      name: "Intimate celebrations and dinners",
      priority: "Personality and repeat wear",
      direction: "A singular detail with relaxed styling",
      paragraphs: [
        "Smaller gatherings leave room for a more personal choice. A saree with an unusual colour relationship, illustration, border or story can become the centre of the look without needing the conventional signals of grand occasion wear.",
        "This is also the right setting for rewearing. Change the blouse, jewellery, hair or pallu treatment and the same saree can feel entirely different. Repetition is not a failure of styling; it is often where personal style becomes visible.",
      ],
      considerations: [
        "Choose one element to carry the visual emphasis.",
        "Use accessories to change the mood of a familiar saree.",
        "Prioritise a drape that feels natural rather than overly arranged.",
      ],
    },
  ],
  sources: [
    {
      title: "Indian textiles — Victoria and Albert Museum",
      href: "https://www.vam.ac.uk/articles/indian-textiles",
    },
    {
      title: "Woven Narratives — Ministry of Culture, Government of India",
      href: "https://www.indiaculture.gov.in/node/38441",
    },
    {
      title: "Basics of Saree Draping — Beauty & Wellness Sector Skill Council",
      href: "https://www.bwssc.in/wp-content/uploads/2025/12/BWS_N9019_Basics-of-Saree-Draping_v1.0_Participant_Handobook.pdf",
    },
  ],
  sourceNote:
    "This is editorial guidance rather than a fixed dress code. Recommendations should be adapted to the invitation, local custom, weather and the wearer's comfort. Textile context was checked against museum and Indian cultural-sector resources.",
  cta: {
    eyebrow: "Choose with intention",
    heading: "Find a saree that belongs in the moment.",
    body: "Explore the current one-of-one ANURRAKTI collections, then enquire about the piece that holds your attention.",
    href: "/collection",
    label: "Explore collections",
  },
};

const sareeForYourBodyTypePost: BlogPost = {
  kind: "styling",
  slug: "how-to-choose-saree-for-your-body-type",
  title: "How to Choose a Saree for Your Body Type",
  eyebrow: "The Saree Guide / 03",
  description:
    "Learn how to choose a saree for your body type using fabric, borders, pleats and drape—without restrictive rules about what you can wear.",
  excerpt:
    "A body-positive guide to fabric behaviour, scale, borders, pleats, pallus and blouse proportions—with experiments instead of restrictions.",
  publishedAt: "2026-07-31",
  updatedAt: "2026-07-31",
  readingTime: "10 minute read",
  primaryKeyword: "how to choose a saree for your body type",
  hero: {
    src: "/images/campaign/red-grey-portrait.jpg",
    alt: "Woman wearing a red and grey ANURRAKTI saree with a graphic border and pallu",
    width: 1760,
    height: 2200,
    objectPosition: "50% 35%",
    caption: "Drape and proportion study / ANURRAKTI",
  },
  introductionHeading: "Your body is not a problem to solve",
  introduction: [
    "Searches for how to choose a saree for your body type often lead to strict lists: one fabric for a petite frame, another for a curvy frame, and several things each person is told to avoid. A saree is far more adaptable than those rules suggest. The textile, border, pleats, pallu and blouse all change the final silhouette—and each can be adjusted to express a different preference.",
    "A more useful question is not, ‘What am I allowed to wear?’ but, ‘What effect would I like to create?’ You may want a long uninterrupted line, strong structure, generous volume, a defined waist or an easy fluid drape. This guide turns those intentions into practical choices you can test in front of a mirror.",
  ],
  startingPoints: [
    {
      frame: "Petite or shorter",
      continuousLine: "Precisely set the hem, reduce excess fabric at the waist and test a narrow or tonal border.",
      moreContrast: "Try a defined border, a compact open pallu or one deliberate area of volume.",
    },
    {
      frame: "Tall",
      continuousLine: "Use a tonal palette, finer border or long open pallu to emphasise vertical flow.",
      moreContrast: "Explore broad borders, larger motifs and colour breaks across the blouse and saree.",
    },
    {
      frame: "Curvy or fuller",
      continuousLine: "Try fluid fall, an uncluttered waist and a pallu that travels cleanly across the torso.",
      moreContrast: "Use structured pleats, a visible border or a more architectural pallu treatment.",
    },
    {
      frame: "Straight or athletic",
      continuousLine: "Choose narrow pleats, a controlled pallu and restrained contrast for a clean outline.",
      moreContrast: "Build dimension with texture, pleat volume, a contrasting blouse or a fuller pallu.",
    },
  ],
  principles: [
    {
      id: "fabric-behaviour",
      name: "Begin with fabric behaviour",
      focus: "Fluidity, body and weight",
      effect: "The foundation of the silhouette",
      paragraphs: [
        "Fabric behaviour has more influence on the final line than a body-type label. A fluid textile tends to follow the body's contours and form narrow folds. A fabric with more body stands away from the figure, holds sharper pleats and creates visible volume. Neither effect is inherently more flattering; they simply produce different silhouettes.",
        "Before deciding, drape a section at the shoulder and gather some of the fabric at the waist. Notice whether it falls, springs back or needs firm handling. Also consider the event: the fabric should remain comfortable through its full duration, not only look successful in a still photograph.",
      ],
      experiments: [
        "Compare one fluid and one structured saree in the same drape.",
        "Sit and walk before deciding whether the fabric feels manageable.",
        "Check transparency and weight in daylight as well as indoor light.",
      ],
    },
    {
      id: "scale-and-surface",
      name: "Choose the scale of the surface",
      focus: "Motifs, checks and negative space",
      effect: "Quiet continuity or visual rhythm",
      paragraphs: [
        "Motif scale changes where the eye pauses. Fine repeats and low contrast can make the saree read as one continuous field. Larger motifs, checks or strong colour relationships create rhythm and make the textile more present. This is a matter of visual emphasis, not a rule tied to height or size.",
        "Consider the saree at conversational distance, not only close up. A detail that looks prominent in the hand may become subtle when draped, while an all-over pattern may gain much more energy once the pleats overlap.",
      ],
      experiments: [
        "Photograph the saree from two metres away to assess its overall scale.",
        "Compare the motif where it lies flat and where it gathers into pleats.",
        "Let either the surface or the accessories lead, rather than asking both to compete.",
      ],
    },
    {
      id: "borders-and-lines",
      name: "Use borders as visual lines",
      focus: "Width, contrast and placement",
      effect: "Continuity, framing or emphasis",
      paragraphs: [
        "A border is a line that travels around the body. A narrow or tonal border tends to merge into the saree, while a broad or contrasting border creates a stronger frame at the hem and pallu. The choice can emphasise vertical length, introduce a deliberate break or bring attention to the movement of the drape.",
        "Placement matters as much as width. Set the hem only after putting on the footwear you intend to wear. Then look at where the upper border crosses the torso and shoulder; a small change in pallu length can shift the balance of the complete composition.",
      ],
      experiments: [
        "Pin the pallu at two different lengths and photograph both versions.",
        "Try the planned footwear before fixing the hem.",
        "Compare a tonal blouse with a contrasting one to see how the border reads.",
      ],
    },
    {
      id: "pleats",
      name: "Adjust the pleats, not your body",
      focus: "Number, width and placement",
      effect: "Controlled structure or generous volume",
      paragraphs: [
        "Pleats are adjustable architecture. Narrow, evenly stacked pleats can create a precise central line. Wider or fewer pleats make each fold more visible and may give the lower half greater volume. The best arrangement depends on the fabric's thickness, the saree's design and how freely you need to move.",
        "Avoid forcing a thick textile into the same number of pleats you use for a very fine one. Distribute bulk with intention and keep the tuck secure without making the waist uncomfortable. A professional draper can help for complex textiles, but the principle remains the same: work with the cloth you have.",
      ],
      experiments: [
        "Test two pleat widths before completing the full drape.",
        "Move the pleat group slightly left or right and observe the line.",
        "Walk, sit and climb a step to confirm that the pleats remain secure.",
      ],
    },
    {
      id: "pallu",
      name: "Decide what the pallu should do",
      focus: "Open, pleated, long or compact",
      effect: "Movement, coverage or definition",
      paragraphs: [
        "An open pallu displays more of the textile and creates a broad diagonal across the body. A pleated pallu concentrates the fabric at the shoulder, revealing more of the blouse and giving the outline greater definition. Length changes the mood again: a longer pallu feels fluid and dramatic, while a compact one is easier to manage.",
        "Choose according to movement and comfort as well as appearance. If you will be greeting people, presenting, dining or dancing, decide how much fabric you want to manage. Pins can support the drape, but they should not remove all of its natural movement.",
      ],
      experiments: [
        "Compare an open pallu with a five- or six-pleat version.",
        "Secure only the shoulder, then add a second pin only if movement requires it.",
        "Check the pallu from the back as well as the front.",
      ],
    },
    {
      id: "blouse-proportion",
      name: "Treat the blouse as part of the composition",
      focus: "Fit, length, neckline and contrast",
      effect: "Balance around the face and torso",
      paragraphs: [
        "The blouse changes the proportion of a saree more quickly than most accessories. Sleeve length, neckline, hem and contrast affect how much of the upper body reads as one field. A close colour relationship can create continuity; a contrasting blouse makes a distinct focal block.",
        "Fit comes before theory. The armhole should allow movement, the band should remain secure and the neckline should feel comfortable from every angle. Decide the blouse early enough to test it with the actual saree, undergarments, jewellery and pallu treatment.",
      ],
      experiments: [
        "Try one tonal and one contrasting blouse with the same saree.",
        "Raise your arms, sit and turn before approving the final fit.",
        "Photograph the complete neckline with the jewellery you plan to wear.",
      ],
    },
  ],
  sources: [
    {
      title: "Basics of Saree Draping — Beauty & Wellness Sector Skill Council",
      href: "https://www.bwssc.in/wp-content/uploads/2025/12/BWS_N9019_Basics-of-Saree-Draping_v1.0_Participant_Handobook.pdf",
    },
    {
      title: "Styling My Handloom — Office of the Development Commissioner for Handlooms",
      href: "https://www.handlooms.nic.in/assets/img/EBOOK/STYLING%20MY%20HANDLOO.pdf",
    },
    {
      title: "Indian textiles — Victoria and Albert Museum",
      href: "https://www.vam.ac.uk/articles/indian-textiles",
    },
  ],
  sourceNote:
    "Body-shape categories are broad descriptions, not standards or restrictions. This guide combines established draping considerations with ANURRAKTI editorial advice; the wearer's comfort, preferences and cultural context should lead every choice.",
  cta: {
    eyebrow: "Find your own line",
    heading: "Choose the saree first. Shape the drape around you.",
    body: "Explore ANURRAKTI's current one-of-one sarees, then consider the fabric, border and pallu as parts of your own composition.",
    href: "/collection",
    label: "Explore collections",
  },
};

const howToDrapeSareePost: BlogPost = {
  kind: "draping",
  slug: "how-to-drape-a-saree",
  title: "How to Drape a Saree: A Step‑by‑Step Guide",
  eyebrow: "The Saree Guide / 04",
  description:
    "Learn how to drape a saree with this beginner-friendly Nivi guide covering preparation, pleats, pallu, pinning and final adjustments.",
  excerpt:
    "A calm, beginner-friendly guide to the common Nivi drape—from preparing the foundation to setting the pleats and pallu securely.",
  publishedAt: "2026-08-04",
  updatedAt: "2026-08-04",
  readingTime: "9 minute read",
  primaryKeyword: "how to drape a saree",
  hero: {
    src: "/images/campaign/grey-anurrakti-rocks.png",
    alt: "Woman wearing a grey ANURRAKTI saree with defined front pleats and a bordered pallu",
    width: 1122,
    height: 1402,
    objectPosition: "50% 52%",
    caption: "NAAZ drape study / ANURRAKTI",
  },
  introductionHeading: "Learn the structure before chasing speed",
  introduction: [
    "Learning how to drape a saree is easier when the fabric stops feeling like one continuous length and begins to read as a sequence: foundation, first wrap, front pleats, upper drape and pallu. This guide teaches the common Nivi drape, a practical starting point for beginners and the base most people recognise in contemporary saree dressing.",
    "It is one method among many, not the universal or original way to wear a saree. Regional drapes use different lengths, directions, pleats and pallu placements. Begin here to understand tension, length and proportion; then learn a regional style from someone who knows its cultural and practical details.",
  ],
  preparation: [
    {
      item: "The saree",
      guidance: "Identify the plain inner end, the lower border and the more decorative pallu before you begin.",
    },
    {
      item: "A secure foundation",
      guidance: "Wear a well-fitted saree underskirt or petticoat that can hold the tuck without slipping or restricting breath.",
    },
    {
      item: "The blouse",
      guidance: "Finish the blouse fit first so the armhole, neckline and shoulder remain comfortable beneath the pallu.",
    },
    {
      item: "Your footwear",
      guidance: "Put on the footwear you plan to wear before setting the hem; changing height later changes the entire drape.",
    },
    {
      item: "Pins",
      guidance: "Keep two or three small safety pins nearby. Close each pin fully and position it so it does not press against the skin.",
    },
    {
      item: "A mirror and time",
      guidance: "Use a full-length mirror and practise without a deadline. The first goal is a secure drape, not speed.",
    },
  ],
  steps: [
    {
      id: "orient-the-saree",
      name: "Orient the saree",
      checkpoint: "Plain end ready; pallu at the far end",
      paragraphs: [
        "Open enough of the saree to identify its two ends. The inner end is usually quieter and is the end you begin tucking. The pallu is the section designed to remain visible over the shoulder; it often has denser pattern, a different layout or a finished end.",
        "Check that the lower border is facing the floor and the finished side of the textile is facing outward. If the saree has a fall stitched along the inside lower edge, keep that edge at your feet throughout the drape.",
      ],
      tip: "Fold the remaining length loosely over your arm or a chair so it does not twist while you begin.",
    },
    {
      id: "set-the-first-tuck",
      name: "Set the first tuck",
      checkpoint: "Hem level established at the right waist",
      paragraphs: [
        "Starting at the right side of your waist, tuck the plain end into the foundation. Set the lower edge so it lightly clears the floor in your chosen footwear. A slightly higher, secure hem is easier to move in than one that pools around the feet.",
        "The depth of the tuck should be enough to hold, but it should not pull the fabric so tightly that the lower edge lifts. Smooth the first section before continuing; this becomes the reference height for the full circumference.",
      ],
      tip: "Mark the correct floor length with your fingers and keep returning to that point as you wrap.",
    },
    {
      id: "complete-the-base-wrap",
      name: "Complete the base wrap",
      checkpoint: "One even round with no rising hem",
      paragraphs: [
        "Carry the fabric from right to left across the front, around the back and to the front again, tucking the upper edge as you go. Keep the tension firm enough to stay in place but comfortable enough to sit and breathe normally.",
        "Look down at the border after every quarter turn. If it begins to climb, release the last section and reset the length instead of correcting everything at the end. The fabric should return to the front without twisting.",
      ],
      tip: "Use one hand to hold the waist tension and the other to guide the lower border.",
    },
    {
      id: "measure-the-pallu",
      name: "Measure the pallu first",
      checkpoint: "Shoulder length chosen before front pleating",
      paragraphs: [
        "Before making the front pleats, take the remaining fabric around your body and bring the pallu diagonally across the torso to the left shoulder. Decide whether you want it open or pleated and how far it should fall down the back.",
        "Temporarily pin the chosen pallu length at the shoulder. This reserves enough fabric for the upper drape and shows how much remains for the waist and front pleats. Measuring now prevents discovering at the end that the pallu is too short.",
      ],
      tip: "For a first attempt, choose a manageable pallu length around the back of the knee rather than an extra-long fall.",
    },
    {
      id: "form-front-pleats",
      name: "Form the front pleats",
      checkpoint: "Even folds that face the same direction",
      paragraphs: [
        "Return to the loose fabric at the front and begin forming a stack of even pleats. The exact number and width depend on the fabric and your preferred volume; a fine textile may take more narrow pleats, while a substantial one often needs fewer, broader folds.",
        "Align the lower borders as you build the stack. Hold the pleats together near the upper edge and let them fall once before tucking. If the hem fans unevenly, correct the folds now rather than pulling individual layers after they are secured.",
      ],
      tip: "A temporary pin across the top of the pleat stack can keep the folds aligned while you adjust the hem.",
    },
    {
      id: "tuck-and-secure-pleats",
      name: "Tuck and secure the pleats",
      checkpoint: "Pleats fall straight and allow a full step",
      paragraphs: [
        "Tuck the pleat stack at the front of the waist, usually just to the left of the navel in a common Nivi drape. Direct the folds downward rather than inward; this helps them fall cleanly instead of bunching at the waist.",
        "Secure the stack through the saree and foundation if needed, keeping the pin closed and away from the body. Then take several full steps. The pleats should open enough for movement without pulling the first wrap loose.",
      ],
      tip: "If the waist feels bulky, reduce or widen the pleats instead of pushing more fabric into the same tuck.",
    },
    {
      id: "shape-the-upper-drape",
      name: "Shape the upper drape",
      checkpoint: "Clean diagonal from right waist to left shoulder",
      paragraphs: [
        "Bring the remaining fabric around the right hip and across the torso toward the left shoulder. Smooth the upper edge and decide how much coverage and ease you want across the front. The diagonal should feel intentional without restricting the arm.",
        "If the fabric collapses at the right hip, create one small hidden tuck to control the excess. If it pulls across the torso, release a little length from the shoulder before changing the waist pleats.",
      ],
      tip: "Raise both arms before final pinning; the upper drape should remain secure without cutting into the armhole.",
    },
    {
      id: "finish-the-pallu",
      name: "Finish the pallu and test movement",
      checkpoint: "Shoulder secure; hem and pleats stable in motion",
      paragraphs: [
        "For an open pallu, spread the visible width across the shoulder and let the border fall clearly. For a pleated pallu, form even folds from the upper edge, place the border where you want it to show and pin the stack securely to the blouse at the shoulder.",
        "Complete the drape by looking from front, side and back. Walk, sit, turn, use a step and reach forward. Check that the hem clears the feet, the front pleats remain vertical, the waist feels secure and the pallu does not limit movement.",
      ],
      tip: "Make one adjustment at a time—pallu length, pleat position or waist tension—so you can see which change solved the problem.",
    },
  ],
  troubleshooting: [
    {
      issue: "The hem rises at the back",
      likelyCause: "The first wrap changed height or was pulled too tightly.",
      adjustment: "Release the affected section and re-tuck it at the original floor length.",
    },
    {
      issue: "The front pleats spread apart",
      likelyCause: "The folds are uneven or the stack is angled at the waist.",
      adjustment: "Realign the lower borders, straighten the stack and secure it across the top.",
    },
    {
      issue: "The waist feels bulky",
      likelyCause: "Too much fabric is concentrated in narrow pleats or deep tucks.",
      adjustment: "Use fewer, wider pleats and reduce the depth of fabric tucked at one point.",
    },
    {
      issue: "The pallu keeps slipping",
      likelyCause: "The shoulder angle, fabric weight or pin placement is unstable.",
      adjustment: "Reset the shoulder length and pin through several layers and a secure part of the blouse.",
    },
    {
      issue: "Walking feels restricted",
      likelyCause: "The base wrap is tight or the front pleats cannot open.",
      adjustment: "Release waist tension slightly and confirm the pleat stack opens with a full step.",
    },
  ],
  sources: [
    {
      title: "Basics of Saree Draping — Beauty & Wellness Sector Skill Council",
      href: "https://www.bwssc.in/wp-content/uploads/2025/12/BWS_N9019_Basics-of-Saree-Draping_v1.0_Participant_Handobook.pdf",
    },
    {
      title: "Styling My Handloom — Office of the Development Commissioner for Handlooms",
      href: "https://www.handlooms.nic.in/assets/img/EBOOK/STYLING%20MY%20HANDLOO.pdf",
    },
    {
      title: "Beauty Therapist, Class XII — PSSCIVE, NCERT",
      href: "https://psscive.ac.in/storage/uploads/textbooks/pdf/english/beauty-therapist-english-class-%2012.pdf",
    },
  ],
  sourceNote:
    "This guide describes a common contemporary Nivi drape. Saree traditions vary by region, community, occasion and textile; learn culturally specific drapes from practitioners familiar with their context.",
  cta: {
    eyebrow: "Practise with the textile",
    heading: "A considered drape begins with a saree worth observing.",
    body: "Explore ANURRAKTI's current one-of-one sarees and notice how each border, surface and pallu suggests its own composition.",
    href: "/collection",
    label: "Explore collections",
  },
};

const howToCareForSareesPost: BlogPost = {
  kind: "care",
  slug: "how-to-care-for-sarees",
  title: "How to Care for Sarees: Washing and Storage",
  eyebrow: "The Saree Guide / 05",
  description:
    "Learn how to care for sarees safely, from airing and cleaning decisions to drying, folding, storage and protection from light and pests.",
  excerpt:
    "A careful guide to airing, cleaning, drying and storing sarees—built around the textile rather than one universal washing rule.",
  publishedAt: "2026-08-08",
  updatedAt: "2026-08-08",
  readingTime: "10 minute read",
  primaryKeyword: "how to care for sarees",
  hero: {
    src: "/images/campaign/blue-check-profile-anurrakti.png",
    alt: "Woman wearing a blue checked ANURRAKTI saree with embroidered borders and a translucent pallu",
    width: 1122,
    height: 1402,
    objectPosition: "50% 48%",
    caption: "Textile detail and drape / ANURRAKTI",
  },
  introductionHeading: "Care begins by identifying what you have",
  introduction: [
    "Knowing how to care for sarees begins with a detail many generic guides skip: two sarees that look similar may need completely different treatment. Fibre, dye, weave, zari, embroidery, paint, trims and previous repairs can all change whether a saree should be aired, hand washed, professionally cleaned or left untreated until a specialist has seen it.",
    "The safest routine is therefore conservative. Record the maker's instructions, remove surface risks after wearing, clean only when necessary and store the saree clean, dry, dark and supported. The guidance below is suitable for everyday wardrobe decisions; fragile, antique, hand-painted or historically important textiles should be assessed by a qualified textile conservator.",
  ],
  decisionChecklist: [
    "What fibres and dyes are present, and are they confirmed rather than assumed?",
    "Does the saree contain zari, sequins, beads, embroidery, paint, adhesive or multiple materials?",
    "Did the maker or seller provide written cleaning and ironing instructions?",
    "Is the issue loose dust, perspiration, a local stain or a need for full cleaning?",
    "Has the textile been washed or cleaned safely before, and is there any sign of colour transfer?",
    "Is the saree fragile, inherited, repaired or valuable enough to require specialist advice?",
  ],
  practices: [
    {
      id: "after-wearing",
      name: "After wearing: inspect before storing",
      principle: "Remove risks early",
      outcome: "Less unnecessary cleaning",
      paragraphs: [
        "Do not return a saree directly to a crowded wardrobe after wearing it. Remove safety pins and jewellery carefully, supporting the fabric around each point rather than pulling. Look for perspiration, food, makeup, perfume, loose threads and any area where the hem touched the ground.",
        "If the saree is otherwise clean, air it indoors in a shaded, well-ventilated place until it is completely dry. Extended direct sunlight can fade dyes and weaken fibres, so airing is not the same as leaving a saree in harsh sun. Once dry, use a clean soft surface to fold it.",
      ],
      checklist: [
        "Remove pins, brooches and detachable accessories.",
        "Check the hem, underarm area, pallu and fold lines.",
        "Air away from direct sunlight, cooking fumes and perfume.",
      ],
    },
    {
      id: "cleaning-decision",
      name: "Decide whether cleaning is necessary",
      principle: "Treat the specific problem",
      outcome: "Less stress on fibres and colour",
      paragraphs: [
        "Cleaning is an intervention, not an automatic step after every wear. Water, detergent, solvent, friction and heat can each affect dyes, finishes, metallic elements or surface decoration. Begin by following the maker's instructions and identifying exactly what needs attention.",
        "Do not rub an unknown stain, apply household stain removers or experiment with salt, vinegar, shampoo or other online remedies. Those treatments can set a stain, shift colour or alter the surface. Blot fresh moisture gently with a clean white absorbent cloth and seek advice when the textile or stain is uncertain.",
      ],
      checklist: [
        "Distinguish a local mark from a need for full cleaning.",
        "Photograph the stain and note what caused it, if known.",
        "Keep unverified chemicals and home remedies away from the textile.",
      ],
    },
    {
      id: "home-washing",
      name: "Wash at home only when care guidance allows",
      principle: "Permission before method",
      outcome: "Controlled wet cleaning",
      paragraphs: [
        "Home washing is appropriate only when the maker or reliable care information confirms that the complete saree—not just its main fibre—is washable. A cotton body does not make attached zari, embroidery, lining or unstable dye safe in water. When colourfastness is doubtful, do not use a hidden corner test as permission to wash the entire saree; consult a specialist.",
        "If hand washing is explicitly allowed, use a clean basin, cool or appropriately specified water and a small amount of suitable mild detergent. Avoid scrubbing, twisting, long soaking and wringing. Wet textiles are heavier and more vulnerable to distortion, so lift the saree with both hands and support its full weight while moving it.",
      ],
      checklist: [
        "Separate the saree from other garments.",
        "Use the water temperature and cleaning product specified by the maker.",
        "Rinse without twisting and support the textile when lifting it.",
      ],
    },
    {
      id: "professional-cleaning",
      name: "Choose professional care deliberately",
      principle: "Experience matters",
      outcome: "Treatment matched to construction",
      paragraphs: [
        "Silk, zari, embellished, hand-painted, heavily stained and structurally weak sarees often need professional assessment. Dry cleaning is not automatically safe for every textile, and a general garment cleaner may not have experience with handwoven fabrics, fugitive dyes or metallic threads.",
        "Ask the cleaner how they identify fibres and colourfastness, whether they clean sarees with similar work, and how they protect borders, tassels and embellishment. Point out every stain and repair. Keep the care receipt and method with your records so future decisions are based on evidence rather than memory.",
      ],
      checklist: [
        "Describe all known fibres, dyes, stains and previous treatments.",
        "Ask how zari, embroidery and fragile edges will be protected.",
        "Avoid accepting a process that the cleaner cannot explain clearly.",
      ],
    },
    {
      id: "drying-and-pressing",
      name: "Dry and press with low stress",
      principle: "Support, shade and controlled heat",
      outcome: "Fewer distortions and shine marks",
      paragraphs: [
        "When washing is permitted, remove excess water without wringing. Lay the saree on a clean colourfast towel or another suitable support and reshape the edges gently. Dry in shade with good air movement, keeping heavy wet areas supported rather than allowing them to pull from one point.",
        "Press only according to the textile's care instructions. Use the lowest effective temperature, work from the reverse where suitable and place a clean pressing cloth between the iron and the textile. Avoid pressing directly over zari, sequins, beads, raised embroidery or painted surfaces.",
      ],
      checklist: [
        "Do not store or fold any area that remains damp.",
        "Avoid prolonged direct sunlight and high heat.",
        "Test pressing conditions cautiously and never force out a crease.",
      ],
    },
    {
      id: "folding-and-storage",
      name: "Fold and store with support",
      principle: "Few soft folds in a stable environment",
      outcome: "Reduced creasing and abrasion",
      paragraphs: [
        "Store a saree only when it is clean and completely dry. Use a clean drawer, shelf or archival-quality box large enough to minimise sharp folds. Prewashed unbleached cotton or unbuffered acid-free tissue can separate layers and softly pad fold lines. Avoid newspaper, coloured paper and direct contact with untreated wood or ordinary cardboard.",
        "Do not compress a stack until borders and embellishments imprint the saree below. Place heavier pieces lower, use clean interleaving and periodically change the fold positions so the same fibres are not stressed indefinitely. For a very fragile or heavily decorated saree, flat or professionally designed storage may be safer than routine folding.",
      ],
      checklist: [
        "Use as few folds as the available space permits.",
        "Pad sharp folds and separate abrasive or metallic surfaces.",
        "Keep enough room to lift one saree without dragging another.",
      ],
    },
    {
      id: "environment-and-pests",
      name: "Control light, moisture and pests",
      principle: "Prevention over emergency treatment",
      outcome: "A more stable wardrobe environment",
      paragraphs: [
        "Choose a dark, clean, dry storage area with stable conditions and air circulation. Avoid damp walls, direct sunlight and plastic dry-cleaning bags that can trap moisture. Keep perfume, cosmetics and food away from stored sarees, especially where metallic threads may tarnish or fibres may attract insects when soiled.",
        "Inspect the wardrobe and sarees periodically for moisture, musty odour, frass, webbing, holes or larvae. Isolate a suspected infestation rather than returning the piece to the wardrobe. Do not place loose mothballs, strong repellents or unverified chemicals in direct contact with textiles; seek professional pest or conservation advice for a significant problem.",
      ],
      checklist: [
        "Keep the storage area dark, dry, clean and ventilated.",
        "Inspect folds, corners and adjacent shelves—not only visible surfaces.",
        "Isolate affected pieces and avoid improvised chemical treatments.",
      ],
    },
  ],
  materialNotes: [
    {
      material: "Cotton or linen",
      everydayApproach: "Home washing may be suitable when the maker confirms stable dye and simple construction.",
      caution: "Printed, hand-dyed, starched, embroidered or mixed-material sarees can require different care.",
    },
    {
      material: "Silk",
      everydayApproach: "Air after wear and follow the specific maker's cleaning guidance; specialist care is often the safer choice.",
      caution: "Water, friction, heat and unstable dyes can change lustre, handle, colour and dimensions.",
    },
    {
      material: "Zari or metallic thread",
      everydayApproach: "Keep clean and dry, separate from abrasive surfaces and wrap with clean cotton or suitable tissue.",
      caution: "Moisture, perspiration, perfume and unsuitable cleaning can tarnish or stain surrounding fabric.",
    },
    {
      material: "Embroidery, beads or sequins",
      everydayApproach: "Support the weight, interleave the surface and use a cleaner experienced with embellishment.",
      caution: "Hanging, compression, snagging and solvents may stress threads, adhesives or decorative elements.",
    },
    {
      material: "Painted, antique or unknown",
      everydayApproach: "Limit handling, document its condition and consult a textile conservator before cleaning.",
      caution: "Even a small water or solvent test can create irreversible tide marks, colour loss or cracking.",
    },
  ],
  sources: [
    {
      title: "Tips on silk care — Central Silk Board, Government of India",
      href: "https://csb.gov.in/index.php/silk-sericulture/silk/vanya-silk",
    },
    {
      title: "Basic care of textiles — Canadian Conservation Institute",
      href: "https://www.canada.ca/en/conservation-institute/services/care-objects/textiles-costumes/basic-care-textiles.html",
    },
    {
      title: "Flat storage for textiles — Canadian Conservation Institute",
      href: "https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/flat-storage-textiles.html",
    },
  ],
  sourceNote:
    "This guide adapts preventive-conservation principles for everyday wardrobes. Follow the instructions supplied with the individual saree; seek a textile conservator for fragile, antique, painted or historically important pieces.",
  cta: {
    eyebrow: "Care for what you choose",
    heading: "Let the textile remain part of your life, not only your wardrobe.",
    body: "Explore ANURRAKTI's current one-of-one sarees and keep the care information for your chosen piece with its story.",
    href: "/collection",
    label: "Explore collections",
  },
};

const sareeFabricsPost: BlogPost = {
  kind: "fabrics",
  slug: "saree-fabrics-explained",
  title: "Saree Fabrics Explained: Silk, Cotton and Blends",
  eyebrow: "The Saree Guide / 06",
  description:
    "Understand saree fabrics including silk, cotton, linen, blends and man-made fibres—and learn why weave, finish and weight matter too.",
  excerpt:
    "A practical vocabulary for silk, cotton, linen, blends and man-made fibres—and the construction terms that are often mistaken for fibres.",
  publishedAt: "2026-08-12",
  updatedAt: "2026-08-12",
  readingTime: "10 minute read",
  primaryKeyword: "saree fabrics",
  hero: {
    src: "/images/campaign/red-anurrakti-rocks.png",
    alt: "Woman wearing a red ANURRAKTI saree with contrasting illustrated pallu and woven border",
    width: 1122,
    height: 1402,
    objectPosition: "50% 48%",
    caption: "Fibre, surface and composition / ANURRAKTI",
  },
  introductionHeading: "A fabric name rarely tells the whole story",
  introduction: [
    "Saree fabrics are often described with a mixture of fibre names, weaving terms, regional traditions and surface effects. Silk and cotton identify raw materials. Satin identifies a weave. Crepe describes a characteristic surface that can be achieved in different ways. Banarasi names a weaving tradition connected with place, not one fixed fibre composition.",
    "That is why two sarees sold under the same familiar word can feel, fall and require care very differently. A useful fabric description should tell you what the saree is made from, how it is constructed, what has been added to its surface and how the finished cloth behaves. This guide gives you the vocabulary to ask for those details.",
  ],
  foundationTerms: [
    {
      term: "Fibre",
      meaning: "The raw material used to make yarn, such as silk, cotton, flax, viscose or polyester.",
    },
    {
      term: "Yarn",
      meaning: "Fibres or filaments prepared and twisted or combined into the strands used for weaving.",
    },
    {
      term: "Construction",
      meaning: "How yarns are arranged to make cloth, including weave structure, density and the relationship of warp and weft.",
    },
    {
      term: "Surface",
      meaning: "What is woven, printed, dyed, embroidered, painted, embellished or finished onto the cloth.",
    },
    {
      term: "Blend",
      meaning: "Two or more fibres used together, either within a yarn or as different yarns across the fabric.",
    },
    {
      term: "Hand",
      meaning: "The way a textile feels and behaves—soft, crisp, dry, smooth, springy, heavy or fluid.",
    },
  ],
  profiles: [
    {
      id: "silk",
      name: "Silk",
      composition: "Natural protein fibre",
      character: "Lustre, strength and wide variation",
      paragraphs: [
        "Silk is not one uniform saree fabric. India produces mulberry, tasar, eri and muga silks, and the yarns made from them can differ in colour, texture, continuity and lustre. Degumming, spinning, weaving, dye and finish change the result again, so the word silk alone cannot predict whether a saree will be glossy and fluid or textured and structured.",
        "Ask whether the silk is filament or spun, which variety is used and whether the saree contains other fibres. Also notice the fabric's body: a dense ceremonial silk and a light silk ground may share a fibre category while demanding very different drapes and care.",
      ],
      questions: [
        "Which silk variety and yarn type are used?",
        "Is the saree pure silk or a blend, and what are the percentages?",
        "What care method is recommended for the complete saree?",
      ],
    },
    {
      id: "cotton",
      name: "Cotton",
      composition: "Natural cellulosic fibre",
      character: "Absorbent, versatile and construction-dependent",
      paragraphs: [
        "Cotton is closely associated with Indian textile history, but cotton sarees range from very fine, airy cloth to substantial, crisp weaves. Yarn count, twist, density, starch, finishing and climate all influence how the saree feels. Cotton's natural absorbency and breathability are useful qualities, yet the fabric construction determines how much air actually moves through the cloth.",
        "A starched cotton may arrive architectural and soften over time, while a fine cotton may gather into compact pleats immediately. Ask whether the finish is intended to remain, whether the dye is stable and how the maker expects the saree to change through wear and cleaning.",
      ],
      questions: [
        "Is the cotton fine, dense, starched, handspun or mill-spun?",
        "How transparent is the cloth and what foundation does it need?",
        "Will the finish soften or the dimensions change with washing?",
      ],
    },
    {
      id: "linen",
      name: "Linen",
      composition: "Flax-based natural cellulosic fibre",
      character: "Dry hand, visible texture and characteristic creasing",
      paragraphs: [
        "Linen yarn is made from flax and is recognised for a dry, cool hand and a surface that can show natural slubs. In a saree, its feel depends on yarn fineness, weave density and whether it is blended with cotton, silk or another fibre. Creasing is part of linen's behaviour rather than automatic evidence of poor quality.",
        "The term linen is also used loosely in retail descriptions, so ask for the actual composition. A linen-look saree, linen blend and pure linen saree are not interchangeable descriptions and may behave differently in drape, pressing and care.",
      ],
      questions: [
        "Is it pure flax linen, a linen blend or only a linen-like finish?",
        "What percentage of each fibre is present?",
        "How should creases be pressed without changing the surface?",
      ],
    },
    {
      id: "natural-fibre-blends",
      name: "Natural-fibre blends",
      composition: "Silk-cotton, cotton-linen and related combinations",
      character: "Properties shaped by both fibre and construction",
      paragraphs: [
        "Blending natural fibres can create a cloth with a balance that neither fibre produces alone. Silk-cotton may place silk in one yarn direction and cotton in another, or combine fibres within yarns. Cotton-linen can vary just as widely. The order of the words does not guarantee which fibre dominates.",
        "Do not accept 'best of both' as a complete explanation. Ask for percentages and construction, then judge the finished cloth itself. A blend's drape, sheen, absorbency and care cannot be calculated from its name without knowing how the yarns and finish were used.",
      ],
      questions: [
        "What are the fibre percentages?",
        "Are different fibres used in warp and weft or blended within the yarn?",
        "Which fibre determines the recommended cleaning method?",
      ],
    },
    {
      id: "cellulosic-man-made",
      name: "Regenerated cellulosic fibres",
      composition: "Viscose, modal and related fibres made from cellulose",
      character: "Often fluid, smooth and highly variable",
      paragraphs: [
        "Viscose and modal are man-made cellulosic fibres: their cellulose source distinguishes them from petroleum-derived synthetics, while their manufacturing process distinguishes them from directly spun natural fibres. In sarees they may be used alone, in blends or to create a particular fall and surface.",
        "The category contains significant variation. Yarn form, weave, finish and blend affect strength, shrinkage, sheen and care. A seller should name the actual fibre rather than using vague phrases such as art silk without composition information.",
      ],
      questions: [
        "Which cellulosic fibre is present, and in what percentage?",
        "Has the cloth been finished to add sheen, softness or crispness?",
        "What are the wet-cleaning and shrinkage instructions?",
      ],
    },
    {
      id: "synthetic-fibres",
      name: "Synthetic fibres",
      composition: "Polyester, nylon and related manufactured fibres",
      character: "Durable possibilities with finish-dependent feel",
      paragraphs: [
        "Polyester and nylon may appear in sarees as the primary fibre, a blend component, an embroidery thread or a substitute for a more expensive material. They can be engineered into crisp, smooth, sheer or textured cloth, so 'synthetic' does not describe one hand or appearance.",
        "Evaluate the finished textile instead of assuming either superiority or inferiority from the category. Check comfort in the expected climate, static, transparency, heat sensitivity and care. Accurate composition still matters because it shapes how the saree responds to pressing and cleaning.",
      ],
      questions: [
        "Is the fibre used in the body, border, surface work or all three?",
        "How does the fabric feel after several minutes against the skin?",
        "What heat and care restrictions apply?",
      ],
    },
  ],
  constructionTerms: [
    {
      term: "Chiffon",
      description: "A light, sheer cloth whose soft movement depends on fine yarns, twist and construction; it may be made from silk or man-made fibres.",
      question: "What is the fibre composition and how transparent is the finished saree?",
    },
    {
      term: "Georgette",
      description: "A light cloth with a grainy crepe character, made in silk or man-made fibres and produced in different weights.",
      question: "Is it silk georgette, viscose georgette, polyester georgette or a blend?",
    },
    {
      term: "Organza",
      description: "A sheer, crisp construction that may use silk or synthetic filament yarns; fibre and density determine its hand.",
      question: "Which fibre creates the crispness, and is the finish permanent?",
    },
    {
      term: "Crepe",
      description: "A pebbled or crinkled surface produced through yarn, weave or finishing choices rather than one particular fibre.",
      question: "Which fibre and process create the crepe effect?",
    },
    {
      term: "Satin",
      description: "A weave structure known for a smooth, often lustrous face; satin can be woven from silk, polyester or other fibres.",
      question: "What is the fibre content beneath the satin surface?",
    },
    {
      term: "Tissue",
      description: "A retail and textile term often used for light, luminous cloth that may combine silk, metallic-effect or man-made yarns.",
      question: "What exactly creates the sheen, and how should the metallic or delicate yarns be cared for?",
    },
  ],
  sources: [
    {
      title: "Indian textiles — Victoria and Albert Museum",
      href: "https://www.vam.ac.uk/articles/indian-textiles",
    },
    {
      title: "Types of silk — Central Silk Board, Government of India",
      href: "https://csb.gov.in/silk-sericulture/silk",
    },
    {
      title: "Indian man-made fibre textile industry — Ministry of Textiles",
      href: "https://texmin.nic.in/sites/default/files/Indian%20Manmade%20fibre%20textile%20industry_0.pdf",
    },
    {
      title: "Quality assurance basics for cotton — CottonWorks",
      href: "https://cottonworks.com/learning-hub/quality-assurance/quality-assurance-basics/",
    },
  ],
  sourceNote:
    "This guide explains broad material categories. A fibre name alone does not verify quality, origin, handloom production or care requirements; request exact composition and construction information for the individual saree.",
  cta: {
    eyebrow: "Read the cloth closely",
    heading: "Choose a saree as a complete textile, not a single familiar word.",
    body: "Explore ANURRAKTI's current one-of-one sarees and observe how fibre, surface, border and pallu work together in each composition.",
    href: "/collection",
    label: "Explore collections",
  },
};

const howToChooseSareeBlousePost: BlogPost = {
  kind: "blouse",
  slug: "how-to-choose-saree-blouse",
  title: "How to Choose a Saree Blouse: Fit, Fabric and Design",
  eyebrow: "The Saree Guide / 07",
  description:
    "Learn how to choose a saree blouse by checking fit, fabric, neckline, sleeves, closure and movement before the final fitting.",
  excerpt:
    "A practical guide to blouse fit, fabric, neckline, sleeves and finishing—built around movement and the saree you plan to wear.",
  publishedAt: "2026-08-16",
  updatedAt: "2026-08-16",
  readingTime: "10 minute read",
  primaryKeyword: "how to choose a saree blouse",
  hero: {
    src: "/images/campaign/red-grey-portrait.jpg",
    alt: "Woman wearing a red blouse with a red and grey ANURRAKTI saree",
    width: 1760,
    height: 2200,
    objectPosition: "50% 38%",
    caption: "Fit, fabric and movement / ANURRAKTI",
  },
  introductionHeading: "The blouse is a garment, not an accessory",
  introduction: [
    "Knowing how to choose a saree blouse begins with function. It must support the drape, remain comfortable against the skin and allow you to sit, reach and move for the length of the occasion. Neckline and sleeve ideas matter, but they cannot rescue a shoulder that slips, an armhole that cuts or a closure under strain.",
    "Treat the saree, blouse and intended drape as one system. The weight of the pallu changes what happens at the shoulder. Fabric thickness changes seam bulk. A deep back changes the support and closure plan. This guide puts those connected decisions in the right order so that style grows from a sound fit rather than competing with it.",
  ],
  fitChecks: [
    {
      area: "Shoulder",
      goodFit: "The seam sits near the shoulder point and stays in place as the arms move.",
      problemSigns: "The neckline shifts, the shoulder lifts or excess fabric collapses near the armhole.",
    },
    {
      area: "Neckline",
      goodFit: "The edge lies close without gaping, cutting or changing shape beneath the pallu.",
      problemSigns: "The edge rolls, stands away from the body or pulls when you turn or reach.",
    },
    {
      area: "Bust and darts",
      goodFit: "The fabric lies smoothly and the shaping points towards, but ends before, the fullest point.",
      problemSigns: "Horizontal drag lines, a floating under-bust area or a dart point that creates a visible peak.",
    },
    {
      area: "Armhole and sleeve",
      goodFit: "You can raise and bring the arms forward without pinching or pulling the blouse upward.",
      problemSigns: "Cutting at the underarm, restricted reach, sleeve twisting or the entire bodice lifting.",
    },
    {
      area: "Lower edge",
      goodFit: "The band or hem stays level and secure without rolling, digging or riding up.",
      problemSigns: "The edge flips, shifts above the intended line or leaves pressure marks quickly.",
    },
    {
      area: "Closure",
      goodFit: "Hooks, zip or ties close without force and remain flat through normal movement.",
      problemSigns: "Gapping between hooks, strain lines, exposed fastenings or a closure that touches the skin sharply.",
    },
  ],
  decisions: [
    {
      id: "purpose-and-drape",
      name: "Start with the occasion and drape",
      priority: "Function first",
      result: "A blouse that works for the complete look",
      paragraphs: [
        "Begin with the hours you will wear the saree, the amount of movement involved and whether the pallu will be open, pleated or secured. A blouse for a long ceremony, a seated dinner and a short portrait session may need different levels of support, coverage and ease even when the visual idea is similar.",
        "Bring the saree and planned innerwear to the fitting. The pallu can obscure a neckline, add weight at one shoulder or reveal a back detail differently from an isolated blouse trial. Footwear and jewellery also matter when they affect posture, neck space or how freely the arms can move.",
      ],
      questions: [
        "How many hours must the blouse remain comfortable?",
        "Will the pallu be open, pleated, pinned or changed during the event?",
        "Which movements—driving, dancing, lifting or sitting on the floor—must be tested?",
      ],
    },
    {
      id: "measurements-and-ease",
      name: "Measure for this design",
      priority: "Body measurements plus ease",
      result: "Shaping without unnecessary strain",
      paragraphs: [
        "A label size is only a starting point. Blouse drafting can use bust, under-bust, waist, shoulder, armhole, bicep, blouse length and neckline-depth measurements, with additional measures depending on the pattern. Take them over the innerwear intended for the blouse and keep the tape level, close but not compressing the body.",
        "Measurements describe dimensions; ease determines how the finished garment relates to them. A woven blouse still needs enough room for breathing and movement, while a stretch blouse needs a construction and seam choice that can recover without distortion. Recheck measurements when the design, innerwear or body has changed instead of copying an old blouse automatically.",
      ],
      questions: [
        "Which measurements does this particular pattern require?",
        "Where has wearing ease or stretch been added?",
        "Is the reference blouse genuinely comfortable, or merely familiar?",
      ],
    },
    {
      id: "fabric-and-support",
      name: "Match fabric, lining and support",
      priority: "Construction follows material",
      result: "The intended shape with less bulk",
      paragraphs: [
        "Choose blouse fabric by considering weight, stretch, transparency, surface and the saree's own character. A crisp woven cloth can hold a defined line but may need careful shaping. A light or sheer cloth may need lining. A heavily embellished fabric adds weight and can create bulky seam allowances if every layer is treated alike.",
        "Lining, cups, boning and interfacing are options, not automatic signs of quality. Each should solve a named problem such as opacity, stability or edge support. Ask where support is needed and how it changes breathability, cleaning and alteration. The inside should remain as considered as the visible surface.",
      ],
      questions: [
        "Does the fabric need lining for opacity, comfort or structure?",
        "Where will embroidery or border placement create extra bulk?",
        "Can the finished blouse be cleaned safely with the saree and its embellishment?",
      ],
    },
    {
      id: "neckline-and-pallu",
      name: "Choose the neckline with the pallu",
      priority: "Visibility, support and preference",
      result: "A deliberate relationship between blouse and drape",
      paragraphs: [
        "Judge a neckline in the complete saree look. A front edge may disappear beneath a pleated pallu, while the same pallu can place friction or weight near the shoulder. Front and back depth also affect strap coverage, fastening placement and how stable the garment feels through movement.",
        "There is no universally flattering neckline. Use the line you enjoy, then engineer it for your preferred coverage and support. Mark the actual finished depth during the fitting, check it while sitting and turning, and confirm that jewellery does not crowd or catch the edge.",
      ],
      questions: [
        "How much of the neckline remains visible after draping?",
        "Does the chosen innerwear stay concealed as you move?",
        "Will the pallu, necklace or border rub against the edge?",
      ],
    },
    {
      id: "sleeves-and-armhole",
      name: "Plan sleeves around movement",
      priority: "Reach before sleeve length",
      result: "Comfort that survives the event",
      paragraphs: [
        "Sleeve length changes the visual balance, but armhole shape, sleeve cap and bicep room determine much of the movement. A larger armhole is not automatically freer: if it sits too low or lacks the right shaping, lifting the arm can pull the whole blouse upward.",
        "Test the exact sleeve rather than relying on a sleeveless sample. Reach forward, lift both arms, touch the opposite shoulder and hold the pallu as you expect to wear it. Decorative edges and tight sleeve bands should be assessed after several minutes, not only in a still mirror pose.",
      ],
      questions: [
        "Can you reach forward and overhead without the blouse riding up?",
        "Does the sleeve twist or cut at the bicep and underarm?",
        "Will jewellery, embroidery or a border catch during movement?",
      ],
    },
    {
      id: "closure-and-finishing",
      name: "Finish for comfort and alteration",
      priority: "Secure seams and serviceable details",
      result: "A blouse that can be worn again",
      paragraphs: [
        "Front hooks, back hooks, zips and ties each change dressing ease, visual line and alteration options. The right choice is the one that stays flat, can be operated comfortably and suits the fabric's thickness and strain. A closure should not be used to force a blouse smaller than its pattern allows.",
        "Inspect seam softness, edge finishing, hook guards, thread ends and the allowance retained for future alteration. Garment seams must balance strength, appearance, stretch, bulk and softness; areas against the skin deserve particular attention. A polished exterior does not compensate for a sharp fastening or abrasive seam inside.",
      ],
      questions: [
        "Can the closure be fastened without pulling the garment out of shape?",
        "Are skin-facing seams and fastenings smooth and covered?",
        "Has useful seam allowance been retained for later adjustment?",
      ],
    },
  ],
  tailorBrief: [
    "The saree, blouse fabric and the drape you intend to use",
    "The exact innerwear and any cups or support you expect inside the blouse",
    "Front and back reference photographs, with the details you actually want marked",
    "Your preferred blouse length, front depth, back depth and sleeve length",
    "The event duration and movements the blouse must accommodate",
    "Closure preference and whether you need to dress without assistance",
    "Known sensitivities to lining, seams, hooks, elastic or embellishment",
    "The fitting date, final delivery date and alterations included",
  ],
  sources: [
    {
      title: "Self Employed Tailor, Grade XII — PSSCIVE",
      href: "https://www.psscive.ac.in/storage/uploads/textbooks/pdf/english/self-employed-tailor-english-class-%2012.pdf",
    },
    {
      title: "Specialized Sewing Machine Operator handbook — NSDC",
      href: "https://www.nsdcindia.org/scmp/assets/image/1248079803-Specialized_Sewing_Machine_Operator_English.pdf",
    },
    {
      title: "Vocational practical guidelines for cutting and tailoring — NIOS",
      href: "https://cdn.nios.ac.in/cms/documents/2020/Oct/21/Vocational_Guideline_Practical_Final.pdf",
    },
    {
      title: "Soft and secure garment seams — Coats",
      href: "https://www.coats.com/en/info-hub/about-soft-and-secure-seams-for-activewear-and-intimates/",
    },
  ],
  sourceNote:
    "This guide translates broad garment-construction principles into a blouse-fitting checklist. Pattern, support and alteration decisions must be made for the individual wearer, fabric and design by a qualified tailor or fitter.",
  cta: {
    eyebrow: "Begin with movement",
    heading: "Let the blouse support the saree—and the life you wear it into.",
    body: "Explore ANURRAKTI's ready-to-wear pieces, designed as complete expressions rather than an afterthought to the drape.",
    href: "/ready-to-wear",
    label: "Explore ready to wear",
  },
};

const sareeColourCombinationsPost: BlogPost = {
  kind: "colour",
  slug: "saree-colour-combinations",
  title: "Saree Colour Combinations: A Practical Styling Guide",
  eyebrow: "The Saree Guide / 08",
  description:
    "Build saree colour combinations using contrast, proportion, blouse choices and lighting—without relying on rigid styling rules.",
  excerpt:
    "Six reliable ways to combine a saree, border, pallu and blouse using colour relationship, contrast and proportion.",
  publishedAt: "2026-08-20",
  updatedAt: "2026-08-20",
  readingTime: "10 minute read",
  primaryKeyword: "saree colour combinations",
  hero: {
    src: "/images/campaign/anurrakti-garden.png",
    alt: "Woman wearing an ivory ANURRAKTI saree with pink, red and black patterned accents",
    width: 1122,
    height: 1402,
    objectPosition: "50% 58%",
    caption: "Colour, contrast and proportion / ANURRAKTI",
  },
  introductionHeading: "Colour works through relationships, not isolated names",
  introduction: [
    "Successful saree colour combinations are rarely about finding one approved shade. They come from the relationship between the saree body, border, pallu, blouse, jewellery and the setting around them. The same red can feel quiet beside burgundy, vivid beside ivory and warmer beside blue-green. Change the amount of each colour and the whole balance changes again.",
    "Textile surface adds another layer. Matte cotton, translucent organza and lustrous silk can reflect and transmit light differently even when their colour names match. This guide uses hue, value, chroma and proportion to make those choices more deliberate while leaving room for culture, memory and personal preference.",
  ],
  colourTerms: [
    {
      term: "Hue",
      meaning: "The colour family—red, yellow, green, blue and the transitions between them.",
    },
    {
      term: "Value",
      meaning: "How light or dark a colour appears. Value contrast often remains visible even when hues are close.",
    },
    {
      term: "Chroma",
      meaning: "How vivid or muted a colour appears compared with a neutral of similar lightness.",
    },
    {
      term: "Temperature",
      meaning: "A useful relative description—one red may appear warmer or cooler when compared with another red.",
    },
    {
      term: "Proportion",
      meaning: "How much visual area each colour occupies across the body, border, pallu, blouse and accessories.",
    },
    {
      term: "Surface",
      meaning: "The lustre, texture, transparency and finish that change how colour is perceived in light.",
    },
  ],
  approaches: [
    {
      id: "tonal-colour",
      name: "Build a tonal combination",
      relationship: "One hue family, varied value or chroma",
      effect: "Depth without a sharp break",
      paragraphs: [
        "A tonal combination repeats one colour family in lighter, darker, clearer or more muted versions. Think rust with terracotta, rose with wine, or pale blue with ink. Because the hues are related, the value difference becomes especially important: without enough light-dark separation, the blouse and saree can merge unintentionally.",
        "This approach is useful when the textile already carries detail and you want the silhouette to read as one continuous composition. Place the strongest variation where you want attention—the blouse, border or pallu—rather than making every element equally intense.",
      ],
      questions: [
        "Can you still distinguish the blouse and border from the saree body at a distance?",
        "Which element carries the darkest value or highest chroma?",
        "Do the colours still relate under the venue's lighting?",
      ],
    },
    {
      id: "neighbouring-colours",
      name: "Use neighbouring colours",
      relationship: "Closely related hues",
      effect: "Movement with visual continuity",
      paragraphs: [
        "Neighbouring hues create a gentle transition: yellow into green, blue into violet, or red into orange. In a saree, this can connect a border to the body or allow a blouse to introduce a new colour without feeling detached from the textile.",
        "The relationship becomes clearer when one hue leads and the others support it. If every colour has the same area and intensity, the result can feel busy. Repeat the secondary hue once—in the blouse, jewellery, piping or small motif—to make the decision look intentional.",
      ],
      questions: [
        "Which hue is dominant and which one supports it?",
        "Is the transition visible in the actual fabric rather than only in a digital swatch?",
        "Where will the secondary colour be repeated?",
      ],
    },
    {
      id: "opposing-colours",
      name: "Create an opposing-colour accent",
      relationship: "Distant or complementary hues",
      effect: "Energy and a clear focal point",
      paragraphs: [
        "Colours from different sides of a hue circle can sharpen one another. Blue with orange, red with green, or violet with yellow are familiar starting points, but they do not need to appear in equal, fully saturated amounts. A narrow green blouse or border can be enough to animate a predominantly red saree.",
        "Control this combination through proportion and chroma. Let one colour occupy most of the look and use the other as an accent, or mute one side so the contrast remains present without becoming competitive. Metallic thread and jewellery can act as a bridge when they repeat a warm or cool note from both colours.",
      ],
      questions: [
        "Which colour is the field and which is the accent?",
        "Would muting or darkening one colour improve the balance?",
        "Does the border already provide enough contrast before a blouse is added?",
      ],
    },
    {
      id: "neutral-and-accent",
      name: "Anchor colour with a neutral",
      relationship: "Chromatic colour plus ivory, black, grey, brown or metallic",
      effect: "Focus and breathing room",
      paragraphs: [
        "A neutral can quiet a complex palette or give one colour more presence. Ivory beside vermilion, charcoal beside gold, or brown beside turquoise can make the chromatic element feel more deliberate because the neutral occupies visual space without introducing another strong hue.",
        "Neutrals are not empty. Warm ivory, cool grey, blue-black and red-brown each carry a colour bias, while gold and silver change with material and light. Compare the actual textiles side by side; a neutral that works on screen may turn unexpectedly yellow, blue or reflective beside the saree.",
      ],
      questions: [
        "Does the neutral lean warm, cool or metallic beside the saree?",
        "Is the accent repeated in the border, pallu or blouse detail?",
        "Will the neutral fabric's texture support or compete with the saree surface?",
      ],
    },
    {
      id: "border-led-palette",
      name: "Let the border or pallu lead",
      relationship: "Extracted colour from the textile",
      effect: "A connected blouse and complete composition",
      paragraphs: [
        "When a saree contains several colours, begin with what is already present. Pull one minor shade from the border, pallu, embroidery or selvedge for the blouse. Repeating an existing colour often creates coherence while giving that quieter detail greater visibility.",
        "Match by looking at the material, not by relying on the shade name. A printed coral, woven coral and glossy coral blouse may not appear identical, and they do not need to. Decide whether you want a close echo or a deliberate difference in value, chroma or texture.",
      ],
      questions: [
        "Which existing colour deserves more visibility?",
        "Should the blouse echo the colour closely or reinterpret it in another surface?",
        "Does the selected shade appear in enough places to connect the composition?",
      ],
    },
    {
      id: "multicolour-restraint",
      name: "Edit a multicolour saree",
      relationship: "Many hues, controlled repetition",
      effect: "Richness without equal competition",
      paragraphs: [
        "A multicolour saree does not require a multicolour blouse. First identify the dominant field, the recurring secondary colour and the smallest accent. Then decide whether the blouse should reinforce the field, elevate the secondary colour or isolate the accent.",
        "Keep jewellery, bag, footwear and makeup within the same hierarchy. Repetition is more useful than exact matching: two or three appearances of a colour can make it feel intentional. If every accessory introduces a new high-chroma hue, the saree's own pattern may lose its focus.",
      ],
      questions: [
        "What are the dominant, secondary and accent colours?",
        "Which one should the blouse repeat?",
        "Can one accessory be removed to make the textile easier to read?",
      ],
    },
  ],
  blouseDirections: [
    {
      direction: "Match the saree body",
      effect: "Extends the main colour and keeps focus on the border or pallu.",
      check: "Make sure surface and value differences look intentional rather than almost-matched.",
    },
    {
      direction: "Repeat the border",
      effect: "Frames the upper body and connects the blouse to the saree edge.",
      check: "Judge the combination after the border is pleated and draped at full scale.",
    },
    {
      direction: "Lift a minor motif colour",
      effect: "Brings a quiet woven, printed or embroidered detail forward.",
      check: "Repeat that shade once more so it does not appear isolated.",
    },
    {
      direction: "Introduce an opposing accent",
      effect: "Creates a strong focal point and a more graphic look.",
      check: "Control proportion; the blouse may be the only large area of the accent colour.",
    },
    {
      direction: "Use a neutral or metallic",
      effect: "Gives a complex saree breathing room or connects to jewellery and zari.",
      check: "Compare undertone, lustre and texture under the event lighting.",
    },
  ],
  testingChecklist: [
    "Photograph the saree and blouse together in indirect daylight, avoiding a strong colour cast from walls or curtains.",
    "Check the combination under the warm, cool or mixed artificial light expected at the venue.",
    "Step several metres away and identify which colour attracts attention first.",
    "View a grayscale photograph to compare light-dark value when the hues feel difficult to judge.",
    "Drape the full pallu and border; small folded swatches can misrepresent the final colour proportions.",
    "Place jewellery and accessories into the trial last, then remove anything that creates an unintended competing accent.",
  ],
  sources: [
    {
      title: "The Munsell colour sphere: hue, value and chroma — Munsell",
      href: "https://munsell.com/color-blog/the-munsell-book-of-color-1929-the-color-sphere/1000/",
    },
    {
      title: "Interaction of Color by Josef Albers — Smithsonian Institution",
      href: "https://www.si.edu/object/interaction-color-josef-albers%3Asiris_sil_1025770",
    },
    {
      title: "Colorimetry and standard viewing conditions — CIE",
      href: "https://www.cie.co.at/publications/colorimetry-4th-edition",
    },
    {
      title: "Indian textiles and dye traditions — Victoria and Albert Museum",
      href: "https://www.vam.ac.uk/articles/indian-textiles",
    },
  ],
  sourceNote:
    "Colour appearance depends on neighbouring colours, proportion, textile surface, lighting and the observer. Cultural meanings also vary by region, community and occasion; confirm any event-specific expectations rather than treating them as universal rules.",
  cta: {
    eyebrow: "Follow the colour through",
    heading: "Choose the relationship that makes the whole textile come alive.",
    body: "Explore ANURRAKTI's one-of-one sarees and see how body, border, pallu and surface build a complete colour composition.",
    href: "/collection",
    label: "Explore collections",
  },
};

export const blogPosts: BlogPost[] = [
  sareeColourCombinationsPost,
  howToChooseSareeBlousePost,
  sareeFabricsPost,
  howToCareForSareesPost,
  howToDrapeSareePost,
  sareeForYourBodyTypePost,
  sareeForEveryOccasionPost,
  typesOfSareesPost,
];

export function blogPath(post: BlogPost) {
  return `/blogs/${post.slug}`;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
