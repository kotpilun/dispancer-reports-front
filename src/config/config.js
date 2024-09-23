// export const BFF_CONFIG = {
//     HOST: '192.168.0.108',
//     PORT: 4444,
// };

export const apiURL = import.meta.env.VITE_API;

export const CATEGORIES = {
  br: "б/р",
  thirdU: "3 юн. р.",
  secondU: "2 юн. р.",
  firstU: "1 юн. р.",
  thirdV: "3 р.",
  secondV: "2 р.",
  firstV: "1 р.",
  kms: "КМС",
};

// Проверяем доступность удаленного хоста через HTTP-запрос
// async function checkNetwork() {
//   try {
//     const response = await fetch(apiURL, {
//       method: "HEAD",
//     });
//     if (response.ok) {
//       console.log("Сеть доступна, используем 192.168.0.108");
//       return "192.168.0.108";
//     }
//   } catch (error) {
//     console.log("Сеть недоступна, используем localhost", error);
//   }
//   return "localhost";
// }

// Устанавливаем HOST в зависимости от доступности сети
// checkNetwork().then((host) => {
//   BFF_CONFIG.HOST = host;
//   console.log(`HOST установлен: ${BFF_CONFIG.HOST}`);
// });
