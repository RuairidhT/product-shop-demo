'use client';

import { useStore } from '@/store/useStore';

export default function CartCounter() {
    const { getTotalItems, isHydrated } = useStore();
    const totalItems = isHydrated ? getTotalItems() : 0;

    if (totalItems === 0) return null;
    return <>({totalItems})</>
}