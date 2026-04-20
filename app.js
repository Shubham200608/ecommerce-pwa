if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('/ecommerce-pwa/service-worker.js')
    .then(() => console.log("Service Worker Registered"));
}
