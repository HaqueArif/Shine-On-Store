export type TProduct = {
  _id: string;
  id: string;
  name: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  flashSale: boolean;
};

export type TCategories = {
  category: string;
  image: string;
};

export type data = {
  products: TProduct[];
  category: TCategories[];
}[];

export type SidebarComponentProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};
export type StarRatingProps = {
  rating: number;
  onClick: (rating: number) => void;
};

export type ProductId = {
  params: {
    productId: string;
  };
};
