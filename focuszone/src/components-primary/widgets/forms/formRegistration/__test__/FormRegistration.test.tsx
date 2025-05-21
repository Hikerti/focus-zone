import { vi } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import FormRegistration from "@/components-primary/widgets/forms/formRegistration/formRegistration";
import * as reactQuery from "@tanstack/react-query";
import {UseMutationResult} from "@tanstack/react-query";

vi.mock('@tanstack/react-query', () => {
    return {
        useMutation: () => ({
            mutate: vi.fn(),
        }),
    }
})

vi.mock("@/helpers/store/storeUser.ts", () => ({
    useGetUser: () => () => {},
}))

describe('Form Registration Components', () => {
    test('Ошибка при пустой форме', async () => {
        render(<FormRegistration/>)

        const submitButton = screen.getByRole('button', { name: /отправить информацию/i });
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/имя пользователя должно быть/i)).toBeInTheDocument();
            expect(screen.getByText(/фамилия пользователя должно быть/i)).toBeInTheDocument();
            expect(screen.getByText(/неверный формат телефона/i)).toBeInTheDocument();
            expect(screen.getByText(/пароль должен состоять из минимум 8 символов/i)).toBeInTheDocument();
            expect(screen.getByText(/логин пользователя должно быть/i)).toBeInTheDocument();
            expect(screen.getByText(/не верная форма email/i)).toBeInTheDocument();
        })
    })
    test('Отправка формы', async () => {
        const mockMutate = vi.fn();

        vi.spyOn(reactQuery, 'useMutation')
            .mockImplementation(() => ({
                mutate: mockMutate,
            }) as unknown as UseMutationResult<any, any, any, any>);

        render(<FormRegistration/>)

        const submitButton = screen.getByRole('button', { name: /отправить информацию/i });

        const nameInput = screen.getByPlaceholderText('Иван') as HTMLInputElement
        const surnameInput = screen.getByPlaceholderText('Иванов') as HTMLInputElement
        const phoneInput = screen.getByPlaceholderText('+7 999 999 99 99') as HTMLInputElement
        const adressInput = screen.getByPlaceholderText('г.Москва, ул. Ленина 56') as HTMLInputElement
        const passwordInput = screen.getByPlaceholderText('12345678') as HTMLInputElement
        const loginInput = screen.getByPlaceholderText('Russian man') as HTMLInputElement
        const emailInput = screen.getByPlaceholderText('xxx@mail.ru') as HTMLInputElement

        await userEvent.type(nameInput, 'Роман');
        await userEvent.type(surnameInput, 'Аникаев');
        await userEvent.type(phoneInput, '+79223408104');
        await userEvent.type(adressInput, 'г.Москва, ул. Ленина 56');
        await userEvent.type(emailInput, 'test@mail.ru');
        await userEvent.type(passwordInput, '12345678');
        await userEvent.type(loginInput, 'Hikerti08');

        expect(nameInput.value).toBe('Роман');
        expect(surnameInput.value).toBe('Аникаев');
        expect(phoneInput.value).toBe('+79223408104');
        expect(adressInput.value).toBe('г.Москва, ул. Ленина 56');
        expect(emailInput.value).toBe('test@mail.ru');
        expect(passwordInput.value).toBe('12345678');
        expect(loginInput.value).toBe('Hikerti08');

        expect(submitButton).toBeEnabled();

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockMutate).toHaveBeenCalledWith({
                name: 'Роман',
                surname: 'Аникаев',
                phone: '+79223408104',
                adress: 'г.Москва, ул. Ленина 56',
                email: 'test@mail.ru',
                password: '12345678',
                login: 'Hikerti08',
                description: '',
            });
        });
    })
})