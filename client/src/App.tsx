import { useState } from 'react'

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center animate-fade-in">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        FitTrain-EU 🏋️‍♂️
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        European Gym Trainers Platform
                    </p>

                    <div className="card max-w-md mx-auto p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Welcome to FitTrain-EU
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Your premium platform for connecting with certified fitness trainers across Europe.
                        </p>
                        <button className="btn-primary w-full">
                            Get Started
                        </button>
                    </div>

                    <div className="mt-12 text-gray-500 text-sm">
                        <p>✅ Phase 1: Project Setup Complete</p>
                        <p className="mt-2">
                            React + Vite + TypeScript + Tailwind CSS v4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
