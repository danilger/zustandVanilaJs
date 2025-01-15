import {useStore,useAsyncStore} from "./store.js";

// Функция обновления UI
const updateUI = () => {
    const { count,count2 } = useStore.getState();
    const {user} = useAsyncStore.getState()
    counter.textContent = `Count: ${count}`;
    counter2.textContent = `Count2: ${count2}`;
    userJSON.textContent = user
};

// Подписка на изменения
useStore.subscribe(updateUI);
useAsyncStore.subscribe(updateUI);

// Обработчики событий
increase.addEventListener("click", () => useStore.getState().increase());
increase2.addEventListener("click", () => useStore.getState().increase2());
decrease.addEventListener("click", () => useStore.getState().decrease());
reset.addEventListener("click", () => useStore.getState().reset());

// Инициализация
updateUI();
