import "./styles.css"
import {useNavigate} from "react-router-dom";

const ArtistCard = (props) => {
    const navigate = useNavigate();

    const artistNavigate = (id) => {
        navigate(`/artist-page/${id}`)
    }

    return (
        <div className="back-card">
            <div className="wrap-artist">
                <img src={props.img} alt="artist icon" className="img-card" />
                <p className="text-card">{props.name}</p>
            </div>
            <div className="wrap-btn">
                <button onClick={()=>artistNavigate(props.id.toString())} className="artis-profile-btn">Go To Artist Profile</button>
            </div>
        </div>
    )
}

export default ArtistCard;