export interface Session {
	userId: string | null;
	token: string | null;
	isLoggedIn: boolean;
}

export class SessionService {
	static session: Session;

	constructor() {
		SessionService.session = {
			userId: null,
			token: null,
			isLoggedIn: false,
		};
	}

	static getSession(): Session {
		return this.session;
	}
}
