import axios from 'axios';

class Shizu {
  private baseUrl = 'https://shizu-backend.sunnydx.dev';

  async init(urk: string) {
    if (!urk) {
      console.error('Shizu SDK initialization failed');
      return;
    }
    console.log('Shizu SDK initialized');
  }

  async startUser(phone: number) {
    axios.post(`${this.baseUrl}/start-user`, {phone});
    console.log('Shizu SDK startUser', phone);
  }

  async login(phone: number, password: string) {
    const data = await axios.post(`${this.baseUrl}/auth/register`, {phone, password});
    console.log('Shizu SDK login', );
  }

  async logout() {
    console.log('Shizu SDK logout');
  }
}
