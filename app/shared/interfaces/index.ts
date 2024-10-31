export interface IGenericIcon {
  size?: string;
  customClass?: string;
  strokeWidth?: number;
  isFilled?: boolean;
}

export interface IBaseLangPage {
  params: Promise<{
    lng: string;
  }>;
}
