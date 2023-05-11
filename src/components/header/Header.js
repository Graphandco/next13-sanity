import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
    const links = [
        { label: "Accueil", path: "/", targetSegment: null },
        {
            label: "Réalisations",
            path: "/realisations",
            targetSegment: "realisations",
        },
        {
            label: "Prestations",
            path: "/prestations",
            targetSegment: "prestations",
        },
        { label: "Blog", path: "/blog", targetSegment: "blog" },
        { label: "Contact", path: "/contact", targetSegment: "contact" },
        // {label: '📘 About', path: '/about', targetSegment: 'about'}
    ];
    const topbarWords = [
        "Création de sites web",
        "Identité visuelle",
        "Sites sur-mesure",
        "Branding",
    ];

    return (
        <>
            <header id="site-header" className="z-50">
                <div className="topbar bg-image-black hidden md:flex overflow-hidden py-1">
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
                <div className="container-xl pt-5">
                    <div className="flex items-center justify-between border-y-2 border-black py-2 md:py-5 overflow-hidden ">
                        <div className="text-black text-var(--title-font) font-semibold">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/logo-black.svg"
                                    width={30}
                                    height={30}
                                    alt="Site Logo"
                                />
                                <span>Graph and co</span>
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
                        </nav>
                        <div>
                            <MobileNav links={links} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
