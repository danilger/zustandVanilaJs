// store.js
import { createStore } from './node_modules/zustand/esm/vanilla.mjs'

// Создаем хранилище
export const useStore = createStore((set) => ({
    count: 0, // Начальное состояние
    count2: 2,
    increase: () => set((state) => ({ count: state.count + 1 })), // Увеличение
    increase2: () => set((state) => ({ count2: state.count2 + 2 })), // Увеличение
    decrease: () => set((state) => ({ count: state.count - 1 })), // Уменьшение
    reset: () => set({ count: 0 }), // Сброс
}));

export const useAsyncStore = createStore(() => ({
    users: '',
    fetchUsers: async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users').then(e => e.json()).then(e => e.data);
            set({ users: JSON.stringify(data, null, 2) });
        } catch (error) {
            console.error('Error:', error);
        }
    }
}));

