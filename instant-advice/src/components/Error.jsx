import { Link } from "react-router";
import { Messages } from "../utils/messages";

export default function Error() {
    return(
        <main>
            <p className="Message">
                {Messages[404]}
            </p>
            <Link to="/" className="Link">Return to Home</Link>
        </main>
    );
}