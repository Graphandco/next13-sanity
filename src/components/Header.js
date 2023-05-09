import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const Header = () => {
    const links = [
        { label: "Accueil", path: "/", targetSegment: null },
        { label: "Blog", path: "/blog", targetSegment: "blog" },
        // {label: '📘 About', path: '/about', targetSegment: 'about'}
    ];

    return (
        <header className="container-xl">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            alt="Site Logo"
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center gap-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink {...link} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
