import "./card.css";
import ping from "/ping.svg";

export default function Card({ item }) {
    const { title, startDate, endDate, location, googleMapsUrl, description, imageUrl } = item;
    return (
        <div className="card">
            <img src={imageUrl} alt="Mount Fuji Image" />
            <div className="content">
                <h2>
                    <img src={ping} alt="Ping Icon" />
                    <span>{location}</span>
                    <a href={googleMapsUrl} target="blank">
                        View on Google Maps
                    </a>
                </h2>
                <h1>{title}</h1>
                <h3>
                    {startDate} - {endDate}
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
