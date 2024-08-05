// src/service-worker.js

/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

self.skipWaiting();

// Precache todos os arquivos buildados
precacheAndRoute(self.__WB_MANIFEST);

// Limpa caches antigos
cleanupOutdatedCaches();

// Usa uma estratégia de stale-while-revalidate para solicitações
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate()
);