export type Comment = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    id: number;
    nickname: string;
    image: string;
  };
};
