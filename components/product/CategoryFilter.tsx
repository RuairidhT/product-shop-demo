'use client';

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
}

const CategoryFilter = ({ categories, selectedCategory }: CategoryFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent) => {
      const category = event.target.value;
      const params = new URLSearchParams(searchParams.toString());

      if (category === '') {
        params.delete('category');
      } else {
        params.set('category', category);
      }

      router.push(`/?${params.toString()}`);
    },
    [router, searchParams]
  );

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Box sx={{ mb: 3, minWidth: 200, maxWidth: 365 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Filter Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Filter Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {formatCategoryName(category)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;
