import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Shop
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button component={Link} href="/" color="inherit">
                        Products
                    </Button>
                    <Button component={Link} href="/basket" color="inherit">
                        Basket
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
