import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserStore = {
	name: string;
	email: string;
	initials: string;
};

type UserActions = {
	login: (user: UserStore) => void;
	logout: () => void;
};

const useStore = create(
	persist<{ user: UserStore; isLoggedIn: boolean } & UserActions>(
		(set) => ({
			user: {
				name: "",
				email: "",
				initials: "",
			},
			isLoggedIn: false,
			login: (user) =>
				set(() => ({
					user: {
						name: user.name,
						email: user.email,
						initials: user.initials,
					},
					isLoggedIn: true,
				})),
			logout: () =>
				set(() => ({
					user: {
						name: "",
						email: "",
						initials: "",
					},
					isLoggedIn: false,
				})),
		}),
		{
			name: "user-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useStore;
