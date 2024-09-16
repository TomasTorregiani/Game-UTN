import "../styles/components/layout/footer.css"
import { FaSmile } from "react-icons/fa";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";


export const Footer = () => {
    return (
        <div id="footerDiv">
            <p><FaSmile /> Created By Tom <BsEmojiSmileUpsideDownFill />
            </p>
        </div>
    )
}