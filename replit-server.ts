// Replit-friendly server - Simplified for deployment
import { createServer } from 'http';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

// Simple Next.js server for Replit
async function startServer() {
  try {
    const app = next({ 
      dev,
      dir: './',
      hostname: hostname,
      port: port
    });
    
    await app.prepare();
    const handle = app.getRequestHandler();
    
    const server = createServer(async (req, res) => {
      try {
        await handle(req, res);
      } catch (err) {
        console.error('Error handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
    
    server.listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      console.log(`> Environment: ${dev ? 'development' : 'production'}`);
    });
    
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();