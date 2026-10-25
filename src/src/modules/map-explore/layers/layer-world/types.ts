export interface ILayerWorldClickProps {
  continentCode: string;
  boundaries: google.maps.LatLngBoundsLiteral;
  center: google.maps.LatLngLiteral;
}

export interface ILayerWorldProps {
  onClick: (props: ILayerWorldClickProps) => void;
}
