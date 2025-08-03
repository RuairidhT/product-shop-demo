'use client';

import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button } from '@mui/material';

interface ProductActionButtonsProps {
    product: Product
}

const ProductActionButtons = ({ product }: ProductActionButtonsProps) => {
    const {
        addItem,
        removeItem,
        isInCart,
        isHydrated
    } = useStore();

    const productIsInCart = isHydrated ? isInCart(product.id) : false;

    if (!productIsInCart) {
        return (
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addItem(product)}
            >
                Add to Cart
            </Button>
        );
    }

    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<RemoveShoppingCartIcon />}
            onClick={() => removeItem(product.id)}
        >
            Remove from Cart
        </Button>
    );


}

export default ProductActionButtons