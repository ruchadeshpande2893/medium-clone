import FooterLite from "../Components/FooterLite";
import HeaderLite from "../Components/HeaderLite";


export default function About() {
    return (
        <div className="grid grid-rows-[10vh_auto_30vh_30vh_30vh_10vh] bg-[#242424]">
            <HeaderLite />
            <div className="text-white grid grid-cols-2 ml-10 text-xl">
                <div className="font-serif grid">
                    <div className="text-8xl mt-40">
                        <h2>Everyone has a story to tell</h2>
                    </div>
                    <div className="mt-20">
                        <p>Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</p>
                    </div>
                    <div className="font-sans text-3xl mt-10 font-thin">
                        <p className="bg-gray-500 inline">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</p>
                    </div>
                    <div className="mt-10">
                        <p>We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                    </div>
                    <div className="mt-10">
                        <p>Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                    </div>
                    <div className="mt-10 mb-40">
                        <p>Instead of selling ads or selling your data, we’re supported by a growing community of over a million Medium members who believe in our mission. If you’re new here, start reading. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story.</p>
                    </div>
                </div>
                <div>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/7*3l9Fl9UIQBgkR_Vu2_ihLg.png" />
                </div>
            </div>
            <div className="grid grid-cols-2 font-serif border-t border-b border-white text-white text-7xl hover:bg-white hover:text-[#242424]">
                <h2 className="ml-10 self-center">Start reading</h2>
                <p className="justify-self-end self-center mr-7">&rarr;</p>
            </div>
            <div className="grid grid-cols-2 font-serif border-t border-b border-white text-white text-7xl hover:bg-white hover:text-[#242424]">
                <h2 className="ml-10 self-center">Start writing</h2>
                <p className="justify-self-end self-center mr-7">&rarr;</p>
            </div>
            <div className="grid grid-cols-2 font-serif border-b border-white text-white text-7xl hover:bg-white hover:text-[#242424]">
                <h2 className="ml-10 self-center">Become a member</h2>
                <p className="justify-self-end self-center mr-7">&rarr;</p>
            </div>
            <FooterLite />
        </div>
    )
}
