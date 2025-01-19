import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
} from 'react';
import { ShizuSdk } from './Sdk';
import type { MMKV } from 'react-native-mmkv';

// Initial State
const initialState = {
	user: null,
	startUser: async (phone: string, country: string): Promise<boolean> =>
		false,
	register: async (body: {
		firstName: string;
		lastName: string;
		username: string;
		password: string;
		phone: string;
		country: string;
	}) => {},
	getStartUser: async (): Promise<any> => {},
	verify: async (otp: string): Promise<any> => {},
	login: async (password: string): Promise<any> => {},
	newChat: async (userId: string): Promise<any> => {},
	getChats: async (): Promise<any> => {},
	getChat: async (chatId: string): Promise<any> => {},
	sendMessage: async (
		chatId: string,
		message: { type: string; text: string }
	): Promise<any> => {},
};

// Create Context
const ShizuContext = createContext(initialState);

export const useShizu = () => {
	return useContext(ShizuContext);
};

// Provider Component
export const ShizuProvider = ({
	children,
	storage,
}: {
	children: React.ReactNode;
	storage: MMKV;
}) => {
	// Reducer
	const reducer = (state: any, action: any) => {
		switch (action.type) {
			case 'SET_USER':
				return {
					...state,
					user: action.payload,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const shizu = useRef<ShizuSdk>(new ShizuSdk());
	const ws = useRef<any>(null);

	const init = async () => {
		const user = JSON.parse(storage.getString('user') ?? '');
		const token = storage.getString('token') ?? '';
		if (!token || !user) {
			return;
		}
		shizu.current.setJwt(token);
		dispatch({
			type: 'SET_USER',
			payload: user,
		});
		ws.current = new WebSocket(
			`wss://shizu-ws.sunnydx.dev/?userId=${user.id}`
		);
		ws.current.onmessage = (event: MessageEvent) => {
			console.log('WebSocket message', event.data);
		};

		ws.current.onopen = () => {
			console.log('WebSocket connection opened');
		};

		ws.current.onclose = () => {
			console.log('WebSocket connection closed');
		};
	};
	useEffect(() => {
		init();
	}, []);

	const isVerified = async () => {};

	const startUser = async (phone: string, country: string) => {
		try {
			storage.set('startUser', JSON.stringify({ phone, country }));
			const { userExists } = await shizu.current.exists(phone, country);
			console.log(`Shizu SDK isNewUser`, userExists);
			return !userExists;
		} catch (error) {
			console.log('Shizu SDK isNewUser error');
			return true;
		}
	};

	const getStartUser = async () => {
		const startUser = JSON.parse(storage.getString('startUser') ?? '');
		console.log(
			'Shizu SDK getStartUser',
			JSON.stringify(startUser, null, 2)
		);
		return startUser;
	};

	const register = async (config: {
		firstName: string;
		lastName: string;
		username: string;
		password: string;
		phone: string;
		country: string;
	}) => {
		try {
			const { status, data } = await shizu.current.register(config);
			const user = data?.user;
			if (user) {
				console.log(
					'Shizu SDK register',
					JSON.stringify(user, null, 2)
				);
				storage.set('registered', JSON.stringify(user));
			}
			return user;
		} catch (error: any) {
			console.error(
				'Shizu SDK register error',
				JSON.stringify(error.response.data, null, 2)
			);
		}
	};

	const verify = async (otp: string) => {
		try {
			const { id } = JSON.parse(storage.getString('registered') ?? '');
			const data = await shizu.current.verify(id, otp);
			console.log('Shizu SDK verify', JSON.stringify(data, null, 2));
			if (!data?.data?.accessToken) {
				return false;
			}
			await storage.set('token', data?.data?.accessToken);
			shizu.current.setJwt(data?.data?.accessToken);
			const token = storage.getString('token');
			const user = JSON.parse(storage.getString('registered') ?? '');
			storage.set('user', { ...user });
			dispatch({
				type: 'SET_USER',
				payload: { ...user },
			});
			console.log('Shizu SDK token', token);
			return true;
		} catch (error: any) {
			console.error(
				'Shizu SDK verify error',
				JSON.stringify(error?.response?.data, null, 2)
			);
			return false;
		}
	};

	const login = async (password: string) => {
		try {
			const startUser = JSON.parse(storage.getString('startUser') ?? '');
			if (!startUser || !startUser.phone || !startUser.country) {
				return;
			}
			const data = await shizu.current.login({ ...startUser, password });
			if (data?.data?.user) {
				storage.set('user', data?.data?.user);
				storage.set('token', data?.data?.accessToken);
				shizu.current.setJwt(data?.data?.accessToken);
				dispatch({
					type: 'SET_USER',
					payload: data?.data?.user,
				});
			}
		} catch (error: any) {
			console.error(
				'Shizu SDK login error',
				JSON.stringify(error?.response?.data, null, 2)
			);
		}
	};

	async function newChat(userId: string) {
		try {
			const { id: createrId } = JSON.parse(
				storage.getString('user') ?? ''
			);
			const data = await shizu.current.newChat(createrId, userId);
			console.log('Shizu SDK newChat', JSON.stringify(data, null, 2));
			return data;
		} catch (error: any) {
			console.error(
				'Shizu SDK newChat error',
				JSON.stringify(error?.response?.data, null, 2)
			);
		}
	}

	async function getChats() {
		try {
			const {
				data: { chats },
			} = await shizu.current.getChats();
			console.log('Shizu SDK getChats', JSON.stringify(chats, null, 2));
			return chats;
		} catch (error: any) {
			console.error(
				'Shizu SDK getChats error',
				JSON.stringify(error?.request, null, 2)
			);
		}
	}

	async function getChat(chatId: string) {
		try {
			const {
				data: { chat },
			} = await shizu.current.getChat(chatId);
			console.log('Shizu SDK getChat', JSON.stringify(chat, null, 2));
			return chat;
		} catch (error: any) {
			console.error(
				'Shizu SDK getChat error',
				JSON.stringify(error?.request, null, 2)
			);
		}
	}

	async function sendMessage(
		chatId: string,
		message: { type: string; text: string }
	) {
		try {
			const {
				data: { chat },
			} = await shizu.current.sendMessage(chatId, message);
			console.log('Shizu SDK sendMessage', JSON.stringify(chat, null, 2));
			return chat;
		} catch (error: any) {
			console.error(
				'Shizu SDK sendMessage error',
				JSON.stringify(error?.request, null, 2)
			);

			return null;
		}
	}

	// an async function that runs at the start of the app to load everything about the app, chats, latest messages, etc and also stores them in state and storage

	// async function startShizu() {
	// 	try {
	// 		const user: MMKV = null;
	// 		const token = await storage.get('token');
	// 	} catch (error: any) {
	// 		console.error(
	// 			'Shizu SDK startShizu error',
	// 			JSON.stringify(error?.response?.data, null, 2)
	// 		);
	// 	}
	// }

	return (
		<ShizuContext.Provider
			value={{
				user: state.user,
				startUser,
				getStartUser,
				register,
				verify,
				login,
				newChat,
				getChats,
				getChat,
				sendMessage,
			}}
		>
			{children}
		</ShizuContext.Provider>
	);
};
