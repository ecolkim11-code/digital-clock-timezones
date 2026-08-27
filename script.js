class Clock {
    constructor(timezone) {
        this.timezone = timezone;
        this.element = null;
    }

    create() {
        const clock = document.createElement('div');
        clock.className = 'clock';
        clock.dataset.timezone = this.timezone;
        
        clock.innerHTML = `
            <button class="remove-btn" onclick="removeClock('${this.timezone}')">×</button>
            <div class="timezone-name">${this.timezone}</div>
            <div class="digital-time" id="digital-${this.timezone}">00:00:00</div>
            <div class="analog-clock" id="analog-${this.timezone}">
                <div class="hand hour-hand" id="hour-${this.timezone}"></div>
                <div class="hand minute-hand" id="minute-${this.timezone}"></div>
                <div class="hand second-hand" id="second-${this.timezone}"></div>
                <div class="center-dot"></div>
            </div>
            <div class="date-info" id="date-${this.timezone}">Loading...</div>
        `;
        
        this.element = clock;
        return clock;
    }

    update() {
        try {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: this.timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const dateFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: this.timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            const timeString = formatter.format(now);
            const dateString = dateFormatter.format(now);

            // Update digital time
            const digitalElement = document.getElementById(`digital-${this.timezone}`);
            if (digitalElement) {
                digitalElement.textContent = timeString;
            }

            // Update date
            const dateElement = document.getElementById(`date-${this.timezone}`);
            if (dateElement) {
                dateElement.textContent = dateString;
            }

            // Update analog clock
            const parts = timeString.split(':');
            const hours = parseInt(parts[0]);
            const minutes = parseInt(parts[1]);
            const seconds = parseInt(parts[2]);

            const hourHand = document.getElementById(`hour-${this.timezone}`);
            const minuteHand = document.getElementById(`minute-${this.timezone}`);
            const secondHand = document.getElementById(`second-${this.timezone}`);

            if (hourHand) {
                const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
                hourHand.style.transform = `rotate(${hourDegrees}deg)`;
            }

            if (minuteHand) {
                const minuteDegrees = minutes * 6 + seconds * 0.1;
                minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
            }

            if (secondHand) {
                const secondDegrees = seconds * 6;
                secondHand.style.transform = `rotate(${secondDegrees}deg)`;
            }
        } catch (error) {
            console.error(`Error updating clock for ${this.timezone}:`, error);
        }
    }
}

const clocks = new Map();
const container = document.getElementById('clocksContainer');
const timezoneInput = document.getElementById('timezoneInput');
const addBtn = document.getElementById('addBtn');

// Default timezones
const defaultTimezones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney'
];

function isValidTimezone(timezone) {
    try {
        Intl.DateTimeFormat(undefined, { timeZone: timezone });
        return true;
    } catch (ex) {
        return false;
    }
}

function addClock(timezone) {
    timezone = timezone.trim();
    
    if (!timezone) {
        showError('Please enter a timezone');
        return;
    }

    if (!isValidTimezone(timezone)) {
        showError(`Invalid timezone: "${timezone}"`);
        return;
    }

    if (clocks.has(timezone)) {
        showError(`Timezone "${timezone}" already added`);
        return;
    }

    const clock = new Clock(timezone);
    clocks.set(timezone, clock);
    container.appendChild(clock.create());
    clock.update();
    timezoneInput.value = '';
    removeError();
}

function removeClock(timezone) {
    const element = document.querySelector(`[data-timezone="${timezone}"]`);
    if (element) {
        element.remove();
        clocks.delete(timezone);
    }
}

function showError(message) {
    removeError();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.id = 'error-message';
    container.appendChild(errorDiv);
}

function removeError() {
    const errorMsg = document.getElementById('error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function updateAllClocks() {
    clocks.forEach(clock => clock.update());
}

// Event listeners
addBtn.addEventListener('click', () => {
    addClock(timezoneInput.value);
});

timezoneInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addClock(timezoneInput.value);
    }
});

// Initialize with default timezones
defaultTimezones.forEach(tz => addClock(tz));

// Update clocks every second
setInterval(updateAllClocks, 1000);
updateAllClocks();