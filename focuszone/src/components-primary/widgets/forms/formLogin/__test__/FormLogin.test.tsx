import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormLogin from "@/components-primary/widgets/forms/formLogin/formLogin";
import {vi} from "vitest";
import * as reactQuery from '@tanstack/react-query'
import '@testing-library/jest-dom'
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

describe("FormLogin Components", () => {
    test('Показывает ошибки валидации при пустой форме', async () => {
        render(<FormLogin />)

        const submitButton = screen.getByRole("button", { name: /отправить информацию/i })
        userEvent.click(submitButton)

        await waitFor(() => {
            expect(screen.getByText(/пароль должен состоять из минимум 8 символов/i)).toBeInTheDocument();
            expect(screen.getByText(/не верная форма email/i)).toBeInTheDocument();
        });
    })
    test('Отправляет форму с корректными данными', async () => {
        const mockMutate = vi.fn();

        vi.spyOn(reactQuery, 'useMutation')
            .mockImplementation(() => ({
                mutate: mockMutate,
            }) as unknown as UseMutationResult<any, any, any, any>);

        render(<FormLogin />);

        const emailInput = screen.getByPlaceholderText('xxx@mail.ru') as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText('12345678') as HTMLInputElement;
        const submitButton = screen.getByRole('button', { name: /отправить информацию/i });

        await userEvent.type(emailInput, 'test@mail.ru');
        await userEvent.type(passwordInput, '12345678');

        expect(emailInput.value).toBe('test@mail.ru');
        expect(passwordInput.value).toBe('12345678');
        expect(submitButton).toBeEnabled();

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockMutate).toHaveBeenCalledWith({
                email: 'test@mail.ru',
                password: '12345678',
            });
        });
    });
})