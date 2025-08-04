import { useStore } from '@/store/useStore';
import { CartItem } from '@/types/product';
import { Add, Delete, Remove } from '@mui/icons-material';
import { Box, Card, IconButton, TextField, Typography } from '@mui/material';
import Image from 'next/image';

interface BasketCardProps {
  item: CartItem;
}

const BasketCard = ({ item }: BasketCardProps) => {
  const { updateItemQuantity, removeItem } = useStore();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Card
      key={item.id}
      elevation={3}
      sx={{
        p: 2,
        mb: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: 80, sm: 100 },
            height: { xs: 80, sm: 100 },
            flexShrink: 0,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 600px) 100vw, 25vw"
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Box
            sx={{
              width: { xs: 160, sm: 200, md: 250 },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="subtitle1" noWrap>
              {item.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            £{item.price.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="large" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
            <Remove />
          </IconButton>
          <TextField
            size="small"
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
            sx={{ width: 60 }}
          />
          <IconButton size="large" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
            <Add />
          </IconButton>
        </Box>

        <Box sx={{ minWidth: 90 }}>
          <Typography fontWeight="bold">£{(item.price * item.quantity).toFixed(2)}</Typography>
        </Box>

        <IconButton
          size="large"
          onClick={() => removeItem(item.id)}
          sx={{ ml: { xs: 'auto', sm: 0 } }}
        >
          <Delete />
        </IconButton>
      </Box>
    </Card>
  );
};

export default BasketCard;
