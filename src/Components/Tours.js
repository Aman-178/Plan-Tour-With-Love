import './Tour.css'
import Card from './Card';
function Tours({ tours, removetour }) {
    return (
        
            <div>
                <header><h2>Plan Tour With Love</h2></header>
                <div id='tour-plan'>
                {tours.map(tour => (
                    <Card  {...tour} removetour={removetour} />
                ))}
            </div>
            </div>
            
       
    );
}

export default Tours;
