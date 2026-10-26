import { useEffect, useState } from 'react';
import { toContinentPath } from '../../mappers/geo/geo-json-mapper';
import type { StyledGeoJson } from '../../types/geo/StyledGeoJson';

export default function useContinentGeoJson(code: string) {
  const [data, setData] = useState<StyledGeoJson | null>(null);
  const filePath = toContinentPath(code);

  useEffect(() => {
    let cancelled = false;

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load GeoJSON: ${response.status}.`);
        }

        return response.json();
      })
      .then((json: StyledGeoJson) => {
        if (!cancelled) {
          setData(json);
        }
      })
      .catch((error: unknown) => {
        console.log(`Failed to load GeoJSON from ${filePath}.`, error);
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return data;
}
