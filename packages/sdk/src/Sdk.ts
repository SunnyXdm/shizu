import axios from 'axios';

export class ShizuSdk {
	private baseUrl = 'https://shizu-backend.sunnydx.dev';

	constructor() {
		axios.defaults.baseURL = this.baseUrl;
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		console.log('ShizuSdk constructor');
	}

	setJwt(token: string) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	async init(url: string) {
		if (!url) {
			console.error('Shizu SDK initialization failed');
			return;
		}
		console.log('Shizu SDK initialized');
	}

	async exists(phone: string, country: string) {
		const { data } = await axios.post('/auth/exists', { phone, country });
		console.log('Shizu SDK startUser', data);
		return data;
	}

	async register(body: {
		firstName: string;
		lastName: string;
		username: string;
		password: string;
		phone: string;
		country: string;
	}) {
		const { data } = await axios.post(
			`${this.baseUrl}/auth/register`,
			body
		);
		return data;
	}

	async verify(userId: string, otp: string) {
		const { data } = await axios.post(`/auth/verify/${userId}`, { otp });
		console.log('Shizu SDK verify');
		return data;
	}

	async logout() {
		console.log('Shizu SDK logout');
	}

	async login({
		country,
		phone,
		password,
	}: {
		country: string;
		phone: string;
		password: string;
	}) {
		try {
			const { data } = await axios.post(`/auth/login`, {
				phone,
				password,
				country,
			});
			console.log('Shizu SDK login');
			return data;
		} catch (error) {
			console.error('Shizu SDK login error', (error as any)?.message);
		}
	}

	async newChat(createrId: string, userId: string) {
		const { data } = await axios.post(`/chat`, {
			title: '',
			type: 'private',
			users: [createrId, userId],
		});
		console.log('Shizu SDK newChat');
		return data;
	}

	async getChats() {
		const { data } = await axios.get(`/chat`);
		console.log('Shizu SDK getChats');
		return data;
	}

	async getChat(chatId: string) {
		const { data } = await axios.get(`/chat/${chatId}`);
		console.log('Shizu SDK getChat');
		return data;
	}
}
