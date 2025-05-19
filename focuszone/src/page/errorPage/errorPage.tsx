import React from "react";

interface Props {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorPage: React.FC<Props> = ({ error, resetErrorBoundary }) => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-100 px-4"
        >
            <div
                className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center"
            >
                <h1
                    className="text-3xl font-bold text-red-600 mb-4"
                >
                    {error.name}
                </h1>
                <p
                    className="text-gray-700 mb-2"
                >
                    Что-то пошло не так:
                </p>
                <pre className="text-sm text-gray-500 bg-gray-100 p-3 rounded mb-4 overflow-auto max-h-40">
                    {error.message}
                </pre>
                <button
                    onClick={resetErrorBoundary}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
                >
                    Попробовать снова
                </button>
            </div>
        </div>
    );
};