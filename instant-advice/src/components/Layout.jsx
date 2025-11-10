import { Outlet } from "react-router";
import JOYBOY from "./JOYBOY";

export default function Layout() {
    return(
        <main className="Layout">
            <Outlet />
            <JOYBOY />
        </main>
    );
}