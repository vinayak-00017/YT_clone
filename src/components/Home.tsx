import axios from "axios";

export const Home = async() =>{
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'US', // Change this to your desired region code
            key: 'YOUR_API_KEY', // Replace with your YouTube Data API key
          },
        });
    
        // Handle the response data
        
        console.log(response.data);
    
        // Process and use the data as needed
      } catch (error) {
        console.error('Error fetching YouTube homepage:', error);
      }
}