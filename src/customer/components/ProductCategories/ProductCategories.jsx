import React from 'react';
import { ProductCategories } from './ProductCategoriesData';

function ProductCategoriesComponent() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-18 lg:max-w-none lg:py-24">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {ProductCategories.map((item) => (
                            <div key={item.name} className="relative group overflow-hidden">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:h-64">
                                    <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-50" />
                                    <h3 className="absolute inset-0 flex items-center justify-center p-4 text-lg font-semibold text-white">
                                        <a href={item.href} className="relative z-10 text-center">
                                            {item.name}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCategoriesComponent;
