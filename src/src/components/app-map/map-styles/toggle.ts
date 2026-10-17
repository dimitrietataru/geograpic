export const toggleVisibility = (
  featureType: string,
  elementType: string,
  value: boolean,
): google.maps.MapTypeStyle => {
  return {
    featureType: featureType,
    elementType: elementType,
    stylers: [{ visibility: value === true ? 'on' : 'off' }],
  };
};
