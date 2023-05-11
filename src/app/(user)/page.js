import Competences from "@/components/homepage/Competences";
import Hero from "@/components/homepage/Hero";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Reassurance from "@/components/homepage/Reassurance";

const competenceAVotreservice = groq`
*[_type=='textBlock' && localisation == "home" && slug.current == "nos-competences-a-votre-service"] {
    ...,
}
`;
const bonSiteWeb = groq`
*[_type=='textBlock' && localisation == "home" && slug.current == "qu-est-ce-qu-un-bon-site-web"] {
    ...,
}
`;

export default async function Home() {
    const competences = await client.fetch(competenceAVotreservice);
    const unBonSiteWeb = await client.fetch(bonSiteWeb);
    // console.log(blocs);

    // const CurvyRef = useRef();

    return (
        <>
            <Hero />
            <Reassurance />
            <Competences
                competences={competences}
                unBonSiteWeb={unBonSiteWeb}
            />
        </>
    );
}
