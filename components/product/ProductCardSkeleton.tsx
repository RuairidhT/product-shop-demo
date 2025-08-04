import { Box, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material';

export default function ProductCardSkeleton() {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 250,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.100',
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>

      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          <Skeleton width="80%" height={24} />
        </Typography>

        <Typography variant="body2">
          <Skeleton width="40%" height={20} />
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton width={50} height={16} />
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Skeleton variant="rectangular" width={160} height={36} />
      </CardActions>
    </Card>
  );
}
