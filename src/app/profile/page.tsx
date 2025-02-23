'use client';
import { useState } from 'react';
import Image from 'next/image';



export default function ProfilePage() {
    const [userData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/globe.svg',
        listings: 5,
        donations: 3,
    });

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-24 h-24 mb-4">
                        <Image
                            src={userData.avatar}
                            alt="Profile picture"
                            fill
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                    <p className="text-gray-600">{userData.email}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{userData.listings}</p>
                        <p className="text-gray-600">Listings</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{userData.donations}</p>
                        <p className="text-gray-600">Donations</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Edit Profile
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                        My Listings
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                        My Donations
                    </button>
                </div>
            </div>
        </div>
    );
}