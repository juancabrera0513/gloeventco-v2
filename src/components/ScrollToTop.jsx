import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sube al tope en cada cambio de ruta.
 * Respeta anclas (#section) para no interferir con scroll a IDs.
 */
export default function ScrollToTop({ behavior = 'auto' }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // si hay ancla, deja que el navegador haga su scroll
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
