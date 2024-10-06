const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		peoples: [],
		vehicles: [],
		planets: [],
		allFavorites: []
	  },
	  actions: {
		addFavoritePeoples: (item) => {
		  const store = getStore();
		  setStore({ peoples: [...store.peoples, item] });
		},
		addFavoriteVehicles: (item) => {
		  const store = getStore();
		  setStore({ vehicles: [...store.vehicles, item] });
		},
		addFavoritePlanets: (item) => {
		  const store = getStore();
		  setStore({ planets: [...store.planets, item] });
		},
		addAllFavorites: (item) => {
		  const store = getStore();
		  setStore({ allFavorites: [...store.allFavorites, item] });
		},
		removeFavoritePeoples: (item) => {
		  const store = getStore();
		  setStore({ peoples: store.peoples.filter(fav => fav !== item) });
		},
		removeFavoriteVehicles: (item) => {
		  const store = getStore();
		  setStore({ vehicles: store.vehicles.filter(fav => fav !== item) });
		},
		removeFavoritePlanets: (item) => {
		  const store = getStore();
		  setStore({ planets: store.planets.filter(fav => fav !== item) });
		},
		removeAllFavorites: (item) => {
		  const store = getStore();
		  setStore({ allFavorites: store.allFavorites.filter(fav => fav !== item) });
		}
	  }
	};
  };
  
  export default getState;
  