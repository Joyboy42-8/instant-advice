import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAdvice = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then((json) => setAdvice(json.slip?.advice || "Aucun conseil trouvé"))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  return { advice, loading, error, refetch: fetchAdvice };
}
