import { useEffect, useState } from 'react';
import { Article } from '@/features/boards/model/entities/article.model';

export function useBestArticles(articles: Article[]) {
  const [current, setCurrent] = useState(0);
  const [bestCount, setBestCount] = useState(1);

  const getBestCount = () => {
    if (typeof window === 'undefined') return 1;

    if (window.matchMedia('(min-width: 1024px)').matches) return 3;
    if (window.matchMedia('(min-width: 768px)').matches) return 2;
    return 1;
  };

  function debounce(fn: () => void, delay: number) {
    let timer: NodeJS.Timeout;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  useEffect(() => {
    const handleResize = debounce(() => {
      setBestCount(getBestCount());
    }, 50);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedList = articles?.slice().sort((a, b) => b.likeCount - a.likeCount);
  const total = Math.ceil(sortedList.length / bestCount);

  const visibleBest = sortedList.slice(
    current * bestCount,
    current * bestCount + bestCount
  );

  useEffect(() => {
    if (total === 0) {
      setCurrent(0);
      return;
    }
    if (current >= total) {
      setCurrent(total - 1);
    }
  }, [bestCount, total]);

  return {
    current,
    total,
    visibleBest,
    setCurrent,
  };
}