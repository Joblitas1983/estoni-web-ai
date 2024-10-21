import { useState } from 'react';

const ChannelManager = () => {
  const [airbnbLink, setAirbnbLink] = useState('');
  const [bookingLink, setBookingLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para usar los enlaces, por ejemplo, enviarlos a una API
    console.log('Enlace de Airbnb:', airbnbLink);
    console.log('Enlace de Booking:', bookingLink);
  };

  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Channel Manager</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="airbnbLink">
            Enlace Calendario Airbnb
          </label>
          <input
            type="url"
            id="airbnbLink"
            value={airbnbLink}
            onChange={(e) => setAirbnbLink(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="https://airbnb.com/calendar"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="bookingLink">
            Enlace Calendario Booking
          </label>
          <input
            type="url"
            id="bookingLink"
            value={bookingLink}
            onChange={(e) => setBookingLink(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="https://booking.com/calendar"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Guardar Enlaces
        </button>
      </form>
    </div>
  );
};

export default ChannelManager;
