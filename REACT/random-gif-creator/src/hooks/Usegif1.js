import React , {useEffect , useState} from 'react'

// const tagmemeurl = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

function Usegif1(tag) {
 
    const [gif, setgif] = useState('')
    const [loading, setloading] = useState('false')

    async function fetchdata(tag){
      
      setloading(true)
      const response = await fetch(tag ? `${url}&tag=${tag}` : url);
      const data = await response.json();
      const imagesource = data.data.images.downsized_large.url;
      setgif(imagesource)
      setloading(false)
    }

    useEffect(() => {
        fetchdata()
    } , [])

  return {gif , loading , fetchdata}
}

export default Usegif1
