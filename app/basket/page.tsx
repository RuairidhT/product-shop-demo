"use client";

import BasketCard from "@/components/basket/BasketCard";
import { useStore } from "@/store/useStore";
import {
    Box,
    Button,
    Divider,
    Typography
} from "@mui/material";
import { useRouter } from "next/navigation";


const BasketPage = () => {
    const router = useRouter();
    const {
        items,
        clearCart,
        getTotalPrice,
    } = useStore();

    const handleCheckout = () => {
        router.push('/checkout');
        clearCart();
    }


    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Your Basket
            </Typography>

            {items.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <>
                    {items.map((item) => (
                        <BasketCard key={item.id} item={item} />
                    ))}

                    <Divider sx={{ my: 2 }} />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <Button variant="outlined" color="error" onClick={clearCart}>
                            Clear Cart
                        </Button>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography variant="h6">Total: £{getTotalPrice().toFixed(2)}</Typography>
                            <Button variant="contained" color="primary" onClick={handleCheckout}>
                                Checkout
                            </Button>
                        </Box>
                    </Box>

                </>
            )}
        </Box>
    );
};

export default BasketPage;
