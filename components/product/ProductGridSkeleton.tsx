import { Grid } from "@mui/material";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface ProductGridSkeletonProps {
    count?: number;
}

const ProductGridSkeleton = ({ count = 12 }: ProductGridSkeletonProps) => {
    return (
        <Grid container spacing={3} >
            {Array.from({ length: count }).map((_, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                    <ProductCardSkeleton />
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductGridSkeleton