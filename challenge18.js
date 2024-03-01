document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const confirmationDiv = document.getElementById('confirmation');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const checkinDate = document.getElementById('checkin').value;
        const checkoutDate = document.getElementById('checkout').value;
        const numRooms = document.getElementById('rooms').value;

        const confirmationMessage = `
            <h2>Booking Confirmation</h2>
            <p>Check-in Date: ${checkinDate}</p>
            <p>Check-out Date: ${checkoutDate}</p>
            <p>Number of Rooms: ${numRooms}</p>
            <p>Thank you for booking!</p>
        `;

        confirmationDiv.innerHTML = confirmationMessage;
    });
});
