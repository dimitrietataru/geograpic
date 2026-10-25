import { useEffect, useState } from 'react';
import type { TStyledGeoJson } from '../../types/geo/TStyledGeoJson';

const FILE_PATH = '/map/world.geojson';

export default function useWorldGeoJson() {
  const [data, setData] = useState<TStyledGeoJson | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(FILE_PATH)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load GeoJSON: ${response.status}.`);
        }

        return response.json();
      })
      .then((json: TStyledGeoJson) => {
        if (!cancelled) {
          setData(json);
        }
      })
      .catch((error: unknown) => {
        console.log(`Failed to load GeoJSON from ${FILE_PATH}.`, error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
