import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

const page = () => {
    return (
        <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                🎉 Congrats on your order!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Your items are on their way. Thank you for shopping with us!
            </Typography>

            <Button variant="outlined" component={Link} href="/" color="primary">
                Back to Home
            </Button>
        </Box>
    )
}

export default page