import { useEffect, useState } from 'react';

function useAsyncOnMount(asyncFunc: () => Promise<void>): boolean {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        await asyncFunc();
      } catch {
        // setIsReady(false);
      } finally {
        setIsReady(true);
      }
    })();
  }, [asyncFunc]);

  return isReady;
}

export default useAsyncOnMount;
