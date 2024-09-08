export type Subscriber<T> = (value: T) => void;

export function createSignal<T>(initialValue: T) {
    let value = { ...initialValue };

    let subs: { [K in keyof T]?: Set<Subscriber<T[K]>> } = {};

    return {
        get: function <K extends keyof T>(key: K): T[K] {
            return value[key];
        },
        set: function <K extends keyof T>(key: K, newValue: T[K]) {
            if (value[key] === newValue) {
                return;
            }

            value = { ...value, [key]: newValue };
            subs[key]?.forEach((sub) => sub(value[key]));
        },
        subscribe: function <K extends keyof T>(key: K, callback: Subscriber<T[K]>) {
            if (!subs[key]) {
                subs[key] = new Set();
            }

            subs[key].add(callback);
        },
    };
}
