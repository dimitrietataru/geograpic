export interface ILayerEuropeClickProps {
  continentCode: string;
  countryCode: string;
}

export interface ILayerEuropeProps {
  onClick: (props: ILayerEuropeClickProps) => void;
}
