import logo from '../assets/logo.png';

export { logo };

export const currentDate = new Date().toISOString().split('T')[0];
export const TEXT_REGEX = /^[a-zA-Z\s]*$/;
export const NUMBER_REGEX = /^\d+$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
