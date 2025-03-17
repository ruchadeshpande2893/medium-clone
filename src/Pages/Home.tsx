import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Home() {
    return (
        <div className="grid grid-rows-[10vh_80vh_10vh] bg-[#F7F4ED]">
            <Header />
            <div className="grid grid-cols-[60vw_40vw] h-full">
                <div className="grid grid-rows-[45vh_35vh] justify-self-center">
                    <div className="font-serif text-8xl self-end">
                        <h2>Human</h2>
                        <h2>stories & ideas</h2>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="text-2xl self-center font-light">
                            <p>A place to read, write, and deepen your understanding</p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-50 m-1 p-2 rounded-full bg-black text-white self-start text-lg">
                            <Button type="button" value="Start reading" />
                        </div>
                    </div>
                </div>
                <div className="justify-self-end">
                    <img className="mt-2" src="../../images/home-image.webp" width="460" height="600" />
                </div>
            </div >
            <Footer />
        </div>
    )
}