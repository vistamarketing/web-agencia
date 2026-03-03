import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      appType: 'mpa',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            reservar: path.resolve(__dirname, 'reservar/index.html'),
            recuperacionVet: path.resolve(__dirname, 'recuperacion-de-clientes-veterinarias/index.html'),
            recuperacionServicios: path.resolve(__dirname, 'servicios/recuperacion-de-clientes/index.html'),
            privacidad: path.resolve(__dirname, 'politica-de-privacidad/index.html'),
            servicioWebsConIA: path.resolve(__dirname, 'servicios/webs-con-ia/index.html'),
            servicioSistemasVentas: path.resolve(__dirname, 'servicios/sistemas-de-ventas/index.html'),
            servicioAtencionCliente: path.resolve(__dirname, 'servicios/atencion-al-cliente-ai/index.html'),
            servicioAutomatizacion: path.resolve(__dirname, 'servicios/automatizacion-de-procesos/index.html'),
            servicioFidelizacion: path.resolve(__dirname, 'servicios/programas-de-fidelizacion/index.html'),
            servicioEcommerce: path.resolve(__dirname, 'servicios/ecommerce-growth/index.html'),
            sectorEstetica: path.resolve(__dirname, 'sectores/clinicas-y-centros-de-estetica/index.html'),
            sectorWellness: path.resolve(__dirname, 'sectores/wellness-y-actividad-fisica/index.html'),
            sectorVeterinarias: path.resolve(__dirname, 'sectores/clinicas-veterinarias-y-petcare/index.html'),
            sectorProfesionales: path.resolve(__dirname, 'sectores/servicios-profesionales/index.html'),
            sectorEcommerce: path.resolve(__dirname, 'sectores/ecommerce/index.html'),
            sectorEducacion: path.resolve(__dirname, 'sectores/educacion-y-formacion-online/index.html'),
            sectorRestaurantes: path.resolve(__dirname, 'sectores/restaurantes-y-hosteleria/index.html'),
            sectorAutomocion: path.resolve(__dirname, 'sectores/talleres-y-automocion/index.html'),
            sectorInmobiliarias: path.resolve(__dirname, 'sectores/inmobiliarias-y-seguros/index.html'),
          }
        }
      }
    };
});
