export interface Ibrief {
  id: number;
  title: string;
  comment: string;
  productId: number;
}

export interface Ibriefs {
  loading: boolean;
  briefs: Ibrief;
}

export interface Iproducts{
  loading: boolean;
  products: Iproduct
}

export interface Iproduct {
  name: string;
  id: number;
}
