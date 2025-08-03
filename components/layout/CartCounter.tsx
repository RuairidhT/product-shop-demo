'use client';

import { useStore } from '@/store/useStore';

export default function CartCounter() {
    const { getTotalItems, isHydrated } = useStore();
    const totalItems = isHydrated ? getTotalItems() : 0;

    return totalItems > 0 ? <>({totalItems})</> : <></>;

}