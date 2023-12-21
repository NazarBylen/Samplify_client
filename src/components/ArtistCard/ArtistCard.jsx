import "./styles.css"
import {useNavigate} from "react-router-dom";

const imagePath = "http://localhost:5000/images/artists"

const ArtistCard = (props) => {
    const navigate = useNavigate();

    const artistNavigate = () => {
        navigate(`/artist-page/${props.slug}`)
    }

    return (
        <div className="back-card">
            <div className="wrap-artist">
                <img src={`${imagePath}/${props.image}`} alt="artist icon" className="img-card" />
                <p className="text-card">{props.name}</p>
            </div>
            <div className="wrap-btn">
                <button onClick={artistNavigate} className="artis-profile-btn">Go To Artist Profile</button>
            </div>
        </div>
    )
}

export default ArtistCard;
