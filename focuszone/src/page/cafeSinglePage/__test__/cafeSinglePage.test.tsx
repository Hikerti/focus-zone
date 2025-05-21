import { render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CafeSinglePage from "@/page/cafeSinglePage/cafeSinglePage";
import { vi } from 'vitest';

vi.mock('@/helpers/hooks/useReadFetcher.ts', () => ({
    useReadFetcher: () => ({
        data: {
            id: 1,
            title: 'Вкусные суши',
            description: 'Самые вкусные суши',
            address: 'г. Москва, Проспект Победы 45',
            imageUrl: 'https://media.istockphoto.com/id/',
            favourites: false,
            createdAt: '2025-03-23',
            updatedAt: '2025-03-23',
        },
        isPending: false
    }),
}))
vi.mock('@tanstack/react-query')
vi.mock('@/components-primary/entites/cards/hooks/useUpdateFavourite.ts', () => ({
    useUpdateFavourite: () => ({ mutate: vi.fn() })
}));

test('Компонент отобразился', () => {
    render(
        <MemoryRouter initialEntries={["/cafelist/123"]}>
            <Routes>
                <Route path="/cafelist/:id" element={<CafeSinglePage />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText("Описание")).toBeInTheDocument();
})