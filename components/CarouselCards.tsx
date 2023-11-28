import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css'


interface Item {
    image: string;
    title: string;
    description: string;
}

interface CarouselCardsProps {
    items: Item[];
}

const CarouselCards: React.FC<CarouselCardsProps> = ({ items }) => {
    return (
    <Carousel showArrows infiniteLoop showThumbs={false} autoPlay interval={2500} className={styles.carousel}>
        {
            items.map((item, index) => (
                
                <div key={index}>
                <Card sx={{ width: 400, height: 280,}}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item.image}
                    alt={item.title}
                    sx={{objectFit: 'cover'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
    </Carousel>
)
}

export default CarouselCards