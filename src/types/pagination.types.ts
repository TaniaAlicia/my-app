export type PaginationType = {
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
  first: boolean;
  last: boolean;
};

export type PageType<T> = {
  pagination: PaginationType;
  content: T[];
};
