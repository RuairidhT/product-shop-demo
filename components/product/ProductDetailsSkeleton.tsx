import { Box, Skeleton } from "@mui/material";

const ProductDetailsSkeleton = () => {

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
                    <Skeleton variant="rectangular" width="100%" height={400} />
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
                <Skeleton variant="text" width="80%" height={40} />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Skeleton variant="text" width={120} height={24} />
                    <Skeleton variant="text" width={60} height={20} />
                </Box>

                <Skeleton variant="text" width="30%" height={32} />

                <Skeleton variant="text" width="40%" height={24} />

                <Box>
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="80%" height={20} />
                </Box>

                <Skeleton variant="rectangular" width={200} height={50} sx={{ borderRadius: 1 }} />
            </Box>
        </Box>
    );
}


export default ProductDetailsSkeleton