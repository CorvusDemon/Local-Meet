// Zatwierdzenie formularza tworzenia wydarzenia
document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    
    if (eventForm) {
        // Elementy formularza
        const eventName = document.getElementById('eventName');
        const eventCategory = document.getElementById('eventCategory');
        const eventDate = document.getElementById('eventDate');
        const eventTime = document.getElementById('eventTime');
        const eventLocation = document.getElementById('eventLocation');
        const maxParticipants = document.getElementById('maxParticipants');
        const eventDescription = document.getElementById('eventDescription');
        const isOnlineCheckbox = document.getElementById('isOnline');
        const onlineLinkContainer = document.getElementById('onlineLinkContainer');
        const onlineLink = document.getElementById('onlineLink');
        const ticketPrice = document.getElementById('ticketPrice');
        
        // Ustawianie minimalnej daty
        const today = new Date().toISOString().split('T')[0];
        eventDate.min = today;
        
        // Pokaż/ukryj pole łącza online
        isOnlineCheckbox.addEventListener('change', function() {
            if (this.checked) {
                onlineLinkContainer.style.display = 'block';
                onlineLink.required = true;
            } else {
                onlineLinkContainer.style.display = 'none';
                onlineLink.required = false;
            }
        });
        
        // Walidacja przy wysyłaniu formularza
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Zresetuj poprzednie błędy
            resetEventErrors();
            
            // Sprawdzanie wszystkich pól
            const isEventNameValid = validateEventName();
            const isEventCategoryValid = validateEventCategory();
            const isEventDateValid = validateEventDate();
            const isEventTimeValid = validateEventTime();
            const isEventLocationValid = validateEventLocation();
            const isMaxParticipantsValid = validateMaxParticipants();
            const isEventDescriptionValid = validateEventDescription();
            const isOnlineLinkValid = isOnlineCheckbox.checked ? validateOnlineLink() : true;
            const isTicketPriceValid = validateTicketPrice();
            
            if (isEventNameValid && isEventCategoryValid && isEventDateValid && 
                isEventTimeValid && isEventLocationValid && isMaxParticipantsValid && 
                isEventDescriptionValid && isOnlineLinkValid && isTicketPriceValid) {
                
                // Symulacja udanego tworzenia wydarzeń
                simulateEventCreation();
            } else {
                // Pokaż błąd ogólny
                showEventFormError('Proszę poprawić zaznaczone pola');
            }
        });
        
        // Walidacja pola dynamicznego
        eventName.addEventListener('input', validateEventName);
        eventCategory.addEventListener('change', validateEventCategory);
        eventDate.addEventListener('change', validateEventDate);
        eventTime.addEventListener('change', validateEventTime);
        eventLocation.addEventListener('input', validateEventLocation);
        maxParticipants.addEventListener('input', validateMaxParticipants);
        eventDescription.addEventListener('input', validateEventDescription);
        onlineLink.addEventListener('input', validateOnlineLink);
        ticketPrice.addEventListener('input', validateTicketPrice);
        
        // Funkcje walidacyjne
        function validateEventName() {
            const value = eventName.value.trim();
            
            if (!value) {
                showError('eventNameError', 'Nazwa wydarzenia jest wymagana');
                eventName.classList.add('error');
                return false;
            }
            
            if (value.length < 5) {
                showError('eventNameError', 'Nazwa musi zawierać co najmniej 5 znaków');
                eventName.classList.add('error');
                return false;
            }
            
            if (value.length > 100) {
                showError('eventNameError', 'Nazwa może zawierać maksymalnie 100 znaków');
                eventName.classList.add('error');
                return false;
            }
            
            clearError('eventNameError');
            eventName.classList.remove('error');
            return true;
        }
        
        function validateEventCategory() {
            const value = eventCategory.value;
            
            if (!value) {
                showError('eventCategoryError', 'Wybierz kategorię wydarzenia');
                eventCategory.classList.add('error');
                return false;
            }
            
            clearError('eventCategoryError');
            eventCategory.classList.remove('error');
            return true;
        }
        
        function validateEventDate() {
            const value = eventDate.value;
            
            if (!value) {
                showError('eventDateError', 'Data wydarzenia jest wymagana');
                eventDate.classList.add('error');
                return false;
            }
            
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showError('eventDateError', 'Data wydarzenia nie może być z przeszłości');
                eventDate.classList.add('error');
                return false;
            }
            
            clearError('eventDateError');
            eventDate.classList.remove('error');
            return true;
        }
        
        function validateEventTime() {
            const value = eventTime.value;
            
            if (!value) {
                showError('eventTimeError', 'Godzina rozpoczęcia jest wymagana');
                eventTime.classList.add('error');
                return false;
            }
            
            // Rozsądna kontrola czasu (od 6:00 do 23:00)
            const [hours, minutes] = value.split(':').map(Number);
            if (hours < 6 || hours > 23) {
                showError('eventTimeError', 'Wydarzenie powinno odbywać się między 6:00 a 23:00');
                eventTime.classList.add('error');
                return false;
            }
            
            clearError('eventTimeError');
            eventTime.classList.remove('error');
            return true;
        }
        
        function validateEventLocation() {
            const value = eventLocation.value.trim();
            
            if (!value) {
                showError('eventLocationError', 'Miejsce wydarzenia jest wymagane');
                eventLocation.classList.add('error');
                return false;
            }
            
            if (value.length < 5) {
                showError('eventLocationError', 'Wprowadź pełny adres wydarzenia');
                eventLocation.classList.add('error');
                return false;
            }
            
            clearError('eventLocationError');
            eventLocation.classList.remove('error');
            return true;
        }
        
        function validateMaxParticipants() {
            const value = parseInt(maxParticipants.value);
            
            if (isNaN(value) || value < 2) {
                showError('maxParticipantsError', 'Minimalna liczba uczestników to 2');
                maxParticipants.classList.add('error');
                return false;
            }
            
            if (value > 1000) {
                showError('maxParticipantsError', 'Maksymalna liczba uczestników to 1000');
                maxParticipants.classList.add('error');
                return false;
            }
            
            clearError('maxParticipantsError');
            maxParticipants.classList.remove('error');
            return true;
        }
        
        function validateEventDescription() {
            const value = eventDescription.value.trim();
            
            if (!value) {
                showError('eventDescriptionError', 'Opis wydarzenia jest wymagany');
                eventDescription.classList.add('error');
                return false;
            }
            
            if (value.length < 20) {
                showError('eventDescriptionError', 'Opis musi zawierać co najmniej 20 znaków');
                eventDescription.classList.add('error');
                return false;
            }
            
            if (value.length > 2000) {
                showError('eventDescriptionError', 'Opis może zawierać maksymalnie 2000 znaków');
                eventDescription.classList.add('error');
                return false;
            }
            
            clearError('eventDescriptionError');
            eventDescription.classList.remove('error');
            return true;
        }
        
        function validateOnlineLink() {
            const value = onlineLink.value.trim();
            
            if (!value) {
                showError('onlineLinkError', 'Link do wydarzenia online jest wymagany');
                onlineLink.classList.add('error');
                return false;
            }
            
            // Proste sprawdzenie adresu URL
            const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
            if (!urlRegex.test(value)) {
                showError('onlineLinkError', 'Wprowadź poprawny URL');
                onlineLink.classList.add('error');
                return false;
            }
            
            clearError('onlineLinkError');
            onlineLink.classList.remove('error');
            return true;
        }
        
        function validateTicketPrice() {
            const value = parseFloat(ticketPrice.value);
            
            if (isNaN(value)) {
                showError('ticketPriceError', 'Wprowadź poprawną cenę');
                ticketPrice.classList.add('error');
                return false;
            }
            
            if (value < 0) {
                showError('ticketPriceError', 'Cena nie może być ujemna');
                ticketPrice.classList.add('error');
                return false;
            }
            
            if (value > 10000) {
                showError('ticketPriceError', 'Maksymalna cena to 10000 PLN');
                ticketPrice.classList.add('error');
                return false;
            }
            
            clearError('ticketPriceError');
            ticketPrice.classList.remove('error');
            return true;
        }
        
        // Funkcje pomocnicze
        function showError(elementId, message) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = message;
                element.style.color = '#EA4335';
            }
        }
        
        function clearError(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = '';
            }
        }
        
        function resetEventErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.textContent = '';
            });
            
            const inputElements = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
            inputElements.forEach(element => {
                element.classList.remove('error');
            });
            
            document.getElementById('eventFormSuccess').style.display = 'none';
            document.getElementById('eventFormError').style.display = 'none';
        }
        
        function showEventFormError(message) {
            const formError = document.getElementById('eventFormError');
            formError.textContent = message;
            formError.style.display = 'block';
            formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function simulateEventCreation() {
            const successMessage = document.getElementById('eventFormSuccess');
            successMessage.style.display = 'block';
            document.getElementById('eventFormError').style.display = 'none';
            
            // Pokaż szczegóły utworzonego wydarzenia
            const eventDetails = `
                <div style="margin-top: 15px; padding: 15px; background: rgba(52, 168, 83, 0.1); border-radius: 6px;">
                    <strong>Podsumowanie wydarzenia:</strong><br>
                    <strong>Nazwa:</strong> ${eventName.value}<br>
                    <strong>Data:</strong> ${eventDate.value} o ${eventTime.value}<br>
                    <strong>Miejsce:</strong> ${eventLocation.value}<br>
                    <strong>Uczestnicy:</strong> ${maxParticipants.value} osób<br>
                    ${ticketPrice.value > 0 ? `<strong>Cena biletu:</strong> ${ticketPrice.value} PLN` : '<strong>Wydarzenie darmowe</strong>'}
                </div>
            `;
            
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Wydarzenie zostało utworzone pomyślnie!' + eventDetails;
            
            // Resaet
            setTimeout(() => {
                eventForm.reset();
                successMessage.style.display = 'none';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Wydarzenie zostało utworzone pomyślnie!';
            }, 5000);
            
            // sukces
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        const style = document.createElement('style');
        style.textContent = `
            #onlineLinkError {
                color: #EA4335;
                font-size: 0.875rem;
                margin-top: 5px;
                min-height: 20px;
            }
            
            .price-input-container {
                position: relative;
                display: flex;
                align-items: center;
            }
            
            .price-input-container input {
                padding-right: 50px;
            }
            
            .price-input-container .currency {
                position: absolute;
                right: 15px;
                color: #666;
            }
            
            .form-actions {
                display: flex;
                gap: 15px;
                margin-top: 30px;
            }
            
            .btn-secondary {
                background: #f8f9fa;
                color: #333;
                padding: 14px 28px;
                border: 2px solid #e0e0e0;
                border-radius: 6px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .btn-secondary:hover {
                background: #e0e0e0;
            }
            
            .info-box {
                background: #f0f7ff;
                border-left: 4px solid #4285F4;
                padding: 25px;
                border-radius: 8px;
                margin-top: 40px;
            }
            
            .info-box h3 {
                color: #4285F4;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .info-box ul {
                padding-left: 20px;
                color: #666;
            }
            
            .info-box li {
                margin-bottom: 10px;
            }
        `;
        document.head.appendChild(style);
    }
});