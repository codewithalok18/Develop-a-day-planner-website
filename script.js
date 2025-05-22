const plannerContainer = document.getElementById('planner');
const clearBtn = document.getElementById('clearBtn');


const hours = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM"
];


function loadPlanner() {
  hours.forEach((hour, index) => {
    const savedText = localStorage.getItem(`slot-${index}`) || "";
    const slotDiv = document.createElement('div');
    slotDiv.className = 'time-slot';
    slotDiv.innerHTML = `
      <label>${hour}</label>
      <textarea id="text-${index}">${savedText}</textarea>
      <button onclick="saveSlot(${index})">💾</button>
    `;
    plannerContainer.appendChild(slotDiv);
  });
}


function saveSlot(index) {
  const text = document.getElementById(`text-${index}`).value;
  localStorage.setItem(`slot-${index}`, text);
  alert("Saved!");
}


clearBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

loadPlanner();
