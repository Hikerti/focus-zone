import React from "react";

import {ErrorPageProps} from "@/page/errorPage/interface/interface";

export const ErrorPage: React.FC<ErrorPageProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div
            className="
                flex
                items-center justify-center
                min-h-screen
                bg-gray-100
                px-4
            "
        >
            <div
                className="
                    bg-white
                    max-w-md
                    text-center
                    shadow-xl rounded-2xl
                    p-8
                "
            >
                <h1
                    className="
                    text-3xl font-bold
                    text-red-500
                     mb-4
                     "
                >
                    {error.name}
                </h1>
                <p
                    className="
                    text-gray-700
                    mb-2
                    "
                >
                    Что-то пошло не так:
                </p>
                <pre
                    className="
                        text-sm text-gray-500
                        bg-gray-100
                        mb-4 p-3
                        rounded overflow-auto
                        max-h-40
                    "
                >
                    {error.message}
                </pre>
                <button
                    onClick={resetErrorBoundary}
                    className="
                        bg-blue-500
                        text-white
                        font-semibold
                        px-6 py-2
                        rounded transition
                        hover:bg-blue-700
                    "
                >
                    Попробовать снова
                </button>
            </div>
        </div>
    );
};