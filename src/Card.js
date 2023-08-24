import './Card.css'

function Card(info){
    const Features = info.features;
    const listOfFeatures = Features.map(f => {
        return(
            <li>
            <span>{f}</span>
            </li>
        )
    })
   return(
    <div className="Card">
        <h2 className="Card--name">{info.name}</h2>
        <h3 className="Card--year">{info.year}</h3>
        <div className="Card--create">
            <label>Created by </label><span>{info.creator}</span> <br/>
            <label>Created in </label><span>{info.place}</span>
        </div>
        <div className="Card--describe">
            <label>Description:</label>
            <p>{info.history}</p>
        </div>
        <div className="Card--features">
            <label>Features: </label>
            <ul>
                {listOfFeatures}
            </ul>
        </div>
    </div>
   )
}
export default Card;