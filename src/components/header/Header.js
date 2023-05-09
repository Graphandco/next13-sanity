import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
    const links = [
        { label: "Accueil", path: "/", targetSegment: null },
        { label: "Réalisation", path: "/rea", targetSegment: "blog" },
        { label: "Blog", path: "/blog", targetSegment: "blog" },
        { label: "Contact", path: "/contact", targetSegment: "blog" },
        // {label: '📘 About', path: '/about', targetSegment: 'about'}
    ];

    return (
        <header className="container-xl bg-secondary mb-10">
            <div className="flex items-center justify-between">
                <div className="logo bg-secondary p-1 rounded-full translate-y-4 border-secondary border-4">
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
                    <ul className=" hidden md:flex items-center gap-5">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink {...link} />
                            </li>
                        ))}
                    </ul>
                    <MobileNav links={links} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
