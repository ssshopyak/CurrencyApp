export interface ICurrencyItem {
  code: string;
  rate: number;
  isFavorite?: boolean;
  onToggleFavorite: (currency: string) => void;
  isRemove?: boolean;
}