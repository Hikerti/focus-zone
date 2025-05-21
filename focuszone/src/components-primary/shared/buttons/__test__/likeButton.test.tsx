import {render, screen} from "@testing-library/react";
import LikeButton from "@/components-primary/shared/buttons/likeButton";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

test("переключает класс иконки при клике", async () => {
    render(<LikeButton />);

    const icon = screen.getByTestId("heart-icon");

    expect(icon).toHaveClass("text-zinc-900");
    expect(icon).not.toHaveClass("text-red-500");

    const button = screen.getByLabelText("like-button");
    await userEvent.click(button);

    expect(icon).toHaveClass("text-red-500");
    expect(icon).not.toHaveClass("text-zinc-900");

    await userEvent.click(button);

    expect(icon).toHaveClass("text-zinc-900");
    expect(icon).not.toHaveClass("text-red-500");
});