import Navbar1 from "./Navbar1"
import Footer from "./Footer"
import Newsletter from "./Newsletter"
import Banner from "./Banner"

export default function MainComponent({ children }) {
    return (<>

        <Navbar1 />
        <Banner />
        <main>{children}</main>
        <Newsletter />
        <Footer />


    </>)
}