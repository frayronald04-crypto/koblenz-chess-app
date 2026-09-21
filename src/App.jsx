import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { BookReader } from './components/reader/BookReader';
import { ChapterViewer } from './components/study/ChapterViewer';
import { PuzzleTrainer } from './components/trainer/PuzzleTrainer';
import { CHAPTERS } from './data/chapters';
import { EXAMPLES } from './data/examples';
import { PUZZLES } from './data/puzzles';
import { useLocalStorage } from './hooks/useLocalStorage';

export function App() {
  const [activeMode, setActiveMode] = useState('READING'); // 'READING', 'STUDY' or 'TRAINER'
  const [activeChapterId, setActiveChapterId] = useState(() => CHAPTERS[0]?.id || 'despensa');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Persistent storage hooks
  const [completedPuzzleIds, setCompletedPuzzleIds] = useLocalStorage('koblenz_completed_puzzles', []);
  const [boardTheme, setBoardTheme] = useLocalStorage('koblenz_board_theme', 'wood');
  const [isMuted, setIsMuted] = useLocalStorage('koblenz_sound_muted', false);

  // Safe fallback for completed puzzles array
  const safeCompletedPuzzleIds = useMemo(() => {
    return Array.isArray(completedPuzzleIds) ? completedPuzzleIds : [];
  }, [completedPuzzleIds]);

  // Filter examples & puzzles for current active chapter
  const activeChapter = useMemo(() => {
    return CHAPTERS.find((c) => c.id === activeChapterId) || CHAPTERS[0];
  }, [activeChapterId]);

  const chapterExamples = useMemo(() => {
    return EXAMPLES.filter((ex) => ex.chapterId === activeChapterId);
  }, [activeChapterId]);

  const chapterPuzzles = useMemo(() => {
    return PUZZLES.filter((puz) => puz.chapterId === activeChapterId);
  }, [activeChapterId]);

  // Build map of total & solved puzzles per chapter for sidebar badge
  const puzzlesPerChapterMap = useMemo(() => {
    const map = {};
    CHAPTERS.forEach((c) => {
      const puzs = PUZZLES.filter((p) => p.chapterId === c.id);
      map[c.id] = {
        total: puzs.length,
        puzzleIds: puzs.map((p) => p.id)
      };
    });
    return map;
  }, []);

  const totalPuzzlesCount = PUZZLES.length;
  const solvedCount = safeCompletedPuzzleIds.length;

  const handlePuzzleSolved = useCallback((puzzleId) => {
    setCompletedPuzzleIds((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      if (!currentList.includes(puzzleId)) {
        return [...currentList, puzzleId];
      }
      return currentList;
    });
  }, [setCompletedPuzzleIds]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header */}
      <Header
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        solvedCount={solvedCount}
        totalPuzzles={totalPuzzlesCount}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* Main Body Layout */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto">
        {/* Left Sidebar Menu */}
        <Sidebar
          activeChapterId={activeChapterId}
          onSelectChapter={setActiveChapterId}
          completedPuzzleIds={safeCompletedPuzzleIds}
          puzzlesPerChapterMap={puzzlesPerChapterMap}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          boardTheme={boardTheme}
          setBoardTheme={setBoardTheme}
        />

        {/* Main Content Area */}
        <main className={`flex-1 p-3 sm:p-5 max-w-[1700px] mx-auto w-full flex flex-col min-h-0 ${activeMode === 'READING' ? 'overflow-hidden h-[calc(100vh-4rem)]' : 'overflow-y-auto'}`}>
          {activeMode === 'READING' ? (
            <BookReader
              activeChapterId={activeChapterId}
              onSelectChapter={setActiveChapterId}
              onSwitchMode={setActiveMode}
              boardTheme={boardTheme}
            />
          ) : activeMode === 'STUDY' ? (
            <ChapterViewer
              chapter={activeChapter}
              examples={chapterExamples}
              boardTheme={boardTheme}
            />
          ) : (
            <PuzzleTrainer
              chapter={activeChapter}
              puzzles={chapterPuzzles}
              completedPuzzleIds={safeCompletedPuzzleIds}
              onPuzzleSolved={handlePuzzleSolved}
              boardTheme={boardTheme}
            />
          )}
        </main>
      </div>

      {/* Subtle Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-4 px-6 text-center text-xs text-slate-400">
        <p>
          Inspirado en el libro clásico <strong className="text-slate-300">«El mundo mágico de las combinaciones»</strong> de Alexander Koblenz.
        </p>
      </footer>
    </div>
  );
}

export default App;
