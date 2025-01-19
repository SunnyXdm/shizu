import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
} from 'react';
import { ShizuSdk } from './Sdk';
import type { MMKV } from 'react-native-mmkv';

const initialState = {
	getChat: async (id: string): Promise<any> => {},
};
const ShizuContext = createContext(initialState);

export const useShizu2 = () => {
	return useContext(ShizuContext);
};

function getChunkId(id: string, number: number, chunkSize = 30) {
	if (number < 1) return null;
	const chunkIndex = Math.ceil(number / chunkSize);
	return `${id}-${(chunkIndex - 1) * chunkSize + 1}-${chunkIndex * chunkSize}`;
}

export const ShizuProvider = ({
	children,
	mmkv,
}: {
	children: React.ReactNode;
	mmkv: MMKV;
	// storage: MMKV;
}) => {
	// Reducer
	const reducer = (state: any, action: any) => {
		switch (action.type) {
			case 'CHATS':
				return {
					...state,
					chats: action.chats,
				};
			case 'NEW_CHAT':
				return {
					...state,
					chats: [action.chat, ...state.chats],
				};
			// push old chat up the list
			case 'UPDATE_CHATS':
				const chat = state.chats.find((c: any) => c.id === action.id);
				return {
					...state,
					chats: [
						chat,
						...state.chats.filter((c: any) => c.id !== action.id),
					],
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const shizu = useRef<ShizuSdk>(new ShizuSdk());
	const ws = useRef<any>(null);

	const msgHandler = async (msg: string) => {
		const message = JSON.parse(msg);
		const isInMMKV = true;
		if (isInMMKV) {
			message;
		}
	};

	const chatHandler = async () => {};

	const onMessage = async (event: MessageEvent) => {
		const message = JSON.parse(event.data);
		switch (message.type) {
			case 'message':
				await msgHandler(message);
				break;
		}
	};

	const init = async () => {
		ws.current = new WebSocket(
			`wss://shizu-ws.sunnydx.dev/?userId=6709978d4e1369ee9e04e1f1`
		);
		ws.current.onmessage = onMessage;

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

	async function getChat(chatId: string) {
		console.log('getChat', chatId);
		try {
			const mmkvChat = mmkv.getString(`chat_${chatId}`);
			if (mmkvChat) {
				console.log('from mmkv');
				return JSON.parse(mmkvChat);
			}
			const {
				data: { chat },
			} = await shizu.current.getChat(chatId);
			mmkv.set(`chat_${chat.id}`, JSON.stringify(chat));
			console.log('from shizu');
			return chat;
		} catch (error) {
			console.log('getChat error', error);
		}
	}

	return (
		<ShizuContext.Provider
			value={{
				getChat,
			}}
		>
			{children}
		</ShizuContext.Provider>
	);
};
