const http = require('http');

const services = [
  { name: 'demo-master', port: 3000 },
  { name: 'demo-production', port: 3001 },
  { name: 'demo-inventory', port: 3002 },
];

function checkService(svc) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${svc.port}/health`, (res) => {
      resolve({ name: svc.name, port: svc.port, status: res.statusCode === 200 ? 'UP' : 'ERROR' });
    });
    req.on('error', () => {
      resolve({ name: svc.name, port: svc.port, status: 'DOWN' });
    });
    req.setTimeout(2000, () => {
      req.destroy();
      resolve({ name: svc.name, port: svc.port, status: 'TIMEOUT' });
    });
  });
}

async function main() {
  console.log('Checking ERP microservices status...');
  const results = await Promise.all(services.map(checkService));
  console.table(results);
}

main();
