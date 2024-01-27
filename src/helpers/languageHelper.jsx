import { english, spanish } from '../../data';
import { useLanguage } from '../context/LanguageContext';

export const getLanguageData = () => {
  const { language } = useLanguage();
  return language === 'español' ? spanish : english;
};
