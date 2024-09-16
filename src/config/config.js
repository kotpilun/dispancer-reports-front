import dns from 'dns';

export const BFF_CONFIG = {
  HOST: 'localhost',
  PORT: 4444,
};

// Функция для проверки доступности IP-адреса
function checkNetwork(callback) {
  dns.lookup('192.168.0.102', (err) => {
    if (err) {
      console.log('Сеть недоступна, используем localhost');
      callback('localhost');
    } else {
      console.log('Сеть доступна, используем 192.168.0.102');
      callback('192.168.0.102');
    }
  });
}

// Использование функции для установки HOST
checkNetwork((host) => {
  BFF_CONFIG.HOST = host;
  console.log(`HOST установлен: ${BFF_CONFIG.HOST}`);
});
