import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="border rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}   

export default Card;