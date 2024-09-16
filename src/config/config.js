export const BFF_CONFIG = {
    HOST: 'localhost',
    PORT: 4444,
  };
  
  // Проверяем доступность удаленного хоста через HTTP-запрос
  async function checkNetwork() {
    try {
      const response = await fetch('http://192.168.0.102:4444', { method: 'HEAD' });
      if (response.ok) {
        console.log('Сеть доступна, используем 192.168.0.102');
        return '192.168.0.102';
      }
    } catch (error) {
      console.log('Сеть недоступна, используем localhost', error);
    }
    return 'localhost';
  }
  
  // Устанавливаем HOST в зависимости от доступности сети
  checkNetwork().then((host) => {
    BFF_CONFIG.HOST = host;
    console.log(`HOST установлен: ${BFF_CONFIG.HOST}`);
  });