export const PUZZLES = [
  // CAPÍTULO 1: EN LA DESPENSA DE LAS MARAVILLAS (16 PUZZLES COMPLETOS)
  {
    id: 'puz-desp-1',
    chapterId: 'despensa',
    title: 'Diagrama 1: Moresi vs Ferrarini (1972)',
    fen: 'k1r1r3/p7/1b1Q2p1/nN6/4bP2/1B3pPq/1P3P1P/R2R2K1 w - - 0 1',
    turn: 'w',
    difficulty: 3,
    hint: 'Busca el sacrificio de alfil en d5 seguido por el sacrificio de Dama en b8.',
    explanation: '1. Bd5+ Nb7 2. Qb8+!! Rxb8 3. Rxa7+!! Bxa7 4. Nc7# mate ahogado.',
    solutionMoves: [
      {
        from: 'b3',
        to: 'd5',
        san: 'Bd5+',
        response: { from: 'a5', to: 'b7', san: 'Nb7' }
      },
      {
        from: 'd6',
        to: 'b8',
        san: 'Qb8+',
        response: { from: 'c8', to: 'b8', san: 'Rxb8' }
      },
      {
        from: 'a1',
        to: 'a7',
        san: 'Rxa7+',
        response: { from: 'b6', to: 'a7', san: 'Bxa7' }
      },
      {
        from: 'b5',
        to: 'c7',
        san: 'Nc7#'
      }
    ]
  },
  {
    id: 'puz-desp-2',
    chapterId: 'despensa',
    title: 'Diagrama 2: Celada en la Apertura Italiana (Mate en f7)',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
    turn: 'w',
    difficulty: 1,
    hint: 'La Dama blanca apoyada por el Alfil ataca la casilla débil f7.',
    explanation: '1. Qxf7# Mate fulminante por la casilla f7.',
    solutionMoves: [
      {
        from: 'f3',
        to: 'f7',
        san: 'Qxf7#'
      }
    ]
  },
  {
    id: 'puz-desp-3',
    chapterId: 'despensa',
    title: 'Diagrama 3: Sacrificio de Alfil en h7 (A. Koblenz)',
    fen: 'r1b2rk1/pp1p1ppp/2n1p3/q7/2PP4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 11',
    turn: 'w',
    difficulty: 2,
    hint: 'Sacrifica el Alfil en h7 y salta con el Caballo a g5 para desarticular el enroque.',
    explanation: '1. Bxh7+! Kxh7 2. Ng5+! Kh6 3. h4! ataque irresistible.',
    solutionMoves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        response: { from: 'g8', to: 'h7', san: 'Kxh7' }
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        response: { from: 'h7', to: 'h6', san: 'Kh6' }
      },
      {
        from: 'h2',
        to: 'h4',
        san: 'h4'
      }
    ]
  },
  {
    id: 'puz-desp-4',
    chapterId: 'despensa',
    title: 'Diagrama 4: El Ataque Greco (Sacrificio Doble en h7)',
    fen: 'r1bq1rk1/pp3ppp/2n1p3/2pp4/2PP4/2PBPN2/P4PPP/R2Q1RK1 w - - 0 9',
    turn: 'w',
    difficulty: 2,
    hint: 'Entrega el alfil en h7, salta a g5 con jaque e irrumpe con la Dama en h5.',
    explanation: '1. Bxh7+! Kxh7 2. Ng5+! Kg8 3. Qh5! amenazando mate imparable.',
    solutionMoves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        response: { from: 'g8', to: 'h7', san: 'Kxh7' }
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        response: { from: 'h7', to: 'g8', san: 'Kg8' }
      },
      {
        from: 'd1',
        to: 'h5',
        san: 'Qh5'
      }
    ]
  },
  {
    id: 'puz-desp-5',
    chapterId: 'despensa',
    title: 'Diagrama 5: Final Artístico de A. Kakovin (1936)',
    fen: '8/2p5/3prpb1/4k3/4p3/4KPP1/4NP2/2R5 w - - 0 1',
    turn: 'w',
    difficulty: 3,
    hint: 'Da jaque con f4+, sacrifica el peón en f5, entrega la Torre en d5 y secciona la defensa con Nd3+.',
    explanation: '1. f4+ Kd5 2. f5! Bxf5 3. Nf4+ Ke5 4. Rd1! c6 5. Rd5+!! cxd5 6. Nd3+!! exd3 7. f4# mate de peón.',
    solutionMoves: [
      {
        from: 'f3',
        to: 'f4',
        san: 'f4+',
        response: { from: 'e5', to: 'd5', san: 'Kd5' }
      },
      {
        from: 'f4',
        to: 'f5',
        san: 'f5',
        response: { from: 'g6', to: 'f5', san: 'Bxf5' }
      },
      {
        from: 'e2',
        to: 'f4',
        san: 'Nf4+',
        response: { from: 'd5', to: 'e5', san: 'Ke5' }
      },
      {
        from: 'c1',
        to: 'd1',
        san: 'Rd1',
        response: { from: 'c7', to: 'c6', san: 'c6' }
      },
      {
        from: 'd1',
        to: 'd5',
        san: 'Rd5+',
        response: { from: 'c6', to: 'd5', san: 'cxd5' }
      },
      {
        from: 'f4',
        to: 'd3',
        san: 'Nd3+',
        response: { from: 'e4', to: 'd3', san: 'exd3' }
      },
      {
        from: 'f2',
        to: 'f4',
        san: 'f4#'
      }
    ]
  },
  {
    id: 'puz-desp-6',
    chapterId: 'despensa',
    title: 'Diagrama 6: Trampa de Noah (Apertura Española)',
    fen: 'r1bqkb1r/2p2ppp/p1np4/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 0 7',
    turn: 'w',
    difficulty: 1,
    hint: 'Ataca simultáneamente la Torre de a8 y el Caballo de c6 con el Alfil.',
    explanation: '1. Bd5! Bb7 2. d4! ruptura central.',
    solutionMoves: [
      {
        from: 'b3',
        to: 'd5',
        san: 'Bd5',
        response: { from: 'c8', to: 'b7', san: 'Bb7' }
      },
      {
        from: 'd2',
        to: 'd4',
        san: 'd4'
      }
    ]
  },
  {
    id: 'puz-desp-7',
    chapterId: 'despensa',
    title: 'Diagrama 7: Vasily Smyslov vs Aficionado (1938)',
    fen: 'r1bqk2r/pp1p1ppp/2n5/2p1p3/2B1P3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7',
    turn: 'w',
    difficulty: 2,
    hint: 'Sacrifica el Alfil en f7 para extraer al Rey y entra con Ng5+ seguido de Qf3.',
    explanation: '1. Bxf7+! Kxf7 2. Ng5+! Ke8 3. Qf3! creando amenaza mortal de mate.',
    solutionMoves: [
      {
        from: 'c4',
        to: 'f7',
        san: 'Bxf7+',
        response: { from: 'e8', to: 'f7', san: 'Kxf7' }
      },
      {
        from: 'f3',
        to: 'g5',
        san: 'Ng5+',
        response: { from: 'f7', to: 'e8', san: 'Ke8' }
      },
      {
        from: 'd1',
        to: 'f3',
        san: 'Qf3'
      }
    ]
  },
  {
    id: 'puz-desp-8',
    chapterId: 'despensa',
    title: 'Diagrama 8: Alexander Koblenz vs K. Klavins (1952)',
    fen: 'r4rk1/pp3ppp/q7/8/8/1P3Q2/P4PPP/R4RK1 w - - 0 18',
    turn: 'w',
    difficulty: 1,
    hint: 'Centraliza la Dama en f5 y ubica la Torre en la columna e abierta.',
    explanation: '1. Qf5! Qb6 2. Rfe1! dominio central definitivo.',
    solutionMoves: [
      {
        from: 'f3',
        to: 'f5',
        san: 'Qf5',
        response: { from: 'a6', to: 'b6', san: 'Qb6' }
      },
      {
        from: 'f1',
        to: 'e1',
        san: 'Rfe1'
      }
    ]
  },
  {
    id: 'puz-desp-9',
    chapterId: 'despensa',
    title: 'Diagrama 9: Kh. Eichstadt (1848) - Horquilla Real',
    fen: '1r3rk1/1p3p1p/p1q3p1/3N4/3nP1b1/3P2P1/PP1Q2BP/R4RK1 w - - 0 1',
    turn: 'w',
    difficulty: 2,
    hint: 'Asesta el salto de caballo a e7+, jaque doble al Rey g8 y a la Dama c6.',
    explanation: '1. Ne7+! Kh8 2. Nxc6! ganancia neta de la Dama.',
    solutionMoves: [
      {
        from: 'd5',
        to: 'e7',
        san: 'Ne7+',
        response: { from: 'g8', to: 'h8', san: 'Kh8' }
      },
      {
        from: 'e7',
        to: 'c6',
        san: 'Nxc6'
      }
    ]
  },
  {
    id: 'puz-desp-10',
    chapterId: 'despensa',
    title: 'Diagrama 10: L. Kubbel (1925) - Zugzwang Artístico',
    fen: '1R6/8/8/8/8/3k4/1p1P4/1K1Q4 w - - 0 1',
    turn: 'w',
    difficulty: 2,
    hint: 'Coloca a las negras en Zugzwang absoluto jugada 1. Qg4!',
    explanation: '1. Qg4! Qxd2 (Kxd2) 2. Rxb2! remate impecable.',
    solutionMoves: [
      {
        from: 'd1',
        to: 'g4',
        san: 'Qg4',
        response: { from: 'd3', to: 'd2', san: 'Kxd2' }
      },
      {
        from: 'b8',
        to: 'b2',
        san: 'Rxb2'
      }
    ]
  },
  {
    id: 'puz-desp-11',
    chapterId: 'despensa',
    title: 'Diagrama 11: M. Chigorin vs N.N. (1892)',
    fen: 'r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4',
    turn: 'w',
    difficulty: 1,
    hint: 'Captura el peón central en e5 e impulsa f4 sosteniendo el ataque.',
    explanation: '1. Nxe5! Qe7 2. f4! control del centro.',
    solutionMoves: [
      {
        from: 'f3',
        to: 'e5',
        san: 'Nxe5',
        response: { from: 'd8', to: 'e7', san: 'Qe7' }
      },
      {
        from: 'f2',
        to: 'f4',
        san: 'f4'
      }
    ]
  },
  {
    id: 'puz-desp-12',
    chapterId: 'despensa',
    title: 'Diagrama 12: Alexander Alekhine vs N.N. (1921)',
    fen: 'r1bqk2r/pppp1ppp/2n5/4p3/1bC1P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5',
    turn: 'w',
    difficulty: 1,
    hint: 'Salta con el Caballo a d5 y prepara c3 para dominar el centro.',
    explanation: '1. Nd5! Bc5 2. c3! iniciativa aplastante.',
    solutionMoves: [
      {
        from: 'c3',
        to: 'd5',
        san: 'Nd5',
        response: { from: 'b4', to: 'c5', san: 'Bc5' }
      },
      {
        from: 'c2',
        to: 'c3',
        san: 'c3'
      }
    ]
  },
  {
    id: 'puz-desp-13',
    chapterId: 'despensa',
    title: 'Diagrama 13: Sacrificio Despejador en c6 (G. Kasparov)',
    fen: 'r1b2rk1/pp3ppp/2n1p3/q7/3P4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 12',
    turn: 'w',
    difficulty: 2,
    hint: 'Impulsa c4 seguido por la ruptura central despejadora d5.',
    explanation: '1. c4! Rd8 2. d5! apertura de la gran diagonal.',
    solutionMoves: [
      {
        from: 'c3',
        to: 'c4',
        san: 'c4',
        response: { from: 'f8', to: 'd8', san: 'Rd8' }
      },
      {
        from: 'd4',
        to: 'd5',
        san: 'd5'
      }
    ]
  },
  {
    id: 'puz-desp-14',
    chapterId: 'despensa',
    title: 'Diagrama 14: Mikhail Botvinnik vs V. Smyslov (1954)',
    fen: 'r2q1rk1/pp1nbppp/2p1pn2/8/3P4/2NQ1N2/PPP2PPP/R1B2RK1 w - - 0 10',
    turn: 'w',
    difficulty: 1,
    hint: 'Centraliza el Caballo en e4 y recaptura con la Dama.',
    explanation: '1. Ne4! Nxe4 2. Qxe4! dominio central perfecto.',
    solutionMoves: [
      {
        from: 'c3',
        to: 'e4',
        san: 'Ne4',
        response: { from: 'f6', to: 'e4', san: 'Nxe4' }
      },
      {
        from: 'd3',
        to: 'e4',
        san: 'Qxe4'
      }
    ]
  },
  {
    id: 'puz-desp-15',
    chapterId: 'despensa',
    title: 'Diagrama 15: A. Koblenz vs J. Foltys (1936)',
    fen: '2r2rk1/pp3ppp/q3p3/3pP3/3P4/1PN2N2/P2Q1PPP/2R3K1 w - - 0 18',
    turn: 'w',
    difficulty: 1,
    hint: 'Desplaza el Caballo a a4 para penetrar en la casilla c5.',
    explanation: '1. Na4! b6 2. h3! control total de la columna c.',
    solutionMoves: [
      {
        from: 'c3',
        to: 'a4',
        san: 'Na4',
        response: { from: 'b7', to: 'b6', san: 'b6' }
      },
      {
        from: 'h2',
        to: 'h3',
        san: 'h3'
      }
    ]
  },
  {
    id: 'puz-desp-16',
    chapterId: 'despensa',
    title: 'Diagrama 16: E. Znosko-Borovsky vs A. Alekhine (1925)',
    fen: 'r4rk1/pp3ppp/2p1b3/q7/3P4/2P2B2/PP1Q1PPP/R3R1K1 w - - 0 16',
    turn: 'w',
    difficulty: 1,
    hint: 'Avanza la Torre a e5 ganando tiempo sobre la Dama negra.',
    explanation: '1. Re5! Qb6 2. b3! consolidación espacial.',
    solutionMoves: [
      {
        from: 'e1',
        to: 'e5',
        san: 'Re5',
        response: { from: 'a5', to: 'b6', san: 'Qb6' }
      },
      {
        from: 'b2',
        to: 'b3',
        san: 'b3'
      }
    ]
  },

  // CAPÍTULO 2: EL LABORATORIO DEL AJEDRECISTA
  {
    id: 'puz-lab-1',
    chapterId: 'laboratorio',
    title: 'Diagrama 2: Mikhail Tal vs Suetin (1969)',
    fen: 'r3r1k1/pp3ppp/2p5/3p4/3P1q2/2P2N1P/PP1Q1PP1/R5K1 w - - 0 20',
    turn: 'w',
    difficulty: 1,
    hint: 'Ocupa la columna e con Re1 ganando tiempo.',
    explanation: '1. Re1! Ocupación de la columna abierta e.',
    solutionMoves: [
      {
        from: 'a1',
        to: 'e1',
        san: 'Re1',
        response: { from: 'f4', to: 'd2', san: 'Qxd2' }
      },
      {
        from: 'f3',
        to: 'd2',
        san: 'Nxd2',
        response: { from: 'e8', to: 'e1', san: 'Rxe1+' }
      },
      {
        from: 'd1',
        to: 'e1',
        san: 'Rxe1+'
      }
    ]
  },
  {
    id: 'puz-lab-2',
    chapterId: 'laboratorio',
    title: 'Diagrama 3: Wilhelm Steinitz vs Von Bardeleben (1895)',
    fen: 'r4rk1/pp1n1ppp/2p1p3/8/3P1q2/2P2N2/PP2QPPP/R3R1K1 w - - 0 16',
    turn: 'w',
    difficulty: 2,
    hint: 'Penetra con la Dama en e7 atacando b7 y d7.',
    explanation: '1. Qe7! Infiltración de Dama en la 7ª fila.',
    solutionMoves: [
      {
        from: 'e2',
        to: 'e7',
        san: 'Qe7',
        response: { from: 'a8', to: 'e8', san: 'Rae8' }
      },
      {
        from: 'f3',
        to: 'e5',
        san: 'Ne5'
      }
    ]
  },

  // CAPÍTULO 3: DOS PÁJAROS DE UN TIRO
  {
    id: 'puz-paj-1',
    chapterId: 'pajaros',
    title: 'Diagrama 1: Emanuel Lasker vs Bauer (1889)',
    fen: 'r4rk1/pb2b1pp/1pq1p3/3p3n/5P2/1P1B4/PB1NQ1PP/R4RK1 w - - 0 15',
    turn: 'w',
    difficulty: 3,
    hint: 'Sacrifica ambos alfiles en h7 y g7, luego traslada la torre a h3.',
    explanation: '1. Bxh7+! Kxh7 2. Qxh5+! Kg8 3. Bxg7!! Kxg7 4. Qg4+! Kh7 5. Rf3! e5 6. Rh3+! Qh6 7. Rxh6+! Kxh6 8. Qd7! ataque doble.',
    solutionMoves: [
      {
        from: 'd3',
        to: 'h7',
        san: 'Bxh7+',
        response: { from: 'g8', to: 'h7', san: 'Kxh7' }
      },
      {
        from: 'e2',
        to: 'h5',
        san: 'Qxh5+',
        response: { from: 'h7', to: 'g8', san: 'Kg8' }
      },
      {
        from: 'b2',
        to: 'g7',
        san: 'Bxg7',
        response: { from: 'g8', to: 'g7', san: 'Kxg7' }
      },
      {
        from: 'h5',
        to: 'g4',
        san: 'Qg4+',
        response: { from: 'g7', to: 'h7', san: 'Kh7' }
      },
      {
        from: 'f1',
        to: 'f3',
        san: 'Rf3',
        response: { from: 'e6', to: 'e5', san: 'e5' }
      },
      {
        from: 'f3',
        to: 'h3',
        san: 'Rh3+',
        response: { from: 'c6', to: 'h6', san: 'Qh6' }
      },
      {
        from: 'h3',
        to: 'h6',
        san: 'Rxh6+',
        response: { from: 'h7', to: 'h6', san: 'Kxh6' }
      },
      {
        from: 'g4',
        to: 'd7',
        san: 'Qd7'
      }
    ]
  },
  {
    id: 'puz-paj-2',
    chapterId: 'pajaros',
    title: 'Diagrama 2: Alexander Alekhine vs Supico (1940)',
    fen: 'r1b1k2r/pppp1ppp/2n2q2/8/2B1P3/2N5/PPPP1PPP/R1BQK2R w KQkq - 0 7',
    turn: 'w',
    difficulty: 2,
    hint: 'Juega Nd5 amenazando la Dama y c7.',
    explanation: '1. Nd5! Qd8 2. Qg4! ataque doble a g7.',
    solutionMoves: [
      {
        from: 'c3',
        to: 'd5',
        san: 'Nd5',
        response: { from: 'f6', to: 'd8', san: 'Qd8' }
      },
      {
        from: 'd1',
        to: 'g4',
        san: 'Qg4'
      }
    ]
  },

  // CAPÍTULO 4: HORQUILLAS DE CABALLO Y PEÓN
  {
    id: 'puz-hor-1',
    chapterId: 'horquillas',
    title: 'Diagrama 1: Stahlberg vs Najdorf (1948)',
    fen: 'r1bqkb1r/pp3ppp/2n5/4p3/3pP3/5N2/PPP2PPP/R1BQKB1R w KQkq - 0 8',
    turn: 'w',
    difficulty: 2,
    hint: 'Desarrolla el Alfil a g5 y elimina el defensor de e7.',
    explanation: '1. Bg5! Be7 2. Bxe7 Qxe7 3. Nxd4! horquilla.',
    solutionMoves: [
      {
        from: 'c1',
        to: 'g5',
        san: 'Bg5',
        response: { from: 'f8', to: 'e7', san: 'Be7' }
      },
      {
        from: 'g5',
        to: 'e7',
        san: 'Bxe7',
        response: { from: 'd8', to: 'e7', san: 'Qxe7' }
      },
      {
        from: 'f3',
        to: 'd4',
        san: 'Nxd4'
      }
    ]
  },
  {
    id: 'puz-hor-3',
    chapterId: 'horquillas',
    title: 'Diagrama 3: Horquilla de Peón',
    fen: 'r1bqk2r/ppp2ppp/2n5/3np3/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 8',
    turn: 'w',
    difficulty: 1,
    hint: 'Avanza el peón a d5 para bifurcar dos caballos.',
    explanation: '1. d5! Bifurcación de peón a los Caballos de c6 y d5.',
    solutionMoves: [
      {
        from: 'd4',
        to: 'd5',
        san: 'd5'
      }
    ]
  },

  // CAPÍTULO 5: AL ACECHO
  {
    id: 'puz-ace-1',
    chapterId: 'acecho',
    title: 'Diagrama 1: Edward Lasker vs Sir George Thomas (1912)',
    fen: 'r1bq1rk1/ppp2ppp/2n5/1B1pP3/3P1n2/5N2/PP1N1PPP/R2Q1RK1 w - - 0 11',
    turn: 'w',
    difficulty: 3,
    hint: 'Elimina c6 con Bxc6, alinea la Dama en e2 y sacrifica la Dama en e6.',
    explanation: '1. Bxc6! bxc6 2. Qe2 Ne6 3. Qxe6+!! jaque doble.',
    solutionMoves: [
      {
        from: 'b5',
        to: 'c6',
        san: 'Bxc6',
        response: { from: 'b7', to: 'c6', san: 'bxc6' }
      },
      {
        from: 'd1',
        to: 'e2',
        san: 'Qe2',
        response: { from: 'f4', to: 'e6', san: 'Ne6' }
      },
      {
        from: 'e2',
        to: 'e6',
        san: 'Qxe6+'
      }
    ]
  },

  // CAPÍTULO 6: LA CLAVADA
  {
    id: 'puz-cla-1',
    chapterId: 'clavada',
    title: 'Diagrama 1: Alexander Koblenz - Clavada Mortal (1960)',
    fen: '4kb1r/p2r1p1p/4b1p1/4p3/4P3/8/PPP2PPP/R3KB1R w KQk - 0 10',
    turn: 'w',
    difficulty: 2,
    hint: 'Clava la Torre en d7 con Bb5 y retíralo a a4 sin capturar apresuradamente.',
    explanation: '1. Bb5! a6 2. Ba4! b5 3. Bb3! Ke7 4. Bxd7+ ganando la torre.',
    solutionMoves: [
      {
        from: 'f1',
        to: 'b5',
        san: 'Bb5',
        response: { from: 'a7', to: 'a6', san: 'a6' }
      },
      {
        from: 'b5',
        to: 'a4',
        san: 'Ba4',
        response: { from: 'b7', to: 'b5', san: 'b5' }
      },
      {
        from: 'a4',
        to: 'b3',
        san: 'Bb3',
        response: { from: 'e8', to: 'e7', san: 'Ke7' }
      },
      {
        from: 'b3',
        to: 'd7',
        san: 'Bxd7+'
      }
    ]
  },

  // CAPÍTULO 7: ARTERÍAS DE DAMISELA
  {
    id: 'puz-art-1',
    chapterId: 'arterias',
    title: 'Diagrama 1: Edwin Adams vs Carlos Torre (1920)',
    fen: '4r1k1/5ppp/q7/8/8/8/5PPP/1Q3RK1 w - - 0 1',
    turn: 'w',
    difficulty: 3,
    hint: 'Ofrece la Dama en b4, c4, c7 y a4 amenazando mate de pasillo en e8.',
    explanation: '1. Qb4! Qc6 2. Qc4! Qd6 3. Qc7! Qb4 4. a4! desviación de Dama.',
    solutionMoves: [
      {
        from: 'b1',
        to: 'b4',
        san: 'Qb4',
        response: { from: 'a6', to: 'c6', san: 'Qc6' }
      },
      {
        from: 'b4',
        to: 'c4',
        san: 'Qc4',
        response: { from: 'c6', to: 'd6', san: 'Qd6' }
      },
      {
        from: 'c4',
        to: 'c7',
        san: 'Qc7!',
        response: { from: 'd6', to: 'b4', san: 'Qb4' }
      },
      {
        from: 'a2',
        to: 'a4',
        san: 'a4!'
      }
    ]
  },

  // CAPÍTULO 8: MÉTODOS DE AUTODEFENSA
  {
    id: 'puz-aut-1',
    chapterId: 'autodefensa',
    title: 'Diagrama 1: Ossip Bernstein vs Vasily Smyslov (1946)',
    fen: '7k/7p/7P/8/8/8/6R1/7K w - - 0 1',
    turn: 'w',
    difficulty: 1,
    hint: '¡Lanza la Torre a g8! Si el Rey negro la captura, el Rey blanco queda AHOGADO.',
    explanation: '1. Rg8+! Absolute Desperado. 1... Kxg8 es Ahogado milagroso.',
    solutionMoves: [
      {
        from: 'g2',
        to: 'g8',
        san: 'Rg8+',
        response: { from: 'h8', to: 'g8', san: 'Kxg8' }
      }
    ]
  }
];
