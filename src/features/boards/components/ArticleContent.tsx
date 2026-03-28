import KebabMenu from '@/features/boards/components/KebabMenu';
import { IconUser } from '@/shared/ui/icons';
import { useState } from 'react';
import { Article } from '../model/entities/article.model';

interface Props{
  article:Article
}
export default function ArticleContent({ article }:Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mt-7">
        <h1 className="flex-1 text-xl font-bold break-all">{article.title}</h1>

        <KebabMenu
          onEdit={() => console.log('게시글 수정')}
          onDelete={() => console.log('게시글 삭제')}
        />
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <IconUser size={24} className="rounded-[6px] bg-slate-200 text-white" />
        <div className="text-md font-medium">{article.writer.nickname}</div>
        <div>|</div>
        <div className="text-slate-400">{article.createdAt.toLocaleDateString()}</div>
      </div>

      <div className="text-md leading-relaxed whitespace-pre-line">{article.content}</div>

      {article.image &&
        (!imgError ? (
          <img
            src={article.image}
            alt={article.title}
            className="h-35 w-35 rounded-xl border"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-35 w-35 items-center justify-center rounded-xl border bg-gray-100 text-gray-400">
            이미지 오류
          </div>
        ))}
    </>
  );
}
