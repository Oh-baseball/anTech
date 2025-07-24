import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

interface Point {
  id: number;
  x: number;
  y: number;
  row: number;
  col: number;
}

interface DrawingState {
  pattern: number[];
  isDrawing: boolean;
  currentPath: Point[];
  attemptCount: number;
  isLocked: boolean;
  errorMessage: string;
}

interface PatternLine {
  id: string;
  points: Point[];
  shouldFade: boolean;
}

const PatternLockDemo: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // 설정된 패턴 (실제로는 서버에서 가져와야 함)
  const correctPattern = [1, 2, 3, 6, 9, 8, 7, 4, 5];

  const [state, setState] = useState<DrawingState>({
    pattern: [],
    isDrawing: false,
    currentPath: [],
    attemptCount: 0,
    isLocked: false,
    errorMessage: '',
  });

  const [patternLines, setPatternLines] = useState<PatternLine[]>([]);
  const [currentPos, setCurrentPos] = useState<{ x: number; y: number } | null>(null);
  const [sparkles, setSparkles] = useState<
    Array<{ id: string; x: number; y: number; timestamp: number }>
  >([]);

  const generatePoints = useCallback((): Point[] => {
    const points: Point[] = [];
    const size = 250;
    const spacing = size / 3;
    const offset = spacing / 2;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        points.push({
          id: row * 3 + col + 1,
          x: offset + col * spacing,
          y: offset + row * spacing,
          row,
          col,
        });
      }
    }
    return points;
  }, []);

  const points = generatePoints();

  const findPointAt = useCallback(
    (x: number, y: number): Point | null => {
      const container = containerRef.current;
      if (!container) return null;

      const rect = container.getBoundingClientRect();
      const svgX = x - rect.left;
      const svgY = y - rect.top;

      return (
        points.find((point) => {
          const distance = Math.sqrt(Math.pow(svgX - point.x, 2) + Math.pow(svgY - point.y, 2));
          return distance <= 20;
        }) || null
      );
    },
    [points],
  );

  const createSparkle = (x: number, y: number) => {
    const sparkleId = `sparkle-${Date.now()}-${Math.random()}`;
    setSparkles((prev) => [...prev, { id: sparkleId, x, y, timestamp: Date.now() }]);

    // 1500ms 후에 sparkle 제거
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkleId));
    }, 1500);
  };

  const getPointsBetween = (from: Point, to: Point): Point[] => {
    const intermediatePoints: Point[] = [];

    const rowDiff = to.row - from.row;
    const colDiff = to.col - from.col;

    if (rowDiff !== 0 && colDiff !== 0 && Math.abs(rowDiff) !== Math.abs(colDiff)) {
      return [];
    }

    if (Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1) {
      return [];
    }

    const rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;
    const colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    let currentRow = from.row + rowStep;
    let currentCol = from.col + colStep;

    while (currentRow !== to.row || currentCol !== to.col) {
      const intermediatePoint = points.find((p) => p.row === currentRow && p.col === currentCol);
      if (intermediatePoint) {
        intermediatePoints.push(intermediatePoint);
      }
      currentRow += rowStep;
      currentCol += colStep;
    }

    return intermediatePoints;
  };

  const startPattern = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (state.isLocked) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const point = findPointAt(clientX, clientY);
    if (!point) return;

    createSparkle(point.x, point.y);

    setState((prev) => ({
      ...prev,
      isDrawing: true,
      currentPath: [point],
      pattern: [point.id],
      errorMessage: '',
    }));
    setPatternLines([]);
  };

  const drawPatternInProgress = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      // e.preventDefault();
      if (!state.isDrawing || state.isLocked) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const newPos = { x: clientX - rect.left, y: clientY - rect.top };
      setCurrentPos(newPos);

      const newPoint = findPointAt(clientX, clientY);
      if (newPoint && !state.currentPath.some((p) => p.id === newPoint.id)) {
        const lastPoint = state.currentPath[state.currentPath.length - 1];

        const intermediatePoints = getPointsBetween(lastPoint, newPoint);

        if (intermediatePoints.length > 0) {
          const unselectedIntermediate = intermediatePoints.filter(
            (point) => !state.currentPath.some((p) => p.id === point.id),
          );

          if (unselectedIntermediate.length > 0) {
            const firstUnselected = unselectedIntermediate[0];

            createSparkle(firstUnselected.x, firstUnselected.y);

            const intermediateLineSegment: PatternLine = {
              id: `segment-${lastPoint.id}-${firstUnselected.id}-${Date.now()}`,
              points: [lastPoint, firstUnselected],
              shouldFade: true,
            };

            setPatternLines((prev) => [...prev, intermediateLineSegment]);

            setTimeout(() => {
              setPatternLines((prev) =>
                prev.filter((line) => line.id !== intermediateLineSegment.id),
              );
            }, 2000);

            setState((prev) => ({
              ...prev,
              currentPath: [...prev.currentPath, firstUnselected],
              pattern: [...prev.pattern, firstUnselected.id],
            }));

            return;
          }
        }

        // 새로운 포인트에 별 반짝임 효과 추가
        createSparkle(newPoint.x, newPoint.y);

        const newLineSegment: PatternLine = {
          id: `segment-${lastPoint.id}-${newPoint.id}-${Date.now()}`,
          points: [lastPoint, newPoint],
          shouldFade: true,
        };

        setPatternLines((prev) => [...prev, newLineSegment]);

        setTimeout(() => {
          setPatternLines((prev) => prev.filter((line) => line.id !== newLineSegment.id));
        }, 2000);

        setState((prev) => ({
          ...prev,
          currentPath: [...prev.currentPath, newPoint],
          pattern: [...prev.pattern, newPoint.id],
        }));
      }
    },
    [state.isDrawing, state.isLocked, state.currentPath, findPointAt],
  );

  const completePattern = () => {
    if (!state.isDrawing || state.isLocked) return;

    if (state.pattern.length < 4) {
      setState((prev) => ({ ...prev, pattern: [], currentPath: [], isDrawing: false }));
      setPatternLines([]);
      setCurrentPos(null);
      return;
    }

    const isCorrect =
      state.pattern.length === correctPattern.length &&
      state.pattern.every((id, index) => id === correctPattern[index]);

    if (isCorrect) {
      setState((prev) => ({
        ...prev,
        isDrawing: false,
        errorMessage: '인증 성공!',
      }));

      setTimeout(() => {
        setPatternLines([]);
        setCurrentPos(null);
        navigate('/');
      }, 1000);
    } else {
      const newAttemptCount = state.attemptCount + 1;
      const remainingAttempts = 5 - newAttemptCount;

      if (containerRef.current) {
        containerRef.current.classList.add(styles.pattern_error);
        setTimeout(() => {
          containerRef.current?.classList.remove(styles.pattern_error);
        }, 500);
      }

      setState((prev) => ({
        ...prev,
        attemptCount: newAttemptCount,
        isLocked: newAttemptCount >= 5,
        pattern: [],
        currentPath: [],
        isDrawing: false,
        errorMessage:
          newAttemptCount >= 5
            ? '시도 횟수를 초과했습니다. PIN 인증을 이용해주세요.'
            : `잘못된 패턴입니다. ${remainingAttempts}번 더 시도할 수 있습니다.`,
      }));

      setPatternLines([]);
      setCurrentPos(null);
    }
  };

  const resetPattern = () => {
    setState({
      pattern: [],
      isDrawing: false,
      currentPath: [],
      attemptCount: 0,
      isLocked: false,
      errorMessage: '',
    });
    setPatternLines([]);
    setCurrentPos(null);
    setSparkles([]);
  };

  const goToPinAuth = () => {
    navigate('/auth/pin');
  };

  const createSVGPath = (points: Point[]) => {
    if (points.length < 2) return '';
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  };

  return (
    <div className={styles.pattern_container}>
      <header className={styles.header}>
        <h3>패턴 인증</h3>
        <h4>등록된 패턴을 그려주세요</h4>
      </header>

      <div className={styles.status_display}>
        <div className={styles.attempt_counter}>
          <span>시도 횟수: {state.attemptCount}/5</span>
        </div>
        {state.errorMessage && (
          <div
            className={`${styles.error_message} ${state.errorMessage.includes('성공') ? styles.success : ''}`}
          >
            {state.errorMessage}
          </div>
        )}
      </div>

      <main className={styles.pattern_area}>
        <div
          ref={containerRef}
          className={styles.pattern_svg_container}
          onMouseDown={startPattern}
          onMouseMove={drawPatternInProgress}
          onMouseUp={completePattern}
          onMouseLeave={completePattern}
          onTouchStart={startPattern}
          onTouchMove={drawPatternInProgress}
          onTouchEnd={completePattern}
        >
          <svg width="250" height="250" className={styles.pattern_svg} viewBox="0 0 250 250">
            <g>
              {points.map((point) => {
                const isSelected = state.currentPath.some((p) => p.id === point.id);
                return (
                  <circle
                    key={point.id}
                    cx={point.x}
                    cy={point.y}
                    r={isSelected ? 12 : 8}
                    fill={isSelected ? '#528eff' : '#e5f1fe'}
                    stroke="#528eff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>

            {/* 개별 선분들 그리기 */}
            {patternLines.map((line) => (
              <path
                key={line.id}
                d={createSVGPath(line.points)}
                stroke="#528eff"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={line.shouldFade ? styles.pattern_fade : ''}
              />
            ))}

            {/* 현재 손가락/마우스를 따라다니는 선 */}
            {state.isDrawing && state.currentPath.length > 0 && currentPos && (
              <path
                d={`M ${state.currentPath[state.currentPath.length - 1].x} ${
                  state.currentPath[state.currentPath.length - 1].y
                } L ${currentPos.x} ${currentPos.y}`}
                stroke="#528eff"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.pattern_active}
              />
            )}

            {/* 별 반짝임 효과 */}
            {sparkles.map((sparkle) => (
              <g key={sparkle.id} className={styles.sparkle_group}>
                {/* 중앙 별 */}
                <polygon
                  points={`${sparkle.x},${sparkle.y - 8} ${sparkle.x + 3},${sparkle.y - 3} ${sparkle.x + 8},${sparkle.y} ${sparkle.x + 3},${sparkle.y + 3} ${sparkle.x},${sparkle.y + 8} ${sparkle.x - 3},${sparkle.y + 3} ${sparkle.x - 8},${sparkle.y} ${sparkle.x - 3},${sparkle.y - 3}`}
                  fill="#ffffff"
                  className={styles.sparkle_star}
                />
                {/* 작은 별들 */}
                <circle
                  cx={sparkle.x + 15}
                  cy={sparkle.y - 10}
                  r="2"
                  fill="#528eff"
                  className={styles.sparkle_dot}
                />
                <circle
                  cx={sparkle.x - 12}
                  cy={sparkle.y + 8}
                  r="1.5"
                  fill="#ffffff"
                  className={styles.sparkle_dot}
                />
                <circle
                  cx={sparkle.x + 8}
                  cy={sparkle.y + 12}
                  r="1"
                  fill="#528eff"
                  className={styles.sparkle_dot}
                />
                <circle
                  cx={sparkle.x - 10}
                  cy={sparkle.y - 8}
                  r="1.5"
                  fill="#ffffff"
                  className={styles.sparkle_dot}
                />
                <circle
                  cx={sparkle.x + 12}
                  cy={sparkle.y + 5}
                  r="1"
                  fill="#528eff"
                  className={styles.sparkle_dot}
                />
                {/* 반짝임 링 */}
                <circle
                  cx={sparkle.x}
                  cy={sparkle.y}
                  r="15"
                  fill="none"
                  stroke="rgba(82, 142, 255, 0.3)"
                  strokeWidth="1"
                  className={styles.sparkle_ring}
                />
              </g>
            ))}
          </svg>
        </div>
      </main>

      <footer className={styles.footer}>
        <button className={styles.secondary} onClick={resetPattern} disabled={state.isDrawing}>
          다시 그리기
        </button>
        <div className={styles.footer_divider}></div>
        <button className={styles.secondary} onClick={goToPinAuth} disabled={state.isDrawing}>
          PIN 인증
        </button>
      </footer>
    </div>
  );
};

export default PatternLockDemo;
