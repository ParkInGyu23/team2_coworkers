import { CommentDto } from '../dto/comment.dto';
import { Comment } from '../entities/comment.model';

export function toComment(dto: CommentDto): Comment {
  return {
    ...dto,
    createdAt: new Date(dto.createdAt),
    updatedAt: new Date(dto.updatedAt),
  };
}
