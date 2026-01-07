import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        pricelist: "Price List",
        product: "Product",
        description: "All prices are in MYR. Postage fees are not included.",
        shrinked: "Shrinked",
        unshrinked: "Unshrinked",
        noBox: "No Box",
        loosePack: "Loose Pack",
      },
    },
    zh: {
      translation: {
        pricelist: "价钱表",
        product: "商品",
        description: "所有价格均以 马币（MYR） 计算，邮费另计。",
        shrinked: "原膜",
        unshrinked: "无膜",
        noBox: "垃圾袋",
        loosePack: "散包",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
