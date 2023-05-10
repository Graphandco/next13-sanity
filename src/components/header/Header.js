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
    const topbarWords = [
        "Création de sites web",
        "Définir vos besoins",
        "Sites sur-mesure",
        "Branding",
    ];

    return (
        <>
            <header>
                <div className="topbar flex overflow-hidden py-1">
                    {topbarWords.map((word, index) => (
                        <span
                            key={index}
                            className="text-accent uppercase whitespace-nowrap"
                        >
                            {word}
                        </span>
                    ))}
                    {topbarWords.map((word, index) => (
                        <span
                            key={index}
                            className="text-accent title-font uppercase whitespace-nowrap"
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </header>
            <div className="container-xl bg-grain-jaune py-5">
                <div className="flex items-center justify-between border-y-2 border-black py-2 overflow-hidden">
                    <div className="logo bg-black rounded-full border-1 border-black">
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
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Header;
