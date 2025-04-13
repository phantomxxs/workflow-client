import Cookies from "js-cookie";

class CookieService {
  // Type the cookie property as the CookieInstance
  cookie = Cookies;

  // Set a cookie with a key and value
  set(key: string, value: string): boolean {
    const parsedValue = JSON.stringify(value);
    this.cookie.set(key, parsedValue);
    return true;
  }

  // Set a cookie with an expiry time (in seconds)
  setWithExpiry(key: string, value: string, time: number): boolean {
    const expiryDate = new Date(new Date().getTime() + time * 1000);
    const parsedValue = JSON.stringify(value);
    this.cookie.set(key, parsedValue, { expires: expiryDate });
    return true;
  }

  // Get a cookie value by key, returns string or null
  get(key: string): string | null {
    const value = this.cookie.get(key) as string;
    try {
      return value || null; // Convert undefined to null
    } catch {
      return null;
    }
  }

  // Delete a specific cookie by name
  delete(name: string): void {
    this.cookie.remove(name);
  }

  // Delete all cookies
  deleteAll(): void {
    const cookies = this.cookie.get();
    for (const name in cookies) {
      this.delete(name);
    }
  }
}

const cookie = new CookieService();

export default cookie;
