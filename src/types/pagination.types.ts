export type PaginationType = {
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
  first: boolean;
  last: boolean;
};

export type PageType<T> = {
  length: number;
  pagination: PaginationType;
  content: T[];
};
