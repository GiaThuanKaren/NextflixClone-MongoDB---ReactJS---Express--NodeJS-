import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
import {} from '@fortawesome/free-solid-svg-icons'



export default function Footer(){
    return (
    <>
    <div className="Footer-Container row">
        <div className="Footer-Container-Left l-3 m-0 c-0">
            <img 
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
            className="Footer-Img"
            />
        </div>
        <div className="Footer-Container-Right l-9 m-12 c-12">
            <div  className="Footer_wrapper_link row">
                <ul className="Footer-Link-List c-6" >
                    <li className="Footer-Link-List_item">Voice Over and Subtitle</li>
                    <li className="Footer-Link-List_item">Media Center</li>
                    <li className="Footer-Link-List_item">Privacy</li>
                    <li className="Footer-Link-List_item">Contact us</li>
                </ul>
                <ul className="Footer-Link-List c-6" >
                    <li className="Footer-Link-List_item">Voice Description</li>
                    <li className="Footer-Link-List_item">Investor Relations</li>
                    <li className="Footer-Link-List_item">Legal Provisions</li>
                </ul>
                <ul className="Footer-Link-List c-6" >
                    <li className="Footer-Link-List_item">Help Center</li>
                    <li className="Footer-Link-List_item">Job oppurtunities</li>
                    <li className="Footer-Link-List_item">Cookie Preferences</li>
                </ul>
                <ul className="Footer-Link-List c-6" >
                    <li className="Footer-Link-List_item">Gift Cards</li>
                    <li className="Footer-Link-List_item">Terms of use</li>
                    <li className="Footer-Link-List_item">Corporate Information</li>
                </ul>
            </div>
            <div className="Footer_link_Social">
                <h3>@ 1997-{new Date().getFullYear()}, InC</h3>
                <ul className="list-icon-social">
                    <a >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </ul>
            </div>  
        </div>
    </div>
    </>
    )
}