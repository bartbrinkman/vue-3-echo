import Echo from 'laravel-echo';

window.axios = require('axios').create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
});

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_PUSHER_KEY,
  wsHost: process.env.VUE_APP_PUSHER_HOST,
  wsPort: process.env.VUE_APP_PUSHER_PORT,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
  authorizer: (channel) => {
    return {
      authorize: (socketId, callback) => {
        window.axios.post('/api/broadcasting/auth', {
            socket_id: socketId,
            channel_name: channel.name
        })
        .then(response => {
            callback(false, response.data);
        })
        .catch(error => {
            callback(true, error);
        });
      }
    };
  },
});
