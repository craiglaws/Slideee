const baseURL = 'http://localhost:3000/api/bookings/';

export default {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json());
  },
}
