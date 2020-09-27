const { env } = process;

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
  if (env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(env.PUBLIC_URL || '', window.location.href);
    if (publicUrl.origin !== window.location.origin) return;
    window.addEventListener('load', async () => {
      const swUrl = `${env.PUBLIC_URL}/service-worker.js`;
      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        await navigator.serviceWorker.ready;
        console.log(
          'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://bit.ly/CRA-PWA'
        );
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

async function registerValidSW(swUrl: string, config?: Config) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) return;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
            );
            if (config && config.onUpdate) config.onUpdate(registration);
          } else {
            console.log('Content is cached for offline use.');
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  } catch (err) {
    console.error('Error during service worker registration:', err);
  }
}

async function checkValidServiceWorker(swUrl: string, config?: Config) {
  try {
    const res = await fetch(swUrl, {
      headers: { 'Service-Worker': 'script' }
    });
    const contentType = res.headers.get('content-type');
    if (
      res.status === 404 ||
      (contentType != null && contentType.indexOf('javascript') === -1)
    ) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else registerValidSW(swUrl, config);
  } catch (err) {
    console.log(
      'No internet connection found. App is running in offline mode.'
    );
  }
}

export async function unregister() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      registration.unregister();
    } catch (err) {
      console.error(err.message);
    }
  }
}
