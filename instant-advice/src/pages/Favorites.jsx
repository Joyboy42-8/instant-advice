import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Any from "../components/Any";
import { Messages } from "../utils/messages";

export default function Favorites() {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const handleDelete = (advice) => {
        setFavorites(favorites.filter(fav => fav != advice));
        toast.success(Messages.deleted);
    }

    if(favorites.length == 0) return <Any />

    return(
        <main className="Favorites">
            <h2>Favorites <span className="Sub">Advices</span> ❤</h2>
            <ul>
                {favorites.map((fav, index) => (
                    <li key={index}>
                        📣 : { fav }
                        <div>
                            <button className="Trash" onClick={() => {
                                handleDelete(fav);
                            }}>
                                <Trash color="red" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link className="Link" to="/">
                Home
            </Link>
        </main>
    );
}