// =================================================================
// نظام إدارة شركة بطاح لقطع غيار السيارات - الإصدار الاحترافي المتكامل
// العملة: الجنيه المصري | التقويم: ميلادي
// =================================================================

// بيانات التطبيق الأساسية
const AppData = {
    employees: [
        {id: 1, name: "أحمد محمد علي", position: "مدير عام", basicSalary: 8000, hireDate: "2023-01-15", phone: "01012345678", address: "القاهرة، مصر الجديدة"},
        {id: 2, name: "فاطمة أحمد حسن", position: "محاسبة رئيسية", basicSalary: 6000, hireDate: "2023-03-10", phone: "01087654321", address: "الجيزة، المهندسين"},
        {id: 3, name: "محمد علي حسين", position: "فني أول", basicSalary: 4500, hireDate: "2023-06-20", phone: "01123456789", address: "القاهرة، شبرا"},
        {id: 4, name: "سارة محمود أحمد", position: "أمينة المخزن", basicSalary: 4000, hireDate: "2023-08-05", phone: "01098765432", address: "الجيزة، الدقي"}
    ],
    advances: [
        {id: 1, date: "2025-09-15", employeeId: 1, amount: 2000, payment: 1000, notes: "سلفة لظروف طارئة"},
        {id: 2, date: "2025-09-10", employeeId: 3, amount: 1500, payment: 500, notes: "سلفة شهرية"}
    ],
    attendance: [
        {id: 1, date: "2025-09-20", employeeId: 1, checkIn: "08:00", checkOut: "17:00", notes: ""},
        {id: 2, date: "2025-09-20", employeeId: 2, checkIn: "08:30", checkOut: "17:30", notes: ""},
        {id: 3, date: "2025-09-19", employeeId: 1, checkIn: "08:15", checkOut: "17:15", notes: ""}
    ],
    payroll: [
        {id: 1, date: "2025-09-01", employeeId: 1, basicSalary: 8000, disbursed: 7000, notes: "راتب سبتمبر 2025"},
        {id: 2, date: "2025-09-01", employeeId: 2, basicSalary: 6000, disbursed: 5500, notes: "راتب سبتمبر 2025"}
    ],
    suppliers: [
        {id: 1, name: "شركة قطع الغيار المتحدة", contact: "01012345678", address: "القاهرة، العتبة"},
        {id: 2, name: "مؤسسة الأجزاء الحديثة", contact: "01087654321", address: "الجيزة، الهرم"},
        {id: 3, name: "شركة الكماليات الذهبية", contact: "01123456789", address: "القاهرة، الأزهر"}
    ],
    payments: [
        {id: 1, date: "2025-09-18", supplierId: 1, payment: 15000, invoiceTotal: 20000, returnedItems: "مرشح زيت معيب × 3", notes: "دفعة جزئية"},
        {id: 2, date: "2025-09-15", supplierId: 2, payment: 8000, invoiceTotal: 8000, returnedItems: "", notes: "دفعة كاملة"}
    ],
    expenses: [
        {id: 1, date: "2025-09-20", type: "شخصية", name: "وجبات غداء الموظفين", amount: 300, notes: ""},
        {id: 2, date: "2025-09-19", type: "عامة", name: "فاتورة كهرباء", amount: 1200, notes: "فاتورة شهر أغسطس"},
        {id: 3, date: "2025-09-18", type: "موظفين", name: "بدل مواصلات", amount: 500, notes: "بدل أسبوعي"}
    ],
    dailyReview: [
        {id: 1, date: "2025-09-20", branch: "مركز الصيانة", salesCash: 5000, salesElectronic: 3000, salesParts: 4000, salesAccessories: 2000, purchasesAccessories: 1500, purchasesParts: 2500, purchasesMechanical: 1000, totalExpenses: 800, totalAdvances: 1000, personalExpenses: 200, payments: 3000, dailyExpenses: 400, drawerBalance: 6500, notes: ""},
        {id: 2, date: "2025-09-20", branch: "الأصلي", salesCash: 7000, salesElectronic: 4000, salesParts: 6000, salesAccessories: 3000, purchasesAccessories: 2000, purchasesParts: 3500, purchasesMechanical: 1500, totalExpenses: 1000, totalAdvances: 1500, personalExpenses: 300, payments: 4000, dailyExpenses: 600, drawerBalance: 8000, notes: ""}
    ]
};

// إعدادات التطبيق
const AppConfig = {
    companyName: "شركة بطاح لقطع غيار السيارات",
    currency: "ج.م",
    branches: ["مركز الصيانة", "الأصلي", "فرع ٣"],
    expenseCategories: ["شخصية", "عامة", "موظفين"],
    positions: ["مدير عام", "مدير فرع", "محاسب رئيسي", "محاسب", "فني أول", "فني", "أمين مخزن", "عامل", "سائق"]
};

// متغيرات عامة
let currentSection = 'dashboard';
let editingId = null;
let charts = {};
const nextIds = {
    employee: 5, advance: 3, attendance: 4, payroll: 3, payment: 3, expense: 4, dailyReview: 3, supplier: 4
};

// =================================================================
// الدوال المساعدة
// =================================================================

function formatCurrency(amount) {
    if (amount === null || amount === undefined || isNaN(amount)) return '0.00 ج.م';
    try {
        return new Intl.NumberFormat('ar-EG', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Number(amount)) + ' ج.م';
    } catch (e) {
        console.warn('خطأ في تنسيق العملة:', e);
        return Number(amount).toFixed(2) + ' ج.م';
    }
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

function calculateHours(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    const [inHours, inMinutes] = checkIn.split(':').map(Number);
    const [outHours, outMinutes] = checkOut.split(':').map(Number);
    const inTotalMinutes = inHours * 60 + inMinutes;
    const outTotalMinutes = outHours * 60 + outMinutes;
    let diffMinutes = outTotalMinutes - inTotalMinutes;
    if (diffMinutes < 0) diffMinutes += 24 * 60;
    return Math.round((diffMinutes / 60) * 100) / 100;
}

function generateId(type) {
    return nextIds[type]++;
}

// =================================================================
// إدارة التنبيهات
// =================================================================

function showNotification(message, type = 'info', duration = 5000) {
    const container = document.getElementById('notifications');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };

    notification.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;

    container.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'notificationSlideOut 0.3s ease-in';
            setTimeout(() => container.removeChild(notification), 300);
        }
    }, duration);
}

// =================================================================
// إدارة النوافذ المنبثقة
// =================================================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
            editingId = null;
        }
    }
}

// =================================================================
// إدارة التنقل
// =================================================================

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            if (section) {
                switchSection(section);
                updateActiveNavButton(button);
            }
        });
    });
}

function switchSection(sectionName) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        updateSectionContent(sectionName);
    }
}

function updateActiveNavButton(activeButton) {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

function updateSectionContent(sectionName) {
    switch (sectionName) {
        case 'dashboard': updateDashboard(); break;
        case 'employees': renderEmployeesTable(); break;
        case 'advances': renderAdvancesTable(); break;
        case 'attendance': renderAttendanceTable(); break;
        case 'payroll': renderPayrollTable(); break;
        case 'suppliers': renderSuppliersTable(); showSuppliersView(); break;
        case 'expenses': renderExpensesTable(); break;
        case 'daily-review': renderDailyReviewTable(); break;
        case 'reports': updateReportsSection(); break;
    }
}

// =================================================================
// لوحة التحكم
// =================================================================

function updateDashboard() {
    try {
        updateStatCards();
        updateRecentActivities();
        renderCharts();
    } catch (error) {
        console.error('خطأ في تحديث لوحة التحكم:', error);
        showNotification('حدث خطأ في تحميل لوحة التحكم، لكن النظام يعمل', 'warning');
    }
}

function updateStatCards() {
    const totalEmployees = AppData.employees.length;
    document.getElementById('totalEmployees').textContent = totalEmployees;

    const totalSalaries = AppData.employees.reduce((sum, emp) => sum + emp.basicSalary, 0);
    document.getElementById('totalSalaries').textContent = formatCurrency(totalSalaries);

    const totalAdvances = AppData.advances.reduce((sum, adv) => sum + (adv.amount - adv.payment), 0);
    document.getElementById('totalAdvances').textContent = formatCurrency(totalAdvances);

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyExpenses = AppData.expenses
        .filter(exp => {
            const expDate = new Date(exp.date);
            return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
        })
        .reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById('totalExpenses').textContent = formatCurrency(monthlyExpenses);
}

function updateRecentActivities() {
    const activitiesContainer = document.getElementById('activitiesLog');
    if (!activitiesContainer) return;

    const activities = [];

    AppData.employees.slice(-3).forEach(emp => {
        activities.push({
            icon: 'fas fa-user-plus',
            message: `تم إضافة الموظف: ${emp.name}`,
            date: emp.hireDate
        });
    });

    AppData.advances.slice(-3).forEach(adv => {
        const employee = AppData.employees.find(emp => emp.id === adv.employeeId);
        activities.push({
            icon: 'fas fa-hand-holding-usd',
            message: `سلفة جديدة للموظف: ${employee?.name || ''} - ${formatCurrency(adv.amount)}`,
            date: adv.date
        });
    });

    AppData.expenses.slice(-3).forEach(exp => {
        activities.push({
            icon: 'fas fa-receipt',
            message: `مصروف جديد: ${exp.name} - ${formatCurrency(exp.amount)}`,
            date: exp.date
        });
    });

    activities.sort((a, b) => new Date(b.date) - new Date(a.date));
    const recentActivities = activities.slice(0, 5);

    activitiesContainer.innerHTML = recentActivities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon"><i class="${activity.icon}"></i></div>
            <div class="activity-content">
                <p>${activity.message}</p>
                <span>${formatDate(activity.date)}</span>
            </div>
        </div>
    `).join('');

    if (recentActivities.length === 0) {
        activitiesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <h3>لا توجد أنشطة حديثة</h3>
                <p>ابدأ باستخدام النظام لرؤية الأنشطة هنا</p>
            </div>
        `;
    }
}

function renderCharts() {
    if (typeof Chart === 'undefined') {
        console.log('مكتبة Chart.js غير محملة. سيتم تجاهل الرسوم البيانية مؤقتًا.');
        // إخفاء الـ canvases إذا لم تكن المكتبة محملة
        const salesCanvas = document.getElementById('salesChart');
        const expensesCanvas = document.getElementById('expensesChart');
        if (salesCanvas) {
            salesCanvas.parentElement.innerHTML = '<p>تعذر تحميل الرسم البياني (تحقق من الاتصال بالإنترنت).</p>';
        }
        if (expensesCanvas) {
            expensesCanvas.parentElement.innerHTML = '<p>تعذر تحميل الرسم البياني (تحقق من الاتصال بالإنترنت).</p>';
        }
        return;
    }
    try {
        renderSalesChart();
        renderExpensesChart();
    } catch (error) {
        console.error('خطأ في إنشاء الرسوم البيانية:', error);
        // إخفاء الـ canvases في حالة خطأ
        const salesCanvas = document.getElementById('salesChart');
        const expensesCanvas = document.getElementById('expensesChart');
        if (salesCanvas) {
            salesCanvas.parentElement.innerHTML = '<p>تعذر تحميل الرسم البياني.</p>';
        }
        if (expensesCanvas) {
            expensesCanvas.parentElement.innerHTML = '<p>تعذر تحميل الرسم البياني.</p>';
        }
        showNotification('تعذر تحميل الرسوم البيانية، لكن باقي النظام يعمل', 'warning');
    }
}

function renderSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    const last7Days = [];
    const salesData = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        last7Days.push(date.toLocaleDateString('ar-EG', { weekday: 'short', day: 'numeric' }));

        const daySales = AppData.dailyReview
            .filter(review => review.date === dateStr)
            .reduce((sum, review) => sum + review.salesCash + review.salesElectronic, 0);

        salesData.push(daySales);
    }

    if (charts.sales) charts.sales.destroy();

    charts.sales = new Chart(ctx, {
        type: 'line',
        data: {
            labels: last7Days,
            datasets: [{
                label: 'المبيعات اليومية (ج.م)',
                data: salesData,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { font: { family: 'Cairo' } } }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

function renderExpensesChart() {
    const ctx = document.getElementById('expensesChart');
    if (!ctx) return;

    const expensesByType = AppConfig.expenseCategories.map(category => {
        return AppData.expenses
            .filter(exp => exp.type === category)
            .reduce((sum, exp) => sum + exp.amount, 0);
    });

    if (charts.expenses) charts.expenses.destroy();

    charts.expenses = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: AppConfig.expenseCategories,
            datasets: [{
                data: expensesByType,
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { family: 'Cairo' }, usePointStyle: true, padding: 20 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            try {
                                return context.label + ': ' + formatCurrency(context.parsed);
                            } catch (e) {
                                return context.label + ': ' + context.parsed.toFixed(2) + ' ج.م';
                            }
                        }
                    }
                }
            }
        }
    });
}

// =================================================================
// إدارة الموظفين
// =================================================================

function renderEmployeesTable() {
    const tableBody = document.getElementById('employeesTableBody');
    if (!tableBody) return;

    let employees = [...AppData.employees];

    const searchTerm = document.getElementById('employeeSearch')?.value;
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        employees = employees.filter(emp => 
            emp.name.toLowerCase().includes(term) || 
            emp.position.toLowerCase().includes(term)
        );
    }

    const positionFilter = document.getElementById('positionFilter')?.value;
    if (positionFilter) {
        employees = employees.filter(emp => emp.position === positionFilter);
    }

    tableBody.innerHTML = employees.map(employee => `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${formatCurrency(employee.basicSalary)}</td>
            <td>${formatDate(employee.hireDate)}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editEmployee(${employee.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteEmployee(${employee.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (employees.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="6" class="empty-state">
                <i class="fas fa-users"></i>
                <h3>لا توجد موظفين</h3>
                <p>لم يتم العثور على موظفين مطابقين للبحث</p>
            </td></tr>
        `;
    }
}

function openEmployeeModal(employeeId = null) {
    editingId = employeeId;
    const modal = document.getElementById('employeeModal');
    const title = document.getElementById('employeeModalTitle');

    if (employeeId) {
        const employee = AppData.employees.find(emp => emp.id === employeeId);
        if (employee) {
            title.textContent = 'تعديل بيانات الموظف';
            document.getElementById('employeeName').value = employee.name;
            document.getElementById('employeePosition').value = employee.position;
            document.getElementById('employeeSalary').value = employee.basicSalary;
            document.getElementById('employeeHireDate').value = employee.hireDate;
            document.getElementById('employeePhone').value = employee.phone || '';
            document.getElementById('employeeAddress').value = employee.address || '';
        }
    } else {
        title.textContent = 'إضافة موظف جديد';
    }

    openModal('employeeModal');
}

function saveEmployee(formData) {
    const employeeData = {
        name: formData.get('name'),
        position: formData.get('position'),
        basicSalary: parseFloat(formData.get('basicSalary')),
        hireDate: formData.get('hireDate'),
        phone: formData.get('phone') || '',
        address: formData.get('address') || ''
    };

    if (editingId) {
        const index = AppData.employees.findIndex(emp => emp.id === editingId);
        if (index !== -1) {
            AppData.employees[index] = { ...AppData.employees[index], ...employeeData };
            showNotification('تم تحديث بيانات الموظف بنجاح', 'success');
        }
    } else {
        const newEmployee = { id: generateId('employee'), ...employeeData };
        AppData.employees.push(newEmployee);
        showNotification('تم إضافة الموظف بنجاح', 'success');
    }

    closeModal('employeeModal');
    renderEmployeesTable();
    updateDashboard();
}

function editEmployee(employeeId) {
    openEmployeeModal(employeeId);
}

function deleteEmployee(employeeId) {
    const employee = AppData.employees.find(emp => emp.id === employeeId);
    if (!employee) return;

    if (confirm(`هل أنت متأكد من حذف الموظف "${employee.name}"؟`)) {
        AppData.employees = AppData.employees.filter(emp => emp.id !== employeeId);
        AppData.advances = AppData.advances.filter(adv => adv.employeeId !== employeeId);
        AppData.attendance = AppData.attendance.filter(att => att.employeeId !== employeeId);
        AppData.payroll = AppData.payroll.filter(pay => pay.employeeId !== employeeId);

        showNotification('تم حذف الموظف بنجاح', 'success');
        renderEmployeesTable();
        updateDashboard();
    }
}

// =================================================================
// إدارة السلف
// =================================================================

function renderAdvancesTable() {
    const tableBody = document.getElementById('advancesTableBody');
    if (!tableBody) return;

    const advances = AppData.advances.map(advance => {
        const employee = AppData.employees.find(emp => emp.id === advance.employeeId);
        return {
            ...advance,
            employeeName: employee?.name || 'غير محدد',
            remaining: advance.amount - advance.payment
        };
    });

    tableBody.innerHTML = advances.map(advance => `
        <tr>
            <td>${formatDate(advance.date)}</td>
            <td>${advance.employeeName}</td>
            <td>${formatCurrency(advance.amount)}</td>
            <td>${formatCurrency(advance.remaining)}</td>
            <td>${formatCurrency(advance.payment)}</td>
            <td>${advance.notes}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editAdvance(${advance.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteAdvance(${advance.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (advances.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="7" class="empty-state">
                <i class="fas fa-hand-holding-usd"></i>
                <h3>لا توجد سلف مسجلة</h3>
                <p>ابدأ بإضافة سلفة جديدة</p>
            </td></tr>
        `;
    }

    populateEmployeeSelect('advanceEmployee');
}

function openAdvanceModal(advanceId = null) {
    editingId = advanceId;
    populateEmployeeSelect('advanceEmployee');

    if (advanceId) {
        const advance = AppData.advances.find(adv => adv.id === advanceId);
        if (advance) {
            document.getElementById('advanceModalTitle').textContent = 'تعديل السلفة';
            document.getElementById('advanceEmployee').value = advance.employeeId;
            document.getElementById('advanceDate').value = advance.date;
            document.getElementById('advanceAmount').value = advance.amount;
            document.getElementById('advancePayment').value = advance.payment;
            document.getElementById('advanceNotes').value = advance.notes;
        }
    } else {
        document.getElementById('advanceModalTitle').textContent = 'إضافة سلفة جديدة';
        document.getElementById('advanceDate').value = new Date().toISOString().split('T')[0];
    }

    openModal('advanceModal');
}

function populateEmployeeSelect(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const options = ['<option value="">اختر الموظف</option>'];
    AppData.employees.forEach(emp => {
        options.push(`<option value="${emp.id}">${emp.name} - ${emp.position}</option>`);
    });
    select.innerHTML = options.join('');
}

// =================================================================
// إدارة الحضور والانصراف
// =================================================================

function renderAttendanceTable() {
    const tableBody = document.getElementById('attendanceTableBody');
    if (!tableBody) return;

    const attendance = AppData.attendance.map(att => {
        const employee = AppData.employees.find(emp => emp.id === att.employeeId);
        const hours = calculateHours(att.checkIn, att.checkOut);

        return {
            ...att,
            employeeName: employee?.name || 'غير محدد',
            totalHours: hours
        };
    });

    // ترتيب حسب التاريخ (الأحدث أولاً)
    attendance.sort((a, b) => new Date(b.date) - new Date(a.date));

    tableBody.innerHTML = attendance.map(att => `
        <tr>
            <td>${formatDate(att.date)}</td>
            <td>${att.employeeName}</td>
            <td>${att.checkIn}</td>
            <td>${att.checkOut}</td>
            <td>${att.totalHours.toFixed(2)} ساعة</td>
            <td>${att.notes}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editAttendance(${att.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteAttendance(${att.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (attendance.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="7" class="empty-state">
                <i class="fas fa-clock"></i>
                <h3>لا توجد سجلات حضور</h3>
                <p>ابدأ بتسجيل حضور الموظفين</p>
            </td></tr>
        `;
    }
}

function openAttendanceModal(attendanceId = null) {
    editingId = attendanceId;
    populateEmployeeSelect('attendanceEmployee');
    const modalTitle = document.getElementById('attendanceModalTitle');
    const attendanceDate = document.getElementById('attendanceDate');
    const attendanceEmployee = document.getElementById('attendanceEmployee');
    const attendanceCheckIn = document.getElementById('attendanceCheckIn');
    const attendanceCheckOut = document.getElementById('attendanceCheckOut');
    const attendanceNotes = document.getElementById('attendanceNotes');

    if (attendanceId) {
        if (modalTitle) modalTitle.textContent = 'تعديل سجل الحضور';
        const attendance = AppData.attendance.find(att => att.id === attendanceId);
        if (attendance) {
            if (attendanceDate) attendanceDate.value = attendance.date;
            if (attendanceEmployee) attendanceEmployee.value = attendance.employeeId;
            if (attendanceCheckIn) attendanceCheckIn.value = attendance.checkIn;
            if (attendanceCheckOut) attendanceCheckOut.value = attendance.checkOut;
            if (attendanceNotes) attendanceNotes.value = attendance.notes;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'تسجيل حضور جديد';
        if (attendanceDate) attendanceDate.value = new Date().toISOString().split('T')[0];
        if (attendanceCheckIn) attendanceCheckIn.value = '';
        if (attendanceCheckOut) attendanceCheckOut.value = '';
        if (attendanceNotes) attendanceNotes.value = '';
    }

    openModal('attendanceModal');
}

function saveAttendance(formData) {
    const attendanceData = {
        employeeId: parseInt(formData.get('employeeId')),
        date: formData.get('date'),
        checkIn: formData.get('checkIn'),
        checkOut: formData.get('checkOut'),
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.attendance.findIndex(att => att.id === editingId);
        if (index !== -1) {
            AppData.attendance[index] = { ...AppData.attendance[index], ...attendanceData };
            showNotification('تم تحديث سجل الحضور بنجاح', 'success');
        }
    } else {
        const newAttendance = { id: generateId('attendance'), ...attendanceData };
        AppData.attendance.push(newAttendance);
        showNotification('تم تسجيل الحضور بنجاح', 'success');
    }

    closeModal('attendanceModal');
    renderAttendanceTable();
}

function editAttendance(attendanceId) {
    openAttendanceModal(attendanceId);
}

function deleteAttendance(attendanceId) {
    if (confirm('هل أنت متأكد من حذف سجل الحضور؟')) {
        AppData.attendance = AppData.attendance.filter(att => att.id !== attendanceId);
        showNotification('تم حذف سجل الحضور بنجاح', 'success');
        renderAttendanceTable();
    }
}

// =================================================================
// إدارة المرتبات
// =================================================================

function renderPayrollTable() {
    const tableBody = document.getElementById('payrollTableBody');
    if (!tableBody) return;

    const payroll = AppData.payroll.map(pay => {
        const employee = AppData.employees.find(emp => emp.id === pay.employeeId);
        return {
            ...pay,
            employeeName: employee?.name || 'غير محدد',
            remaining: pay.basicSalary - pay.disbursed
        };
    });

    tableBody.innerHTML = payroll.map(pay => `
        <tr>
            <td>${formatDate(pay.date)}</td>
            <td>${pay.employeeName}</td>
            <td>${formatCurrency(pay.basicSalary)}</td>
            <td>${formatCurrency(pay.remaining)}</td>
            <td>${formatCurrency(pay.disbursed)}</td>
            <td>${pay.notes}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editPayroll(${pay.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deletePayroll(${pay.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (payroll.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="7" class="empty-state">
                <i class="fas fa-money-check-alt"></i>
                <h3>لا توجد سجلات مرتبات</h3>
                <p>ابدأ بإضافة دفعات الرواتب</p>
            </td></tr>
        `;
    }
}

function openPayrollModal(payrollId = null) {
    editingId = payrollId;
    populateEmployeeSelect('payrollEmployee');
    const modalTitle = document.getElementById('payrollModalTitle');
    const payrollDate = document.getElementById('payrollDate');
    const payrollEmployee = document.getElementById('payrollEmployee');
    const payrollBasicSalary = document.getElementById('payrollBasicSalary');
    const payrollDisbursed = document.getElementById('payrollDisbursed');
    const payrollNotes = document.getElementById('payrollNotes');

    if (payrollId) {
        if (modalTitle) modalTitle.textContent = 'تعديل دفع الراتب';
        const payroll = AppData.payroll.find(pay => pay.id === payrollId);
        if (payroll) {
            if (payrollDate) payrollDate.value = payroll.date;
            if (payrollEmployee) payrollEmployee.value = payroll.employeeId;
            if (payrollBasicSalary) payrollBasicSalary.value = payroll.basicSalary;
            if (payrollDisbursed) payrollDisbursed.value = payroll.disbursed;
            if (payrollNotes) payrollNotes.value = payroll.notes;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'إضافة دفع راتب جديد';
        if (payrollDate) payrollDate.value = new Date().toISOString().split('T')[0];
        if (payrollEmployee) payrollEmployee.value = '';
        if (payrollBasicSalary) payrollBasicSalary.value = '';
        if (payrollDisbursed) payrollDisbursed.value = '';
        if (payrollNotes) payrollNotes.value = '';
    }

    openModal('payrollModal');
}

function savePayroll(formData) {
    const payrollData = {
        employeeId: parseInt(formData.get('employeeId')),
        date: formData.get('date'),
        basicSalary: parseFloat(formData.get('basicSalary')),
        disbursed: parseFloat(formData.get('disbursed')) || 0,
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.payroll.findIndex(pay => pay.id === editingId);
        if (index !== -1) {
            AppData.payroll[index] = { ...AppData.payroll[index], ...payrollData };
            showNotification('تم تحديث دفع الراتب بنجاح', 'success');
        }
    } else {
        const newPayroll = { id: generateId('payroll'), ...payrollData };
        AppData.payroll.push(newPayroll);
        showNotification('تم إضافة دفع الراتب بنجاح', 'success');
    }

    closeModal('payrollModal');
    renderPayrollTable();
    updateDashboard();
}

function editPayroll(payrollId) {
    openPayrollModal(payrollId);
}

function deletePayroll(payrollId) {
    if (confirm('هل أنت متأكد من حذف سجل الراتب؟')) {
        AppData.payroll = AppData.payroll.filter(pay => pay.id !== payrollId);
        showNotification('تم حذف سجل الراتب بنجاح', 'success');
        renderPayrollTable();
    }
}

// =================================================================
// إدارة الموردين
// =================================================================

function renderSuppliersTable() {
    const tableBody = document.getElementById('suppliersTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.suppliers.map(supplier => `
        <tr>
            <td>${supplier.id}</td>
            <td>${supplier.name}</td>
            <td>${supplier.contact}</td>
            <td>${supplier.address}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editSupplier(${supplier.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteSupplier(${supplier.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (AppData.suppliers.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="5" class="empty-state">
                <i class="fas fa-truck"></i>
                <h3>لا توجد موردين</h3>
                <p>ابدأ بإضافة موردين جدد</p>
            </td></tr>
        `;
    }

    renderPaymentsTable();
}

function openSupplierModal(supplierId = null) {
    editingId = supplierId;
    const modalTitle = document.getElementById('supplierModalTitle');
    const supplierName = document.getElementById('supplierName');
    const supplierContact = document.getElementById('supplierContact');
    const supplierAddress = document.getElementById('supplierAddress');

    if (supplierId) {
        if (modalTitle) modalTitle.textContent = 'تعديل بيانات المورد';
        const supplier = AppData.suppliers.find(sup => sup.id === supplierId);
        if (supplier) {
            if (supplierName) supplierName.value = supplier.name;
            if (supplierContact) supplierContact.value = supplier.contact;
            if (supplierAddress) supplierAddress.value = supplier.address;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'إضافة مورد جديد';
        if (supplierName) supplierName.value = '';
        if (supplierContact) supplierContact.value = '';
        if (supplierAddress) supplierAddress.value = '';
    }

    openModal('supplierModal');
}

function saveSupplier(formData) {
    const supplierData = {
        name: formData.get('name'),
        contact: formData.get('contact'),
        address: formData.get('address')
    };

    if (editingId) {
        const index = AppData.suppliers.findIndex(sup => sup.id === editingId);
        if (index !== -1) {
            AppData.suppliers[index] = { ...AppData.suppliers[index], ...supplierData };
            showNotification('تم تحديث بيانات المورد بنجاح', 'success');
        }
    } else {
        const newSupplier = { id: generateId('supplier'), ...supplierData };
        AppData.suppliers.push(newSupplier);
        showNotification('تم إضافة المورد بنجاح', 'success');
    }

    closeModal('supplierModal');
    renderSuppliersTable();
}

function editSupplier(supplierId) {
    openSupplierModal(supplierId);
}

function renderPaymentsTable() {
    const tableBody = document.getElementById('paymentsTableBody');
    if (!tableBody) return;

    const payments = AppData.payments.map(payment => {
        const supplier = AppData.suppliers.find(sup => sup.id === payment.supplierId);
        return {
            ...payment,
            supplierName: supplier?.name || 'غير محدد'
        };
    });

    tableBody.innerHTML = payments.map(payment => `
        <tr>
            <td>${formatDate(payment.date)}</td>
            <td>${payment.supplierName}</td>
            <td>${formatCurrency(payment.payment)}</td>
            <td>${formatCurrency(payment.invoiceTotal)}</td>
            <td>${payment.returnedItems}</td>
            <td>${payment.notes}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editPayment(${payment.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deletePayment(${payment.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (payments.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="7" class="empty-state">
                <i class="fas fa-money-bill"></i>
                <h3>لا توجد دفعات</h3>
                <p>ابدأ بإضافة دفعات للموردين</p>
            </td></tr>
        `;
    }
}

function openPaymentModal(paymentId = null) {
    editingId = paymentId;
    populateSupplierSelect('paymentSupplier');
    const modalTitle = document.getElementById('paymentModalTitle');
    const paymentDate = document.getElementById('paymentDate');
    const paymentSupplier = document.getElementById('paymentSupplier');
    const paymentPayment = document.getElementById('paymentPayment');
    const paymentInvoiceTotal = document.getElementById('paymentInvoiceTotal');
    const paymentReturnedItems = document.getElementById('paymentReturnedItems');
    const paymentNotes = document.getElementById('paymentNotes');

    if (paymentId) {
        if (modalTitle) modalTitle.textContent = 'تعديل الدفعة';
        const payment = AppData.payments.find(pay => pay.id === paymentId);
        if (payment) {
            if (paymentDate) paymentDate.value = payment.date;
            if (paymentSupplier) paymentSupplier.value = payment.supplierId;
            if (paymentPayment) paymentPayment.value = payment.payment;
            if (paymentInvoiceTotal) paymentInvoiceTotal.value = payment.invoiceTotal;
            if (paymentReturnedItems) paymentReturnedItems.value = payment.returnedItems;
            if (paymentNotes) paymentNotes.value = payment.notes;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'إضافة دفعة جديدة';
        if (paymentDate) paymentDate.value = new Date().toISOString().split('T')[0];
        if (paymentPayment) paymentPayment.value = '';
        if (paymentInvoiceTotal) paymentInvoiceTotal.value = '';
        if (paymentReturnedItems) paymentReturnedItems.value = '';
        if (paymentNotes) paymentNotes.value = '';
    }

    openModal('paymentModal');
}

function populateSupplierSelect(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const options = ['<option value="">اختر المورد</option>'];
    AppData.suppliers.forEach(sup => {
        options.push(`<option value="${sup.id}">${sup.name}</option>`);
    });
    select.innerHTML = options.join('');
}

function savePayment(formData) {
    const paymentData = {
        supplierId: parseInt(formData.get('supplierId')),
        date: formData.get('date'),
        payment: parseFloat(formData.get('payment')),
        invoiceTotal: parseFloat(formData.get('invoiceTotal')),
        returnedItems: formData.get('returnedItems') || '',
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.payments.findIndex(pay => pay.id === editingId);
        if (index !== -1) {
            AppData.payments[index] = { ...AppData.payments[index], ...paymentData };
            showNotification('تم تحديث الدفعة بنجاح', 'success');
        }
    } else {
        const newPayment = { id: generateId('payment'), ...paymentData };
        AppData.payments.push(newPayment);
        showNotification('تم إضافة الدفعة بنجاح', 'success');
    }

    closeModal('paymentModal');
    renderPaymentsTable();
}

function editPayment(paymentId) {
    openPaymentModal(paymentId);
}

function showSuppliersView() {
    document.getElementById('suppliersView').style.display = 'block';
    document.getElementById('paymentsView').style.display = 'none';
    document.getElementById('showSuppliersBtn').className = 'btn btn-primary';
    document.getElementById('showPaymentsBtn').className = 'btn btn-secondary';
}

function showPaymentsView() {
    document.getElementById('suppliersView').style.display = 'none';
    document.getElementById('paymentsView').style.display = 'block';
    document.getElementById('showSuppliersBtn').className = 'btn btn-secondary';
    document.getElementById('showPaymentsBtn').className = 'btn btn-primary';
}

// =================================================================
// إدارة المصاريف
// =================================================================

function renderExpensesTable() {
    const tableBody = document.getElementById('expensesTableBody');
    if (!tableBody) return;

    let expenses = [...AppData.expenses];

    // تطبيق الفلاتر
    const searchTerm = document.getElementById('expenseSearch')?.value;
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        expenses = expenses.filter(exp => 
            exp.name.toLowerCase().includes(term) || 
            exp.notes.toLowerCase().includes(term)
        );
    }

    const typeFilter = document.getElementById('expenseTypeFilter')?.value;
    if (typeFilter) {
        expenses = expenses.filter(exp => exp.type === typeFilter);
    }

    const dateFilter = document.getElementById('expenseDateFilter')?.value;
    if (dateFilter) {
        expenses = expenses.filter(exp => exp.date === dateFilter);
    }

    // ترتيب حسب التاريخ (الأحدث أولاً)
    expenses.sort((a, b) => new Date(b.date) - new Date(a.date));

    tableBody.innerHTML = expenses.map(expense => `
        <tr>
            <td>${formatDate(expense.date)}</td>
            <td><span class="badge badge-${expense.type === 'شخصية' ? 'primary' : expense.type === 'عامة' ? 'secondary' : 'success'}">${expense.type}</span></td>
            <td>${expense.name}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td>${expense.notes}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editExpense(${expense.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteExpense(${expense.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (expenses.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="6" class="empty-state">
                <i class="fas fa-receipt"></i>
                <h3>لا توجد مصاريف</h3>
                <p>لم يتم العثور على مصاريف مطابقة للفلاتر</p>
            </td></tr>
        `;
    }
}

function openExpenseModal(expenseId = null) {
    editingId = expenseId;
    const modalTitle = document.getElementById('expenseModalTitle');
    const expenseDate = document.getElementById('expenseDate');
    const expenseType = document.getElementById('expenseType');
    const expenseName = document.getElementById('expenseName');
    const expenseAmount = document.getElementById('expenseAmount');
    const expenseNotes = document.getElementById('expenseNotes');

    if (expenseId) {
        if (modalTitle) modalTitle.textContent = 'تعديل المصروف';
        const expense = AppData.expenses.find(exp => exp.id === expenseId);
        if (expense) {
            if (expenseDate) expenseDate.value = expense.date;
            if (expenseType) expenseType.value = expense.type;
            if (expenseName) expenseName.value = expense.name;
            if (expenseAmount) expenseAmount.value = expense.amount;
            if (expenseNotes) expenseNotes.value = expense.notes;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'إضافة مصروف جديد';
        if (expenseDate) expenseDate.value = new Date().toISOString().split('T')[0];
        if (expenseType) expenseType.value = '';
        if (expenseName) expenseName.value = '';
        if (expenseAmount) expenseAmount.value = '';
        if (expenseNotes) expenseNotes.value = '';
    }

    openModal('expenseModal');
}

function saveExpense(formData) {
    const expenseData = {
        date: formData.get('date'),
        type: formData.get('type'),
        name: formData.get('name'),
        amount: parseFloat(formData.get('amount')),
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.expenses.findIndex(exp => exp.id === editingId);
        if (index !== -1) {
            AppData.expenses[index] = { ...AppData.expenses[index], ...expenseData };
            showNotification('تم تحديث المصروف بنجاح', 'success');
        }
    } else {
        const newExpense = { id: generateId('expense'), ...expenseData };
        AppData.expenses.push(newExpense);
        showNotification('تم إضافة المصروف بنجاح', 'success');
    }

    closeModal('expenseModal');
    renderExpensesTable();
    updateDashboard();
}

function editExpense(expenseId) {
    openExpenseModal(expenseId);
}

function deleteExpense(expenseId) {
    if (confirm('هل أنت متأكد من حذف هذا المصروف؟')) {
        AppData.expenses = AppData.expenses.filter(exp => exp.id !== expenseId);
        showNotification('تم حذف المصروف بنجاح', 'success');
        renderExpensesTable();
        updateDashboard();
    }
}

// =================================================================
// إدارة مراجعة اليوميات
// =================================================================

function renderDailyReviewTable() {
    const tableBody = document.getElementById('dailyReviewTableBody');
    if (!tableBody) return;

    // ترتيب حسب التاريخ (الأحدث أولاً)
    const dailyReviews = [...AppData.dailyReview].sort((a, b) => new Date(b.date) - new Date(a.date));

    tableBody.innerHTML = dailyReviews.map(review => `
        <tr>
            <td>${formatDate(review.date)}</td>
            <td><span class="badge badge-primary">${review.branch}</span></td>
            <td>${formatCurrency(review.salesCash)}</td>
            <td>${formatCurrency(review.salesElectronic)}</td>
            <td>${formatCurrency(review.salesParts)}</td>
            <td>${formatCurrency(review.salesAccessories)}</td>
            <td>${formatCurrency(review.drawerBalance)}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editDailyReview(${review.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-sm btn-info" onclick="viewDailyReviewDetails(${review.id})">
                    <i class="fas fa-eye"></i> تفاصيل
                </button>
                <button class="btn btn-sm btn-error" onclick="deleteDailyReview(${review.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');

    if (dailyReviews.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="8" class="empty-state">
                <i class="fas fa-chart-line"></i>
                <h3>لا توجد مراجعات يومية</h3>
                <p>ابدأ بإضافة مراجعة يومية للفروع</p>
            </td></tr>
        `;
    }
}

function openDailyReviewModal(reviewId = null) {
    editingId = reviewId;
    const modalTitle = document.getElementById('dailyReviewModalTitle');
    const dailyReviewDate = document.getElementById('dailyReviewDate');
    const dailyReviewBranch = document.getElementById('dailyReviewBranch');
    const dailyReviewSalesCash = document.getElementById('dailyReviewSalesCash');
    const dailyReviewSalesElectronic = document.getElementById('dailyReviewSalesElectronic');
    const dailyReviewSalesParts = document.getElementById('dailyReviewSalesParts');
    const dailyReviewSalesAccessories = document.getElementById('dailyReviewSalesAccessories');
    const dailyReviewPurchasesAccessories = document.getElementById('dailyReviewPurchasesAccessories');
    const dailyReviewPurchasesParts = document.getElementById('dailyReviewPurchasesParts');
    const dailyReviewPurchasesMechanical = document.getElementById('dailyReviewPurchasesMechanical');
    const dailyReviewTotalExpenses = document.getElementById('dailyReviewTotalExpenses');
    const dailyReviewTotalAdvances = document.getElementById('dailyReviewTotalAdvances');
    const dailyReviewPersonalExpenses = document.getElementById('dailyReviewPersonalExpenses');
    const dailyReviewPayments = document.getElementById('dailyReviewPayments');
    const dailyReviewDailyExpenses = document.getElementById('dailyReviewDailyExpenses');
    const dailyReviewDrawerBalance = document.getElementById('dailyReviewDrawerBalance');
    const dailyReviewNotes = document.getElementById('dailyReviewNotes');

    if (reviewId) {
        if (modalTitle) modalTitle.textContent = 'تعديل المراجعة اليومية';
        const review = AppData.dailyReview.find(rev => rev.id === reviewId);
        if (review) {
            if (dailyReviewDate) dailyReviewDate.value = review.date;
            if (dailyReviewBranch) dailyReviewBranch.value = review.branch;
            if (dailyReviewSalesCash) dailyReviewSalesCash.value = review.salesCash;
            if (dailyReviewSalesElectronic) dailyReviewSalesElectronic.value = review.salesElectronic;
            if (dailyReviewSalesParts) dailyReviewSalesParts.value = review.salesParts;
            if (dailyReviewSalesAccessories) dailyReviewSalesAccessories.value = review.salesAccessories;
            if (dailyReviewPurchasesAccessories) dailyReviewPurchasesAccessories.value = review.purchasesAccessories;
            if (dailyReviewPurchasesParts) dailyReviewPurchasesParts.value = review.purchasesParts;
            if (dailyReviewPurchasesMechanical) dailyReviewPurchasesMechanical.value = review.purchasesMechanical;
            if (dailyReviewTotalExpenses) dailyReviewTotalExpenses.value = review.totalExpenses;
            if (dailyReviewTotalAdvances) dailyReviewTotalAdvances.value = review.totalAdvances;
            if (dailyReviewPersonalExpenses) dailyReviewPersonalExpenses.value = review.personalExpenses;
            if (dailyReviewPayments) dailyReviewPayments.value = review.payments;
            if (dailyReviewDailyExpenses) dailyReviewDailyExpenses.value = review.dailyExpenses;
            if (dailyReviewDrawerBalance) dailyReviewDrawerBalance.value = review.drawerBalance;
            if (dailyReviewNotes) dailyReviewNotes.value = review.notes;
        }
    } else {
        if (modalTitle) modalTitle.textContent = 'إضافة مراجعة يومية جديدة';
        if (dailyReviewDate) dailyReviewDate.value = new Date().toISOString().split('T')[0];
        if (dailyReviewBranch) dailyReviewBranch.value = AppConfig.branches[0] || '';
        // تعيين قيم افتراضية للحقول الأخرى
        const defaultValue = 0;
        if (dailyReviewSalesCash) dailyReviewSalesCash.value = defaultValue;
        if (dailyReviewSalesElectronic) dailyReviewSalesElectronic.value = defaultValue;
        if (dailyReviewSalesParts) dailyReviewSalesParts.value = defaultValue;
        if (dailyReviewSalesAccessories) dailyReviewSalesAccessories.value = defaultValue;
        if (dailyReviewPurchasesAccessories) dailyReviewPurchasesAccessories.value = defaultValue;
        if (dailyReviewPurchasesParts) dailyReviewPurchasesParts.value = defaultValue;
        if (dailyReviewPurchasesMechanical) dailyReviewPurchasesMechanical.value = defaultValue;
        if (dailyReviewTotalExpenses) dailyReviewTotalExpenses.value = defaultValue;
        if (dailyReviewTotalAdvances) dailyReviewTotalAdvances.value = defaultValue;
        if (dailyReviewPersonalExpenses) dailyReviewPersonalExpenses.value = defaultValue;
        if (dailyReviewPayments) dailyReviewPayments.value = defaultValue;
        if (dailyReviewDailyExpenses) dailyReviewDailyExpenses.value = defaultValue;
        if (dailyReviewDrawerBalance) dailyReviewDrawerBalance.value = defaultValue;
        if (dailyReviewNotes) dailyReviewNotes.value = '';
    }

    openModal('dailyReviewModal');
}

function saveDailyReview(formData) {
    const dailyReviewData = {
        date: formData.get('date'),
        branch: formData.get('branch'),
        salesCash: parseFloat(formData.get('salesCash')) || 0,
        salesElectronic: parseFloat(formData.get('salesElectronic')) || 0,
        salesParts: parseFloat(formData.get('salesParts')) || 0,
        salesAccessories: parseFloat(formData.get('salesAccessories')) || 0,
        purchasesAccessories: parseFloat(formData.get('purchasesAccessories')) || 0,
        purchasesParts: parseFloat(formData.get('purchasesParts')) || 0,
        purchasesMechanical: parseFloat(formData.get('purchasesMechanical')) || 0,
        totalExpenses: parseFloat(formData.get('totalExpenses')) || 0,
        totalAdvances: parseFloat(formData.get('totalAdvances')) || 0,
        personalExpenses: parseFloat(formData.get('personalExpenses')) || 0,
        payments: parseFloat(formData.get('payments')) || 0,
        dailyExpenses: parseFloat(formData.get('dailyExpenses')) || 0,
        drawerBalance: parseFloat(formData.get('drawerBalance')) || 0,
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.dailyReview.findIndex(rev => rev.id === editingId);
        if (index !== -1) {
            AppData.dailyReview[index] = { ...AppData.dailyReview[index], ...dailyReviewData };
            showNotification('تم تحديث المراجعة اليومية بنجاح', 'success');
        }
    } else {
        const newDailyReview = { id: generateId('dailyReview'), ...dailyReviewData };
        AppData.dailyReview.push(newDailyReview);
        showNotification('تم إضافة المراجعة اليومية بنجاح', 'success');
    }

    closeModal('dailyReviewModal');
    renderDailyReviewTable();
}

function editDailyReview(reviewId) {
    openDailyReviewModal(reviewId);
}

function deleteDailyReview(reviewId) {
    if (confirm('هل أنت متأكد من حذف هذه المراجعة؟')) {
        AppData.dailyReview = AppData.dailyReview.filter(rev => rev.id !== reviewId);
        showNotification('تم حذف المراجعة بنجاح', 'success');
        renderDailyReviewTable();
    }
}

function viewDailyReviewDetails(reviewId) {
    const review = AppData.dailyReview.find(rev => rev.id === reviewId);
    if (review) {
        alert(`تفاصيل المراجعة اليومية:\n\nالفرع: ${review.branch}\nالتاريخ: ${formatDate(review.date)}\nالمبيعات النقدية: ${formatCurrency(review.salesCash)}\nالمبيعات الإلكترونية: ${formatCurrency(review.salesElectronic)}\nرصيد الدرج: ${formatCurrency(review.drawerBalance)}`);
    }
}

// =================================================================
// وظائف الحذف والتعديل
// =================================================================

function editAdvance(advanceId) { openAdvanceModal(advanceId); }

function deleteAdvance(advanceId) {
    if (confirm('هل أنت متأكد من حذف هذه السلفة؟')) {
        AppData.advances = AppData.advances.filter(adv => adv.id !== advanceId);
        showNotification('تم حذف السلفة بنجاح', 'success');
        renderAdvancesTable();
        updateDashboard();
    }
}

// =================================================================
// التقارير
// =================================================================

function updateReportsSection() {
    // تحديث قسم التقارير
}

function generateEmployeesReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير الموظفين - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير الموظفين</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>الاسم</th>
                        <th>المنصب</th>
                        <th>الراتب الأساسي</th>
                        <th>تاريخ التوظيف</th>
                        <th>رقم الهاتف</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.employees.map(emp => `
                        <tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.position}</td>
                            <td>${formatCurrency(emp.basicSalary)}</td>
                            <td>${formatDate(emp.hireDate)}</td>
                            <td>${emp.phone || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

function generateAdvancesReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير السلف - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير السلف</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>اسم الموظف</th>
                        <th>مبلغ السلفة</th>
                        <th>المبلغ المسدد</th>
                        <th>المبلغ المتبقي</th>
                        <th>ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.advances.map(adv => {
                        const employee = AppData.employees.find(emp => emp.id === adv.employeeId);
                        const remaining = adv.amount - adv.payment;
                        return `
                            <tr>
                                <td>${adv.id}</td>
                                <td>${formatDate(adv.date)}</td>
                                <td>${employee?.name || 'غير محدد'}</td>
                                <td>${formatCurrency(adv.amount)}</td>
                                <td>${formatCurrency(adv.payment)}</td>
                                <td>${formatCurrency(remaining)}</td>
                                <td>${adv.notes}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

function generateAttendanceReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير الحضور - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير الحضور والانصراف</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>اسم الموظف</th>
                        <th>وقت الحضور</th>
                        <th>وقت الانصراف</th>
                        <th>عدد الساعات</th>
                        <th>ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.attendance.map(att => {
                        const employee = AppData.employees.find(emp => emp.id === att.employeeId);
                        const hours = calculateHours(att.checkIn, att.checkOut);
                        return `
                            <tr>
                                <td>${att.id}</td>
                                <td>${formatDate(att.date)}</td>
                                <td>${employee?.name || 'غير محدد'}</td>
                                <td>${att.checkIn}</td>
                                <td>${att.checkOut}</td>
                                <td>${hours.toFixed(2)} ساعة</td>
                                <td>${att.notes}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

function generatePayrollReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير المرتبات - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير المرتبات</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>اسم الموظف</th>
                        <th>الراتب الأساسي</th>
                        <th>المبلغ المصرف</th>
                        <th>المبلغ المتبقي</th>
                        <th>ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.payroll.map(pay => {
                        const employee = AppData.employees.find(emp => emp.id === pay.employeeId);
                        const remaining = pay.basicSalary - pay.disbursed;
                        return `
                            <tr>
                                <td>${pay.id}</td>
                                <td>${formatDate(pay.date)}</td>
                                <td>${employee?.name || 'غير محدد'}</td>
                                <td>${formatCurrency(pay.basicSalary)}</td>
                                <td>${formatCurrency(pay.disbursed)}</td>
                                <td>${formatCurrency(remaining)}</td>
                                <td>${pay.notes}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

function generateExpensesReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير المصاريف - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير المصاريف</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>نوع المصروف</th>
                        <th>اسم المصروف</th>
                        <th>المبلغ</th>
                        <th>ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.expenses.map(exp => `
                        <tr>
                            <td>${exp.id}</td>
                            <td>${formatDate(exp.date)}</td>
                            <td>${exp.type}</td>
                            <td>${exp.name}</td>
                            <td>${formatCurrency(exp.amount)}</td>
                            <td>${exp.notes}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

function generateSuppliersReport() {
    const reportWindow = window.open('', '_blank');
    const reportContent = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير الموردين - ${AppConfig.companyName}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; }
                .header { text-align: center; margin-bottom: 30px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${AppConfig.companyName}</h1>
                <h2>تقرير الموردين والدفعات</h2>
                <p>التاريخ: ${formatDate(new Date().toISOString().split('T')[0])}</p>
            </div>
            <h3>الموردين</h3>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>اسم المورد</th>
                        <th>رقم الاتصال</th>
                        <th>العنوان</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.suppliers.map(sup => `
                        <tr>
                            <td>${sup.id}</td>
                            <td>${sup.name}</td>
                            <td>${sup.contact}</td>
                            <td>${sup.address}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <h3>الدفعات</h3>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>اسم المورد</th>
                        <th>مبلغ الدفعة</th>
                        <th>إجمالي الفاتورة</th>
                        <th>المرتجعات</th>
                        <th>ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.payments.map(pay => {
                        const supplier = AppData.suppliers.find(sup => sup.id === pay.supplierId);
                        return `
                            <tr>
                                <td>${pay.id}</td>
                                <td>${formatDate(pay.date)}</td>
                                <td>${supplier?.name || 'غير محدد'}</td>
                                <td>${formatCurrency(pay.payment)}</td>
                                <td>${formatCurrency(pay.invoiceTotal)}</td>
                                <td>${pay.returnedItems}</td>
                                <td>${pay.notes}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            <script>window.print();</script>
        </body>
        </html>
    `;
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

// =================================================================
// مساعدات إضافية
// =================================================================

function openAttendanceModal() {
    openAttendanceModal();
}

function openPayrollModal() {
    openPayrollModal();
}

function openSupplierModal() {
    openSupplierModal();
}

function openPaymentModal() {
    openPaymentModal();
}

function openExpenseModal() {
    openExpenseModal();
}

function openDailyReviewModal() {
    openDailyReviewModal();
}

function viewDailyReviewDetails(reviewId) {
    const review = AppData.dailyReview.find(rev => rev.id === reviewId);
    if (review) {
        alert(`تفاصيل المراجعة اليومية:\n\nالفرع: ${review.branch}\nالتاريخ: ${formatDate(review.date)}\nالمبيعات النقدية: ${formatCurrency(review.salesCash)}\nالمبيعات الإلكترونية: ${formatCurrency(review.salesElectronic)}\nرصيد الدرج: ${formatCurrency(review.drawerBalance)}`);
    }
}

// =================================================================
// تهيئة التطبيق
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting initializeApp');
    initializeApp();
});

function initializeApp() {
    console.log('initializeApp started');
    try {
        console.log('Updating current date');
        updateCurrentDate();
        console.log('Initializing navigation');
        initializeNavigation();
        console.log('Updating dashboard');
        updateDashboard();
        console.log('Initializing form handlers');
        initializeFormHandlers();
        console.log('Initializing search and filters');
        initializeSearchAndFilters();
        console.log('Showing welcome notification');
        showNotification('مرحباً بك في نظام إدارة شركة بطاح - الإصدار الاحترافي', 'success');
        console.log('initializeApp completed successfully');
    } catch (error) {
        console.error('خطأ في تهيئة التطبيق:', error);
        showNotification('حدث خطأ في التحميل، تحقق من console للتفاصيل (F12)', 'error');
    }
}

function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString('ar-EG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

function initializeFormHandlers() {
    const employeeForm = document.getElementById('employeeForm');
    if (employeeForm) {
        employeeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(employeeForm);
            saveEmployee(formData);
        });
    }

    const advanceForm = document.getElementById('advanceForm');
    if (advanceForm) {
        advanceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(advanceForm);
            saveAdvance(formData);
        });
    }

    const attendanceForm = document.getElementById('attendanceForm');
    if (attendanceForm) {
        attendanceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(attendanceForm);
            saveAttendance(formData);
        });
    }

    const payrollForm = document.getElementById('payrollForm');
    if (payrollForm) {
        payrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(payrollForm);
            savePayroll(formData);
        });
    }

    const supplierForm = document.getElementById('supplierForm');
    if (supplierForm) {
        supplierForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(supplierForm);
            saveSupplier(formData);
        });
    }

    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(paymentForm);
            savePayment(formData);
        });
    }

    const expenseForm = document.getElementById('expenseForm');
    if (expenseForm) {
        expenseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(expenseForm);
            saveExpense(formData);
        });
    }

    const dailyReviewForm = document.getElementById('dailyReviewForm');
    if (dailyReviewForm) {
        dailyReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(dailyReviewForm);
            saveDailyReview(formData);
        });
    }
}

function saveAdvance(formData) {
    const advanceData = {
        employeeId: parseInt(formData.get('employeeId')),
        date: formData.get('date'),
        amount: parseFloat(formData.get('amount')),
        payment: parseFloat(formData.get('payment')) || 0,
        notes: formData.get('notes') || ''
    };

    if (editingId) {
        const index = AppData.advances.findIndex(adv => adv.id === editingId);
        if (index !== -1) {
            AppData.advances[index] = { ...AppData.advances[index], ...advanceData };
            showNotification('تم تحديث السلفة بنجاح', 'success');
        }
    } else {
        const newAdvance = { id: generateId('advance'), ...advanceData };
        AppData.advances.push(newAdvance);
        showNotification('تم إضافة السلفة بنجاح', 'success');
    }

    closeModal('advanceModal');
    renderAdvancesTable();
    updateDashboard();
}

function initializeSearchAndFilters() {
    const employeeSearch = document.getElementById('employeeSearch');
    if (employeeSearch) {
        employeeSearch.addEventListener('input', renderEmployeesTable);
    }

    const positionFilter = document.getElementById('positionFilter');
    if (positionFilter) {
        positionFilter.addEventListener('change', renderEmployeesTable);
    }

    const expenseSearch = document.getElementById('expenseSearch');
    if (expenseSearch) {
        expenseSearch.addEventListener('input', renderExpensesTable);
    }

    const expenseTypeFilter = document.getElementById('expenseTypeFilter');
    if (expenseTypeFilter) {
        expenseTypeFilter.addEventListener('change', renderExpensesTable);
    }

    const expenseDateFilter = document.getElementById('expenseDateFilter');
    if (expenseDateFilter) {
        expenseDateFilter.addEventListener('change', renderExpensesTable);
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// تحميل الثيم المحفوظ
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// إغلاق النوافذ عند النقر خارجها
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});
