import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'; // Replace with your actual backend URL

export class ShizuSdk {
  constructor() {
    axios.defaults.baseURL = API_BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    console.log('ShizuSdk constructor');
  }

  async test() {
    console.log('ShizuSdk test');
    const response = await axios.get('https://chatgpt.com');
    return response.data;
  }

  // Helper to save the token
  private async saveToken(token: string): Promise<void> {
    await console.log('accessToken', token);
  }

  // Helper to get the token
  public async getToken(): Promise<void> {
    //   Promise<string | null>
    return console.log('accessToken');
  }

  // User registration
  public async register({
    firstName,
    lastName,
    username,
    password,
    mobile,
  }: {
    firstName: string;
    lastName?: string;
    username: string;
    password: string;
    mobile: string;
  }): Promise<any> {
    const response = await axios.post('/register', {
      firstName,
      lastName,
      username,
      password,
      mobile,
    });

    if (response.data.status === 'success') {
      return response.data;
    } else {
      throw new Error(response.data.message || 'Registration failed');
    }
  }

  // User login
  public async login({
    username,
    mobile,
    password,
  }: {
    username?: string;
    mobile?: string;
    password: string;
  }): Promise<any> {
    const response = await axios.post('/login', {
      username,
      mobile,
      password,
    });

    if (response.data.status === 'success') {
      const {accessToken} = response.data.data;
      await this.saveToken(accessToken); // Save JWT token in async storage
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Login failed');
    }
  }

  // OTP verification
  public async verifyOtp({
    userId,
    otp,
  }: {
    userId: string;
    otp: string;
  }): Promise<any> {
    const response = await axios.post(`/verify/${userId}`, {
      otp,
    });

    if (response.data.status === 'success') {
      return response.data;
    } else {
      throw new Error(response.data.message || 'OTP verification failed');
    }
  }

  // Log out
  public async logout(): Promise<void> {
    await console.log('accessToken');
  }
}

// export default ShizuSdk.getInstance();
