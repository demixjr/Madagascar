const monthNames = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const titleElement = document.getElementById("month-year-title");
const container = document.getElementById("calendar-container");

function renderCalendar(month, year) {
    titleElement.innerText = `${monthNames[month]} ${year}`;

    let html = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';

    let firstDay = new Date(year, month, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();

    let currentDayCount = 1;
    let nextMonthDayCount = 1;

    for (let i = 0; i < 42; i++) {
        if (i % 7 === 0 && i !== 0) {
            html += '</tr><tr>';
        }

        if (i < firstDay) {
            let prevDay = daysInPrevMonth - firstDay + i + 1;
            html += `<td style="color: lightgray;">${prevDay}</td>`;
        } else if (currentDayCount <= daysInMonth) {
            let inlineStyles = "";

            if (month === 8 && currentDayCount === 12
                || month === 5 && currentDayCount === 21
                || month === 6 && currentDayCount === 23
                || month === 5 && currentDayCount === 15
            ) {
                inlineStyles = "background-color: #ff00ff; color: white; border: 5px double white;";
            }

            html += `<td style="${inlineStyles}">${currentDayCount}</td>`;
            currentDayCount++;
        } else {
            html += `<td style="color: lightgray;">${nextMonthDayCount}</td>`;
            nextMonthDayCount++;
        }
    }

    html += '</tr></table>';
    container.innerHTML = html;
}

renderCalendar(currentMonth, currentYear);

document.getElementById("prev-btn").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});