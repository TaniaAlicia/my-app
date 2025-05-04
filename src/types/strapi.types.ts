export type StrapiPaginationType = {
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
};

export type StrapiResultType<T> = {
  "data": T[];
  "meta": {
    pagination: StrapiPaginationType;
  };
};


