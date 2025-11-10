import { useEffect } from "react";
import { toast } from "react-toastify";
import Advice from "./components/Advice";
import Button from "./components/Button";
import Layout from "./components/Layout";
import { useFetch } from "./components/Hooks";

export default function App() {
  const { advice, loading, error, refetch } = useFetch("https://api.adviceslip.com/advice");


  useEffect(() => {
    let loadingToast;
    if (loading) {
      loadingToast = toast.info("Chargement du conseil...");
    } else {
      toast.dismiss(loadingToast);
    }
  }, [loading]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <Layout>
      <Advice advice={advice} />
      <Button onChangeAdvice={refetch} />
    </Layout>
  );
}