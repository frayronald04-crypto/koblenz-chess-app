export const BOOK_FULL_CONTENT = {
  despensa: {
    chapterId: 'despensa',
    title: 'Capítulo 1: En la «despensa» de las maravillas',
    subtitle: 'Introducción al Laberinto Táctico de la Escuela Soviética',
    epigraph: '«¿Os acordáis de vuestras primeras partidas? Los primeros golpes tácticos, el mate del pastor... Pero lo más admirable es que, a pesar de todo, nunca abandonasteis el ajedrez. ¿Por qué?» — Alexander Koblenz',
    intro: `Bienvenido al fascinante universo de las combinaciones ajedrecísticas. Alexander Koblenz, gran maestro y legendario entrenador del campeón mundial Mikhail Tal, nos abre de par en par la puerta a la "despensa de las maravillas": esa despensa llena de celadas, sacrificios imprevistos y mates espectaculares que enamoran a todo jugador desde sus primeros pasos.

En este primer capítulo comprenderás en profundidad qué es exactamente una combinación, cuáles son sus elementos anatómicos fundamentales y cómo el cálculo preciso de variantes breves (de 2 a 4 jugadas) permite inclinar balanzas que parecían totalmente equilibradas sobre el tablero.

Koblenz insiste en que el aficionado no debe contemplar la táctica como una serie de accidentes fortuitos, sino como la manifestación suprema de la belleza lógica del ajedrez, donde las reglas geométricas del tablero se combinan con la imaginación creadora.`,
    sections: [
      {
        id: 'sec-desp-1',
        exampleId: 'ex-desp-1',
        title: '1. El Sacrificio de Dama Desviador: Moresi vs Ferrarini (Italia, 1972) — Diagrama 1',
        content: `Alexander Koblenz formula la definición universal de la combinación ajedrecística:
**«Una combinación es una variante forzada con sacrificio que conduce a un objetivo táctico bien determinado: la consecución del mate, la ganancia decisiva de material o el rescate de una posición desesperada mediante tablas forzadas.»**

En el **Diagrama 1 (Moresi vs Ferrarini, Italia 1972)**, contemplamos uno de los sacrificios de Dama más sobrecogedores de la historia:
- **1. Bd5+!**: El alfil blanco irrumpirá en d5 dando jaque al Rey negro en a8, abriendo líneas diagonales y desviando la atención de la defensa.
- **1... Nb7**: El caballo negro de a5 se interpone apresuradamente en b7 para bloquear el jaque directo del alfil.
- **2. Qb8+!!**: ¡Un sacrificio de Dama sublime e inmortal! La Dama blanca, ubicada estratégicamente en d6, se desliza por la diagonal d6-b8 entregándose en la casilla b8 con jaque directo. Esto fuerza a la Torre negra de c8 a capturarla en b8, sellando e inmovilizando de forma definitiva la última casilla de escape del rey negro.
- **2... Rxb8**: Captura obligada de la torre de c8 sobre b8, dejando la 8ª fila bloqueada.
- **3. Rxa7+!!**: Segundo sacrificio consecutivo demoledor. La Torre blanca se inmola en a7 destruyendo el peón protector y atrayendo al Alfil de b6.
- **3... Bxa7**: El alfil negro se ve forzado a capturar en a7, abandonando por completo la custodia crucial de la casilla c7.
- **4. Nc7#!**: ¡Jaque mate ahogado inmortal! El Caballo blanco asesta la estocada final desde c7 sobre el monarca sepultado viva y trágicamente entre sus propias piezas.`
      },
      {
        id: 'sec-desp-2',
        exampleId: 'ex-desp-2',
        title: '2. La Vulnerabilidad de la Casilla f7: Celada en la Apertura Italiana — Diagrama 2',
        content: `Koblenz evoca los recuerdos de la infancia ajedrecística: la casilla f7 es la única protegida exclusivamente por el Rey al inicio del juego.

En el **Diagrama 2 (Apertura Italiana)**:
- **1. Qxf7#!**: La Dama blanca, respaldada por la diagonal activa del Alfil en c4, asesta el jaque mate directo sobre f7 aprovechando el descuido de la defensa negra en el desarrollo de sus piezas.`
      },
      {
        id: 'sec-desp-3',
        exampleId: 'ex-desp-3',
        title: '3. Demolición del Enroque con Sacrificio en h7: A. Koblenz — Diagrama 3',
        content: `Alexander Koblenz enseña cómo desarticular la coraza defensiva del Rey enroque sacrificando el alfil en h7:
- **1. Bxh7+!**: El alfil abre una brecha sangrienta en el enroque negro destruyendo al peón guardián en h7.
- **1... Kxh7 2. Ng5+!**: El caballo salta a g5 con jaque ganando tiempos de ataque decisivos e impulsando la ofensiva blanca.`
      },
      {
        id: 'sec-desp-4',
        exampleId: 'ex-desp-4',
        title: '4. El Ataque Greco Tradicional y la Gran Diagonal: G. Greco (1620) — Diagrama 4',
        content: `El clásico patrón de ataque concebido por Gioachino Greco en el siglo XVII (**Diagrama 4**):
- **1. Bxh7+! Kxh7 2. Ng5+! Kg8 3. Qh5!**: La irrupción de la Dama en h5 genera la amenaza ineludible de mate en h7 o f7, demostrando la vulnerabilidad del monarca privado de su peón de h.`
      },
      {
        id: 'sec-desp-5',
        exampleId: 'ex-desp-5',
        title: '5. Final Artístico de Mate Ahogado y Despeje: A. Kakovin (1936) — Diagrama 5',
        content: `Koblenz resalta que el mate ahogado es una de las expresiones más poéticas del ajedrez.
En el **Diagrama 5 (A. Kakovin, 1936)**:
- **1. f4+! Kd5 2. f5! Bxf5 3. Nf4+ Ke5 4. Rd1! c6 5. Rd5+!! cxd5 6. Nd3+!! exd3 7. f4#!**: Una secuencia poética donde sacrificios de peón, torre y caballo limpian metódicamente el paso para asestar el mate definitivo de peón.`
      },
      {
        id: 'sec-desp-6',
        exampleId: 'ex-desp-6',
        title: '6. La Trampa de Noah en la Apertura Española — Diagrama 6',
        content: `La célebre "Trampa de Noah" en la Ruy López (**Diagrama 6**):
- **1. Bd5! Bb7 2. d4!**: La presión central del blanco fuerza a la defensa a reaccionar ante el encierro del alfil de casillas claras.`
      },
      {
        id: 'sec-desp-7',
        exampleId: 'ex-desp-7',
        title: '7. Ataque Directo al Rey Central: Vasily Smyslov (1938) — Diagrama 7',
        content: `Vasily Smyslov demuestra la explotación inmediata del Rey varado en e8 (**Diagrama 7**):
- **1. Bxf7+! Kxf7 2. Ng5+! Ke8 3. Qf3!**: La coordinación entre el Caballo en g5 y la Dama en f3 ahoga al monarca rival antes de lograr refugiarse.`
      },
      {
        id: 'sec-desp-8',
        exampleId: 'ex-desp-8',
        title: '8. Infiltración en la Séptima Fila: A. Koblenz vs K. Klavins (1952) — Diagrama 8',
        content: `Alexander Koblenz ejemplifica la irrupción en la columna e abierta y la 7ª fila (**Diagrama 8**):
- **1. Qf5! Qb6 2. Rfe1!**: Dominio total de la columna central abierta y preparación de penetración decisiva.`
      },
      {
        id: 'sec-desp-9',
        exampleId: 'ex-desp-9',
        title: '9. La Horquilla Real de Caballo: Kh. Eichstadt (1848) — Diagrama 9',
        content: `El devastador salto del Caballo blanco a e7 (**Diagrama 9**):
- **1. Ne7+! Kh8 2. Nxc6!**: Jaque de horquilla real atacando al Rey en g8 y capturando la Dama indefensa en c6.`
      },
      {
        id: 'sec-desp-10',
        exampleId: 'ex-desp-10',
        title: '10. Zugzwang Artístico Desarmante: L. Kubbel (1925) — Diagrama 10',
        content: `Leonid Kubbel enseña el concepto de Zugzwang absoluto (**Diagrama 10**):
- **1. Qg4!**: Una jugada serena pero fulminante que coloca al negro en la obligación de realizar un movimiento ruinoso.`
      },
      {
        id: 'sec-desp-11',
        exampleId: 'ex-desp-11',
        title: '11. Explotación Inmediata de la Imprecisión: M. Chigorin (1892) — Diagrama 11',
        content: `Mikhail Chigorin castiga el error en la Apertura Escocesa (**Diagrama 11**):
- **1. Nxe5! Qe7 2. f4!**: Ruptura central activa ganando iniciativa permanente.`
      },
      {
        id: 'sec-desp-12',
        exampleId: 'ex-desp-12',
        title: '12. Centralización y Asalto: Alexander Alekhine (1921) — Diagrama 12',
        content: `El genio de Alekhine invadiendo el centro del tablero (**Diagrama 12**):
- **1. Nd5! Bc5 2. c3!**: Centralización del caballo previa al asalto frontal sobre las casillas defensivas.`
      },
      {
        id: 'sec-desp-13',
        exampleId: 'ex-desp-13',
        title: '13. Sacrificio Despejador Central: Garry Kasparov (1982) — Diagrama 13',
        content: `Garry Kasparov ejecuta la apertura de la gran diagonal c3-h8 (**Diagrama 13**):
- **1. c4! Rd8 2. d5!**: Sacrificio del peón central d5 para despejar la ruta directa del Alfil de casillas claras.`
      },
      {
        id: 'sec-desp-14',
        exampleId: 'ex-desp-14',
        title: '14. Dominio de Piezas Pesadas: Botvinnik vs Smyslov (1954) — Diagrama 14',
        content: `Duelo de Titanes por el Campeonato Mundial (**Diagrama 14**):
- **1. Ne4! Nxe4 2. Qxe4!**: Control armónico del centro y centralización pesada de la Dama blanca.`
      },
      {
        id: 'sec-desp-15',
        exampleId: 'ex-desp-15',
        title: '15. Control de Columna Abierta C: A. Koblenz vs J. Foltys (1936) — Diagrama 15',
        content: `Lección magistral de Koblenz en Katowice 1936 (**Diagrama 15**):
- **1. Na4! b6 2. h3!**: Asfixia posicional y preparación del asalto por la columna c.`
      },
      {
        id: 'sec-desp-16',
        exampleId: 'ex-desp-16',
        title: '16. Dominio Espacial y Remate Final: Znosko-Borovsky vs Alekhine (1925) — Diagrama 16',
        content: `Alekhine aprovecha la 5ª fila y la columna e (**Diagrama 16**):
- **1. Re5! Qb6 2. b3!**: Dominio espacial absoluto culminando las variantes analizadas por Koblenz en la despensa de las maravillas.`
      }
    ],
    summaryRules: [
      'Identifica primero la pieza enemiga desprotegida o el Rey con casillas reducidas.',
      'Evalúa los sacrificios destructivos de peones o piezas clave para abrir líneas.',
      'Calcula las respuestas forzadas de tu oponente antes de ejecutar el primer movimiento.'
    ]
  },

  laboratorio: {
    chapterId: 'laboratorio',
    title: 'Capítulo 2: El laboratorio del ajedrecista',
    subtitle: 'El Arte de Crear y Madurar la Combinación',
    epigraph: '«El que tiene ventaja está obligado a atacar, so pena de perderla. Solamente el que obedece este mandato puede llegar a ser un verdadero artista.» — Wilhelm Steinitz',
    intro: `En el laboratorio del ajedrecista las combinaciones no se inventan por capricho ni por azar: se preparan meticulosamente aplicando las leyes universales de la estrategia ajedrecística. Alexander Koblenz demuestra cómo los grandes maestros soviéticos transformaban una superioridad de desarrollo o un dominio espacial en fuegos artificiales tácticos sobre el tablero.

Una combinación exitosa es el fruto maduro de una posición superior. Si atacas sin haber preparado previamente el terreno mediante la movilización armónica de tus piezas, tu ofensiva se estrellará contra las defensas enemigas.

En este capítulo aprenderás a cultivar la posición, a detectar el momento preciso en que la manzana táctica está lista para ser cosechada y a aplicar los métodos científicos de la Escuela Soviética.`,
    sections: [
      {
        id: 'sec-lab-1',
        exampleId: 'ex-lab-3',
        title: '1. La Ley de la Ventaja de Desarrollo',
        content: `Wilhelm Steinitz, el primer campeón del mundo oficial, postuló un principio estratégico fundamental: la ventaja dinámica es un bien perecedero. Si has desarrollado tus piezas más rápido que tu oponente y dominas el centro del tablero, estás éticamente obligado a abrir líneas y atacar de inmediato.

Si vacilas o te dedicas a maniobras lentas e indecisas, darás tiempo al adversario para enrocar a su Rey, coordinar su defensa y neutralizar tu ventaja inicial.

Las señales inconfundibles de que una posición está lista en el "laboratorio táctico":

- El Rey enemigo permanece atrapado en la casilla central (e1 o e8).
- Columnas centrales (d y e) o diagonales principales abiertas y dominadas por tus piezas pesadas.
- Piezas enemigas descentralizadas o bloqueadas en el flanco opuesto.`
      },
      {
        id: 'sec-lab-2',
        exampleId: 'ex-lab-1',
        title: '2. Lecciones de Mikhail Tal vs Suetin (Tiflis, 1969)',
        content: `En esta lección magistral, Mikhail Tal (alumno dilecto de Alexander Koblenz) demuestra la aplicación práctica de la apertura forzada de líneas.

Al apoderarse de la columna abierta e mediante la maniobra 1. Re1!, Tal no solo amenaza la irrupción en la octava fila, sino que fuerza al rival a simplificaciones extremadamente desfavorables.

Cuando la Torre blanca toma el control total de la columna e, las negras se ven obligadas a cambiar Damas en d2, permitiendo que el Caballo blanco recoloque su posición en d2 con una dominación central absoluta y permanente.

Koblenz destaca: **«El cambio de piezas no es un acto pasivo; cuando se ejecuta bajo tus propios términos, consolida la ventaja posicional y prepara el terreno para la victoria final.»**`
      },
      {
        id: 'sec-lab-3',
        exampleId: 'ex-lab-2',
        title: '3. La Maduración de la Posición y la Preparación de Rupturas',
        content: `Koblenz insiste en que el jugador de ajedrez debe comportarse como un químico en su laboratorio: mezclar los reactivos adecuados antes de encender la mecha táctica.

La preparación de una ruptura exige:

1. **Centralización activa**: Colocar los Caballos y Alfiles en casillas avanzadas donde controlen el máximo número de casillas enemigas.
2. **Doblar Torres**: Unir las piezas pesadas en una columna abierta para multiplicar el impacto de penetración.
3. **Avance de peones de Ruptura**: Utilizar peones para socavar la cobertura enemiga y abrir diagonales hacia el monarca rival.`
      },
      {
        id: 'sec-lab-4',
        exampleId: 'ex-lab-4',
        title: '4. La Transformación de la Ventaja Posicional en Táctica',
        content: `La maestría combinativa consiste en saber cuándo la presión posicional acumulada se convierte en una energía táctica explosiva.

Cuando todas tus piezas ocupan posiciones ideales y las del adversario sufren de falta de espacio o falta de coordinación, suele surgir de forma natural un sacrificio de ruptura. Este sacrificio disuelve las defensas rivales y da paso al remate calculatorio.`
      }
    ],
    summaryRules: [
      'Si posees ventaja de desarrollo, abre el juego sin vacilaciones antes de que el rival se enroque.',
      'Utiliza las columnas abiertas para irrumpir en la 7ª u 8ª fila enemiga con tus piezas pesadas.',
      'No permitas que el rival coordine sus defensas cuando tu posición ha alcanzado el punto de maduración táctica.'
    ]
  },

  pajaros: {
    chapterId: 'pajaros',
    title: 'Capítulo 3: Dos pájaros de un tiro',
    subtitle: 'Ataques Dobles y Coordinación Armónica',
    epigraph: '«La mayoría de las combinaciones se inspiran en ataques dobles; cuando una pieza o peón crea dos amenazas a la vez, el defensor no puede atender a ambas.» — Alexander Koblenz',
    intro: `El principio elemental de los "dos pájaros de un tiro" es la columna vertebral de la táctica ajedrecística. En la práctica, es imposible para cualquier jugador defender simultáneamente dos puntos atacados con la misma jugada si dichos puntos se encuentran en sectores distantes del tablero.

Cuando ejecutas un ataque doble —especialmente si uno de los objetivos es el propio Rey enemigo mediante jaque—, tu oponente se ve legalmente forzado a responder a la amenaza principal, dejando indefenso el segundo objetivo.

En este capítulo exploraremos la formidable acción de la Dama, los sacrificios de demolición de Alfil y el arte de coordinar piezas mayores y menores para asestar golpes dobles mortales.`,
    sections: [
      {
        id: 'sec-paj-1',
        exampleId: 'ex-paj-2',
        title: '1. El Ataque Doble de Dama y Piezas Pesadas',
        content: `La Dama es la reina indiscutible de los ataques dobles debido a su extraordinaria movilidad en todas las direcciones (filas, columnas y diagonales).

Un simple salto o desplazamiento de la Dama a una casilla central desprotegida puede generar instantáneamente una red de amenazas temibles: por ejemplo, jaque al Rey en un flanco y ataque simultáneo a una Torre o Alfil colgado en el otro flanco.

Koblenz enseña que antes de realizar cualquier movimiento de Dama debes hacerte la pregunta de oro: **«¿Qué piezas enemigas carecen de protección firme en la posición actual?»**`
      },
      {
        id: 'sec-paj-2',
        exampleId: 'ex-paj-1',
        title: '2. El Doble Sacrificio de Alfil: Emanuel Lasker vs Bauer (Ámsterdam, 1889)',
        content: `En una de las partidas más famosas de la historia del ajedrez mundial, el segundo campeón del mundo Emanuel Lasker inmortalizó la maniobra del doble sacrificio de Alfil.

Analicemos la gloriosa secuencia paso a paso:

- **1. Bxh7+!**: ¡El primer hachazo devastador! Lasker sacrifica su Alfil en h7 para alinear al Rey negro fuera de su enroque y abrir la columna h.
- **1... Kxh7 2. Qxh5+! Kg8**: Entrada fulminante de la Dama blanca con jaque.
- **2... 3. Bxg7!!**: ¡El segundo sacrificio consecutivo de Alfil! Una demolición total y absoluta de la coraza de peones que protegía al rey.
- **3... Kxg7 4. Qg4+! Kh7 5. Rf3!**: Maniobra de transferencia de Torre por la 3ª fila amenazando mate imparable en h3.
- **5... e5 6. Rh3+! Qh6 7. Rxh6+! Kxh6**: Intercambio forzado de la Dama negra.
- **8. Qd7!**: ¡El broche de oro táctico perfecto! La Dama blanca se sitúa en d7 asestando un ataque doble simultáneo (dos pájaros de un tiro) a los dos alfiles negros indefensos en b7 y e7, ganando material decisivo y culminando la partida.`
      },
      {
        id: 'sec-paj-3',
        exampleId: 'ex-paj-3',
        title: '3. Coordinación Armónica y Piezas Indefensas',
        content: `Un error común de los aficionados es concentrarse únicamente en el ataque directo al Rey enemigo, olvidando que las piezas enemigas desprotegidas son "imanes tácticos".

Koblenz recalca que la coordinación armónica entre dos piezas (por ejemplo, una Torre y un Alfil, o una Dama y un Caballo) permite multiplicar las amenazas dobles. Cuando tus piezas cooperan fluidamente, abren frentes de ataque que sobrepasan la capacidad defensiva del oponente.`
      },
      {
        id: 'sec-paj-4',
        exampleId: 'ex-paj-4',
        title: '4. La Geometría de las Amenazas Simultáneas',
        content: `Para dominar la técnica del ataque doble, debes aprender a visualizar las líneas invisibles que conectan casillas clave en el tablero:

- **Líneas diagonales cruzadas**: Puntos de intersección donde un Alfil o Dama divisa al Rey y a una pieza mayor.
- **Filtros horizontales y verticales**: Casillas donde una Torre ataca dos objetivos situados en la misma fila o columna.`
      }
    ],
    summaryRules: [
      'Busca casillas estratégicas desde donde tus piezas puedan amenazar dos objetivos de manera simultánea.',
      'Las piezas enemigas desprotegidas son siempre "imanes" prioritarios para lanzar ataques dobles.',
      'Combina de forma inexorable una amenaza directa de mate al Rey con la captura de material colgado.'
    ]
  },

  horquillas: {
    chapterId: 'horquillas',
    title: 'Capítulo 4: Horquillas de caballo y peón',
    subtitle: 'El Salto Indetenible sobre la Estructura',
    epigraph: '«Si se hiciera un estudio estadístico de lo que más temen los jugadores, los estragos de las horquillas de caballo llevarían la palma.» — Alexander Koblenz',
    intro: `El Caballo posee una naturaleza geométrica única y fascinante en el ajedrez: es la única pieza capaz de saltar por encima de peones y piezas enemigas o propias. Esta propiedad singular lo convierte en la herramienta definitiva para asestar horquillas repentinas e indetenibles.

A diferencia del Alfil o la Torre, el Caballo ataca casillas de distinto color en cada salto, sorprendiendo con frecuencia incluso a jugadores experimentados que no previeron su trayectoria en forma de "L".

En este capítulo descubriremos la temible Horquilla Real (Rey y Dama), los sacrificios de atracción para forzar a las piezas enemigas a situarse a distancia de horquilla, y la humilde pero letal horquilla de peón.`,
    sections: [
      {
        id: 'sec-hor-1',
        exampleId: 'ex-hor-2',
        title: '1. La Horquilla Real (Rey y Dama)',
        content: `La horquilla de Caballo que ataca simultáneamente al Rey enemiga (jaque) y a la Dama se conoce como la "Horquilla Real" o el salto del diablo.

Dado que el Rey está legalmente obligado a salir del jaque o protegerse de inmediato, resulta absolutamente imposible para la Dama enemiga escapar o defenderse si el Caballo atacante no puede ser capturado de forma directa.

Koblenz advierte: **«En cuanto un Caballo enemigo se aproxime a la 5ª o 6ª fila, debes inspeccionar metódicamente todas las casillas a las que pueda saltar en el siguiente turno.»**`
      },
      {
        id: 'sec-hor-2',
        exampleId: 'ex-hor-1',
        title: '2. Sacrificios de Atracción: Stahlberg vs Najdorf (Mar del Plata, 1948)',
        content: `A menudo, la Dama o el Rey rivales no se encuentran convenientemente ubicados en las casillas objetivo de horquilla. Es ahí donde brilla el arte de la atracción táctica.

El maestro entregará un peón o pieza menor con el único propósito de **atraer forzadamente** al Rey o a la Dama enemiga a la casilla precisa donde el Caballo podrá asestar el salto mortal.

En el célebre enfrentamiento entre Stahlberg y Najdorf (1948), se aprecia cómo la clavada previa sobre e5 y la amenaza combinada forzaron la desorganización completa de la defensa negra, permitiendo un salto de caballo decisivo.`
      },
      {
        id: 'sec-hor-3',
        exampleId: 'ex-hor-3',
        title: '3. La Horquilla de Peón y la Bifurcación Táctica',
        content: `No solo las piezas nobles realizan ataques dobles: el peón, el soldado más modesto del tablero, es capaz de bifurcar dos piezas de alto valor mediante un simple avance frontal.

Cuando un peón se ubica en una casilla protegida atacando a dos piezas menores (por ejemplo, a un Alfil y un Caballo enemigos), el rival sufrirá inevitablemente la pérdida de una pieza entera a cambio del peón atacante.`
      },
      {
        id: 'sec-hor-4',
        exampleId: 'ex-hor-4',
        title: '4. Psicología y Prevención de la Horquilla',
        content: `Koblenz dedica un espacio crucial a la prevención: para evitar caer víctima de horquillas destructivas, debes vigilar constantemente la relación espacial entre tu Rey y tus piezas mayores.

Si tu Rey y tu Dama se encuentran en casillas del mismo color separadas por una casilla intermedia, son extremadamente vulnerables a un salto de Caballo enemigo.`
      }
    ],
    summaryRules: [
      'Vigila metódicamente las casillas en forma de "L" que rodean al Rey y a la Dama enemiga.',
      'Utiliza sacrificios de atracción para forzar a las piezas enemigas a colocarse a distancia de horquilla.',
      'No olvides el avance silencioso de peón que bifurca y destruye la coordinación de dos piezas menores.'
    ]
  },

  acecho: {
    chapterId: 'acecho',
    title: 'Capítulo 5: Al acecho',
    subtitle: 'Ataques a la Descubierta y Jaques Dobles',
    epigraph: '«Semejante al cazador que se esconde para acechar su presa, una pieza se embosca detrás de su compañero. Al apartarse, desata una furia imparable.» — Alexander Koblenz',
    intro: `Un ataque a la descubierta se produce cuando el movimiento de una pieza despeja la línea de tiro de una Torre, Alfil o Dama que se encontraba agazapada detrás. La pieza que se desplaza actúa como una "máscara" o pantalla; al apartarse, desencadena la acción directa de la pieza pesada.

Lo que hace que el ataque a la descubierta sea tan terrorífico es que la pieza que se mueve puede capturar material o crear amenazas devastadoras sin importar si queda desprotegida, ya que el oponente debe atender primeramente la amenaza directa lanzada por la pieza descubierta.

En su forma más destructiva, el jaque a la descubierta se convierte en un **Jaque Doble**, la jugada más mortífera de todo el ajedrez.`,
    sections: [
      {
        id: 'sec-ace-1',
        exampleId: 'ex-ace-2',
        title: '1. El Jaque Doble: La Jugada Imparable',
        content: `El Jaque Doble sucede cuando tanto la pieza que realiza el movimiento como la pieza descubierta ubicada detrás dan jaque al Rey enemigo de forma simultánea.

Existe una *Regla de Oro Inmutable en Ajedrez*: **«Ante un jaque doble, la ÚNICA defensa legal posible es mover el Rey.»**

No es posible interponer una pieza para bloquear el jaque (ya que habría dos líneas de ataque abiertas al mismo tiempo), ni tampoco es posible capturar a la pieza atacante (puesto que la otra pieza continuaría dando jaque). El Rey enemigo queda desnudo y forzado a huir.`
      },
      {
        id: 'sec-ace-2',
        exampleId: 'ex-ace-1',
        title: '2. La Maniobra del Molino: Edward Lasker vs Sir George Thomas (Londres, 1912)',
        content: `En esta partida inmortal, una de las joyas más deslumbrantes jamás jugadas, Edward Lasker ejecutó un sacrificio de Dama deslumbrante seguido de una serie ininterrumpida de jaques dobles y a la descubierta.

El Rey negro fue arrancado violentamente de su refugio en g8 y forzado a realizar una caminata agónica atravesando todo el tablero hasta la primera fila blanca en a1, donde finalmente cayó bajo el mate de Rey y piezas menores.

Koblenz analiza este ejemplo para demostrar cómo la fuerza del jaque a la descubierta anula por completo la superioridad material del oponente.`
      },
      {
        id: 'sec-ace-3',
        exampleId: 'ex-ace-3',
        title: '3. El Ataque a la Descubierta con Ganancia de Material',
        content: `Incluso cuando la descubierta no resulta en mate inmediato, es un arma extraordinaria para cosechar material valioso de forma gratuita.

Dado que la pieza del frente puede saltar a cualquier casilla realizando capturas sin riesgo inmediato de ser tomada, se pueden lograr devastadoras combinaciones de ganancia de piezas o peones.`
      },
      {
        id: 'sec-ace-4',
        exampleId: 'ex-ace-4',
        title: '4. La Preparación de la Máscara Táctica',
        content: `Para construir un ataque a la descubierta en tu propia partida, Koblenz enseña a alinear tus Torres y Damas en columnas o diagonales directamente enfrentadas al Rey enemigo, aun cuando existan peones o piezas intermedias.

En cuanto se presente la oportunidad de mover la pieza intermedia con jaque o amenaza de mate, la máscara caerá y la combinación se desencadenará.`
      }
    ],
    summaryRules: [
      'Alinea tus Torres y Damas frente al Rey enemigo, aun si hay piezas interpuesta en la línea de fuego.',
      'Busca jaques dobles para forzar al Rey enemigo a salir a campo abierto sin capacidad de bloqueo.',
      'El jaque a la descubierta permite a la pieza que se desplaza capturar material vital impunemente.'
    ]
  },

  clavada: {
    chapterId: 'clavada',
    title: 'Capítulo 6: La clavada',
    subtitle: 'Parálisis Táctica en el Tablero',
    epigraph: '«Una pieza clavada es una pieza sin alma: no apoya, no defiende y se convierte en el blanco directo del ataque enemigo.» — Alexander Koblenz',
    intro: `La clavada es uno de los temas tácticos más recurrentes y decisivos en el ajedrez de todos los niveles. Se produce cuando una pieza se ve imposibilitada de moverse porque, de hacerlo, expondría a una pieza de mayor valor situada detrás (clavada relativa) o dejaría al propio Rey en jaque (clavada absoluta).

Una pieza clavada pierde instantáneamente su fuerza dinámica: se convierte en un fantasma incapaz de defender casillas adyacentes o de capturar piezas atacantes.

En este capítulo Alexander Koblenz nos enseña las reglas de oro para explotar la parálisis enemiga y cómo convertir una clavada aparentemente inofensiva en una victoria demoledora.`,
    sections: [
      {
        id: 'sec-cla-1',
        exampleId: 'ex-cla-2',
        title: '1. Cómo Explotar una Clavada: La Regla de Oro de Koblenz',
        content: `Frente a una pieza enemiga inmovilizada por una clavada, muchos aficionados cometen el error apresurado de capturarla inmediatamente con la pieza atacante.

Koblenz formula la máxima suprema para explotar este motivo:

**«¡No apresures la captura de la pieza clavada! Dado que la pieza no puede huir, aumenta primero la presión atacándola con más piezas menores o avanza peones contra ella.»**

Al atacar una pieza clavada con un peón de menor valor, forzarás una ganancia neta de material o la destrucción irreversible del enroque rival.`
      },
      {
        id: 'sec-cla-2',
        exampleId: 'ex-cla-1',
        title: '2. La Clavada Mortal de Alexander Koblenz',
        content: `En sus propias partidas didácticas, Alexander Koblenz muestra la potencia destructiva de la clavada absoluta.

Al clavar una Torre negra en d7 mediante su Alfil en b5 (1. Bb5!), el maestro paraliza por completo el centro del rival. Aunque las negras intentan liberarse atacando el Alfil con 1... a6, la imposibilidad de movimiento en d7 permite a las blancas capturar la pieza objetivo de forma forzada con jaque decisivo.`
      },
      {
        id: 'sec-cla-3',
        exampleId: 'ex-cla-3',
        title: '3. Clavadas Absolutas vs Clavadas Relativas',
        content: `Es esencial distinguir entre los dos tipos fundamentales de clavada:

- **Clavada Absoluta**: La pieza está alineada directamente con el Rey. Por ley del ajedrez, esta pieza TIENE PROHIBIDO MOVERSE bajo cualquier circunstancia.
- **Clavada Relativa**: La pieza cubre a la Dama o a una Torre. Aunque legalmente puede moverse, hacerlo significaría perder material de inmenso valor.`
      },
      {
        id: 'sec-cla-4',
        exampleId: 'ex-cla-4',
        title: '4. La Clavada Cruzada y el Desmantelamiento Defensivo',
        content: `Una técnica avanzada expuesta por Koblenz es la clavada cruzada, donde dos o más piezas propias inmovilizan a defensores clave del rival desde diferentes ángulos.

Una vez clavado el defensor, las casillas que este debía custodiar quedan totalmente desprotegidas para el resto de tus piezas.`
      }
    ],
    summaryRules: [
      'Identifica de inmediato piezas enemigas alineadas con su Rey o Dama.',
      'No apresures la captura de la pieza clavada: atácala con peones para ganar material valioso.',
      'Recuerda permanentemente que una pieza clavada NO puede actuar como defensora de otras casillas.'
    ]
  },

  arterias: {
    chapterId: 'arterias',
    title: 'Capítulo 7: Arterías de damisela',
    subtitle: 'Atracción, Desviación y Sobrecarga Defensiva',
    epigraph: '«Obligar a una pieza enemiga a colocarse en una casilla fatal es el arte supremo de la combinación de atracción y desviación.» — Alexander Koblenz',
    intro: `En la arquitectura defensiva del ajedrez, a menudo una sola pieza (frecuentemente una Torre o la Dama) sostiene la responsabilidad de proteger múltiples puntos críticos al mismo tiempo. Alexander Koblenz demuestra cómo los sacrificios de desviación y atracción desmantelan quirúrgicamente estas estructuras.

Mediante la **Desviación**, obligamos al defensor clave a abandonar la guardia de una casilla o fila vital. Mediante la **Atracción**, forzamos al Rey o Dama enemiga a trasladarse a una casilla mortal donde serán objeto de mate o pérdida de material.

En este capítulo analizaremos obras maestras inmortales de la táctica mundial.`,
    sections: [
      {
        id: 'sec-art-1',
        exampleId: 'ex-art-2',
        title: '1. Sobrecarga Defensiva y el Punto de Ruptura',
        content: `Una pieza se encuentra **sobrecargada** cuando tiene encomendadas dos o más tareas defensivas de vida o muerte simultáneamente (por ejemplo: custodiar la octava fila contra el mate de pasillo y al mismo tiempo defender un Alfil atacado en el centro).

Al asestar un golpe táctico contra uno de esos objetivos, forzamos a la pieza sobrecargada a abandonar el otro, haciendo colapsar todo el esquema defensivo enemigo.`
      },
      {
        id: 'sec-art-2',
        exampleId: 'ex-art-1',
        title: '2. La Joya de Edwin Adams vs Carlos Torre (Nueva Orleans, 1920)',
        content: `Considerada por Koblenz y por la historia del ajedrez como la obra maestra definitiva del tema de desviación en la octava fila.

Las blancas ejecutan una serie impresionante de sacrificios de Dama (1. Qb4!, 2. Qc4!, etc.), ofreciendo a su Dama en la boca del lobo una y otra vez.

La Dama negra no puede capturar la Dama blanca porque la Torre negra de e8 es la única guardiana que impide el mate de pasillo 2. Rxe8#. Si la Dama negra abandona la diagonal o la octava fila, su posición colapsa instantáneamente.`
      },
      {
        id: 'sec-art-3',
        exampleId: 'ex-art-3',
        title: '3. Atracción del Rey a la Red de Mate',
        content: `La atracción consiste en entregar material valioso con el objetivo exclusivo de arrastrar al Rey o Dama enemiga hacia una casilla expuesta.

Una vez que el Rey es atraído a la casilla fatal mediante sacrificios forzados de Torre o Alfil, las piezas restantes asestan el jaque mate definitivo.`
      },
      {
        id: 'sec-art-4',
        exampleId: 'ex-art-4',
        title: '4. Intercepción de Comunicaciones',
        content: `Otro recurso genial analizado en este capítulo es la **Intercepción**: colocar una pieza propia en la línea de acción entre dos piezas enemigas para cortar su comunicación defensiva y permitir el remate.`
      }
    ],
    summaryRules: [
      'Localiza piezas enemigas que cumplan más de una tarea defensiva crítica al mismo tiempo.',
      'Utiliza sacrificios destructivos de desviación para alejar al defensor de la fila o casilla vital.',
      'Atrae al Rey enemigo hacia la red de mate entregando material para desproteger su enroque.'
    ]
  },

  autodefensa: {
    chapterId: 'autodefensa',
    title: 'Capítulo 8: Métodos de autodefensa',
    subtitle: 'El Milagro del Ahogado y el Jaque Perpetuo',
    epigraph: '«En las posiciones desesperadas, el jugador genial encuentra la chispa del ahogado o la persecución infinita del jaque perpetuo.» — Alexander Koblenz',
    intro: `Incluso cuando la causa parece totalmente perdida, la posición está arruinada y el material en contra es abrumador, el ajedrez ofrece recursos tácticos milagrosos para arrebatar medio punto o salvar la partida.

Alexander Koblenz insiste en que un verdadero combatiente del ajedrez jamás abandona una posición sin haber explorado antes las sutilezas del Rey Ahogado, la Pieza Desesperada (Desperado) o el Jaque Perpetuo.

En este capítulo final aprenderás los secretos de la resistencia táctica extrema y cómo convertir derrotas inminentes en valiosos empates artísticos.`,
    sections: [
      {
        id: 'sec-aut-1',
        exampleId: 'ex-aut-2',
        title: '1. La Pieza Desesperada (Desperado)',
        content: `Cuando compruebas que tu Rey ha quedado sin movimientos legales (en posición potencial de ahogado) o que una pieza propia se va a perder de forma inevitable, esa pieza entra en estado de "Desperado".

La pieza desesperada puede inmolarse capturando peones enemigos o dando jaques continuos al Rey rival: si el oponente la captura, se produce el **Ahogado** inmediato; si no la captura, sigues cosechando material gratis o jaques infinitos.`
      },
      {
        id: 'sec-aut-2',
        exampleId: 'ex-aut-1',
        title: '2. Salvar Medio Punto: Ossip Bernstein vs Vasily Smyslov (Groningen, 1946)',
        content: `En esta lección histórica inolvidable, con el Rey blanco acorralado en la esquina h1 sin una sola casilla de escape ni movimiento legal, las blancas lanzaron un recurso milagroso:

1. **Rg8+!**: ¡Un jaque suicida de Torre directo a la cara del rey negro!

Si el Rey negro captura la Torre (1... Kxg8), las blancas quedan automáticamente en posición de **AHOGADO**, convirtiendo lo que parecía una derrota ineludible en un glorioso medio punto.`
      },
      {
        id: 'sec-aut-3',
        exampleId: 'ex-aut-3',
        title: '3. El Jaque Perpetuo como Arma de Rescate',
        content: `El jaque perpetuo se logra cuando una pieza (generalmente la Dama o una Torre) puede acosar al Rey enemigo con una serie infinita de jaques sin que el Rey pueda ocultarse ni bloquear el ataque.

Al repetirse la misma posición tres veces en el tablero, las reglas del ajedrez conceden las tablas por repetición, rescatando partidas que estratégicamente parecían perdidas.`
      },
      {
        id: 'sec-aut-4',
        exampleId: 'ex-aut-4',
        title: '4. La Resiliencia Táctica y el Espíritu de Lucha Soviético',
        content: `La enseñanza de cierre de Alexander Koblenz resume la filosofía de la Escuela Soviética: **«En el ajedrez la partida termina únicamente con el estrechamiento de manos o la caída de la bandera. Mientras tengas piezas sobre el tablero, mantén encendida la llama de la combinación defensiva.»**`
      }
    ],
    summaryRules: [
      'No abandones jamás una posición perdida sin evaluar primero los recursos de ahogado o jaque perpetuo.',
      'Identifica si tu Rey ha quedado sin casillas de escape y deshazte intrépidamente de tus piezas activas mediante el Desperado.',
      'El jaque perpetuo te permite arrebatar medio punto forzando la repetición incesante de posiciones.'
    ]
  }
};
