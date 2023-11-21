import { useEffect, useState } from 'react';

//Types
//Local types
type Props = {
  API: string;
};

//Works only client side (does not work on server side)
const useFetchingData = ({ API }: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);
  return { data, loading, error };
};

export default useFetchingData;
