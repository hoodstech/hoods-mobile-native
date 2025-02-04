// global.ts

let isOpened = false; // Глобальная переменная

// Функция для получения значения
export const getIsOpened = () => isOpened;

// Функция для установки значения
export const setIsOpened = (value: boolean) => {
  isOpened = value;
};

// Подписчики для оповещения об изменении состояния
let listeners: (() => void)[] = [];

// Добавить подписчика
export const addListener = (listener: () => void) => {
  listeners.push(listener);
};

// Удалить подписчика
export const removeListener = (listener: () => void) => {
  listeners = listeners.filter((l) => l !== listener);
};

// Оповестить всех подписчиков
const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

// Обновляем функцию установки значения, чтобы уведомлять подписчиков
export const setIsOpenedWithNotify = (value: boolean) => {
  isOpened = value;
  notifyListeners();
};
