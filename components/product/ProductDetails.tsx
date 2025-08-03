import { Product } from "@/types/product";
import StarIcon from "@mui/icons-material/Star";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import ProductActionButtons from "./ProductActionButtons";

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {

    return (
        <Box
            sx={{
                mx: "auto",
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 4, md: 6 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
            }}
        >
            <Box
                sx={{
                    flex: "1 1 40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        border: "1px solid",
                        borderColor: "grey.300",
                        borderRadius: 2,
                        boxShadow: 3,
                        maxWidth: { xs: 300, md: 400 },
                        width: "100%",
                    }}
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        style={{ objectFit: "contain", borderRadius: "8px" }}
                        priority
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    flex: "1 1 60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 3,
                }}
            >
                <Typography variant="h4" component="h1" fontWeight="bold">
                    {product.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Rating
                        value={product.rating.rate}
                        precision={0.5}
                        readOnly
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {product.rating.rate} ({product.rating.count} reviews)
                    </Typography>
                </Box>

                <Typography variant="h5" color="primary" fontWeight="bold">
                    £{product.price.toFixed(2)}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary">
                    Category: {product.category}
                </Typography>

                <Typography variant="body1" component="p" sx={{ mt: 2, mb: 4 }}>
                    {product.description}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <ProductActionButtons product={product} />
                </Box>
            </Box>
        </Box>


    );
}
