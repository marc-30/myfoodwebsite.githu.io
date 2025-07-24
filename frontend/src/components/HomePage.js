import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import RestaurantGrid from './RestaurantGrid';
import About from './About';
import Footer from './Footer';

// Sample restaurant data pour Côte d'Ivoire
const restaurantData = [
  {
    id: 1,
    name: "Le Toit d'Abidjan",
    cuisine: "Cuisine Française & Ivoirienne",
    location: "Plateau, Abidjan",
    description: "Restaurant haut de gamme offrant une vue panoramique sur la lagune avec une fusion parfaite entre cuisine française et ivoirienne.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzUzMzE4NDQ0fDA&ixlib=rb-4.1.0&q=85",
    rating: 4.8,
    priceRange: "€€€€",
    specialties: ["Attiéké au poisson", "Foie gras", "Kedjenou"],
    hours: "12h00 - 23h00",
    phone: "+225 21 35 42 18"
  },
  {
    id: 2,
    name: "Chez Amina",
    cuisine: "Cuisine Traditionnelle Ivoirienne",
    location: "Cocody, Abidjan",
    description: "Authentique restaurant familial servant les meilleurs plats traditionnels ivoiriens dans une ambiance chaleureuse.",
    image: "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxpdm9yaWFuJTIwY3Vpc2luZXxlbnwwfHx8fDE3NTMzMTg0Mzd8MA&ixlib=rb-4.1.0&q=85",
    rating: 4.6,
    priceRange: "€€",
    specialties: ["Kedjenou de poulet", "Attiéké poisson", "Bangui"],
    hours: "11h00 - 22h00",
    phone: "+225 22 44 51 23"
  },
  {
    id: 3,
    name: "La Villa Rosa",
    cuisine: "Cuisine Méditerranéenne",
    location: "Marcory, Abidjan",
    description: "Élégant restaurant méditerranéen avec une terrasse romantique et une carte des vins exceptionnelle.",
    image: "https://images.unsplash.com/photo-1689155494424-d2337856fe3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NTMzMTg0MzB8MA&ixlib=rb-4.1.0&q=85",
    rating: 4.7,
    priceRange: "€€€",
    specialties: ["Paella", "Risotto aux fruits de mer", "Tajine"],
    hours: "18h00 - 01h00",
    phone: "+225 21 75 88 42"
  },
  {
    id: 4,
    name: "Le Baobab Doré",
    cuisine: "Fusion Africaine",
    location: "Deux Plateaux, Abidjan",
    description: "Concept innovant mêlant traditions culinaires africaines et techniques modernes dans un cadre contemporain.",
    image: "https://images.unsplash.com/photo-1601118964938-228a89955311?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBkaW5pbmd8ZW58MHx8fHwxNzUzMzE4NDUyfDA&ixlib=rb-4.1.0&q=85",
    rating: 4.9,
    priceRange: "€€€€",
    specialties: ["Poisson braisé revisité", "Soupe de palmiste", "Alloco gourmet"],
    hours: "19h00 - 00h00",
    phone: "+225 27 22 67 34"
  },
  {
    id: 5,
    name: "Ocean View",
    cuisine: "Fruits de Mer",
    location: "Grand-Bassam",
    description: "Restaurant face à la mer spécialisé dans les fruits de mer fraîchement pêchés, dans l'ancienne capitale coloniale.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzUzMzE4NDQ0fDA&ixlib=rb-4.1.0&q=85",
    rating: 4.5,
    priceRange: "€€€",
    specialties: ["Capitaine grillé", "Langoustes", "Crevettes géantes"],
    hours: "12h00 - 22h00",
    phone: "+225 21 30 14 55"
  },
  {
    id: 6,
    name: "Maquis Chez Tante Marie",
    cuisine: "Maquis Traditionnel",
    location: "Yopougon, Abidjan",
    description: "Authentique maquis ivoirien dans une ambiance conviviale, réputé pour ses grillades et son ambiance festive.",
    image: "https://images.unsplash.com/photo-1689155494424-d2337856fe3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NTMzMTg0MzB8MA&ixlib=rb-4.1.0&q=85",
    rating: 4.4,
    priceRange: "€",
    specialties: ["Poulet braisé", "Poisson braisé", "Attiéké garni"],
    hours: "17h00 - 02h00",
    phone: "+225 20 37 82 91"
  }
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('all');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantData);

  useEffect(() => {
    let filtered = restaurantData;

    if (searchTerm) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCuisine !== 'all') {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.toLowerCase().includes(filterCuisine.toLowerCase())
      );
    }

    setFilteredRestaurants(filtered);
  }, [searchTerm, filterCuisine]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <Header />
      <Hero />
      
      {/* Section de Recherche et Filtres */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Découvrez nos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 ml-3">
              Restaurants
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explorez les meilleures adresses culinaires de Côte d'Ivoire
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher par nom ou ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-80 px-6 py-4 rounded-full border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 bg-white/80 backdrop-blur-sm shadow-lg"
            />
          </div>
          
          <select
            value={filterCuisine}
            onChange={(e) => setFilterCuisine(e.target.value)}
            className="px-6 py-4 rounded-full border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <option value="all">Tous les types de cuisine</option>
            <option value="ivoirienne">Cuisine Ivoirienne</option>
            <option value="française">Cuisine Française</option>
            <option value="méditerranéenne">Cuisine Méditerranéenne</option>
            <option value="fusion">Fusion Africaine</option>
            <option value="fruits de mer">Fruits de Mer</option>
            <option value="maquis">Maquis</option>
          </select>
        </div>

        <RestaurantGrid restaurants={filteredRestaurants} />
      </section>

      <About />
      <Footer />
    </div>
  );
};

export default HomePage;