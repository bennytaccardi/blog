import React from 'react';
import './styles.css';
import Generics from '../generics/generics';

export default function ProfileAvatar() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="grid place-items-center">
                <img
                    className="relative inline-block h-72 w-72 rounded-2xl object-cover object-center shadow-lg"
                    alt="Image placeholder"
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                />

            </div>
            <div className="mt-8">
                <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 bg-purple-800" />
                <Generics />
            </div>
        </div>


    )
}