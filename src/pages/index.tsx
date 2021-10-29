import Card from "../components/Card";
import Logo from "../components/LogoSwitch";
import {NavBar} from "../components/Navbar";
import Meta from "../components/Meta";

export default function Home() {
    return (
        <>
            <Meta/>
            <div className="max-w-lg mx-auto mt-20 p-10 justify-center items-center bg-gray-50 dark:bg-gray-rich-black">
                <NavBar/>
                <div className="flex items-center justify-center mb-5">
                    <Logo/>
                </div>
                <h2 className="text-center font-bold text-4xl text-gray-800 dark:text-gray-200">Couleur's Tech Tips</h2>

                <h3 className={"rounded-md mb-6 mt-3 text-center p-2 bg-gray-200 dark:bg-gray-space-gray text-gray-800 dark:text-gray-200"}>
                    Come and learn about OBS, Windows, and more!
                </h3>
                <div className="grid grid-cols-1 gap-3">
                    <Card
                        title="Discord"
                        description="Our community with free and open guides!"
                        href="https://discord.gg/rfuypDgZV6"
                        color="bg-socials-discord"/>
                    <Card
                        title="GitHub"
                        description="All guides in CTT are open source! Come check out the code."
                        href="https://github.com/couleur-tweak-tips"
                        color="bg-gray-space-gray dark:bg-socials-github"/>
                    <Card
                        title="Twitter"
                        description="Our Twitter account that releases updates and sneak peeks."
                        href="https://twitter.com/CouleurTweaks"
                        color="bg-socials-twitter"/>
                    <Card
                        title="Youtube"
                        description="Check out Couleur's Youtube channel. :content:"
                        href="https://www.youtube.com/channel/UCgGXSd7IFxBafHxYs7Omb9Q"
                        color="bg-socials-youtube"/>
                </div>
            </div>
        </>
    )
}
