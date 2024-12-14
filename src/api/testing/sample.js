// export const getClientsList = async (clientId) => {
//     const data = [
//         { ClientId: 1, Name: "ADHOC - Finns Hill", Address: "12 Burton Ave, Clayton VIC 3168, Australia" },
//         { ClientId: 2, Name: "ADHOC - Hannam Cottage", Address: "12 Burton Ave, Clayton VIC 3168, Australia" },
//         { ClientId: 3, Name: "ADHOC - Sherwood House", Address: "12 Burton Ave, Clayton VIC 3168, Australia" },
//         { ClientId: 4, Name: "ADHOC - Finns Rd 1", Address: "12 Burton Ave, Clayton VIC 3168, Australia" },
//         { ClientId: 5, Name: "ADHOC - Finns Rd 2", Address: "12 Burton Ave, Clayton VIC 3168, Australia" },
//     ]

//     return data;
// };

// export const getEmployeesList = async (clientId) => {
//     const localStorageKey = `ROSTER_EMPLOYEES_LIST`;

//     const cachedData = localStorage.getItem(localStorageKey);
//     if (cachedData) {
//         return JSON.parse(cachedData); // Return parsed data if available
//     } else {
//         const newData = generateRandomEmployees(6);
//         localStorage.setItem(localStorageKey, JSON.stringify(newData));
//         return newData;
//     }
// };

// export const getShiftsData = async (filterId, filterType) => {
//     const localStorageKey = `ROSTER_SHIFT_DATA`;
//     const cachedData = localStorage.getItem(localStorageKey);
//     let shiftsData = localStorage.getItem(localStorageKey);

//     if (cachedData) {
//         shiftsData = JSON.parse(cachedData); // Return parsed data if available
//     } else {
//         let newShiftData = generateShifts();
//         localStorage.setItem(localStorageKey, JSON.stringify(newShiftData));
//         shiftsData = newShiftData;
//     }

//     // Filter only if filterId is not null
//     if (filterId !== null) {
//         if (filterType === "Clients") {
//             return shiftsData.filter(shift => shift.ClientId === filterId);
//         } else {
//             return shiftsData.filter(shift => shift.EmployeeId === filterId);
//         }
//     } else {
//         return shiftsData;
//     }
// }

// Function to generate random shifts
function generateShifts() {
    const employees = [
        { employeeId: 1, name: "Alice Johnson" },
        { employeeId: 2, name: "Bob Smith" },
        { employeeId: 3, name: "Charlie Williams" },
        { employeeId: 4, name: "David Brown" },
        { employeeId: 5, name: "Eva Green" },
        { employeeId: 6, name: "Frank Harris" },
    ];

    const shiftTypes = ["AM Shift", "PM Shift"];
    const statuses = ["Open", "Pending", "Live", "Invoiced", "Cancelled"];
    const clients = [
        { clientId: 1, clientName: "Mckenzie Aged Care", className: "Registered Nurse G4" },
        { clientId: 2, clientName: "Marketing Victoria North", className: "Personal Care Assistant" }
    ];

    const newShifts = [];

    for (let i = 0; i < 200; i++) { // Generate 200 shifts
        const randomClient = clients[Math.floor(Math.random() * clients.length)];
        const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
        const shiftType = shiftTypes[Math.floor(Math.random() * shiftTypes.length)];

        // Randomize the day within November and December 2024
        const month = 10 + Math.floor(Math.random() * 2); // 10 for November, 11 for December
        const day = 1 + Math.floor(Math.random() * 31); // Days range from 1 to 31
        const startTime = new Date(2024, month, day, 7 + Math.floor(Math.random() * 5), 0); // Random hour between 7AM and 12PM
        const endTime = new Date(startTime);
        endTime.setHours(startTime.getHours() + 8);

        // Extract only the date part from StartTime
        const date = startTime.toISOString().split('T')[0];
        const dayName = startTime.toLocaleDateString('en-AU', { weekday: 'long' });

        newShifts.push({
            ShiftId: 300 + i, // Unique ShiftId
            ShiftType: shiftType,
            StartTime: startTime.toISOString(),
            EndTime: endTime.toISOString(),
            Class: randomClient.className,
            ClientId: randomClient.clientId,
            Client: randomClient.clientName,
            EmployeeId: randomEmployee.employeeId,
            Employee: randomEmployee.name,
            Status: statuses[Math.floor(Math.random() * statuses.length)],

            ShiftDate: date,
            ShiftDay: dayName,
            STime: formatTime(startTime),
            ETime: formatTime(endTime),
            ShiftDuration: calculateDurationInHours(startTime, endTime),
        });
    }

    console.log(newShifts);

    return newShifts;
}

// Function to generate random Employees
function generateRandomEmployees(count) {
    const names = ["Cally Sarah", "Cally Connor", "Cally Reeke", "Jordan Lee", "Avery Kim", "Taylor Morgan", "Jamie Parker", "Alex Smith", "Robin Brown", "Morgan Green"];
    const roles = ["Disability Support Worker", "Healthcare Assistant", "Social Worker", "Nurse", "Therapist"];
    const complianceStatuses = [
        { status: "Compliant", color: "green" },
        { status: "Non - Compliant", color: "red" }
    ];

    const workers = [];

    for (let i = 0; i < count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const role = roles[Math.floor(Math.random() * roles.length)];
        const compliance = complianceStatuses[Math.floor(Math.random() * complianceStatuses.length)];

        const worker = {
            id: i + 1,
            Name: name,
            role: role,
            complianceStatus: compliance.status,
            // complianceColor: compliance.color,
            totalHours: parseFloat((Math.random() * (100 - 70) + 70).toFixed(2)), // Random hours between 70 and 100
            billableHours: parseFloat((Math.random() * (40 - 20) + 20).toFixed(2)), // Random hours between 20 and 40
            allowance: {
                count: Math.floor(Math.random() * 3) + 1, // Random count between 1 and 3
                hours: parseFloat((Math.random() * (10 - 5) + 5).toFixed(2)) // Random hours between 5 and 10
            }
        };

        workers.push(worker);
    }

    return workers;
}

const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

const calculateDurationInHours = (startTime, endTime) => {
    // Ensure inputs are valid Date objects
    if (!(startTime instanceof Date) || !(endTime instanceof Date)) {
        console.error("Invalid input: startTime and endTime must be Date objects.");
        return 0;
    }

    // Calculate duration in milliseconds
    const durationInMilliseconds = endTime.getTime() - startTime.getTime();
    if (durationInMilliseconds < 0) {
        console.error("Invalid input: endTime is earlier than startTime.");
        return 0;
    }

    // Convert to hours and minutes
    const totalMinutes = Math.floor(durationInMilliseconds / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // console.log(`Duration: ${hours} hours ${minutes} minutes`);
    return hours + "." + minutes;
};