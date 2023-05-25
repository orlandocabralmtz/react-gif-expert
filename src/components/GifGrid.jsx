import GiftItem from './GiftItem';
import useFetchGifs from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => { // category es el valor que se recibe de GifExpertApp.jsx se envia a través de la prop category

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando....</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GiftItem
                            key={image.id}
                            {...image}

                        />    // extrae el id y el title de cada objeto del array 
                    ))
                }
            </div>

        </>
    )
}
export default GifGrid