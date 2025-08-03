'use client';

import { Product } from '@/types/product';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    const isInCart = true; // Replace with actual cart state logic

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
            <Link href={product.id.toString()} passHref >
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
                    <Typography variant="body2" color="text.secondary">
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions sx={{ justifyContent: 'center' }}>
                {isInCart ? (
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<RemoveShoppingCartIcon />}
                        onClick={() => { }}
                    >
                        Remove from Cart
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => { }}
                    >
                        Add to Cart
                    </Button>
                )
                }
            </CardActions >
        </Card >
    );
}
