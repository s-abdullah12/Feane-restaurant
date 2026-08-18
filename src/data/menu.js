export const menuData = [
  { id: 1, name: "Truffle & Burrata Pizza", description: "Hand-tossed artisan crust, fresh burrata, shaved black truffle, and a drizzle of hot honey.", price: 45, category: "Pizza", rating: 4.9, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", featured: true, tags: ["popular", "premium", "pizza"] },
  { id: 2, name: "Pan-Seared Scallops", description: "Cauliflower purée, crispy pancetta, herb oil", price: 28, category: "Main Course", rating: 4.8, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop", featured: false, tags: ["seafood", "popular"] },
  { id: 3, name: "Wild Mushroom Risotto", description: "Arborio rice, porcini, parmesan crisp, truffle oil", price: 32, category: "Pasta", rating: 4.7, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop", featured: true, tags: ["vegetarian", "popular"] },
  { id: 4, name: "Spicy Chicken Burger", description: "Grilled chicken, house spicy sauce, lettuce and fresh vegetables", price: 18, category: "Burgers", rating: 4.6, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", featured: false, tags: ["spicy", "chicken", "budget", "burger"] },
  { id: 5, name: "Dark Chocolate Fondant", description: "Vanilla bean ice cream, raspberry coulis", price: 18, category: "Desserts", rating: 4.9, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop", featured: true, tags: ["dessert", "sweet"] },
  { id: 6, name: "Classic Margherita Pizza", description: "San Marzano tomatoes, fresh mozzarella, basil", price: 22, category: "Pizza", rating: 4.5, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", featured: false, tags: ["vegetarian", "pizza", "budget"] },
  { id: 7, name: "Truffle Fries", description: "Crispy fries tossed in white truffle oil and parmesan", price: 12, category: "All", rating: 4.4, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop", featured: false, tags: ["vegetarian", "budget", "cheap"] },
  { id: 8, name: "Signature Cocktail", description: "Premium gin, elderflower, cucumber, lime", price: 16, category: "Drinks", rating: 4.8, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", featured: false, tags: ["drinks"] }
];
export const getFeaturedDishes = () => menuData.filter(item => item.featured);
export const searchMenu = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return menuData.filter(item => item.name.toLowerCase().includes(lowercaseQuery) || item.description.toLowerCase().includes(lowercaseQuery) || item.category.toLowerCase().includes(lowercaseQuery) || item.tags.some(tag => lowercaseQuery.includes(tag)));
};
