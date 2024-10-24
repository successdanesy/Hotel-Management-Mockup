document.addEventListener('DOMContentLoaded', () => {
    // Financial data for each month
    const financialData = {
        'January': {
            income: {
                total: '₦5,000,000',
                bookings: '₦4,000,000',
                spa: '₦500,000',
                roomService: '₦300,000'
            },
            expenses: {
                total: '₦2,000,000',
                salaries: '₦1,000,000',
                maintenance: '₦500,000',
                supplies: '₦500,000'
            },
            netProfit: '₦3,000,000'
        },
        'February': {
            income: {
                total: '₦4,800,000',
                bookings: '₦3,800,000',
                spa: '₦500,000',
                roomService: '₦500,000'
            },
            expenses: {
                total: '₦2,200,000',
                salaries: '₦1,200,000',
                maintenance: '₦500,000',
                supplies: '₦500,000'
            },
            netProfit: '₦2,600,000'
        },
        'March': {
            income: {
                total: '₦6,000,000',
                bookings: '₦5,000,000',
                spa: '₦600,000',
                roomService: '₦400,000'
            },
            expenses: {
                total: '₦2,500,000',
                salaries: '₦1,500,000',
                maintenance: '₦500,000',
                supplies: '₦500,000'
            },
            netProfit: '₦3,500,000'
        }
    };

    // Elements to update
    const incomeTotal = document.getElementById('income-total');
    const incomeBookings = document.getElementById('income-bookings');
    const incomeSpa = document.getElementById('income-spa');
    const incomeRoomService = document.getElementById('income-room-service');

    const expensesTotal = document.getElementById('expenses-total');
    const expensesSalaries = document.getElementById('expenses-salaries');
    const expensesMaintenance = document.getElementById('expenses-maintenance');
    const expensesSupplies = document.getElementById('expenses-supplies');

    const netProfit = document.getElementById('net-profit');

    // Month tab buttons
    const monthTabs = document.querySelectorAll('.tab');

    // Function to update financial data
    function updateFinancialData(month) {
        const data = financialData[month];

        // Update income
        incomeTotal.textContent = data.income.total;
        incomeBookings.textContent = data.income.bookings;
        incomeSpa.textContent = data.income.spa;
        incomeRoomService.textContent = data.income.roomService;

        // Update expenses
        expensesTotal.textContent = data.expenses.total;
        expensesSalaries.textContent = data.expenses.salaries;
        expensesMaintenance.textContent = data.expenses.maintenance;
        expensesSupplies.textContent = data.expenses.supplies;

        // Update net profit
        netProfit.textContent = data.netProfit;
    }

    // Add event listeners to month tabs
    monthTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const month = tab.getAttribute('data-month');

            // Update active tab
            monthTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update financial data for the selected month
            updateFinancialData(month);
        });
    });

    // Initialize with January data
    updateFinancialData('January');
});
