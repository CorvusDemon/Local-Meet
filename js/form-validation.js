// Walidacja formularza kontaktowego
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        
        const formSuccess = document.getElementById('formSuccess');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-ZąęćłńóśźżĄĘĆŁŃÓŚŹŻ\s-]{2,50}$/;
        
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        messageInput.addEventListener('input', validateMessage);
        
        // Walidacja przy wysyłaniu formularza
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            resetErrors();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                simulateFormSubmission();
            } else {
                showFormError('Proszę poprawić zaznaczone pola');
            }
        });
        
        function validateName() {
            const value = nameInput.value.trim();
            
            if (!value) {
                showError(nameError, 'Imię i nazwisko jest wymagane');
                nameInput.classList.add('error');
                return false;
            }
            
            if (!nameRegex.test(value)) {
                showError(nameError, 'Wprowadź poprawne imię i nazwisko (tylko litery, 2-50 znaków)');
                nameInput.classList.add('error');
                return false;
            }
            
            clearError(nameError);
            nameInput.classList.remove('error');
            return true;
        }
        
        function validateEmail() {
            const value = emailInput.value.trim();
            
            if (!value) {
                showError(emailError, 'Adres email jest wymagany');
                emailInput.classList.add('error');
                return false;
            }
            
            if (!emailRegex.test(value)) {
                showError(emailError, 'Wprowadź poprawny adres email');
                emailInput.classList.add('error');
                return false;
            }
            
            clearError(emailError);
            emailInput.classList.remove('error');
            return true;
        }
        
        function validateMessage() {
            const value = messageInput.value.trim();
            
            if (!value) {
                showError(messageError, 'Wiadomość jest wymagana');
                messageInput.classList.add('error');
                return false;
            }
            
            if (value.length < 10) {
                showError(messageError, 'Wiadomość musi zawierać co najmniej 10 znaków');
                messageInput.classList.add('error');
                return false;
            }
            
            clearError(messageError);
            messageInput.classList.remove('error');
            return true;
        }
        
        // Funkcje pomocnicze
        function showError(element, message) {
            if (element) {
                element.textContent = message;
                element.style.color = '#EA4335';
            }
        }
        
        function clearError(element) {
            if (element) {
                element.textContent = '';
            }
        }
        
        function resetErrors() {
            clearError(nameError);
            clearError(emailError);
            clearError(messageError);
            
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            messageInput.classList.remove('error');
            
            formSuccess.style.display = 'none';
        }
        
        function showFormError(message) {
            const formError = document.getElementById('formError') || createFormErrorElement();
            showError(formError, message);
        }
        
        function createFormErrorElement() {
            const errorDiv = document.createElement('div');
            errorDiv.id = 'formError';
            errorDiv.className = 'error-message';
            contactForm.insertBefore(errorDiv, contactForm.firstChild);
            return errorDiv;
        }
        
        function simulateFormSubmission() {
            formSuccess.style.display = 'block';
            formSuccess.style.backgroundColor = '#34A853';
            formSuccess.textContent = 'Wiadomość została wysłana pomyślnie!';
            
            setTimeout(() => {
                contactForm.reset();
                formSuccess.style.display = 'none';
            }, 3000);
            
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        const style = document.createElement('style');
        style.textContent = `
            .error { border-color: #EA4335 !important; }
            .error:focus { border-color: #EA4335 !important; box-shadow: 0 0 0 3px rgba(234, 67, 53, 0.1) !important; }
        `;
        document.head.appendChild(style);
    }
});