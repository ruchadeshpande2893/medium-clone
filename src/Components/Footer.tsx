import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="flex justify-center items-center border-t border-black">
            <div className="grid grid-cols-[50px_50px_50px_50px_50px_50px_50px_50px_100px_50px] font-extralight text-xs">
                <Link className="justify-self-center self-center" to="/">Help</Link>
                <Link className="justify-self-center self-center" to="/">Status</Link>
                <Link className="justify-self-center self-center" to="/about">About</Link>
                <Link className="justify-self-center self-center" to="/">Careers</Link>
                <Link className="justify-self-center self-center" to="/">Press</Link>
                <Link className="justify-self-center self-center" to="/">Blog</Link>
                <Link className="justify-self-center self-center" to="/">Privacy</Link>
                <Link className="justify-self-center self-center" to="/">Terms</Link>
                <Link className="justify-self-center self-center" to="/">Text to speech</Link>
                <Link className="justify-self-center self-center" to="/">Teams</Link>
            </div>
        </div>
    )
}