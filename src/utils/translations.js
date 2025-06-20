const translations = {
  es: {
    header: {
      btnHome: "Inicio",
      btnBack: "Volver",
      btnNext: "Siguiente",
      settings: {
        menuFont: "Texto Grande",
        menuContrast: "Alto Contraste",
      },
    },
    inicio: {
      titulo: "Secretos de una casa cartagenera",
      subtitulo:
        "Vive esta experiencia arqueológica. Aquí encontrarás historias sobre…",
      indice: [
        "La ciudad colonial",
        "Excavaciones en la casa",
        "Cosas del pasado",
      ],
      boton: "Iniciar recorrido",
    },
    map: {
      sideTitle: "La ciudad colonial",
      sideParagraph:
        "Cartagena fue construida en territorios de indígenas malibúes asentados en la bahía. En 1533 Pedro de Heredia fundó la ciudad puerto en este lugar, a pesar de la escasez de agua para el consumo y por las ventajas que brindaba el lugar para la llegada de las embarcaciones y la defensa de la ciudad.\nExisten muchos planos de la ciudad que permiten conocer sus transformaciones a lo largo de los siglos. Este plano muestra a Cartagena y su entorno en 1586, cuando es sitiada y saqueada por el corsario Francis Drake.\nExplora algunos sitios de interés en la ciudad colonial.",
      markers: [
        {
          id: 0,
          caption: "1",
          title: "Modelo del muelle de Cartagena, 1571",
          description:
            "La Plaza Real, hoy Plaza de la Aduana, era el centro del comercio en donde se subastaban personas africanas para ser esclavizadas y se ofertaban mercancías. El comercio de personas estuvo amparado en el principio de la propiedad de un ser humano sobre el otro y sobre su descendencia. Esta plaza, al igual que la conocida hoy como del Reloj, ha sido testigo de la trata y explotación de personas a lo largo del tiempo.",
        },
        {
          id: 1,
          caption: "2",
          title: "Plaza Mayor",
          description:
            "En la plaza administrativa, conocida como Plaza Mayor, hoy Parque de Bolívar, se establecieron las instituciones coloniales que rigieron la vida de la ciudad y de sus habitantes. Fueron pocas las casas de propiedad de particulares en esta plaza.",
        },
        {
          id: 2,
          caption: "3",
          description:
            "En 1570, Cartagena tenía cerca de 400 casas construidas en piedra y en bahareque. Un incendio de 1552 había destruido las construcciones en palma y caña. En el ataque de Drake de 1586, la ciudad pierde de nuevo la mitad de sus casas. Por orden del cabildo, los propietarios fueron obligados a reconstruirlas en mampostería (piedra y ladrillo).",
          list: "Casas con fachadas de cal#Casas de bahareque o madera",
        },
        {
          id: 3,
          caption: "4",
          title: "La manzana del Museo del Oro Zenú durante la toma de Drake",
          list: "Gobernación#Casa del carcelero#Botica#Casa Museo del Oro Zenú#Centros de manzana verdes por las huertas",
          button: "Visita la excavación de la casa",
        },
      ],
    },
    excavacion: {
      sideTitle: "Excavaciones en la casa",
      sideParagraph:
        "Las arqueólogas y arqueólogos seleccionaron dos áreas estratégicas para excavar en la casa del Museo del Oro Zenú. En cada una obtuvieron información diferente.\nEn la excavación de la antigua huerta o solar de la casa, donde los habitantes de las casas coloniales botaban los desechos, hallaron huellas de una letrina del siglo XIX con numerosos artefactos. La excavación al lado del aljibe, en lo que era el pozo de aguas residuales, permitió conocer sobre los pobladores indígenas prehispánicos y del contacto inicial con los españoles.",
      markers: [
        {
          caption: "1",
          title: "El albañal",
          sideParagraph:
            "El albañal, construido cerca de la cocina y del aljibe, sirvió como desagüe de las aguas sucias producto de las actividades domésticas.\nLa excavación arqueológica mostró en esta área una alteración de las capas de suelo causada por la construcción del aljibe. En estas capas se encontraron objetos de la vida cotidiana indígena.",
          description:
            "Este es el dibujo arqueológico de un perfil estratigráfico. Cada estrato o nivel es un depósito de actividades de una ocupación humana o de un evento natural. Aquí los estratos están revueltos.",
        },
        {
          caption: "2",
          title: "Lo que cuenta una letrina",
          sideParagraph:
            "Una letrina es una estructura con foso para depositar los excrementos humanos que contribuye a disminuir los problemas de salubridad.\nEn la excavación de la letrina de la casa se encontró una acumulación de objetos que cuentan sobre los remedios usados para combatir las enfermedades más comunes en la ciudad, el cuidado personal y las prácticas de mesa.",
          description:
            "En este perfil estratigráfico se observa en la parte superior bacinicas, botellas y otros utensilios que se desecharon cuando se clausuró la letrina en el siglo XX.",
          button: "Cerrar",
        },
      ],
      botones: {
        linkNext: "Explorar excavaciones",
        linkPiezas: "Explorar piezas",
        reset: "Reiniciar exploración",
      },
    },
    piezas: {
      sideTitle: "Cosas del pasado",
      sideParagraph:
        "Arqueólogas y arqueólogos emplean dibujos técnicos y modelos tridimensionales para reconstruir la forma original de los objetos a partir de los fragmentos encontrados en las excavaciones. Los bordes, por ejemplo, permiten proyectar el diámetro de las vasijas, mientras los del cuerpo de los recipientes revelan su configuración.\nPara obtener información sobre su manufactura y el uso que se les dio, recurren a diversos tipos de microscopios que amplían la imagen hasta varios miles de veces y permiten explorar los detalles del fragmento a nivel microestructural. El análisis macroscópico, hecho con el ojo humano y los demás sentidos, les ayuda a identificar otros aspectos.\nExplora todos estos niveles de información. ",
      modelos: [
        {
          id: 4,
          title: "Embudo",
          sideTitle: "Embudo inglés del siglo XIX",
          sideParagraph:
            "El diseño azul de este fragmento de embudo fue inicialmente grabado en una plancha de cobre por un artesano. Luego se imprimió en una tinta azul con óxido de cobalto, sobre un papel de seda que se adhirió encima del bizcocho (primera cocción de la loza) recubierto con una capa de esmalte blanco.\nPara darle el vidriado brillante se le aplicó un esmalte transparente y se quemó de nuevo. En este proceso, el diseño se transfería a la pieza.",
          markers: [
            {
              id: 1,
              list: "Unión del diseño impreso en el papel",
            },
          ],
        },
        {
          id: 13,
          title: "Olla",
          sideTitle: "Olla de cocina elaborada por alfareros africanos",
          sideParagraph:
            "Parte de las vasijas usadas en las cocinas de la Cartagena colonial fueron elaboradas por personas africanas esclavizadas y “negros libres”.\nEllos abastecieron la continua y creciente demanda de estos utensilios en la ciudad y aportaron con sus tradiciones a las técnicas, formas y decoraciones.",
          markers: [
            {
              id: 1,
              description:
                "Decoración ungulada, es decir, hecha con impresiones de los dedos, típica de la tradición alfarera africana.",
            },
            {
              id: 2,
              description: "Residuos de los alimentos preparados.",
            },
          ],
        },
        {
          id: 2,
          title: "Botella",
          sideTitle: "Botella para jarabe",
          sideParagraph:
            "Varias de las botellas excavadas sirvieron de envase para medicamentos, algunos de producción local, como los de la Farmacia Román, situada en cercanías de la casa del Museo del Oro Zenú, y otros importados de Estados Unidos y Europa.\nEsta botella contenía un jarabe que calmaba el dolor del brote de dientes de niños y niñas. Aunque este fármaco se produjo desde el siglo XIX, solo hasta el siglo XX se descubrió que uno de sus contenidos, la morfina, era letal para los infantes.",
          markers: [
            {
              id: 1,
              list: "Comercializadores del medicamento: Curtis es el yerno de la señora Winslow y Perkins, su socio#El nombre del medicamento se toma de la médica Charlotte N. Winslow, suegra de Curtis#Al asociarse a una mujer le daba un aire de confianza maternal al jarabe#Nombre de la compañía farmacéutica",
            },
          ],
        },
        {
          id: 3,
          title: "Cepillo",
          sideTitle: "Cepillo de dientes en hueso",
          sideParagraph:
            "Los cepillos de dientes de hueso y pelo animal se usaron en Europa desde el siglo XVII, cuando era considerado un objeto de lujo, hasta entrado el siglo XX. Los mayores productores de estos cepillos fueron Inglaterra, Alemania, Francia y Japón. Su producción solo se masificó con la invención de la máquina perforadora en 1870.",
          markers: [
            {
              id: 1,
              list: "Estandarización del tamaño de los orificios como indicador de elaboración industrial.",
            },
          ],
        },
        {
          id: 10,
          title: "Escudilla",
          sideTitle: "Escudilla española",
          sideParagraph:
            "Las escudillas se usaban para servir sopas, caldos o potajes que se tomaban con cuchara o sorbidos. Esta es del tipo conocido como Columbia liso, una mayólica española producida entre 1490 y 1550. Su superficie vidriada brillante se obtenía con el uso del plomo triturado y el color blanco, con el estaño. Esta última técnica fue introducida en España por los árabes.",
          markers: [
            {
              id: 1,
              description:
                "Vidriado externo erosionado por el contacto con el suelo donde estuvo enterrada la escudilla.",
            },
            {
              id: 2,
              list: "El vidriado en la superficie interior es más grueso y se preservó mejor#Pasta cerámica de la escudilla.",
            },
          ],
        },
        {
          id: 11,
          title: "fragmento de cerámica indígena",
          sideTitle: "fragmento de cerámica indígena tipo Crespo",
          sideParagraph:
            "La decoración, el color y el material de este fragmento permiten asociarlo al tipo cerámico Crespo definido por la arqueóloga Alicia Dussán. Esta alfarería indígena se ha encontrado en contextos datados desde tiempos prehispánicos hasta entrado el siglo XIX, como testimonio de la continuidad de las tradiciones cerámicas locales después de la invasión española. ",
          markers: [
            {
              id: 1,
              description: "Decoración incisa en forma de V y puntos.",
            },
            {
              id: 2,
              list: "Estas inclusiones de arena que se encuentran en la pasta fueron el desgrasante usado para darle cuerpo a la arcilla.",
            },
            {
              id: 3,
              description:
                "El núcleo oscuro del fragmento cerámico es evidencia de oxidación de materia orgánica de la pasta por un proceso de cocción que no superó los 600°C.",
            },
          ],
        },
        {
          id: 9,
          title: "Budare",
          sideTitle: "fragmento de budare",
          sideParagraph:
            "La yuca, planta de origen americano, fue usada desde tiempos prehispánicos para la preparación de casabe o tortillas. Para hacer la masa se rallaba la yuca y se exprimía. Luego se extendía y tostaba sobre el budare caliente. Sobre este también se asaban tortillas de maíz y tostaban semillas. Los españoles incorporaron pronto estos alimentos a su dieta y estos utensilios.",
          markers: [
            {
              id: 1,
              list: "La capa de hollín indica que el budare fue puesto al fuego.",
            },
            {
              id: 2,
              list: "Vitrificación del contenido de silicio por acción del calor.",
            },
            {
              id: 3,
              list: "Veta de corrosión de mineral rico en hierro.",
            },
            {
              id: 4,
              list: "Concreciones de sales formadas por la reacción con el suelo.",
            },
          ],
        },
        {
          id: 6,
          title: "Tazón",
          sideTitle: "Tazón inglés con diseño floral",
          sideParagraph:
            "Los fragmentos de loza industrial encontrados en la casa no solo cuentan sobre los gustos de los miembros del hogar. También revelan las técnicas de producción de diferentes lugares y épocas en Europa, donde los ingleses eran los mayores productores y exportadores, y en menor proporción los franceses, alemanes y españoles.\nEste es un tazón de loza inglesa pintada a mano del siglo XIX.",
          markers: [
            {
              id: 1,
              description: "Diseños florales pintados a mano.",
            },
          ],
        },
        {
          id: 8,
          title: "Bacín",
          sideTitle: "Bacin",
          sideParagraph:
            "La idea de higiene durante buena parte del periodo colonial fue distinta a la actual. La orina y heces se depositaban en los bacines, que se mantenían bajo las camas o acomodados en una silla inodoro. Cuando estos desechos no se vertían en la huerta, en el albañal o en la letrina, eran botados a la calle. Sin lluvias, esta práctica contribuía al ambiente malsano de Cartagena de Indias.",
          markers: [
            {
              id: 1,
              list: "Superficie vidriada#Pasta cerámica",
            },
          ],
        },
        {
          id: 7,
          title: "Bacinica inglesa",
          sideTitle: "Bacinica inglesa",
          sideParagraph:
            "Esta bacinica decorada con la técnica de transferencia muestra un motivo elaborado tal vez por el artista inglés W.H. Bartlett (1809-1854). Son reconocidos sus grabados en acero de paisajes idealizados de la Gran Bretaña, Estados Unidos, Canadá y el Cercano Oriente. Según la decoración y el color, la bacinica fue elaborada a mediados del siglo XIX, en Inglaterra.",
          markers: [
            {
              id: 1,
              description:
                "Para distinguirse, cada fábrica de loza diseñó una o varias marcas, que se imprimían en la base del objeto.",
            },
          ],
        },
        {
          id: 1,
          title: "Botija",
          sideTitle: "Botija para vino y aceite",
          sideParagraph:
            "Un recipiente popular para contener líquidos en la América colonial fue la botija producida en España. Venían en los barcos llenas con vino o aceite de oliva y ayudaban a darle peso a la embarcación. Una vez consumidos estos líquidos, se usaban para guardar el agua para beber u otras bebidas fermentadas.",

          markers: [
            {
              id: 1,
              description: "Baño de cal superficial precocción",
            },
          ],
        },
        {
          id: 5,
          title: "Plato",
          sideTitle: "Plato pando sevillano",
          sideParagraph:
            "Este plato del tipo azul sobre azul fue producido en Sevilla, en el barrio de Triana, entre 1550 y 1630. La loza de este tipo buscó imitar tanto la cerámica italiana, como la porcelana china.\nPudo haber sido parte del menaje de la familia Matute, quienes pretendían preservar en América las prácticas de mesa y los gustos hispanos a la hora de consumir sus alimentos. ",
          markers: [
            {
              id: 1,
              list: "Vidriado opaco en dos tonos de azul.",
            },
            {
              id: 2,
              list: "Pasta original quemada antes de aplicar el esmalte (bizcocho).",
            },
          ],
        },
        {
          id: 12,
          title: "Raspador",
          sideTitle: "Raspador de piedra",
          sideParagraph:
            "Los indígenas usaron la piedra para elaborar una gran diversidad de herramientas. Recurrieron a rocas muy duras, principalmente chert, cuya forma redondeada y estructura facilitaba la elaboración de objetos cortantes como esta raedera empleada para desprender el cuero de los animales.",
          markers: [
            {
              id: 1,
              list: "La transparencia es una característica propia de rocas ricas en sílice como el chert.",
            },
            {
              id: 2,
              list: "El filo cortante fue obtenido por la técnica de presión aplicada en ambos lados.",
            },
          ],
        },
        {
          id: 14,
          title: "Jarra",
          sideTitle: "Jarra para el servicio en la mesa",
          sideParagraph:
            "Para elaborar esta jarra se modelaba la pieza en arcilla y se cocía a baja temperatura. Sobre esta base se aplicaba un esmalte azul con contenido de sílice, para el vidriado, y con óxido de cobalto, para lograr el azul. Algo de óxido de estaño aclaraba el color y le daba opacidad. Los diseños en azul más intenso eran hechos a mano con un esmalte con mayor concentración de óxido de cobalto. Para lograr el vidriado se hacía una segunda cocción a mayor temperatura.",
          markers: [
            {
              id: 1,
              list: "Esmalte azul claro con óxido de estaño y menor contenido de óxido de cobalto.",
            },
            {
              id: 2,
              list: "Esmalte con mayor concentración de óxido de cobalto.",
            },
          ],
        },
      ],
    },
  },
  en: {
    header: {
      btnHome: "Home",
      btnBack: "Back",
      btnNext: "Next",
      settings: {
        menuFont: "Larger Font",
        menuContrast: "Higher Contrast",
      },
    },
    inicio: {
      titulo: "Secrets of a Cartagena House",
      indice: [
        "The colonial city",
        "Excavations in the house",
        "Things from the past",
      ],
      boton: "Start tour",
    },
    map: {
      sideTitle: "The colonial city",
      sideParagraph:
        "Cartagena was built on land where Malibú indigenous people had settled, in the bay. In 1533 Pedro de Heredia founded the port city there, despite the shortage of water suitable for drinking, because of the advantages the site offered for the arrival of ships and for defending the city. Many plans of the city still exist which enable us to see how it became transformed with the passing of the centuries. This plan shows Cartagena and its surrounding area in 1586, when the city was besieged and plundered by the privateer Francis Drake.\nExplore the blocks and the houses with the magnifying glass.  ",
      markers: [
        {
          id: 0,
          caption: "1",
          title: "Plaza Real (Royal Square)",
          description:
            "The Plaza Real (Royal Square), or Plaza de la Aduana (Custom House Square), as it is called today, was the centre for trade and where people from Africa were auctioned, to be enslaved, and merchandise was offered for sale. The trading of people was covered by the principle whereby a human could be the owner of another human and of that person's descendants. This square, like the one known today as Plaza del Reloj (Clock Square), witnessed the trafficking and exploitation of humans for a very long time. ",
        },
        {
          id: 1,
          caption: "2",
          title: "Plaza Mayor (Main Square)",
          description:
            "The administration square, known as the Plaza Mayor and today as Bolívar Park, was where colonial institutions that governed life in the city and the lives of its inhabitants were established. Few houses in this square had private owners.",
        },
        {
          id: 2,
          caption: "3",
          description:
            "In 1570, Cartagena had about 400 houses built of stone and bahareque, wattle and daub. A fire in 1552 had destroyed buildings made of palm and reed. In Drake's attack in 1586, the city once more lost half of its houses. By order of the council, the owners were obliged to rebuild them in masonry (stone and brick).",
          list: "Houses with lime frontages#Houses made of bahareque (wattle and daub) or wood",
        },
        {
          id: 3,
          caption: "4",
          title:
            "The block where the Zenú Gold Museum now stands, during the siege by Drake.",
          list: "Provincial Government building#Jailer's house#Centres of blocks green because of the vegetable gardens#Zenú Gold Museum house#Pharmacy",
          button: "Visit the excavation of the house",
        },
      ],
    },
    excavacion: {
      sideTitle: "House excavations",
      sideParagraph:
        "Archaeologists chose two strategic areas that were to be excavated at the Zenú Gold Museum house. Different information was obtained in each one.\nIn the dig in the house's former vegetable garden or plot, where the inhabitants of colonial houses used to dispose of their rubbish, traces were found of a 19th century latrine, together with numerous artefacts. The dig at the side of the well, which was the waste water well, revealed information about the pre-Hispanic indigenous settlers and the initial contact with the Spaniards.",

      markers: [
        {
          caption: "1",
          title: "The cesspool",
          sideParagraph:
            "The cesspool, which was built near the kitchen and the well, served as a drain for dirty water resulting from domestic activities. The archaeological dig in this area unearthed an alteration in the layers of soil, due to the construction of the well. Objects from everyday indigenous life were found in these layers.",
          description:
            "This is the archaeological drawing of a stratigraphic profile. Each stratum or level is a store of activities resulting from human occupation or a natural event. Here, the strata are mixed up.",
        },
        {
          caption: "2",
          title: "What a latrine tells us",
          sideParagraph:
            "A latrine is a structure with a pit where human excrement is deposited, thereby helping to reduce health and sanitation problems. An accumulation of objects was found during the dig in the house's latrine, and these tell us about the remedies that were used for fighting the commonest illnesses in the city, personal care, and table practices. ",
          description:
            "In this stratigraphic profile, small chamber pots, bottles and other utensils that were thrown away when the latrine was closed down in the 20th century can be seen in the upper part.",
          button: "Cerrar",
        },
      ],
      botones: {
        linkNext: "Explore the excavations",
        linkPiezas: "Explore the artefacts",
        reset: "Restart exploration",
      },
    },
    piezas: {
      sideTitle: "Artefacts",
      sideParagraph:
        "Archaeologists use technical drawings and three-dimensional models to reconstruct the original shape of objects from the fragments found in excavations. For example, the edges enable the diameter of pots to be projected, while the edges of the body of containers reveal their configuration.\nTo obtain information about how they were made and how they were used, they use different types of microscopes that enlarge the image up to several thousand times and enable them to explore the details of the fragment at a microstructural level. Macroscopic analysis, which is done with the human eye and other senses, helps them to identify other aspects.\nExplore all these levels of information.",
      modelos: [
        {
          id: 4,
          title: "funnel",
          sideTitle: "19th century English funnel",
          sideParagraph:
            "The blue design on this funnel fragment was initially engraved on a copper plate by a craftsman. It was then printed in a blue ink with cobalt oxide on a silk paper that was affixed to the top of the unglazed surface (first firing of the earthenware), coated with a layer of white enamel.\nTo give it its shiny glaze, a transparent enamel was applied, and it was then fired again. In this process, the design was transferred to the object.",
          markers: [
            {
              id: 1,
              list: "Join of the design printed on the paper",
            },
          ],
        },
        {
          id: 13,
          title: "Pot",
          sideTitle: "Kitchen pot of African tradition",
          sideParagraph:
            "Some of the vessels that were used in colonial Cartagena kitchens were made by enslaved Africans and “free negroes”. They met the continuous and growing demand in the city for these utensils and, with their traditions, contributed to techniques, forms and decorations.",
          markers: [
            {
              id: 1,
              description:
                "Ungulate decoration; in other words, made with fingerprints, a typical African pottery tradition.",
            },
            {
              id: 2,
              description: "Remains of cooked food.",
            },
          ],
        },
        {
          id: 2,
          title: "Bottle",
          sideTitle: "Bottle for syrup",
          sideParagraph:
            "Some of the bottles that were excavated had been used as containers for medicines, and while some had been made locally, such as those from Román Pharmacy, which was near the Zenú Gold Museum house, others had been imported from the United States and Europe.\nThis bottle contained a syrup that calmed tooth flare-up pain in children. Although this drug had first been produced in the 19th century, it was not until the 20th century that one of its contents, morphine, was discovered to be lethal for infants. ",
          markers: [
            {
              id: 1,
              list: "The medicine's proprietors: Curtis was the son-in-law of Mrs Winslow and Perkins, her partner#The name of the medicine comes from Doctor Charlotte N. Winslow, Curtis' mother-in-law.  Associating the syrup with a woman gave it an air of motherly trust#Name of the pharmaceutical company",
            },
          ],
        },
        {
          id: 3,
          title: "Toothbrush",
          sideTitle: "Bone toothbrush",
          sideParagraph:
            "Bone and animal-hair toothbrushes were used in Europe from the 17th century, when they were considered to be luxury objects, until early in the 20th century. The biggest producers of these brushes were England, Germany, France and Japan. Mass production came only with the invention of the perforation machine, in 1870.",
          markers: [
            {
              id: 1,
              list: "Standardization of the size of the holes as an indicator of industrial production.",
            },
          ],
        },
        {
          id: 10,
          title: "Bowl",
          sideTitle: "Spanish wide bowl",
          sideParagraph:
            "Wide bowls were used for serving soups, broths or stews that were eaten with a spoon or sipped. This one is of the type known as Smooth Columbia, a Spanish majolica made between 1490 and 1550. Its shiny, glazed surface was obtained using crushed lead, and the white colour with tin. This latter technique was introduced in Spain by the Arabs",
          markers: [
            {
              id: 1,
              description:
                "Outer glaze eroded by contact with the soil where the bowl was buried.",
            },
            {
              id: 2,
              list: "The glaze on the inner surface is thicker and better preserved.#Ceramic paste of the bowl.",
            },
          ],
        },
        {
          id: 11,
          title: "fragment of indigenous pottery",
          sideTitle: "fragment of Crespo-type indigenous pottery",
          sideParagraph:
            "The decoration, colour and material of this fragment mean that it can be associated with the Crespo type of pottery defined by archaeologist Alicia Dussán. This indigenous pottery has been found in contexts dating from pre-Hispanic times to early in the 19th century, and bears testimony to the fact that local pottery traditions continued long after the Spanish invasion.",
          markers: [
            {
              id: 1,
              description: "Incised V-shaped and dotted decoration.",
            },
            {
              id: 2,
              list: "These sandy areas that were included in the clay puddle were used as a degreasing agent to strengthen the clay.",
            },
            {
              id: 3,
              description:
                "The dark core of the ceramic fragment is evidence of the oxidation of organic matter in the clay, due to a firing process that did not exceed 600°C.",
            },
          ],
        },
        {
          id: 9,
          title: "Budare",
          sideTitle: "Budare (flat baking pan)",
          sideParagraph:
            "Cassava, a plant which originated in America, had been used since pre-Hispanic times for making cassava bread or tortillas. The cassava was grated and squeezed to make the dough. It was then spread out and grilled on the hot baking pan. Corn tortillas were prepared on it, and it was also used for grilling seeds. The Spaniards quickly incorporated these foods into their diet, as well as using the utensils.",
          markers: [
            {
              id: 1,
              list: "The layer of soot indicates that the flat baking pan had been placed over the fire.",
            },
            {
              id: 2,
              list: "Vitrification of the silicon content caused by heat.",
            },
            {
              id: 3,
              list: "Corrosion seam of an ore rich in iron.",
            },
            {
              id: 4,
              list: "Salt concretions formed by reaction with the soil.",
            },
          ],
        },
        {
          id: 6,
          title: "Bowl",
          sideTitle: "English bowl with floral design",
          sideParagraph:
            "The fragments of industrial earthenware found in the house not only tell us about the tastes of the members of the household, they also reveal information about production techniques in different places and at different times in Europe, where the English were the biggest producers and exporters, and to a lesser extent the French, Germans and Spaniards.\nThis is a 19th century hand-painted English earthenware bowl.",
          markers: [
            {
              id: 1,
              description: "Hand-painted floral designs.",
            },
          ],
        },
        {
          id: 8,
          title: "Chamber pot",
          sideTitle: "Chamber pot",
          sideParagraph:
            "During much of the colonial era, the idea of hygiene was different from today. Urine and faeces were deposited in chamber pots, which were kept under beds or placed in a toilet chair.\nWhen this waste was not poured into the vegetable garden, the cesspool or the latrine, it was thrown into the street. Without rain, this practice contributed to the unhealthy environment in Cartagena de Indias.",
          markers: [
            {
              id: 1,
              list: "Glazed Surface#Ceramic paste",
            },
          ],
        },
        {
          id: 7,
          title: "English chamber pot",
          sideTitle: "English chamber pot",
          sideParagraph:
            "This chamber pot, decorated using the transfer technique, shows a motif that was perhaps produced by English artist W. H. Bartlett (1809-1854). His engravings in steel of idealised landscapes in Great Britain, the United States, Canada and the Near East are well-known. Based on the decoration and colour, the small chamber pot was made in England in the mid-19th century.",
          markers: [
            {
              id: 1,
              description:
                "To distinguish themselves, each earthenware factory designed one or more trademarks, which were printed on the base of the object.",
            },
          ],
        },
        {
          id: 1,
          title: "Amphora",
          sideTitle: "Amphora for wine and oil",
          sideParagraph:
            "Amphorae made in Spain were a popular container for liquids in colonial America. They arrived on ships loaded with wine or olive oil, and helped with the weight of the vessel. Once these liquids had been consumed, the amphorae were used to store water for drinking or other fermented beverages.",

          markers: [
            {
              id: 1,
              description: "Surface lime bath prior to firing.",
            },
          ],
        },
        {
          id: 5,
          title: "Dish",
          sideTitle: "Shallow Seville dish",
          sideParagraph:
            "This blue-on-blue dish was made in the Triana district of Seville between 1550 and 1630. Earthenware of this kind sought to imitate both Italian pottery and Chinese porcelain.\nIt could have been part of the Matute family's household goods as they attempted to preserve table practices and Hispanic tastes in America when it came to eating their food.  ",
          markers: [
            {
              id: 1,
              list: "Opaque glaze in two shades of blue.",
            },
            {
              id: 2,
              list: "Original paste burned before applying the enamel (unglazed).",
            },
          ],
        },
        {
          id: 12,
          title: "Scraper",
          sideTitle: "Stone scraper",
          sideParagraph:
            "Indigenous peoples used stone for making a wide range of tools. They favoured very hard rocks, mainly chert, since its rounded shape and structure lent itself to making sharp objects like this scraper, which was used for stripping the skin off animals.",
          markers: [
            {
              id: 1,
              list: "Transparency is a characteristic of silicon-rich rocks like chert.",
            },
            {
              id: 2,
              list: "The sharp edge was obtained by applying pressure on both sides.",
            },
          ],
        },
        {
          id: 14,
          title: "Jug",
          sideTitle: "Jug for service at the table",
          sideParagraph:
            "When this jug was being made, the article was first sculpted in clay and fired at a low temperature. A blue enamel containing silicon was then applied to this base for the glaze, as well as cobalt oxide to achieve the blue.\nSome tin oxide made the colour clear and gave it opacity. The designs in a deeper blue were made by hand with an enamel that had a higher cobalt oxide concentration. To achieve the glaze, there was a second firing, at a higher temperature.",
          markers: [
            {
              id: 1,
              list: "Clear blue enamel with tin oxide and a lower cobalt oxide content.",
            },
            {
              id: 2,
              list: "Enamel with a higher concentration of cobalt oxide.",
            },
          ],
        },
      ],
    },
  },
};
export default translations;
