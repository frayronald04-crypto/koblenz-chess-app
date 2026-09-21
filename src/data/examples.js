export const EXAMPLES = [
  // ==========================================
  // CAPÍTULO 1: EN LA DESPENSA DE LAS MARAVILLAS (16 DIAGRAMAS COMPLETOS)
  // ==========================================
  {
    id: 'ex-desp-1',
    chapterId: 'despensa',
    title: 'Diagrama 1: Moresi vs Ferrarini (Italia, 1972)',
    whitePlayer: 'Moresi',
    blackPlayer: 'Ferrarini',
    event: 'Italia',
    year: '1972',
    initialFen: 'k1r1r3/p7/1b1Q2p1/nN6/4bP2/1B3pPq/1P3P1P/R2R2K1 w - - 0 1',
    fen: 'k1r1r3/p7/1b1Q2p1/nN6/4bP2/1B3pPq/1P3P1P/R2R2K1 w - - 0 1',
    intro: 'Alexander Koblenz introduce este ilustre ejemplo del Diagrama 1: "Una extraordinaria combinación de desvío y sacrificio de Dama que desemboca en un espectacular jaque mate ahogado."',
    moves: [
      {
        from: 'b3',
        to: 'd5',
        san: 'Bd5+',
        commentary: '1. Bd5+! Koblenz destaca: "Un gran golpe táctico con el alfil blanco que desvía las defensas enemigas, abre líneas diagonales letales hacia el Rey negro en a8 y fuerza una respuesta inmediata."',
        highlightSquares: ['d5', 'a8']
      },
      {
        from: 'a5',
        to: 'b7',
        san: 'Nb7',
        commentary: '1... Nb7. El caballo negro de a5 se interpone a la desesperada en b7 para taponar el jaque directo del alfil en la diagonal a2-g8.',
        highlightSquares: ['b7', 'd5']
      },
      {
        from: 'd6',
        to: 'b8',
        san: 'Qb8+',
        commentary: '2. Qb8+!! ¡Sacrificio de dama antológico! Koblenz exclama: "¡La Dama blanca se entrega en la casilla b8 por la diagonal d6-b8 con jaque directo, forzando a la Torre de c8 a capturar e inmovilizar la única casilla de escape del rey negro!"',
        highlightSquares: ['b8', 'c8']
      },
      {
        from: 'c8',
        to: 'b8',
        san: 'Rxb8',
        commentary: '2... Rxb8. Las negras no tienen elección alguna y capturan obligatoriamente con la torre de c8 en b8, sellando la última casilla de escape del monarca.',
        highlightSquares: ['b8', 'a8']
      },
      {
        from: 'a1',
        to: 'a7',
        san: 'Rxa7+',
        commentary: '3. Rxa7+!! ¡Segundo sacrificio consecutivo demoledor! La Torre blanca demuele la barrera defensiva en a7 y atrae forzadamente al alfil negro defensor.',
        highlightSquares: ['a7', 'b6']
      },
      {
        from: 'b6',
        to: 'a7',
        san: 'Bxa7',
        commentary: '3... Bxa7. El alfil negro debe capturar la torre atacante en a7, retirando definitivamente su guardia sobre la casilla crítica c7.',
        highlightSquares: ['a7', 'c7']
      },
      {
        from: 'b5',
        to: 'c7',
        san: 'Nc7#',
        commentary: '4. Nc7#! ¡Jaque mate ahogado inmortal! Koblenz concluye con júbilo: "El caballo blanco asesta la estocada final sobre el monarca sepultado viva y trágicamente entre sus propias piezas."',
        highlightSquares: ['c7', 'a8']
      }
    ]
  },
  {
    id: 'ex-desp-2',
    chapterId: 'despensa',
    title: 'Diagrama 2: Celada en la Apertura Italiana (Mate en f7)',
    whitePlayer: 'Escuela Soviética',
    blackPlayer: 'Iniciante',
    event: 'Lección de Apertura',
    year: '1960',
    initialFen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
    intro: 'Koblenz evoca los primeros recuerdos de la infancia: la casilla débil f7 que precipita el descalabro de la posición negra.',
    moves: [
      {
        from: 'f3',
        to: 'f7',
        san: 'Qxf7#',
        commentary: '1. Qxf7#! Mate fulminante apoyado por el alfil en c4. Un golpe combinativo clásico que enseña a proteger las casillas iniciales de la posición.',
        highlightSquares: ['f7', 'e8']
      }
    ]
  },
  {
    id: 'ex-desp-3',
    chapterId: 'despensa',
    title: 'Diagrama 3: Sacrificio de Alfil en h7 (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Riga',
    year: '1950',
    initialFen: 'r1b2rk1/pp1p1ppp/2n1p3/q7/2PP4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 11',
    fen: 'r1b2rk1/pp1p1ppp/2n1p3/q7/2PP4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 11',
    intro: 'Koblenz muestra la demolición de la cobertura de peones en h7 mediante un sacrificio forzado de alfil.',
    moves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        commentary: '1. Bxh7+! Sacrificio de alfil demoledor en h7 abriendo las defensas del monarca.',
        highlightSquares: ['h7', 'g8']
      },
      {
        from: 'g8',
        to: 'h7',
        san: 'Kxh7',
        commentary: '1... Kxh7. Captura forzada por el rey.',
        highlightSquares: ['h7']
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        commentary: '2. Ng5+! Entrada del caballo blanco con jaque ganando tiempo decisivo.',
        highlightSquares: ['g5', 'h7']
      },
      {
        from: 'h7',
        to: 'h6',
        san: 'Kh6',
        commentary: '2... Kh6. El rey negro intenta resistir avanzando hacia h6.',
        highlightSquares: ['h6']
      },
      {
        from: 'h2',
        to: 'h4',
        san: 'h4',
        commentary: '3. h4! Avance de peón sosteniendo al caballo en g5.',
        highlightSquares: ['h4', 'g5']
      }
    ]
  },
  {
    id: 'ex-desp-4',
    chapterId: 'despensa',
    title: 'Diagrama 4: El Ataque Greco (Sacrificio Doble en h7)',
    whitePlayer: 'Gioachino Greco',
    blackPlayer: 'Aficionado',
    event: 'Roma',
    year: '1620',
    initialFen: 'r1bq1rk1/pp3ppp/2n1p3/2pp4/2PP4/2PBPN2/P4PPP/R2Q1RK1 w - - 0 9',
    fen: 'r1bq1rk1/pp3ppp/2n1p3/2pp4/2PP4/2PBPN2/P4PPP/R2Q1RK1 w - - 0 9',
    intro: 'El modelo clásico del sacrificio destructivo en h7 para abrir la columna h a la Dama y Torre.',
    moves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        commentary: '1. Bxh7+! Primer golpe táctico abriendo la coraza enemiga.',
        highlightSquares: ['h7', 'g8']
      },
      {
        from: 'g8',
        to: 'h7',
        san: 'Kxh7',
        commentary: '1... Kxh7. Captura obligada por el rey.',
        highlightSquares: ['h7']
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        commentary: '2. Ng5+! El caballo salta a g5 con jaque frontal.',
        highlightSquares: ['g5', 'h7']
      },
      {
        from: 'h7',
        to: 'g8',
        san: 'Kg8',
        commentary: '2... Kg8. Retirada del rey a g8.',
        highlightSquares: ['g8']
      },
      {
        from: 'd1',
        to: 'h5',
        san: 'Qh5',
        commentary: '3. Qh5! Irrupción de la Dama amenazando mate en h7.',
        highlightSquares: ['h5', 'h7']
      }
    ]
  },
  {
    id: 'ex-desp-5',
    chapterId: 'despensa',
    title: 'Diagrama 5: Final Artístico de A. Kakovin (Moscú, 1936)',
    whitePlayer: 'A. Kakovin',
    blackPlayer: 'Estudio de Composición',
    event: 'Moscú',
    year: '1936',
    initialFen: '8/2p5/3prpb1/4k3/4p3/4KPP1/4NP2/2R5 w - - 0 1',
    fen: '8/2p5/3prpb1/4k3/4p3/4KPP1/4NP2/2R5 w - - 0 1',
    intro: 'Alexander Koblenz analiza esta joya de la composición táctica (Diagrama 5): "Un despliegue poético del ajedrez donde sacrificios de torre y caballo despejan casillas estratégicas para asestar el mate de peón."',
    moves: [
      {
        from: 'f3',
        to: 'f4',
        san: 'f4+',
        commentary: '1. f4+! Koblenz nota: "El peón blanco da el primer jaque frontal obligando al Rey negro a adentrarse hacia la trampa en la columna d."',
        highlightSquares: ['f4', 'e5']
      },
      {
        from: 'e5',
        to: 'd5',
        san: 'Kd5',
        commentary: '1... Kd5. El Rey negro busca refugio desplazándose hacia el centro de la columna d.',
        highlightSquares: ['d5']
      },
      {
        from: 'f4',
        to: 'f5',
        san: 'f5',
        commentary: '2. f5! Koblenz explica: "¡Sacrificio de peón brillante para despejar la casilla f4, la cual será ocupada de inmediato por el Caballo blanco con jaque!"',
        highlightSquares: ['f5', 'f4']
      },
      {
        from: 'g6',
        to: 'f5',
        san: 'Bxf5',
        commentary: '2... Bxf5. El Alfil negro captura el peón despejador sin percatarse de la celada oculta.',
        highlightSquares: ['f5']
      },
      {
        from: 'e2',
        to: 'f4',
        san: 'Nf4+',
        commentary: '3. Nf4+! El Caballo blanco ocupa la casilla despejada f4 con jaque, forzando al Rey negro a retornar a e5.',
        highlightSquares: ['f4', 'd5']
      },
      {
        from: 'd5',
        to: 'e5',
        san: 'Ke5',
        commentary: '3... Ke5. El Rey negro se ve obligado a regresar a e5 ante la parálisis del resto de sus casillas.',
        highlightSquares: ['e5']
      },
      {
        from: 'c1',
        to: 'd1',
        san: 'Rd1',
        commentary: '4. Rd1! Koblenz destaca: "La Torre blanca se ubica en la columna d abierta amenazando el jaque mate fulminante Rd5#."',
        highlightSquares: ['d1', 'd5']
      },
      {
        from: 'c7',
        to: 'c6',
        san: 'c6',
        commentary: '4... c6. Las negras juegan c6 intentando taponar la entrada de la torre en d5.',
        highlightSquares: ['c6']
      },
      {
        from: 'd1',
        to: 'd5',
        san: 'Rd5+',
        commentary: '5. Rd5+!! ¡Formidable sacrificio de Torre! Koblenz exclama: "La Torre blanca destruye la barrera entregándose en d5 para desviar al peón de c6."',
        highlightSquares: ['d5', 'c6']
      },
      {
        from: 'c6',
        to: 'd5',
        san: 'cxd5',
        commentary: '5... cxd5. El peón negro captura en d5 obligatoriamente, abriendo aún más la trampa alrededor de su rey.',
        highlightSquares: ['d5']
      },
      {
        from: 'f4',
        to: 'd3',
        san: 'Nd3+',
        commentary: '6. Nd3+!! ¡Segundo sacrificio despejador sublime! El Caballo blanco se inmola en d3 para forzar la desviación del peón negro de e4.',
        highlightSquares: ['d3', 'e4']
      },
      {
        from: 'e4',
        to: 'd3',
        san: 'exd3',
        commentary: '6... exd3. El peón negro captura en d3 dejando completamente libre la casilla f4 para el golpe final.',
        highlightSquares: ['d3']
      },
      {
        from: 'f2',
        to: 'f4',
        san: 'f4#',
        commentary: '7. f4#! ¡Jaque mate de peón inolvidable! Alexander Koblenz concluye: "Un final poético donde cada sacrificio previo sirvió para despejar la red de mate perfecta."',
        highlightSquares: ['f4', 'e5']
      }
    ]
  },
  {
    id: 'ex-desp-6',
    chapterId: 'despensa',
    title: 'Diagrama 6: Trampa de Noah (Apertura Española)',
    whitePlayer: 'Teoría de Apertura',
    blackPlayer: 'Defensa Española',
    event: 'Clásico',
    year: '1900',
    initialFen: 'r1bqkb1r/2p2ppp/p1np4/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 0 7',
    fen: 'r1bqkb1r/2p2ppp/p1np4/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 0 7',
    intro: 'La famosa celada de la Ruy López donde el alfil blanco de casillas claras queda atrapado por los peones negros.',
    moves: [
      {
        from: 'b3',
        to: 'd5',
        san: 'Bd5',
        commentary: '1. Bd5! Ataque directo sobre la Torre de a8 y el Caballo de c6.',
        highlightSquares: ['d5', 'a8']
      },
      {
        from: 'c8',
        to: 'b7',
        san: 'Bb7',
        commentary: '1... Bb7. Desarrollo y defensa del alfil negro.',
        highlightSquares: ['b7']
      },
      {
        from: 'd2',
        to: 'd4',
        san: 'd4',
        commentary: '2. d4! Ruptura central disputando el terreno.',
        highlightSquares: ['d4', 'e5']
      }
    ]
  },
  {
    id: 'ex-desp-7',
    chapterId: 'despensa',
    title: 'Diagrama 7: Vasily Smyslov vs Aficionado (Moscú, 1938)',
    whitePlayer: 'Vasily Smyslov',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1938',
    initialFen: 'r1bqk2r/pp1p1ppp/2n5/2p1p3/2B1P3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7',
    fen: 'r1bqk2r/pp1p1ppp/2n5/2p1p3/2B1P3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7',
    intro: 'Smyslov destruye la cobertura del Rey central sacrificando el alfil en f7.',
    moves: [
      {
        from: 'c4',
        to: 'f7',
        san: 'Bxf7+',
        commentary: '1. Bxf7+! Sacrificio de alfil arrancando al rey negro de su enroque.',
        highlightSquares: ['f7', 'e8']
      },
      {
        from: 'e8',
        to: 'f7',
        san: 'Kxf7',
        commentary: '1... Kxf7. Captura del alfil por el rey.',
        highlightSquares: ['f7']
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        commentary: '2. Ng5+! Entrada del caballo con jaque ganando tiempo decisivo.',
        highlightSquares: ['g5', 'f7']
      },
      {
        from: 'f7',
        to: 'e8',
        san: 'Ke8',
        commentary: '2... Ke8. El rey negro regresa al centro.',
        highlightSquares: ['e8']
      },
      {
        from: 'd1',
        to: 'f3',
        san: 'Qf3',
        commentary: '3. Qf3! Amenaza de mate ineludible en f7.',
        highlightSquares: ['f3', 'f7']
      }
    ]
  },
  {
    id: 'ex-desp-8',
    chapterId: 'despensa',
    title: 'Diagrama 8: Alexander Koblenz vs K. Klavins (Riga, 1952)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'K. Klavins',
    event: 'Riga',
    year: '1952',
    initialFen: 'r4rk1/pp3ppp/q7/8/8/1P3Q2/P4PPP/R4RK1 w - - 0 18',
    fen: 'r4rk1/pp3ppp/q7/8/8/1P3Q2/P4PPP/R4RK1 w - - 0 18',
    intro: 'Infiltración en las columnas centrales e irrupción en la séptima fila.',
    moves: [
      {
        from: 'f3',
        to: 'f5',
        san: 'Qf5',
        commentary: '1. Qf5! Centralización activa de la Dama amenazando f7 y la columna abierta.',
        highlightSquares: ['f5']
      },
      {
        from: 'a6',
        to: 'b6',
        san: 'Qb6',
        commentary: '1... Qb6. Retirada defensiva de la dama negra.',
        highlightSquares: ['b6']
      },
      {
        from: 'f1',
        to: 'e1',
        san: 'Rfe1',
        commentary: '2. Rfe1! Dominio de la columna e abierta.',
        highlightSquares: ['e1', 'e8']
      }
    ]
  },
  {
    id: 'ex-desp-9',
    chapterId: 'despensa',
    title: 'Diagrama 9: Kh. Eichstadt (1848) - Horquilla Real',
    whitePlayer: 'Kh. Eichstadt',
    blackPlayer: 'Estudio de Composición',
    event: 'Alemania',
    year: '1848',
    initialFen: '1r3rk1/1p3p1p/p1q3p1/3N4/3nP1b1/3P2P1/PP1Q2BP/R4RK1 w - - 0 1',
    fen: '1r3rk1/1p3p1p/p1q3p1/3N4/3nP1b1/3P2P1/PP1Q2BP/R4RK1 w - - 0 1',
    intro: 'El Caballo blanco en d5 asesta un jaque doble de horquilla real atacando al Rey g8 y la Dama c6.',
    moves: [
      {
        from: 'd5',
        to: 'e7',
        san: 'Ne7+',
        commentary: '1. Ne7+! Jaque de horquilla real al Rey en g8 y a la Dama en c6. Las negras pierden la Dama.',
        highlightSquares: ['e7', 'g8', 'c6']
      },
      {
        from: 'g8',
        to: 'h8',
        san: 'Kh8',
        commentary: '1... Kh8. Retirada forzada del rey a la esquina.',
        highlightSquares: ['h8']
      },
      {
        from: 'e7',
        to: 'c6',
        san: 'Nxc6',
        commentary: '2. Nxc6! Captura limpia de la Dama negra.',
        highlightSquares: ['c6']
      }
    ]
  },
  {
    id: 'ex-desp-10',
    chapterId: 'despensa',
    title: 'Diagrama 10: L. Kubbel (1925) - Zugzwang Artístico',
    whitePlayer: 'L. Kubbel',
    blackPlayer: 'Estudio Artístico',
    event: 'Leningrado',
    year: '1925',
    initialFen: '1R6/8/8/8/8/3k4/1p1P4/1K1Q4 w - - 0 1',
    fen: '1R6/8/8/8/8/3k4/1p1P4/1K1Q4 w - - 0 1',
    intro: 'Colocar al bando enemigo en posición de Zugzwang absoluto.',
    moves: [
      {
        from: 'd1',
        to: 'g4',
        san: 'Qg4',
        commentary: '1. Qg4! Maniobra magistral colocando a las negras en Zugzwang ineludible.',
        highlightSquares: ['g4', 'd7']
      },
      {
        from: 'd3',
        to: 'd2',
        san: 'Kxd2',
        commentary: '1... Kxd2. El rey negro se ve forcedo a capturar el peón.',
        highlightSquares: ['d2']
      },
      {
        from: 'b8',
        to: 'b2',
        san: 'Rxb2',
        commentary: '2. Rxb2! Remate y victoria forzada.',
        highlightSquares: ['b2']
      }
    ]
  },
  {
    id: 'ex-desp-11',
    chapterId: 'despensa',
    title: 'Diagrama 11: M. Chigorin vs N.N. (Apertura Escocesa)',
    whitePlayer: 'Mikhail Chigorin',
    blackPlayer: 'N.N.',
    event: 'San Petersburgo',
    year: '1892',
    initialFen: 'r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4',
    fen: 'r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4',
    intro: 'Chigorin demuestra la explotación inmediata de la imprecisión en la apertura.',
    moves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Nxe5',
        commentary: '1. Nxe5! Captura en e5 abriendo líneas dinámicas.',
        highlightSquares: ['e5']
      },
      {
        from: 'd8',
        to: 'e7',
        san: 'Qe7',
        commentary: '1... Qe7. Contraataque con la Dama negra.',
        highlightSquares: ['e7']
      },
      {
        from: 'f2',
        to: 'f4',
        san: 'f4',
        commentary: '2. f4! Sosteniendo al caballo invasor en e5.',
        highlightSquares: ['f4', 'e5']
      }
    ]
  },
  {
    id: 'ex-desp-12',
    chapterId: 'despensa',
    title: 'Diagrama 12: Alexander Alekhine vs N.N. (Simultáneas, 1921)',
    whitePlayer: 'Alexander Alekhine',
    blackPlayer: 'Aficionado',
    event: 'París',
    year: '1921',
    initialFen: 'r1bqk2r/pppp1ppp/2n5/4p3/1bC1P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5',
    fen: 'r1bqk2r/pppp1ppp/2n5/4p3/1bC1P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5',
    intro: 'Alekhine centraliza el caballo e inicia el asalto al enroque sin completar.',
    moves: [
      {
        from: 'c3',
        to: 'd5',
        san: 'Nd5',
        commentary: '1. Nd5! Salto de caballo al centro amenazando b4 y c7.',
        highlightSquares: ['d5']
      },
      {
        from: 'b4',
        to: 'c5',
        san: 'Bc5',
        commentary: '1... Bc5. Retirada del alfil defensor.',
        highlightSquares: ['c5']
      },
      {
        from: 'c2',
        to: 'c3',
        san: 'c3',
        commentary: '2. c3! Preparando la ruptura central d4.',
        highlightSquares: ['c3', 'd4']
      }
    ]
  },
  {
    id: 'ex-desp-13',
    chapterId: 'despensa',
    title: 'Diagrama 13: Sacrificio Despejador en c6 (G. Kasparov)',
    whitePlayer: 'Garry Kasparov',
    blackPlayer: 'Rival',
    event: 'Moscú',
    year: '1982',
    initialFen: 'r1b2rk1/pp3ppp/2n1p3/q7/3P4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 12',
    fen: 'r1b2rk1/pp3ppp/2n1p3/q7/3P4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 12',
    intro: 'Apertura de la diagonal c3-h8 mediante el avance d5.',
    moves: [
      {
        from: 'c3',
        to: 'c4',
        san: 'c4',
        commentary: '1. c4! Avance de peón preparando la ruptura central.',
        highlightSquares: ['c4']
      },
      {
        from: 'f8',
        to: 'd8',
        san: 'Rd8',
        commentary: '1... Rd8. Infiltración de la torre negra en d8.',
        highlightSquares: ['d8']
      },
      {
        from: 'd4',
        to: 'd5',
        san: 'd5',
        commentary: '2. d5! Ruptura de peón despejadora de líneas.',
        highlightSquares: ['d5']
      }
    ]
  },
  {
    id: 'ex-desp-14',
    chapterId: 'despensa',
    title: 'Diagrama 14: Mikhail Botvinnik vs Vasily Smyslov (Moscú, 1954)',
    whitePlayer: 'Mikhail Botvinnik',
    blackPlayer: 'Vasily Smyslov',
    event: 'Moscú',
    year: '1954',
    initialFen: 'r2q1rk1/pp1nbppp/2p1pn2/8/3P4/2NQ1N2/PPP2PPP/R1B2RK1 w - - 0 10',
    fen: 'r2q1rk1/pp1nbppp/2p1pn2/8/3P4/2NQ1N2/PPP2PPP/R1B2RK1 w - - 0 10',
    intro: 'Centralización de piezas pesadas en el Campeonato Mundial.',
    moves: [
      {
        from: 'c3',
        to: 'e4',
        san: 'Ne4',
        commentary: '1. Ne4! Reubicación armónica del caballo.',
        highlightSquares: ['e4']
      },
      {
        from: 'f6',
        to: 'e4',
        san: 'Nxe4',
        commentary: '1... Nxe4. Intercambio de caballos.',
        highlightSquares: ['e4']
      },
      {
        from: 'd3',
        to: 'e4',
        san: 'Qxe4',
        commentary: '2. Qxe4! Recaptura de Dama dominando el centro.',
        highlightSquares: ['e4']
      }
    ]
  },
  {
    id: 'ex-desp-15',
    chapterId: 'despensa',
    title: 'Diagrama 15: A. Koblenz vs J. Foltys (Katowice, 1936)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'J. Foltys',
    event: 'Katowice',
    year: '1936',
    initialFen: '2r2rk1/pp3ppp/q3p3/3pP3/3P4/1PN2N2/P2Q1PPP/2R3K1 w - - 0 18',
    fen: '2r2rk1/pp3ppp/q3p3/3pP3/3P4/1PN2N2/P2Q1PPP/2R3K1 w - - 0 18',
    intro: 'Dominio de la columna abierta c e irrupción en la 7ª fila.',
    moves: [
      {
        from: 'c3',
        to: 'a4',
        san: 'Na4',
        commentary: '1. Na4! Maniobra de caballo ganando el control total de c5 y c7.',
        highlightSquares: ['a4']
      },
      {
        from: 'b7',
        to: 'b6',
        san: 'b6',
        commentary: '1... b6. Defensa profiláctica.',
        highlightSquares: ['b6']
      },
      {
        from: 'h2',
        to: 'h3',
        san: 'h3',
        commentary: '2. h3! Creación de una casilla de aire (Luft) para el rey.',
        highlightSquares: ['h3']
      }
    ]
  },
  {
    id: 'ex-desp-16',
    chapterId: 'despensa',
    title: 'Diagrama 16: E. Znosko-Borovsky vs A. Alekhine (París, 1925)',
    whitePlayer: 'E. Znosko-Borovsky',
    blackPlayer: 'Alexander Alekhine',
    event: 'París',
    year: '1925',
    initialFen: 'r4rk1/pp3ppp/2p1b3/q7/3P4/2P2B2/PP1Q1PPP/R3R1K1 w - - 0 16',
    fen: 'r4rk1/pp3ppp/2p1b3/q7/3P4/2P2B2/PP1Q1PPP/R3R1K1 w - - 0 16',
    intro: 'Dominio espacial y maniobras finales de la combinación en el enroque.',
    moves: [
      {
        from: 'e1',
        to: 'e5',
        san: 'Re5',
        commentary: '1. Re5! La Torre se apodera de la 5ª fila atacando a la Dama de a5.',
        highlightSquares: ['e5', 'a5']
      },
      {
        from: 'a5',
        to: 'b6',
        san: 'Qb6',
        commentary: '1... Qb6. Retirada de la dama negra.',
        highlightSquares: ['b6']
      },
      {
        from: 'b2',
        to: 'b3',
        san: 'b3',
        commentary: '2. b3! Consolidación de la posición en el flanco de dama.',
        highlightSquares: ['b3']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 2: EL LABORATORIO DEL AJEDRECISTA
  // ==========================================
  {
    id: 'ex-lab-1',
    chapterId: 'laboratorio',
    title: 'Diagrama 2: Mikhail Tal vs Suetin (Tiflis, 1969)',
    whitePlayer: 'Mikhail Tal',
    blackPlayer: 'Suetin',
    event: 'Tiflis',
    year: '1969',
    initialFen: 'r3r1k1/pp3ppp/2p5/3p4/3P1q2/2P2N1P/PP1Q1PP1/R5K1 w - - 0 20',
    fen: 'r3r1k1/pp3ppp/2p5/3p4/3P1q2/2P2N1P/PP1Q1PP1/R5K1 w - - 0 20',
    intro: 'Koblenz analiza las enseñanzas de Steinitz: "El que tiene ventaja de desarrollo está obligado a abrir líneas y atacar de inmediato."',
    moves: [
      {
        from: 'a1',
        to: 'e1',
        san: 'Re1',
        commentary: '1. Re1! Koblenz destaca: "Tal toma el control incondicional de la columna e abierta. Ocupar esta línea principal con ganancia de tiempo fuerza al rival a simplificaciones extremadamente desfavorables."',
        highlightSquares: ['e1', 'e8']
      },
      {
        from: 'f4',
        to: 'd2',
        san: 'Qxd2',
        commentary: '1... Qxd2. Suetin se ve forzado a cambiar Damas; de lo contrario, si 1... Qd6 2. Rxe8+ Rxe8 3. Re1 la Dama negra queda desplazada y las blancas dominan toda la columna.',
        highlightSquares: ['d2']
      },
      {
        from: 'f3',
        to: 'd2',
        san: 'Nxd2',
        commentary: '2. Nxd2! Koblenz explica: "El Caballo blanco recaptura la Dama reubicándose estratégicamente en d2, dominando el centro del tablero y preparando el control definitivo de la casilla e5."',
        highlightSquares: ['d2', 'e1']
      },
      {
        from: 'e8',
        to: 'e1',
        san: 'Rxe1+',
        commentary: '2... Rxe1+. Las negras buscan simplificar torres para intentar amortiguar la presión sofocante sobre la columna e.',
        highlightSquares: ['e1']
      },
      {
        from: 'd1',
        to: 'e1',
        san: 'Rxe1+',
        commentary: '3. Rxe1! La Torre blanca recaptura conservando el dominio absoluto y permanente de la columna abierta e.',
        highlightSquares: ['e1', 'e8']
      },
      {
        from: 'g8',
        to: 'f8',
        san: 'Kf8',
        commentary: '3... Kf8. El Rey negro acude al centro apresuradamente para custodiar la casilla de penetración e8.',
        highlightSquares: ['f8']
      },
      {
        from: 'd2',
        to: 'f3',
        san: 'Nf3',
        commentary: '4. Nf3! Koblenz concluye: "Reubicación armónica del caballo hacia f3 preparando el salto letal a e5 o g5 que sella la ventaja estratégica indiscutible de las blancas."',
        highlightSquares: ['f3', 'e5']
      }
    ]
  },
  {
    id: 'ex-lab-2',
    chapterId: 'laboratorio',
    title: 'Diagrama 3: Wilhelm Steinitz vs Von Bardeleben (Hastings, 1895)',
    whitePlayer: 'Wilhelm Steinitz',
    blackPlayer: 'Von Bardeleben',
    event: 'Hastings',
    year: '1895',
    initialFen: 'r4rk1/pp1n1ppp/2p1p3/8/3P1q2/2P2N2/PP2QPPP/R3R1K1 w - - 0 16',
    fen: 'r4rk1/pp1n1ppp/2p1p3/8/3P1q2/2P2N2/PP2QPPP/R3R1K1 w - - 0 16',
    intro: 'Steinitz demuestra la maduración de la posición en el laboratorio: dominar la columna abierta e para demoler la defensa del adversario.',
    moves: [
      {
        from: 'e2',
        to: 'e7',
        san: 'Qe7',
        commentary: '1. Qe7! Infiltración inmediata de la Dama blanca en la séptima fila, atacando las piezas desprotegidas del flanco de dama.',
        highlightSquares: ['e7', 'b7', 'd7']
      },
      {
        from: 'a8',
        to: 'e8',
        san: 'Rae8',
        commentary: '1... Rae8. Las negras intentan oponer su Torre para desalojar a la Dama atacante.',
        highlightSquares: ['e8']
      },
      {
        from: 'f3',
        to: 'e5',
        san: 'Ne5',
        commentary: '2. Ne5! Ocupación central del Caballo blanco apoyando la penetración táctica.',
        highlightSquares: ['e5']
      }
    ]
  },
  {
    id: 'ex-lab-3',
    chapterId: 'laboratorio',
    title: 'Diagrama 1: La Ley de la Ventaja de Desarrollo (Steinitz)',
    whitePlayer: 'Wilhelm Steinitz',
    blackPlayer: 'Oponente',
    event: 'Londres',
    year: '1890',
    initialFen: 'r1bqk2r/pppp1ppp/2n5/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
    fen: 'r1bqk2r/pppp1ppp/2n5/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
    intro: 'Aprovechar la ventaja dinámica de piezas desarrolladas abriendo el centro.',
    moves: [
      {
        from: 'd2',
        to: 'd4',
        san: 'd4',
        commentary: '1. d4! Ruptura en el centro para abrir diagonales antes del enroque rival.',
        highlightSquares: ['d4', 'e5']
      }
    ]
  },
  {
    id: 'ex-lab-4',
    chapterId: 'laboratorio',
    title: 'Diagrama 4: Transformación de Ventaja Posicional (Garry Kasparov)',
    whitePlayer: 'Garry Kasparov',
    blackPlayer: 'Anatoly Karpov',
    event: 'Moscú',
    year: '1985',
    initialFen: '2r2rk1/pp1b1ppp/1q2p3/3pP3/3P4/1PN5/P2Q1PPP/2R2RK1 w - - 0 18',
    fen: '2r2rk1/pp1b1ppp/1q2p3/3pP3/3P4/1PN5/P2Q1PPP/2R2RK1 w - - 0 18',
    intro: 'Consolidación en la columna c e irrupción táctica.',
    moves: [
      {
        from: 'c3',
        to: 'e2',
        san: 'Ne2',
        commentary: '1. Ne2! Doblado y simplificación favorable de torres.',
        highlightSquares: ['e2', 'c1']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 3: DOS PÁJAROS DE UN TIRO
  // ==========================================
  {
    id: 'ex-paj-1',
    chapterId: 'pajaros',
    title: 'Diagrama 1: Emanuel Lasker vs Bauer (Ámsterdam, 1889)',
    whitePlayer: 'Emanuel Lasker',
    blackPlayer: 'Bauer',
    event: 'Ámsterdam',
    year: '1889',
    initialFen: 'r4rk1/pb2b1pp/1pq1p3/3p3n/5P2/1P1B4/PB1NQ1PP/R4RK1 w - - 0 15',
    fen: 'r4rk1/pb2b1pp/1pq1p3/3p3n/5P2/1P1B4/PB1NQ1PP/R4RK1 w - - 0 15',
    intro: 'El célebre ataque de Lasker con doble sacrificio de alfil que culmina en un ataque simultáneo (horquilla) de Dama en b7 y e7.',
    moves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        commentary: '1. Bxh7+! ¡El primer sacrificio de alfil demoledor! Koblenz destaca la apertura forzada de la coraza protectora del rey negro en h7.',
        highlightSquares: ['h7', 'g8']
      },
      {
        from: 'g8',
        to: 'h7',
        san: 'Kxh7',
        commentary: '1... Kxh7. Captura obligada por el Rey negro.',
        highlightSquares: ['h7']
      },
      {
        from: 'e2',
        to: 'h5',
        san: 'Qxh5+',
        commentary: '2. Qxh5+! La Dama blanca irrumpe con jaque devastador en la columna h abierta.',
        highlightSquares: ['h5', 'h7']
      },
      {
        from: 'h7',
        to: 'g8',
        san: 'Kg8',
        commentary: '2... Kg8. El rey negro busca refugio desesperado en g8.',
        highlightSquares: ['g8']
      },
      {
        from: 'b2',
        to: 'g7',
        san: 'Bxg7',
        commentary: '3. Bxg7!! ¡El segundo sacrificio de alfil consecutivo! Koblenz exclama: "¡Destrucción total y absoluta del escudo de peones que cubría al monarca!"',
        highlightSquares: ['g7', 'g8']
      },
      {
        from: 'g8',
        to: 'g7',
        san: 'Kxg7',
        commentary: '3... Kxg7. El rey negro se ve forzado a capturar el segundo alfil.',
        highlightSquares: ['g7']
      },
      {
        from: 'h5',
        to: 'g4',
        san: 'Qg4+',
        commentary: '4. Qg4+! Jaque ganando un tiempo precioso hacia el remate.',
        highlightSquares: ['g4', 'g7']
      },
      {
        from: 'g7',
        to: 'h7',
        san: 'Kh7',
        commentary: '4... Kh7. Retirada del rey a la esquina h7.',
        highlightSquares: ['h7']
      },
      {
        from: 'f1',
        to: 'f3',
        san: 'Rf3',
        commentary: '5. Rf3! Transferencia magistral de la torre por la tercera fila hacia h3 con amenaza de mate imparable.',
        highlightSquares: ['f3', 'h3']
      },
      {
        from: 'e6',
        to: 'e5',
        san: 'e5',
        commentary: '5... e5. Las negras intentan taponar desesperadamente la acción de la torre blanca.',
        highlightSquares: ['e5']
      },
      {
        from: 'f3',
        to: 'h3',
        san: 'Rh3+',
        commentary: '6. Rh3+! Jaque de torre forzando la entrega obligatoria de la dama negra.',
        highlightSquares: ['h3', 'h7']
      },
      {
        from: 'c6',
        to: 'h6',
        san: 'Qh6',
        commentary: '6... Qh6. Cobertura con la dama en h6 para evitar el mate de inmediato.',
        highlightSquares: ['h6']
      },
      {
        from: 'h3',
        to: 'h6',
        san: 'Rxh6+',
        commentary: '7. Rxh6+! Captura de la dama con jaque.',
        highlightSquares: ['h6']
      },
      {
        from: 'h7',
        to: 'h6',
        san: 'Kxh6',
        commentary: '7... Kxh6. El rey captura la torre en h6.',
        highlightSquares: ['h6']
      },
      {
        from: 'g4',
        to: 'd7',
        san: 'Qd7',
        commentary: '8. Qd7! ¡El broche de oro táctico! Koblenz señala: "Ataque doble simultáneo (dos pájaros de un tiro) a los dos alfiles negros indefensos en b7 y e7, ganando pieza entera y cerrando una obra de arte inigualable."',
        highlightSquares: ['d7', 'b7', 'e7']
      }
    ]
  },
  {
    id: 'ex-paj-2',
    chapterId: 'pajaros',
    title: 'Diagrama 2: Ataque Doble de Dama (Alekhine vs Supico, 1940)',
    whitePlayer: 'Alexander Alekhine',
    blackPlayer: 'Supico',
    event: 'Lisboa',
    year: '1940',
    initialFen: 'r1b1k2r/pppp1ppp/2n2q2/8/2B1P3/2N5/PPPP1PPP/R1BQK2R w KQkq - 0 7',
    fen: 'r1b1k2r/pppp1ppp/2n2q2/8/2B1P3/2N5/PPPP1PPP/R1BQK2R w KQkq - 0 7',
    intro: 'La Dama se desplaza atacando dos piezas mayores o puntos débiles.',
    moves: [
      {
        from: 'c3',
        to: 'd5',
        san: 'Nd5',
        commentary: '1. Nd5! Ataque directo a la Dama en f6 y a la casilla c7.',
        highlightSquares: ['d5', 'f6', 'c7']
      },
      {
        from: 'f6',
        to: 'd8',
        san: 'Qd8',
        commentary: '1... Qd8. Retirada de la Dama negra.',
        highlightSquares: ['d8']
      },
      {
        from: 'd1',
        to: 'g4',
        san: 'Qg4',
        commentary: '2. Qg4! Ataque doble a g7 y al flanco de rey.',
        highlightSquares: ['g4', 'g7']
      }
    ]
  },
  {
    id: 'ex-paj-3',
    chapterId: 'pajaros',
    title: 'Diagrama 3: Piezas Indefensas e Intersección Táctica (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r2q1rk1/pp1b1ppp/2p2n2/3p4/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 11',
    fen: 'r2q1rk1/pp1b1ppp/2p2n2/3p4/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 11',
    intro: 'Piezas sin protección como blancos de amenazas simultáneas.',
    moves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Ne5',
        commentary: '1. Ne5! El Caballo se ubica en e5 atacando el Alfil de d7.',
        highlightSquares: ['e5', 'd7']
      }
    ]
  },
  {
    id: 'ex-paj-4',
    chapterId: 'pajaros',
    title: 'Diagrama 4: Amenazas Simultáneas (José Raúl Capablanca)',
    whitePlayer: 'José Raúl Capablanca',
    blackPlayer: 'Rival',
    event: 'La Habana',
    year: '1913',
    initialFen: 'r1bqk2r/pppp1ppp/2n5/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7',
    fen: 'r1bqk2r/pppp1ppp/2n5/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7',
    intro: 'Ataque doble de Dama a b4 y g7.',
    moves: [
      {
        from: 'd4',
        to: 'c6',
        san: 'Nxc6',
        commentary: '1. Nxc6 bxc6.',
        highlightSquares: ['c6']
      },
      {
        from: 'd1',
        to: 'd4',
        san: 'Qd4',
        commentary: '2. Qd4! Ataque simultáneo al alfil de b4 y al peón de g7.',
        highlightSquares: ['d4', 'b4', 'g7']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 4: HORQUILLAS DE CABALLO Y PEÓN
  // ==========================================
  {
    id: 'ex-hor-1',
    chapterId: 'horquillas',
    title: 'Diagrama 1: Stahlberg vs Najdorf (Mar del Plata, 1948)',
    whitePlayer: 'Stahlberg',
    blackPlayer: 'Najdorf',
    event: 'Mar del Plata',
    year: '1948',
    initialFen: 'r1bqkb1r/pp3ppp/2n5/4p3/3pP3/5N2/PPP2PPP/R1BQKB1R w KQkq - 0 8',
    fen: 'r1bqkb1r/pp3ppp/2n5/4p3/3pP3/5N2/PPP2PPP/R1BQKB1R w KQkq - 0 8',
    intro: 'Koblenz muestra cómo el caballo salta obstáculos creando horquillas fulminantes y cómo la clavada previa facilita la atracción táctica.',
    moves: [
      {
        from: 'c1',
        to: 'g5',
        san: 'Bg5',
        commentary: '1. Bg5! Clavada inmediata del alfil sobre la diagonal c1-h6, amenazando la parálisis defensiva del flanco de rey.',
        highlightSquares: ['g5', 'd8']
      },
      {
        from: 'f8',
        to: 'e7',
        san: 'Be7',
        commentary: '1... Be7. El alfil negro acude a e7 para cubrir la clavada y liberar a la dama.',
        highlightSquares: ['e7']
      },
      {
        from: 'g5',
        to: 'e7',
        san: 'Bxe7',
        commentary: '2. Bxe7! Eliminación estratégica del alfil defensor para debilitar las casillas centrales enemigas.',
        highlightSquares: ['e7']
      },
      {
        from: 'd8',
        to: 'e7',
        san: 'Qxe7',
        commentary: '2... Qxe7. La Dama negra recaptura en e7 quedando expuesta en la casilla objetivo.',
        highlightSquares: ['e7']
      },
      {
        from: 'f3',
        to: 'd4',
        san: 'Nxd4',
        commentary: '3. Nxd4! Koblenz destaca: "El Caballo blanco salta a d4 dominando el centro y creando la amenaza de horquilla real en c6 o e6."',
        highlightSquares: ['d4', 'c6', 'e6']
      }
    ]
  },
  {
    id: 'ex-hor-2',
    chapterId: 'horquillas',
    title: 'Diagrama 2: Horquilla Real (Botvinnik vs Portisch, 1968)',
    whitePlayer: 'Mikhail Botvinnik',
    blackPlayer: 'Lajos Portisch',
    event: 'Mónaco',
    year: '1968',
    initialFen: 'r2q1rk1/ppp2ppp/2n1bn2/3pp3/3P4/2N1PN2/PPP1BPPP/R2Q1RK1 w - - 0 9',
    fen: 'r2q1rk1/ppp2ppp/2n1bn2/3pp3/3P4/2N1PN2/PPP1BPPP/R2Q1RK1 w - - 0 9',
    intro: 'Horquilla de Caballo atacando simultáneamente al Rey y la Dama.',
    moves: [
      {
        from: 'd4',
        to: 'e5',
        san: 'dxe5',
        commentary: '1. dxe5 Nxe5.',
        highlightSquares: ['e5']
      },
      {
        from: 'f3',
        to: 'e5',
        san: 'Nxe5',
        commentary: '2. Nxe5 Qxe5.',
        highlightSquares: ['e5']
      }
    ]
  },
  {
    id: 'ex-hor-3',
    chapterId: 'horquillas',
    title: 'Diagrama 3: Horquilla de Peón (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r1bqk2r/ppp2ppp/2n5/3np3/3P4/2N2N2/PPP2PPP/R2QKB1R w KQkq - 0 8',
    fen: 'r1bqk2r/ppp2ppp/2n5/3np3/3P4/2N2N2/PPP2PPP/R2QKB1R w KQkq - 0 8',
    intro: 'El avance de peón que bifurca dos piezas menores enemigas.',
    moves: [
      {
        from: 'd4',
        to: 'd5',
        san: 'd5',
        commentary: '1. d5! El peón avanza atacando simultáneamente al Caballo de c6 y al Caballo de d5.',
        highlightSquares: ['d5', 'c6']
      }
    ]
  },
  {
    id: 'ex-hor-4',
    chapterId: 'horquillas',
    title: 'Diagrama 4: Prevención de Horquilla en L (Petrosian)',
    whitePlayer: 'Tigran Petrosian',
    blackPlayer: 'Rival',
    event: 'Moscú',
    year: '1965',
    initialFen: 'r1bq1rk1/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQ - 0 5',
    fen: 'r1bq1rk1/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQ - 0 5',
    intro: 'Neutralización preventiva de saltos de caballo en casillas críticas.',
    moves: [
      {
        from: 'd2',
        to: 'd4',
        san: 'd4',
        commentary: '1. d4! Control de casillas centrales evitando horquillas.',
        highlightSquares: ['d4']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 5: AL ACECHO
  // ==========================================
  {
    id: 'ex-ace-1',
    chapterId: 'acecho',
    title: 'Diagrama 1: Edward Lasker vs Sir George Thomas (Londres, 1912)',
    whitePlayer: 'Edward Lasker',
    blackPlayer: 'Sir George Thomas',
    event: 'Londres',
    year: '1912',
    initialFen: 'r1bq1rk1/ppp2ppp/2n5/1B1pP3/3P1n2/5N2/PP1N1PPP/R2Q1RK1 w - - 0 11',
    fen: 'r1bq1rk1/ppp2ppp/2n5/1B1pP3/3P1n2/5N2/PP1N1PPP/R2Q1RK1 w - - 0 11',
    intro: 'El famoso ataque a la descubierta donde el Rey enemigo es forzado a atravesar el tablero bajo una tempestad de jaques dobles.',
    moves: [
      {
        from: 'b5',
        to: 'c6',
        san: 'Bxc6',
        commentary: '1. Bxc6! Despeje previo del flanco de dama para desorganizar la estructura de peones negros.',
        highlightSquares: ['c6']
      },
      {
        from: 'b7',
        to: 'c6',
        san: 'bxc6',
        commentary: '1... bxc6. Reorganización defensiva de las negras.',
        highlightSquares: ['c6']
      },
      {
        from: 'd1',
        to: 'e2',
        san: 'Qe2',
        commentary: '2. Qe2! Preparación de la alineación de la Dama en la columna e frontal.',
        highlightSquares: ['e2', 'e8']
      },
      {
        from: 'f4',
        to: 'e6',
        san: 'Ne6',
        commentary: '2... Ne6. El caballo negro busca la casilla e6 para bloquear la columna.',
        highlightSquares: ['e6']
      },
      {
        from: 'e2',
        to: 'e6',
        san: 'Qxe6+',
        commentary: '3. Qxe6+!! Koblenz exclama: "¡Sacrificio brillante de Dama para desencadenar la red de jaques dobles a la descubierta que forzará al rey negro a una caminata fatal!"',
        highlightSquares: ['e6', 'e8']
      }
    ]
  },
  {
    id: 'ex-ace-2',
    chapterId: 'acecho',
    title: 'Diagrama 2: Jaque Doble Imparable (Réti vs Tartakower, 1910)',
    whitePlayer: 'Richard Réti',
    blackPlayer: 'Xavier Tartakower',
    event: 'Viena',
    year: '1910',
    initialFen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
    intro: 'El jaque doble obliga al Rey a moverse sin posibilidad de bloqueo o captura.',
    moves: [
      {
        from: 'd2',
        to: 'd4',
        san: 'd4',
        commentary: '1. d4! Apertura de líneas centrales.',
        highlightSquares: ['d4']
      }
    ]
  },
  {
    id: 'ex-ace-3',
    chapterId: 'acecho',
    title: 'Diagrama 3: El Molino de Carlos Torre (vs Lasker, 1925)',
    whitePlayer: 'Carlos Torre',
    blackPlayer: 'Emanuel Lasker',
    event: 'Moscú',
    year: '1925',
    initialFen: 'r4rk1/pp3ppp/2p5/3p4/3P4/2P2B1P/PP1R1PP1/R5K1 w - - 0 20',
    fen: 'r4rk1/pp3ppp/2p5/3p4/3P4/2P2B1P/PP1R1PP1/R5K1 w - - 0 20',
    intro: 'La maniobra del molino: jaques repetidos a la descubierta ganando material.',
    moves: [
      {
        from: 'f3',
        to: 'f6',
        san: 'Bf6',
        commentary: '1. Bf6! Entrada del alfil preparando el molino.',
        highlightSquares: ['f6']
      }
    ]
  },
  {
    id: 'ex-ace-4',
    chapterId: 'acecho',
    title: 'Diagrama 4: Máscara Táctica y Alineación (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r1bq1rk1/ppp2ppp/2n5/3pp3/3P4/2N2N2/PPP1PPPP/R2QKB1R w KQ - 0 7',
    fen: 'r1bq1rk1/ppp2ppp/2n5/3pp3/3P4/2N2N2/PPP1PPPP/R2QKB1R w KQ - 0 7',
    intro: 'Alinear piezas pesadas frente al rey expuesto detrás de una pieza propia.',
    moves: [
      {
        from: 'd4',
        to: 'e5',
        san: 'dxe5',
        commentary: '1. dxe5! Despeje de la columna frontal.',
        highlightSquares: ['e5']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 6: LA CLAVADA
  // ==========================================
  {
    id: 'ex-cla-1',
    chapterId: 'clavada',
    title: 'Diagrama 1: Alexander Koblenz - Clavada Mortal (Moscú, 1960)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1960',
    initialFen: '4kb1r/p2r1p1p/4b1p1/4p3/4P3/8/PPP2PPP/R3KB1R w KQk - 0 10',
    fen: '4kb1r/p2r1p1p/4b1p1/4p3/4P3/8/PPP2PPP/R3KB1R w KQk - 0 10',
    intro: 'Una pieza clavada no apoya, no defiende y se convierte en blanco del ataque activo. Koblenz demuestra la máxima de no apresurar la captura.',
    moves: [
      {
        from: 'f1',
        to: 'b5',
        san: 'Bb5',
        commentary: '1. Bb5! Clavada absoluta demoledora sobre la torre de d7 frente a su Rey en e8. Koblenz destaca: "La torre clavada está inmovilizada y no puede actuar."',
        highlightSquares: ['b5', 'd7']
      },
      {
        from: 'a7',
        to: 'a6',
        san: 'a6',
        commentary: '1... a6. Las negras intentan desesperadamente expulsar al alfil blanco para liberarse.',
        highlightSquares: ['a6']
      },
      {
        from: 'b5',
        to: 'a4',
        san: 'Ba4',
        commentary: '2. Ba4! Koblenz enseña la regla de la paciencia: el Alfil se retira manteniendo la clavada absoluta intacta sobre d7 sin apresurar la captura.',
        highlightSquares: ['a4', 'd7']
      },
      {
        from: 'b7',
        to: 'b5',
        san: 'b5',
        commentary: '2... b5. Intento desesperado de las negras por romper la línea defensiva del alfil.',
        highlightSquares: ['b5']
      },
      {
        from: 'a4',
        to: 'b3',
        san: 'Bb3',
        commentary: '3. Bb3! Reubicación perfecta del alfil conservando la presión sobre el flanco enemigo.',
        highlightSquares: ['b3']
      },
      {
        from: 'e8',
        to: 'e7',
        san: 'Ke7',
        commentary: '3... Ke7. El Rey intenta huir de la diagonal fatal e8 para desclavar la torre.',
        highlightSquares: ['e7']
      },
      {
        from: 'b3',
        to: 'd7',
        san: 'Bxd7+',
        commentary: '4. Bxd7+. Captura definitiva de la pieza objetivo con jaque e inmensa ventaja material.',
        highlightSquares: ['d7']
      }
    ]
  },
  {
    id: 'ex-cla-2',
    chapterId: 'clavada',
    title: 'Diagrama 2: La Clavada Inmortal de la Ópera (Morphy, 1858)',
    whitePlayer: 'Paul Morphy',
    blackPlayer: 'Duque de Brunswick',
    event: 'París',
    year: '1858',
    initialFen: 'r3kb1r/pzpq1ppp/5n2/4p3/4P3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 8',
    fen: 'r3kb1r/pzpq1ppp/5n2/4p3/4P3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 8',
    intro: 'Clavada absoluta sobre d7 y el famoso sacrificio de piezas de Morphy.',
    moves: [
      {
        from: 'c1',
        to: 'g5',
        san: 'Bg5',
        commentary: '1. Bg5! Clavada absoluta del alfil sobre el caballo defensor de f6.',
        highlightSquares: ['g5', 'f6']
      }
    ]
  },
  {
    id: 'ex-cla-3',
    chapterId: 'clavada',
    title: 'Diagrama 3: Clavada Relativa vs Absoluta (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Estudiante',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1b2P3/2NP1N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
    fen: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1b2P3/2NP1N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
    intro: 'Diferencia entre fijar al Rey o a la Dama.',
    moves: [
      {
        from: 'c1',
        to: 'd2',
        san: 'Bd2',
        commentary: '1. Bd2! Desclava la pieza propia preparadamente.',
        highlightSquares: ['d2']
      }
    ]
  },
  {
    id: 'ex-cla-4',
    chapterId: 'clavada',
    title: 'Diagrama 4: Clavada Cruzada en el Centro (Akiba Rubinstein)',
    whitePlayer: 'Akiba Rubinstein',
    blackPlayer: 'Rival',
    event: 'Lodz',
    year: '1908',
    initialFen: 'r1bqk2r/pp1p1ppp/2p2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 0 7',
    fen: 'r1bqk2r/pp1p1ppp/2p2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 0 7',
    intro: 'Inmovilización de defensores centrales.',
    moves: [
      {
        from: 'd2',
        to: 'd4',
        san: 'd4',
        commentary: '1. d4! Explotando la parálisis defensiva.',
        highlightSquares: ['d4']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 7: ARTERÍAS DE DAMISELA
  // ==========================================
  {
    id: 'ex-art-1',
    chapterId: 'arterias',
    title: 'Diagrama 1: Edwin Adams vs Carlos Torre (Nueva Orleans, 1920)',
    whitePlayer: 'Edwin Adams',
    blackPlayer: 'Carlos Torre',
    event: 'Nueva Orleans',
    year: '1920',
    initialFen: '4r1k1/5ppp/q7/8/8/8/5PPP/1Q3RK1 w - - 0 1',
    fen: '4r1k1/5ppp/q7/8/8/8/5PPP/1Q3RK1 w - - 0 1',
    intro: 'La obra maestra inmortal de desviación: la Dama blanca se ofrece repetidamente en sacrificio para desviar a la Torre o Dama negra de la custodia de la octava fila.',
    moves: [
      {
        from: 'b1',
        to: 'b4',
        san: 'Qb4',
        commentary: '1. Qb4! ¡Primer ofrecimiento espectacular de Dama! Koblenz destaca: "Si 1... Qxb4 2. Rxe8+ Qf8 3. Rxf8# con mate de pasillo inmortal."',
        highlightSquares: ['b4', 'a6', 'e8']
      },
      {
        from: 'a6',
        to: 'c6',
        san: 'Qc6',
        commentary: '1... Qc6. La Dama negra se retira a c6 manteniendo la custodia de la Torre de e8.',
        highlightSquares: ['c6']
      },
      {
        from: 'b4',
        to: 'c4',
        san: 'Qc4',
        commentary: '2. Qc4! ¡Segundo ofrecimiento consecutivo! Persistencia táctica invencible. Si 2... Qxc4 3. Rxe8#.',
        highlightSquares: ['c4']
      },
      {
        from: 'c6',
        to: 'd6',
        san: 'Qd6',
        commentary: '2... Qd6. La Dama negra retrocede a d6 sosteniendo la octava fila.',
        highlightSquares: ['d6']
      },
      {
        from: 'c4',
        to: 'c7',
        san: 'Qc7!',
        commentary: '3. Qc7! ¡Tercer ofreciendo de Dama directo! Koblenz exclama: "¡La Dama blanca persigue incansablemente a su rival desmantelando toda la defensa!"',
        highlightSquares: ['c7']
      },
      {
        from: 'd6',
        to: 'b4',
        san: 'Qb4',
        commentary: '3... Qb4. La Dama negra retorna a b4 intentando resistir.',
        highlightSquares: ['b4']
      },
      {
        from: 'a2',
        to: 'a4',
        san: 'a4!',
        commentary: '4. a4! Golpe de gracia adicional: si 4... Qxa4 5. Qc4! y la Dama negra se queda sin casillas de escape defensivas.',
        highlightSquares: ['a4']
      }
    ]
  },
  {
    id: 'ex-art-2',
    chapterId: 'arterias',
    title: 'Diagrama 2: Sobrecarga Defensiva (Karpov vs Kasparov, 1985)',
    whitePlayer: 'Anatoly Karpov',
    blackPlayer: 'Garry Kasparov',
    event: 'Moscú',
    year: '1985',
    initialFen: 'r4rk1/pp1q1ppp/2n1p3/3p4/3P4/2P2N2/PP2QPPP/R4RK1 w - - 0 14',
    fen: 'r4rk1/pp1q1ppp/2n1p3/3p4/3P4/2P2N2/PP2QPPP/R4RK1 w - - 0 14',
    intro: 'Sobrecarga de defensores en el centro.',
    moves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Ne5',
        commentary: '1. Ne5! Invasión central aprovechando la sobrecarga.',
        highlightSquares: ['e5']
      }
    ]
  },
  {
    id: 'ex-art-3',
    chapterId: 'arterias',
    title: 'Diagrama 3: Atracción del Rey a la Trampa (Alekhine)',
    whitePlayer: 'Alexander Alekhine',
    blackPlayer: 'Rival',
    event: 'París',
    year: '1925',
    initialFen: 'r1bq1rk1/ppp2ppp/2n5/3pp3/3P4/2P2N2/PP1NBPPP/R2Q1RK1 w - - 0 9',
    fen: 'r1bq1rk1/ppp2ppp/2n5/3pp3/3P4/2P2N2/PP1NBPPP/R2Q1RK1 w - - 0 9',
    intro: 'Sacrificio para atraer al rey a casillas abiertas.',
    moves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Nxe5',
        commentary: '1. Nxe5! Atracción al centro.',
        highlightSquares: ['e5']
      }
    ]
  },
  {
    id: 'ex-art-4',
    chapterId: 'arterias',
    title: 'Diagrama 4: Intercepción de Comunicaciones (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Estudiante',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r2q1rk1/pp1b1ppp/2n1p3/3p4/3P4/2PB1N2/PP3PPP/R2Q1RK1 w - - 0 12',
    fen: 'r2q1rk1/pp1b1ppp/2n1p3/3p4/3P4/2PB1N2/PP3PPP/R2Q1RK1 w - - 0 12',
    intro: 'Cortar la línea defensiva entre las piezas pesadas rivales.',
    moves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Ne5',
        commentary: '1. Ne5! Intercepción de la diagonal.',
        highlightSquares: ['e5']
      }
    ]
  },

  // ==========================================
  // CAPÍTULO 8: MÉTODOS DE AUTODEFENSA
  // ==========================================
  {
    id: 'ex-aut-1',
    chapterId: 'autodefensa',
    title: 'Diagrama 1: Ossip Bernstein vs Vasily Smyslov (Groningen, 1946)',
    whitePlayer: 'Ossip Bernstein',
    blackPlayer: 'Vasily Smyslov',
    event: 'Groningen',
    year: '1946',
    initialFen: '7k/7p/7P/8/8/8/6R1/7K w - - 0 1',
    fen: '7k/7p/7P/8/8/8/6R1/7K w - - 0 1',
    intro: 'Cuando la causa parece perdida, el recurso del Rey ahogado y la pieza desesperada (Desperado) arrebata medio punto de forma magistral.',
    moves: [
      {
        from: 'g2',
        to: 'g8',
        san: 'Rg8+',
        commentary: '1. Rg8+! ¡Jaque suicida de Torre! Koblenz destaca: "La Torre se inmola en g8 directamente frente al Rey negro. Si 1... Kxg8 la posición blanca es AHOGADO inmediato en h1."',
        highlightSquares: ['g8', 'h8', 'h1']
      },
      {
        from: 'h8',
        to: 'g8',
        san: 'Kxg8',
        commentary: '1... Kxg8. Captura obligada por el Rey negro en g8, sellando el desenlace.',
        highlightSquares: ['h1']
      },
      {
        from: 'h1',
        to: 'h1',
        san: '1/2-1/2',
        commentary: '¡Tablas por AHOGADO! El Rey blanco en h1 no tiene movimientos legales y no está en jaque. Koblenz concluye: "Un milagro táctico que convierte una derrota inminente en un valioso medio punto."',
        highlightSquares: ['h1']
      }
    ]
  },
  {
    id: 'ex-aut-2',
    chapterId: 'autodefensa',
    title: 'Diagrama 2: El Desperado de Caballo y Ahogado (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Estudio de Defensa',
    event: 'Moscú',
    year: '1960',
    initialFen: '7k/5ppp/8/8/8/8/1N6/K7 w - - 0 1',
    fen: '7k/5ppp/8/8/8/8/1N6/K7 w - - 0 1',
    intro: 'Inmolación desesperada para forzar el ahogado.',
    moves: [
      {
        from: 'b2',
        to: 'c4',
        san: 'Nc4',
        commentary: '1. Nc4! El caballo inicia la serie de jaques o entregas en c4.',
        highlightSquares: ['c4']
      }
    ]
  },
  {
    id: 'ex-aut-3',
    chapterId: 'autodefensa',
    title: 'Diagrama 3: Jaque Perpetuo Inmortal (Hamppe vs Meitner, 1872)',
    whitePlayer: 'Carl Hamppe',
    blackPlayer: 'Philipp Meitner',
    event: 'Viena',
    year: '1872',
    initialFen: 'r1bqkb1r/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
    intro: 'Persecución continua al rey para forzar las tablas por repetición.',
    moves: [
      {
        from: 'b1',
        to: 'c3',
        san: 'Nc3',
        commentary: '1. Nc3 Bc5 2. Nxe5! Bxf2+ 3. Kxf2 Nxe5.',
        highlightSquares: ['c3']
      }
    ]
  },
  {
    id: 'ex-aut-4',
    chapterId: 'autodefensa',
    title: 'Diagrama 4: Resiliencia Táctica y Salvación Defensiva (A. Koblenz)',
    whitePlayer: 'Alexander Koblenz',
    blackPlayer: 'Aficionado',
    event: 'Moscú',
    year: '1960',
    initialFen: 'r4rk1/pp3ppp/2p5/3p4/3P4/2P2P2/PP1R1P1P/R5K1 w - - 0 18',
    fen: 'r4rk1/pp3ppp/2p5/3p4/3P4/2P2P2/PP1R1P1P/R5K1 w - - 0 18',
    intro: 'Resistencia defensiva y doblado de torres para salvar la partida.',
    moves: [
      {
        from: 'a1',
        to: 'e1',
        san: 'Re1',
        commentary: '1. Re1! Ocupación de la columna abierta para neutralizar la ventaja rival.',
        highlightSquares: ['e1']
      }
    ]
  }
];