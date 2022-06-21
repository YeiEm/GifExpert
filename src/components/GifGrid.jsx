import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);
  //console.log({isLoading, images});


  return (
    <>
        <h3>{category}</h3>
        
        <h2>Loading...</h2>

        <div className="card-grid">
            {
                images.map((image) =>(
                   <GifItem 
                      key= {image.id} 
                      {...image}
                    />
                ))
            }
        </div>
        
    </>
  )
}
