import { MMKV } from 'react-native-mmkv';

export class Storage {
    protected sep = ':';
    protected store: MMKV;

    constructor({ id }: { id: string }) {
        this.store = new MMKV({ id });
    }

    set(scopes: string[], data: unknown): void {
        this.store.set(scopes.join(this.sep), JSON.stringify({ data }));
    }

    get(scopes: string[]): unknown | undefined {
        const res = this.store.getString(scopes.join(this.sep));
        if (!res) return undefined;
        return JSON.parse(res).data;
    }

    remove(scopes: string[]): void {
        this.store.delete(scopes.join(this.sep));
    }

    removeMany(scopes: string[], keys: string[]): void {
        keys.forEach((key) => this.remove([...scopes, key]));
    }
}
