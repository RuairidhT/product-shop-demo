import { Product } from '@/types/product';
import StarIcon from '@mui/icons-material/Star';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Rating,
    Typography
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ProductActionButtons from './ProductActionButtons';

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 2,
                transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                },
            }}
        >
            <Link href={`product/${product.id.toString()}`} passHref>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: 250,
                    }}
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 25vw"
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            minHeight: '3em',
                            lineHeight: '1.5em',
                        }}
                    >
                        {product.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        £{product.price.toFixed(2)}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Rating
                            value={product.rating.rate}
                            precision={0.5}
                            readOnly
                            size="small"
                            emptyIcon={<StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />}
                        />
                        <Typography variant="caption" color="text.secondary">
                            {product.rating.rate.toFixed(1)} ({product.rating.count})
                        </Typography>
                    </Box>
                </CardContent>
            </Link>
            <CardActions sx={{ justifyContent: 'center' }}>
                <ProductActionButtons product={product} />
            </CardActions>
        </Card>
    );
}