/* ============================================================
   ALL SITE CONTENT LIVES HERE. Edit this file only for Step 2.
   Anything marked [PLACEHOLDER] must be replaced.
   ============================================================ */

window.SITE = {
  name: "Johan Grauslund Kjeldsen",
  shortName: "Johan G. Kjeldsen",
  role: "Architectural Technologist",
  intro: "Johan is an architectural technologist student at EK – passionate about <em>thoughtful detailing, sustainable design</em>, and bringing ideas to life in Copenhagen.",
  location: "Copenhagen, DK",
  email: "Grauslund3110@gmail.com",
  phone: "+45 6016 5996",
  portrait: "assets/img/portrait.jpg",
  portraitAlt: "Portrait of Johan Grauslund Kjeldsen smiling, resting his chin on his hand, in front of green plants",
  bio: [
    "I'm studying to become an architectural technologist (bygningskonstruktør) at EK in Copenhagen, with strong technical understanding and particular skills in Revit.",
    "I'm driven by sustainable construction and by combining functionality, aesthetics and environmental care.",
    "Hands-on experience as a furniture maker gives me a feel for materials and how things are actually built."
  ],
  skills: ["Revit", "Rhino", "Dalux", "Bluebeam", "Material knowledge", "Sustainable building", "SketchUp"],
  education: [
    { years: "2024 – 2027", title: "Architectural Technology & Construction Management", place: "KEA / EK, Copenhagen (ongoing)" },
    { years: "2026", title: "Exchange semester, Architecture/Design (6 months)", place: "Politecnico di Milano, Italy" },
    { years: "2018 – 2021", title: "Upper secondary (STX)", place: "Rosborg Gymnasium, Vejle" }
  ],
  experience: [
    { years: "2024 – now", title: "Furniture maker (unskilled)", place: "J-O-Consult ApS, Østerbro" },
    { years: "2022 – 2024", title: "Mover, pianos & safes", place: "Casper Transport, Aarhus" },
    { years: "2021 – 2022", title: "Warehouse worker", place: "UPS, Vejle" },
    { years: "2020 – 2022", title: "Service worker / porter", place: "Sygehus Lillebælt, Vejle" }
  ],
  cvFile: "assets/cv.pdf", // [PLACEHOLDER] swap for English CV when ready
  links: [
    { label: "LinkedIn", url: "#" } // [PLACEHOLDER] real LinkedIn URL
  ]
};

/* ------------------------------------------------------------
   PROJECTS. Order here = order on the site.
   body blocks: { type: "text", heading, text }
                { type: "image", src, alt, caption }
                { type: "pair", images: [{src, alt}, {src, alt}], caption }
   ------------------------------------------------------------ */
window.PROJECTS = [
  {
    slug: "nou-student-housing",
    team: "Ian Iliescu, Ioana Nictor, Laurens Bembe and Johan Grauslund",
    title: "NOU",
    subtitle: "Student Housing",
    headerBlock: true,
    category: "Modular housing / Design for Disassembly",
    school: "Politecnico di Milano · Architecture/Design, 4th semester",
    year: "2026",
    role: "Structure & detail drawings",
    tools: "Revit",
    theme: { accent: "#B5652A", tile: "#F8EEE4" }, // warm orange + white
    summary: "A modular student housing block in Milan: a concrete and steel frame holding prefabricated timber modules, built to be taken apart, reused and extended.",
    cover: "assets/img/p04/1.jpg",
    coverPosition: "center top", // keep the NOU title visible
    coverAlt: "Render of NOU Student Housing: external gallery along a green courtyard with timber cladding and concrete frame",
    body: [
      {
        "type": "text",
        "heading": "Brief"
      },
      {
        "type": "text",
        "text": [
          "The project is a multi-storey student housing building organised around a large central courtyard. The main idea behind the project is to create an open and social environment where students can meet, interact and feel part of a community.",
          "The visible materials show how the building is constructed and give the project a simple and industrial character. The design also supports both private and shared spaces, creating a balance between individual living and social interaction."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p04/3.jpg",
        "alt": "Elevation of the student housing block",
        "caption": "Elevation"
      },
      {
        "type": "text",
        "heading": "Expression"
      },
      {
        "type": "text",
        "text": [
          "The building combines timber cladding, exposed concrete and steel railings to create a warm but honest architectural expression. The material palette creates a balance between warmth and durability while giving the building a modern industrial character.",
          "The structural system is designed to remain visible in several areas of the building, supporting the honest architectural expression of the project."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p04/6.jpg",
        "alt": "Section-elevation of the external galleries and staircases",
        "caption": "Galleries and staircases"
      },
      {
        "type": "text",
        "heading": "Structure"
      },
      {
        "type": "text",
        "text": [
          "The building consists of a reinforced concrete frame structure – a concrete skeleton holding prefabricated timber modules, separating the load-bearing structure from the infills.",
          "We follow the principles of Design for Disassembly, meaning that structural elements and modules can be taken apart and reused in the future. Additional floors can also be added later if needed, making the building adaptable to future demands and reducing material waste over time."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p04/8.jpg",
        "alt": "Facade section and elevation of the timber modules in the concrete frame",
        "caption": "Facade section"
      },
      {
        "type": "text",
        "heading": "Site & building"
      },
      {
        "type": "image",
        "src": "assets/img/p04/9.jpg",
        "alt": "Site plan, scale 1:500",
        "caption": "Site plan – 1:500"
      },
      {
        "type": "image",
        "src": "assets/img/p04/10.jpg",
        "alt": "Axonometric views and renders from north, south-west and green roof",
        "caption": "Axonometric views and renders"
      },
      {
        "type": "image",
        "src": "assets/img/p04/11.jpg",
        "alt": "Student room module: plan and axonometric views",
        "caption": "Student room module"
      },
      {
        "type": "text",
        "heading": "Details",
        "text": "Several of the solutions I developed in the project were later adopted by our professors in their teaching on the following semester."
      },
      {
        "type": "image",
        "src": "assets/img/p04/12.jpg",
        "alt": "Detail drawing: floor to wall connection with HEB beam",
        "caption": "Detail – floor to wall"
      },
      {
        "type": "image",
        "src": "assets/img/p04/13.jpg",
        "alt": "Concrete pillar and steel beam: drawings and calculations",
        "caption": "Concrete pillar and steel beam"
      },
      {
        "type": "image",
        "src": "assets/img/p04/14.jpg",
        "alt": "Prefabricated concrete staircase: sections and connection detail",
        "caption": "Prefabricated staircase"
      }
    ]
  },
  {
    slug: "greenery-in-milan",
    title: "Mapping the Potential for Greenery in Milan",
    headerBlock: true,
    category: "Urban analysis / Visual AI",
    school: "Politecnico di Milano · Architecture/Design, 4th semester",
    year: "2026",
    role: "Method development, AI detection, visualisation",
    tools: "Python, OSMnx, Street View API, SegFormer",
    // green + black: black header block, green accents, light-green panels
    theme: { accent: "#2B6E3F", tile: "#E3EEE4", block: "#0B0B0B", sub: "#7CC48E" },
    summary: "Where should Milan invest in greenery? An automated Visual AI method that reads facade vegetation from street-level imagery.",
    cover: "assets/img/p03/1.jpg",
    coverPosition: "left center", // keep the title text on the left visible
    coverAlt: "Title slide over a dark street scene: Mapping the potential for greenery in Milan",
    body: [
      {
        "type": "text",
        "heading": "Problem statement",
        "text": [
          "Cities are warming. Green walls and well-planned green areas cool cities and reduce urban heat – but where should they go?",
          "<strong>Can Visual AI and street view imagery be used to assess facade vegetation and identify opportunities for urban greenery in Milan?</strong>"
        ]
      },
      {
        "type": "text",
        "heading": "Brief",
        "text": [
          "Milan runs <strong>3–5 °C hotter than its surroundings on summer nights</strong>, with peaks up to 6 °C. Poor air circulation in the Po valley traps the heat instead of dispersing it, and hot nights are a health problem: the body never recovers from the daytime heat.",
          "Vegetation cools measurably – paved surfaces in Milan run around 3.7 °C warmer than green ones. Buildings absorb the heat, but they can also carry the solution: where ground-level space is built out, facades remain available."
        ]
      },
      {
        "type": "stats",
        "items": [
          {
            "value": "3–5 °C",
            "label": "Hotter than surroundings on summer nights"
          },
          {
            "value": "6 °C",
            "label": "Peak urban heat island"
          },
          {
            "value": "+3.7 °C",
            "label": "Paved vs. green surfaces"
          }
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/heat-map.jpg",
        "alt": "Land surface temperature map of Milan, 18 June 2022",
        "caption": "Land surface temperature, Milan – 18 June 2022"
      },
      {
        "type": "text",
        "text": [
          "<strong>Green areas are the first choice:</strong> large cooling effects on neighbourhoods (around −2 °C in surrounding areas), public space for recreation and support for biodiversity. <strong>Green walls are the second choice:</strong> they use no ground space, improve aesthetics and lower facade surface temperatures by 2–3 °C.",
          "The study focuses on <strong>Isola</strong> (new) and <strong>Porta Venezia</strong> (old) – two opposite urban conditions, both dense, both hot and both lacking greenery, which makes them ideal areas to test the method."
        ]
      },
      {
        "type": "stats",
        "items": [
          {
            "value": "−2 °C",
            "label": "Green areas – surrounding temperature"
          },
          {
            "value": "−2–3 °C",
            "label": "Green facades – wall surface temperature"
          },
          {
            "value": "+CO₂",
            "label": "Biodiversity and carbon uptake"
          }
        ]
      },
      {
        "type": "text",
        "text": [
          "The project combines spatial and visual data: the <strong>street network</strong> from OpenStreetMap via OSMnx (drivable roads only, since Street View coverage follows roads), and <strong>imagery</strong> from the Google Street View Static API, where panorama metadata is checked before any image is requested."
        ]
      },
      {
        "type": "pair",
        "images": [
          {
            "src": "assets/img/p03/study-area.jpg",
            "alt": "Map of Milan with Isola and Porta Venezia marked",
            "caption": "Study area – Isola & Porta Venezia"
          },
          {
            "src": "assets/img/p03/data-streetview.jpg",
            "alt": "Map of Street View sampling points coloured by greenery",
            "caption": "Street View sampling points"
          }
        ]
      },
      {
        "type": "text",
        "heading": "Green areas",
        "text": [
          "The first part of the method looks for space for new green areas. <strong>Criteria:</strong> low existing greenery, large open surfaces, available public space, wide sidewalks and flat roofs. <strong>Categories of opportunity:</strong> pocket parks, street trees, green roofs and green courtyards."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Street network download",
          "Sampling points every 50 m",
          "Perpendicular camera heading",
          {
            "label": "Street View image + metadata",
            "kind": "ai"
          },
          {
            "label": "Semantic segmentation",
            "kind": "ai"
          },
          {
            "label": "Facade filter",
            "kind": "ai"
          },
          {
            "label": "Mapping and output",
            "kind": "out"
          }
        ],
        "caption": "Methodology for green areas"
      },
      {
        "type": "text",
        "text": [
          "<strong>Findings in Porta Venezia:</strong> around 1.8 hectares of potential greenery – green areas, green roofs and courtyard greenery. That would absorb roughly 5–20 t of CO₂ per year, lower temperatures by 0.5–2 °C, create a passageway for bees and other insects between parks, and slow rainwater so the drainage system is less challenged."
        ]
      },
      {
        "type": "stats",
        "items": [
          {
            "value": "1,358 m²",
            "label": "Green areas"
          },
          {
            "value": "14,040 m²",
            "label": "Green roofs"
          },
          {
            "value": "2,755 m²",
            "label": "Courtyard greenery"
          },
          {
            "value": "18,154 m²",
            "label": "Total – Porta Venezia"
          }
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/pv-dashboard.jpg",
        "alt": "Interactive dashboard of green opportunities in Porta Venezia",
        "caption": "Milan Green Opportunities – Porta Venezia"
      },
      {
        "type": "text",
        "text": [
          "<strong>Findings in Isola:</strong> 28 potential green areas, totalling around 8,600 m²."
        ]
      },
      {
        "type": "stats",
        "items": [
          {
            "value": "28",
            "label": "Potential green areas"
          },
          {
            "value": "8,602 m²",
            "label": "Total – Isola"
          }
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/is-dashboard.jpg",
        "alt": "Interactive dashboard of green opportunities in Isola",
        "caption": "Milan Green Opportunities – Isola"
      },
      {
        "type": "text",
        "text": [
          "<strong>How can AI support planning?</strong> Facade vegetation detection was fully automated: 3,956 images collected and analysed without manual sampling or site visits. Pavement and ground-surface assessment remained manual, but could be automated with the same approach applied to aerial imagery – a top-down pipeline that segments aerial tiles into roofs, vegetation, courtyards, roads and paved areas, calculates their areas and exports them to an interactive map."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Setup",
          "Area definition",
          {
            "label": "Aerial image acquisition",
            "kind": "ai"
          },
          {
            "label": "Segmentation",
            "kind": "ai"
          },
          {
            "label": "Classification",
            "kind": "ai"
          },
          "Area calculation",
          {
            "label": "GeoJSON + interactive map",
            "kind": "out"
          }
        ],
        "caption": "Automated top-down analysis – steps 3–7 run without input"
      },
      {
        "type": "pair",
        "images": [
          {
            "src": "assets/img/p03/aerial.jpg",
            "alt": "Aerial image of a Milan neighbourhood",
            "caption": "Aerial imagery"
          },
          {
            "src": "assets/img/p03/pipeline-code.jpg",
            "alt": "Python notebook running the automated analysis pipeline",
            "caption": "Pipeline notebook"
          }
        ]
      },
      {
        "type": "text",
        "text": [
          "<strong>Final proposal:</strong> green areas are the first choice for placing greenery – highly effective, but very space-dependent. Ground-level space, pavement width and private ownership of roofs and courtyards often make them impossible. Where ground-level green infrastructure is not an option, vertical solutions become necessary – so the focus shifts to green facades."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/green-proposal.jpg",
        "alt": "Aerial view of a building fully covered in climbing plants",
        "caption": "Green areas – the first choice"
      },
      {
        "type": "text",
        "heading": "Green facades",
        "text": [
          "A fully automated pipeline samples every street at fixed intervals, photographs each facade through the Street View API, and separates vertical greenery from street trees using semantic segmentation. The only criterion is that we are looking at a facade – with low existing greenery and large open surfaces."
        ]
      },
      {
        "type": "steps",
      "numbered": true,
      "note": "Each step feeds the next — no manual intervention at any point",
        "items": [
          "Street network",
          "Sampling every 50 m",
          "Camera orientation",
          {
            "label": "Image acquisition",
            "kind": "ai"
          },
          {
            "label": "AI segmentation — core step",
            "kind": "core"
          },
          {
            "label": "Facade filter",
            "kind": "ai"
          },
          {
            "label": "Scoring",
            "kind": "ai"
          },
          {
            "label": "Mapping",
            "kind": "out"
          }
        ],
        "caption": "Methodology for green facades"
      },
      {
        "type": "text",
        "text": [
          "<strong>Image sampling:</strong> stations every 50 m along the street network, with two images per station taken perpendicular to the street – one facade line on each side. Isola: 1,135 stations and 2,238 images. Porta Venezia: 872 stations and 1,718 images."
        ]
      },
      {
        "type": "stats",
        "items": [
          {
            "value": "1,135",
            "label": "Stations – Isola"
          },
          {
            "value": "2,238",
            "label": "Images – Isola"
          },
          {
            "value": "872",
            "label": "Stations – Porta Venezia"
          },
          {
            "value": "1,718",
            "label": "Images – Porta Venezia"
          }
        ]
      },
      {
        "type": "pair",
        "images": [
          {
            "src": "assets/img/p03/gsv-1.jpg",
            "alt": "Street View image with vegetation segmented in orange and purple",
            "caption": "Segmented street view"
          },
          {
            "src": "assets/img/p03/gsv-2.jpg",
            "alt": "Street View image with facade greenery highlighted in purple",
            "caption": "Facade greenery detected"
          }
        ]
      },
      {
        "type": "text",
        "text": [
          "<strong>Green wall detection:</strong> a facade filter separates facade vegetation from street trees standing in front of it. A region must be bounded by building on at least 85% of its perimeter, be compact and vertical, not touch the sky or street level, and be larger than 600 px. The highest scores fall on Via Gaetano De Castillia – the address of Bosco Verticale – which the method identified without prior knowledge of the site."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/detection.jpg",
        "alt": "Facade with climbing plants detected, plant coverage 29.5%",
        "caption": "Green wall detection – plant coverage 29.5%"
      },
      {
        "type": "text",
        "text": [
          "<strong>Gap mapping:</strong> every sampling station is plotted with its facade vegetation score, producing a continuous map across both districts. Vertical greenery turns out to be rare and strongly clustered – and the map shows not only where greenery is, but where it is needed: 0–5% vegetation means very high potential, 20%+ means very low."
        ]
      },
      {
        "type": "image",
        "src": "assets/img/p03/gap-map.jpg",
        "alt": "Map of sampling stations sized and coloured by facade vegetation score",
        "caption": "Gap mapping – facade vegetation score per station"
      },
      {
        "type": "text",
        "text": [
          "<strong>Results:</strong> a typical street in Isola carries about three times as much vegetation as one in Porta Venezia – <strong>4.1% against 1.2%</strong> at the median – even though the averages are nearly identical. This is most likely due to recent development such as Bosco Verticale, where greenery was integrated from the start."
        ]
      },
      {
        "type": "bars",
        "unit": "%",
        "max": 14,
        "groups": [
          {
            "label": "Isola / Porta Nuova",
            "bars": [
              {
                "label": "Mean",
                "value": 12.47
              },
              {
                "label": "Median",
                "value": 4.1
              }
            ]
          },
          {
            "label": "Porta Venezia",
            "bars": [
              {
                "label": "Mean",
                "value": 11.51
              },
              {
                "label": "Median",
                "value": 1.23
              }
            ]
          }
        ],
        "caption": "Street-level vegetation – % of image area"
      },
      {
        "type": "table",
        "head": [
          "Parameter",
          "Isola / Porta Nuova",
          "Porta Venezia"
        ],
        "rows": [
          [
            "Study area",
            "800 m around Bosco Verticale",
            "700 m radius"
          ],
          [
            "Street network",
            "53.1 km · 705 segments",
            "42.4 km · 559 segments"
          ],
          [
            "Station spacing",
            "50 m",
            "50 m"
          ],
          [
            "Sampling stations",
            "1,134",
            "872"
          ],
          [
            "Images per station",
            "2 (perpendicular to street)",
            "2 (perpendicular to street)"
          ],
          [
            "Street View coverage",
            "1,132 / 1,134 (99.8%)",
            "872 / 872 (100%)"
          ],
          [
            "Unique panoramas",
            "1,096",
            "850"
          ],
          [
            "Images analysed",
            "2,236",
            "1,717"
          ],
          [
            "Panorama dates",
            "2014-08 – 2026-06",
            "2014-09 – 2026-06"
          ],
          [
            "Segmentation model",
            "SegFormer-B0 (ADE20K)",
            "SegFormer-B0 (ADE20K)"
          ]
        ],
        "caption": "Study parameters"
      },
      {
        "type": "text",
        "heading": "Conclusion",
        "text": [
          "The project maps street-level vegetation in two contrasting Milanese districts using a fully automated pipeline: <strong>95 km of streets, 2,006 sampling stations and 3,953 images</strong>, collected and analysed without site visits or manual image selection.",
          "The uneven distribution is itself the finding. Both districts average around 12%, but their medians differ threefold. Planning on averages alone would misdirect resources.",
          "In a dense city where ground-level space for parks and street trees is largely exhausted, facades are a surface that is almost entirely unused – over 70% of sampled views carry under 20% vegetation. Mapping where greenery already exists, and where large surfaces remain bare, provides a basis for targeting future greening strategies. The method is scalable: applied across the city, it could identify candidate surfaces at a scale no manual survey can reach.",
          "<strong>Limitations:</strong> panoramas date from 2014 to 2026, and only street-level views are visible. The model was trained on a general dataset without a green-wall class, and thresholds were set by inspection rather than calibrated. Percentages are a consistent relative indicator, not an absolute measure – and without thermal measurement the study can show correlation, not causation. Automated detection can support facade vegetation analysis at scale, but currently still requires human verification."
        ]
      }
    ]
  },
  {
    slug: "solbakkegard",
    title: "Solbakkegård Gårdbørnehave",
    subtitle: "Havdrup",
    headerBlock: true,
    category: "Prefab timber elements",
    school: "KEA · Construction, 3rd semester",
    year: "2025",
    role: "Floor elements: build-up, materials, connections",
    tools: "Revit, Excel, MS Project",
    theme: { accent: "#7E1D1D", tile: "#F6EFEE" }, // dark red + white
    summary: "Prefabricated timber elements for a daycare in Havdrup – designed, detailed and planned from floor structure to roof.",
    cover: "assets/img/p02/1.jpg",
    coverAlt: "Render of Solbakkegård Gårdbørnehave, a daycare in Havdrup: a timber building with red frames and a covered terrace",
    body: [
      { type: "text", heading: "Documentation", text: "In the Solbakkegård Daycare project, we worked as a subcontractor focusing on the design and construction of prefabricated timber elements." },
      { type: "pair", images: [
        { src: "assets/img/p02/2.jpg", alt: "Work basis", caption: "Work basis" },
        { src: "assets/img/p02/3.jpg", alt: "Health & safety plan (APV & PSS)", caption: "Health & safety plan (APV & PSS)" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/4.jpg", alt: "Control plans", caption: "Control plans" },
        { src: "assets/img/p02/5.jpg", alt: "Schedules", caption: "Schedules" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/6.jpg", alt: "Production diagram", caption: "Production diagram" },
        { src: "assets/img/p02/7.jpg", alt: "Logistics & transport", caption: "Logistics & transport" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/8.jpg", alt: "Site plan", caption: "Site plan" },
        { src: "assets/img/p02/20.jpg", alt: "Economy", caption: "Economy" }
      ] },
      { type: "image", src: "assets/img/p02/21.jpg", alt: "Dead load & structural calculations", caption: "Dead load & structural calculations" },
      { type: "text", heading: "Plans", text: "The project included prefabricated floor, façade and roof elements, as well as planning the installation process from the floor structure to the roof." },
      { type: "pair", images: [
        { src: "assets/img/p02/9.jpg", alt: "Assembly plan – elevation", caption: "Assembly plan – elevation" },
        { src: "assets/img/p02/10.jpg", alt: "Assembly plan – elevation", caption: "Assembly plan – elevation" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/11.jpg", alt: "Assembly plan – gable section", caption: "Assembly plan – gable section" },
        { src: "assets/img/p02/12.jpg", alt: "Assembly plan – plan & roof", caption: "Assembly plan – plan & roof" }
      ] },
      { type: "text", heading: "Production drawings" },
      { type: "pair", images: [
        { src: "assets/img/p02/13.jpg", alt: "Building isometric", caption: "Building isometric" },
        { src: "assets/img/p02/14.jpg", alt: "TR1 floor element elevation", caption: "TR1 floor element elevation" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/15.jpg", alt: "Production drawing – timber frame", caption: "Production drawing – timber frame" },
        { src: "assets/img/p02/16.jpg", alt: "Production drawing – cement board", caption: "Production drawing – cement board" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/17.jpg", alt: "Production drawing – insulation", caption: "Production drawing – insulation" },
        { src: "assets/img/p02/18.jpg", alt: "Production drawing – strongboard", caption: "Production drawing – strongboard" }
      ] },
      { type: "image", src: "assets/img/p02/19.jpg", alt: "Process guide", caption: "Process guide" },
      { type: "text", heading: "Detail drawings" },
      { type: "pair", images: [
        { src: "assets/img/p02/22.jpg", alt: "Detail drawing", caption: "Detail drawing" },
        { src: "assets/img/p02/23.jpg", alt: "Detail drawing", caption: "Detail drawing" }
      ] },
      { type: "pair", images: [
        { src: "assets/img/p02/24.jpg", alt: "Detail drawing", caption: "Detail drawing" },
        { src: "assets/img/p02/25.jpg", alt: "Detail drawing", caption: "Detail drawing" }
      ] },
      { type: "image", src: "assets/img/p02/26.jpg", alt: "Detail drawing", caption: "Detail drawing" }
    ]
  },
  {
    slug: "design-for-disassembly",
    title: "Design for Disassembly",
    headerBlock: true,
    category: "Circular construction",
    school: "KEA · Elective, 3rd semester",
    year: "2025",
    role: "Analysis, detailing & drawings",
    tools: "Revit",
    theme: { accent: "#7A4E2D", tile: "#F3EDE5" }, // white + walnut brown
    summary: "How can ordinary building constructions be designed to come apart again, so their parts can be reused instead of demolished?",
    cover: "assets/img/p01/cover.jpg",
    coverFit: "contain",
    coverAlt: "Exploded axonometric of the revised floor build-up: oak parquet, plywood, screed boards, membrane and precast concrete on a steel beam, with every screw shown",
    body: [
      { type: "text", heading: "Brief", text: "The project explores how common building constructions can be designed to make disassembly and reuse easier. Two existing constructions – a floor structure and an interior wall – are analysed with a focus on materials, connections and the possibility of dismantling." },
      { type: "pair", images: [
        { src: "assets/img/p01/1.jpg", alt: "Exploded axonometric of the existing exterior wall build-up with eleven numbered layers" },
        { src: "assets/img/p01/2.jpg", alt: "Axonometric of the floor components: concrete beam, TT deck and cast concrete topping" }
      ], caption: "A102 / A103 — Existing build-ups taken apart layer by layer. Scale 1:10" },
      { type: "pair", images: [
        { src: "assets/img/p01/3.jpg", alt: "Exploded axonometric of the floor finish layers from roofing felt to oak sports parquet and skirting" },
        { src: "assets/img/p01/4.jpg", alt: "Assembled axonometric of the floor meeting the exterior wall" }
      ], caption: "A104 / A105 — Floor finishes, exploded and assembled. Scale 1:10" },
      { type: "pair", images: [
        { src: "assets/img/p01/5.jpg", alt: "Axonometric of the revised floor being lifted apart plank by plank" },
        { src: "assets/img/p01/6.jpg", alt: "Exploded axonometric of the revised floor with all mechanical fixings shown" }
      ], caption: "A106 / N007 — Revised floor: mechanical, reversible connections throughout" },
      { type: "image", src: "assets/img/p01/7.jpg", alt: "Section showing the revised floor layers separated with their screws", caption: "SV70_N005 — Revised floor, layers separated. Scale 1:5" },
      { type: "image", src: "assets/img/p01/8.jpg", alt: "Exploded axonometric of the revised wall: steel frame, insulation and screwed plasterboards", caption: "SV70_N009 — Revised wall, exploded. Scale 1:6" },
      { type: "text", heading: "Interior wall", text: "In the original wall the plasterboards are glued to a timber frame, so taking it apart destroys the boards. The revised wall swaps the timber studs for an MR70 steel frame and fixes the boards with screws only – quicker to dismantle, and every board can be reused." },
      { type: "image", src: "assets/img/p01/9.jpg", alt: "Detail drawings comparing the original wall with timber studs to the revised wall with steel studs", caption: "SV70_N011 — Wall, original vs. revised construction. Scale 1:2" },
      { type: "text", heading: "Floor", text: "The original floor has a fully glued timber floor and a fibre-reinforced screed that has to be broken out. The revised floor is screwed together layer by layer, and the screed is replaced by screed boards and a prefabricated concrete element – so the layers can be lifted off in whole pieces and reused in the next project." },
      { type: "image", src: "assets/img/p01/10.jpg", alt: "Detail sections comparing the original glued floor with the revised screwed floor on a steel HEB beam", caption: "SV70_N012 — Floor, original vs. revised construction. Scale 1:5" },
      { type: "text", heading: "Outcome", text: "Based on the analysis, improved solutions were developed using mechanical and reversible connections. The aim is to reduce material waste and make it possible to reuse building components instead of demolishing them." }
    ]
  }
];
