import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Advice from "../components/Advice";
import Button from "../components/Button";
import { useFetch } from "../components/Hooks";
import Like from "../components/Like";
import Actions from "../components/Actions";
import { Link } from "react-router";
import { Messages } from "../utils/messages";

export default function Home() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [liked, setLiked] = useState(false);
  const { advice, loading, error, refetch } = useFetch("https://api.adviceslip.com/advice");

  const handleFavorite = (liked) => {
    if(!liked) {
        setFavorites([advice, ...favorites])
        toast.success(Messages.added);
    } else {
        setFavorites(favorites.filter(ad => ad !== advice));
        toast.success(Messages.deleted);
    };
  }
 
  useEffect(() => {
    let loadingToast;
    if (loading) {
      loadingToast = toast.info(Messages.loading);
    } else {
      toast.dismiss(loadingToast);
    }
  }, [loading]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <main className="Home">
      <Advice advice={advice} />
      <Actions>
        <Button onChangeAdvice={refetch} resetLiked={setLiked} />
        <Like liked={liked} setLiked={setLiked} onLike={handleFavorite} />
      </Actions>
      <Link className="Link" to="/favorites">
        Favorites
      </Link>
    </main>
  );
}