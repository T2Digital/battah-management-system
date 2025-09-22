// =================================================================
// نظام إدارة شركة بطاح لقطع غيار السيارات - الإصدار المتكامل النهائي
// العملة: الجنيه المصري | التقويم: ميلادي
// جميع الوظائف والأزرار والتقارير تعمل بكفاءة عالية
// =================================================================

console.log('🚀 بدء تحميل نظام إدارة شركة بطاح المتكامل...');

// =================================================================
// البيانات الأساسية والإعدادات
// =================================================================

const AppData = {
    employees: [
        {
            id: 1,
            name: "أحمد محمد علي",
            position: "مدير عام",
            basicSalary: 12000,
            hireDate: "2023-01-15",
            phone: "01012345678",
            address: "القاهرة، مصر الجديدة"
        },
        {
            id: 2,
            name: "فاطمة أحمد حسن",
            position: "محاسب رئيسي",
            basicSalary: 8000,
            hireDate: "2023-03-10",
            phone: "01087654321",
            address: "الجيزة، المهندسين"
        },
        {
            id: 3,
            name: "محمد علي حسين",
            position: "فني أول",
            basicSalary: 6000,
            hireDate: "2023-06-20",
            phone: "01123456789",
            address: "القاهرة، شبرا"
        },
        {
            id: 4,
            name: "سارة محمود أحمد",
            position: "أمين مخزن",
            basicSalary: 5500,
            hireDate: "2023-08-05",
            phone: "01098765432",
            address: "الجيزة، الدقي"
        },
        {
            id: 5,
            name: "عمر حسام الدين",
            position: "فني",
            basicSalary: 4500,
            hireDate: "2024-01-12",
            phone: "01156789012",
            address: "القاهرة، عين شمس"
        }
    ],
    advances: [
        {
            id: 1,
            date: "2025-09-15",
            employeeId: 1,
            amount: 3000,
            payment: 1500,
            notes: "سلفة لظروف طارئة - العلاج"
        },
        {
            id: 2,
            date: "2025-09-10",
            employeeId: 3,
            amount: 2000,
            payment: 800,
            notes: "سلفة شهرية - مصاريف شخصية"
        },
        {
            id: 3,
            date: "2025-09-08",
            employeeId: 5,
            amount: 1500,
            payment: 0,
            notes: "سلفة أول مرة - مصاريف أسرية"
        }
    ],
    attendance: [
        {
            id: 1,
            date: "2025-09-22",
            employeeId: 1,
            checkIn: "08:00",
            checkOut: "17:00",
            notes: "يوم عادي"
        },
        {
            id: 2,
            date: "2025-09-22",
            employeeId: 2,
            checkIn: "08:30",
            checkOut: "17:30",
            notes: "تأخير بسيط - زحمة"
        },
        {
            id: 3,
            date: "2025-09-22",
            employeeId: 3,
            checkIn: "08:15",
            checkOut: "17:15",
            notes: ""
        },
        {
            id: 4,
            date: "2025-09-21",
            employeeId: 1,
            checkIn: "08:05",
            checkOut: "16:55",
            notes: "انصراف مبكر - ظروف خاصة"
        },
        {
            id: 5,
            date: "2025-09-21",
            employeeId: 4,
            checkIn: "08:45",
            checkOut: "17:45",
            notes: "تأخير - عذر مقبول"
        }
    ],
    payroll: [
        {
            id: 1,
            date: "2025-09-01",
            employeeId: 1,
            basicSalary: 12000,
            disbursed: 10500,
            notes: "راتب سبتمبر 2025 - خصم سلفة"
        },
        {
            id: 2,
            date: "2025-09-01",
            employeeId: 2,
            basicSalary: 8000,
            disbursed: 7500,
            notes: "راتب سبتمبر 2025 - خصم تأمينات"
        },
        {
            id: 3,
            date: "2025-09-01",
            employeeId: 3,
            basicSalary: 6000,
            disbursed: 5200,
            notes: "راتب سبتمبر 2025 - خصم سلفة"
        }
    ],
    suppliers: [
        {
            id: 1,
            name: "شركة قطع الغيار المتحدة",
            contact: "01012345678",
            address: "القاهرة، العتبة - شارع الجمهورية"
        },
        {
            id: 2,
            name: "مؤسسة الأجزاء الحديثة",
            contact: "01087654321",
            address: "الجيزة، الهرم - طريق الفيوم"
        },
        {
            id: 3,
            name: "شركة الكماليات الذهبية",
            contact: "01123456789",
            address: "القاهرة، الأزهر - شارع بورسعيد"
        },
        {
            id: 4,
            name: "توكيل الزيوت والفلاتر",
            contact: "01198765432",
            address: "القاهرة، شبرا - شارع شبرا"
        }
    ],
    payments: [
        {
            id: 1,
            date: "2025-09-20",
            supplierId: 1,
            payment: 25000,
            invoiceTotal: 30000,
            returnedItems: "مرشح زيت معيب × 5، فرامل خلفية × 2",
            notes: "دفعة جزئية - باقي المبلغ نهاية الشهر"
        },
        {
            id: 2,
            date: "2025-09-18",
            supplierId: 2,
            payment: 15000,
            invoiceTotal: 15000,
            returnedItems: "",
            notes: "دفعة كاملة - فواتير أغسطس"
        },
        {
            id: 3,
            date: "2025-09-15",
            supplierId: 3,
            payment: 8500,
            invoiceTotal: 10000,
            returnedItems: "اكسسوارات داخلية معيبة × 3",
            notes: "دفعة جزئية - خصم المرتجعات"
        }
    ],
    expenses: [
        {
            id: 1,
            date: "2025-09-22",
            type: "شخصية",
            name: "وجبات غداء الموظفين",
            amount: 450,
            notes: "وجبات يوم الاثنين"
        },
        {
            id: 2,
            date: "2025-09-21",
            type: "عامة",
            name: "فاتورة كهرباء",
            amount: 2800,
            notes: "فاتورة شهر أغسطس - ورشة الصيانة"
        },
        {
            id: 3,
            date: "2025-09-20",
            type: "موظفين",
            name: "بدل مواصلات أسبوعي",
            amount: 750,
            notes: "بدل أسبوع 15-20 سبتمبر"
        },
        {
            id: 4,
            date: "2025-09-19",
            type: "عامة",
            name: "صيانة أجهزة الكمبيوتر",
            amount: 1200,
            notes: "صيانة دورية - نظافة وتحديث"
        },
        {
            id: 5,
            date: "2025-09-18",
            type: "شخصية",
            name: "مصاريف ضيافة",
            amount: 300,
            notes: "استقبال عملاء مهمين"
        }
    ],
    dailyReview: [
        {
            id: 1,
            date: "2025-09-22",
            branch: "مركز الصيانة",
            salesCash: 8500,
            salesElectronic: 4200,
            salesParts: 6800,
            salesAccessories: 3400,
            drawerBalance: 12700,
            notes: "يوم نشط - زيادة في مبيعات قطع الغيار"
        },
        {
            id: 2,
            date: "2025-09-22",
            branch: "الأصلي",
            salesCash: 12000,
            salesElectronic: 6500,
            salesParts: 9200,
            salesAccessories: 4800,
            drawerBalance: 18500,
            notes: "يوم ممتاز - ذروة المبيعات"
        },
        {
            id: 3,
            date: "2025-09-21",
            branch: "مركز الصيانة",
            salesCash: 7200,
            salesElectronic: 3800,
            salesParts: 5600,
            salesAccessories: 2900,
            drawerBalance: 11000,
            notes: "يوم عادي - مبيعات طبيعية"
        },
        {
            id: 4,
            date: "2025-09-21",
            branch: "فرع ٣",
            salesCash: 5400,
            salesElectronic: 2100,
            salesParts: 3800,
            salesAccessories: 1900,
            drawerBalance: 7500,
            notes: "يوم هادئ - عدد قليل من العملاء"
        }
    ]
};

const AppConfig = {
    companyName: "شركة بطاح لقطع غيار السيارات",
    currency: "ج.م",
    branches: ["مركز الصيانة", "الأصلي", "فرع ٣"],
    expenseCategories: ["شخصية", "عامة", "موظفين"],
    positions: [
        "مدير عام", "مدير فرع", "محاسب رئيسي", "محاسب", 
        "فني أول", "فني", "أمين مخزن", "عامل", "سائق"
    ]
};

// متغيرات التحكم
let currentSection = 'dashboard';
let editingId = null;
let charts = {};
let nextIds = {
    employee: 6, advance: 4, attendance: 6, payroll: 4, 
    supplier: 5, payment: 4, expense: 6, dailyReview: 5
};

// =================================================================
// الدوال المساعدة الأساسية
// =================================================================

function formatCurrency(amount) {
    if (amount === null || amount === undefined || isNaN(amount)) {
        return '0.00 ج.م';
    }
    return new Intl.NumberFormat('ar-EG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(parseFloat(amount)) + ' ج.م';
}

function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    } catch (error) {
        console.error('خطأ في تنسيق التاريخ:', error);
        return dateString;
    }
}

function formatDateShort(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        return dateString;
    }
}

function calculateHours(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;

    try {
        const [inHours, inMinutes] = checkIn.split(':').map(Number);
        const [outHours, outMinutes] = checkOut.split(':').map(Number);

        const inTotalMinutes = inHours * 60 + inMinutes;
        const outTotalMinutes = outHours * 60 + outMinutes;

        let diffMinutes = outTotalMinutes - inTotalMinutes;
        if (diffMinutes < 0) diffMinutes += 24 * 60; // في حالة انصراف في اليوم التالي

        return Math.round((diffMinutes / 60) * 100) / 100;
    } catch (error) {
        console.error('خطأ في حساب الساعات:', error);
        return 0;
    }
}

function generateId(type) {
    return nextIds[type]++;
}

function getEmployeeName(employeeId) {
    const employee = AppData.employees.find(emp => emp.id === employeeId);
    return employee ? employee.name : 'غير محدد';
}

function getSupplierName(supplierId) {
    const supplier = AppData.suppliers.find(sup => sup.id === supplierId);
    return supplier ? supplier.name : 'غير محدد';
}

// =================================================================
// إدارة التنبيهات المتقدمة
// =================================================================

function showNotification(message, type = 'info', duration = 5000) {
    console.log(`📢 تنبيه: ${message} [${type}]`);

    const container = document.getElementById('notifications');
    if (!container) {
        console.error('❌ حاوية التنبيهات غير موجودة');
        return;
    }

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
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // إضافة أسلوب للزر إغلاق
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0;
            margin-right: 10px;
            opacity: 0.7;
            transition: opacity 0.3s;
        `;
        closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.7');
    }

    container.appendChild(notification);

    // إزالة تلقائية
    setTimeout(() => {
        if (notification.parentNode === container) {
            notification.style.animation = 'notificationSlideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode === container) {
                    container.removeChild(notification);
                }
            }, 300);
        }
    }, duration);
}

// =================================================================
// إدارة النوافذ المنبثقة
// =================================================================

function openModal(modalId) {
    console.log(`📂 فتح نافذة: ${modalId}`);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // تركيز على أول عنصر إدخال
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    } else {
        console.error(`❌ النافذة ${modalId} غير موجودة`);
        showNotification('خطأ في فتح النافذة', 'error');
    }
}

function closeModal(modalId) {
    console.log(`📁 إغلاق نافذة: ${modalId}`);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';

        // إعادة تعيين النماذج
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
        editingId = null;
    }
}

// إغلاق النوافذ عند النقر خارجها
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});

// إغلاق النوافذ عند الضغط على Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// =================================================================
// إدارة التنقل والقوائم
// =================================================================

function initializeNavigation() {
    console.log('🧭 تهيئة نظام التنقل...');

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            console.log(`🔄 التنقل إلى: ${section}`);

            if (section) {
                switchSection(section);
                updateActiveNavButton(this);
            }
        });
    });

    console.log(`✅ تم تهيئة ${navButtons.length} أزرار تنقل`);
}

function switchSection(sectionName) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // إظهار القسم المطلوب
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        updateSectionContent(sectionName);
        
        // إغلاق القائمة الجانبية تلقائياً على الشاشات الصغيرة
        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth <= 1024) {
            sidebar.classList.remove('show');
        }
    } else {
        console.error(`❌ القسم ${sectionName} غير موجود`);
        showNotification('القسم المطلوب غير موجود', 'error');
    }
}


function updateActiveNavButton(activeButton) {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

function updateSectionContent(sectionName) {
    console.log(`🔄 تحديث محتوى القسم: ${sectionName}`);

    switch (sectionName) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'employees':
            renderEmployeesTable();
            break;
        case 'advances':
            renderAdvancesTable();
            break;
        case 'attendance':
            renderAttendanceTable();
            break;
        case 'payroll':
            renderPayrollTable();
            break;
        case 'suppliers':
            renderSuppliersTable();
            showSuppliersView();
            break;
        case 'expenses':
            renderExpensesTable();
            break;
        case 'daily-review':
            renderDailyReviewTable();
            break;
        case 'reports':
            // قسم التقارير لا يحتاج تحديث خاص
            break;
        default:
            console.warn(`⚠️ قسم غير معروف: ${sectionName}`);
    }
}

// =================================================================
// لوحة التحكم والإحصائيات
// =================================================================

function updateDashboard() {
    console.log('📊 تحديث لوحة التحكم...');
    updateStatCards();
    updateRecentActivities();
    renderCharts();
}

function updateStatCards() {
    try {
        // إجمالي الموظفين
        const totalEmployees = AppData.employees.length;
        updateElement('totalEmployees', totalEmployees);

        // إجمالي الرواتب
        const totalSalaries = AppData.employees.reduce((sum, emp) => sum + (emp.basicSalary || 0), 0);
        updateElement('totalSalaries', formatCurrency(totalSalaries));

        // إجمالي السلف المتبقية
        const totalAdvances = AppData.advances.reduce((sum, adv) => {
            return sum + ((adv.amount || 0) - (adv.payment || 0));
        }, 0);
        updateElement('totalAdvances', formatCurrency(totalAdvances));

        // إجمالي المصاريف الشهرية
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const monthlyExpenses = AppData.expenses
            .filter(exp => {
                try {
                    const expDate = new Date(exp.date);
                    return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
                } catch (e) {
                    return false;
                }
            })
            .reduce((sum, exp) => sum + (exp.amount || 0), 0);

        updateElement('totalExpenses', formatCurrency(monthlyExpenses));

        console.log('✅ تم تحديث بطاقات الإحصائيات');
    } catch (error) {
        console.error('❌ خطأ في تحديث بطاقات الإحصائيات:', error);
        showNotification('خطأ في تحديث الإحصائيات', 'error');
    }
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.warn(`⚠️ العنصر ${id} غير موجود`);
    }
}

function updateRecentActivities() {
    const container = document.getElementById('activitiesLog');
    if (!container) {
        console.warn('⚠️ حاوية الأنشطة غير موجودة');
        return;
    }

    const activities = [];

    // إضافة أنشطة الموظفين
    AppData.employees.slice(-3).forEach(emp => {
        activities.push({
            icon: 'fas fa-user-plus',
            message: `تم إضافة الموظف: ${emp.name}`,
            date: emp.hireDate,
            type: 'employee'
        });
    });

    // إضافة أنشطة السلف
    AppData.advances.slice(-3).forEach(adv => {
        const employeeName = getEmployeeName(adv.employeeId);
        activities.push({
            icon: 'fas fa-hand-holding-usd',
            message: `سلفة جديدة للموظف: ${employeeName} - ${formatCurrency(adv.amount)}`,
            date: adv.date,
            type: 'advance'
        });
    });

    // إضافة أنشطة المصاريف
    AppData.expenses.slice(-3).forEach(exp => {
        activities.push({
            icon: 'fas fa-receipt',
            message: `مصروف جديد: ${exp.name} - ${formatCurrency(exp.amount)}`,
            date: exp.date,
            type: 'expense'
        });
    });

    // ترتيب الأنشطة حسب التاريخ (الأحدث أولاً)
    activities.sort((a, b) => new Date(b.date) - new Date(a.date));
    const recentActivities = activities.slice(0, 5);

    if (recentActivities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <h3>لا توجد أنشطة حديثة</h3>
                <p>ابدأ باستخدام النظام لرؤية الأنشطة هنا</p>
            </div>
        `;
    } else {
        container.innerHTML = recentActivities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <p>${activity.message}</p>
                    <span>${formatDateShort(activity.date)}</span>
                </div>
            </div>
        `).join('');
    }
}

function renderCharts() {
    console.log('📈 رسم الرسوم البيانية...');
    renderSalesChart();
    renderExpensesChart();
}

function renderSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) {
        console.warn('⚠️ عنصر الرسم البياني للمبيعات غير موجود');
        return;
    }

    try {
        const last7Days = [];
        const salesData = [];

        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            last7Days.push(date.toLocaleDateString('ar-EG', { 
                weekday: 'short', 
                day: 'numeric' 
            }));

            const daySales = AppData.dailyReview
                .filter(review => review.date === dateStr)
                .reduce((sum, review) => sum + (review.salesCash || 0) + (review.salesElectronic || 0), 0);

            salesData.push(daySales);
        }

        // تدمير الرسم البياني السابق إن وجد
        if (charts.sales) {
            charts.sales.destroy();
        }

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
                    tension: 0.4,
                    pointBackgroundColor: '#3B82F6',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            font: { family: 'Cairo' },
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                return `المبيعات: ${formatCurrency(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value);
                            },
                            font: { family: 'Cairo' }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            font: { family: 'Cairo' }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });

        console.log('✅ تم رسم الرسم البياني للمبيعات');
    } catch (error) {
        console.error('❌ خطأ في رسم الرسم البياني للمبيعات:', error);
    }
}

function renderExpensesChart() {
    const ctx = document.getElementById('expensesChart');
    if (!ctx) {
        console.warn('⚠️ عنصر الرسم البياني للمصاريف غير موجود');
        return;
    }

    try {
        const expensesByType = AppConfig.expenseCategories.map(category => {
            return AppData.expenses
                .filter(exp => exp.type === category)
                .reduce((sum, exp) => sum + (exp.amount || 0), 0);
        });

        // تدمير الرسم البياني السابق إن وجد
        if (charts.expenses) {
            charts.expenses.destroy();
        }

        charts.expenses = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: AppConfig.expenseCategories,
                datasets: [{
                    data: expensesByType,
                    backgroundColor: [
                        '#3B82F6',  // أزرق
                        '#10B981',  // أخضر
                        '#F59E0B'   // برتقالي
                    ],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverBorderWidth: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { family: 'Cairo' },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = formatCurrency(context.parsed);
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            }
        });

        console.log('✅ تم رسم الرسم البياني للمصاريف');
    } catch (error) {
        console.error('❌ خطأ في رسم الرسم البياني للمصاريف:', error);
    }
}

// =================================================================
// إدارة الموظفين - وظائف متكاملة
// =================================================================

function renderEmployeesTable() {
    console.log('👥 رسم جدول الموظفين...');

    const tableBody = document.getElementById('employeesTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول الموظفين غير موجود');
        return;
    }

    try {
        let employees = [...AppData.employees];

        // تطبيق البحث
        const searchTerm = document.getElementById('employeeSearch')?.value?.toLowerCase();
        if (searchTerm) {
            employees = employees.filter(emp => 
                emp.name.toLowerCase().includes(searchTerm) || 
                emp.position.toLowerCase().includes(searchTerm)
            );
        }

        // تطبيق فلتر المنصب
        const positionFilter = document.getElementById('positionFilter')?.value;
        if (positionFilter) {
            employees = employees.filter(emp => emp.position === positionFilter);
        }

        if (employees.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="empty-state">
                        <i class="fas fa-users"></i>
                        <h3>لا توجد موظفين</h3>
                        <p>لم يتم العثور على موظفين مطابقين للبحث</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = employees.map(employee => `
                <tr>
                    <td>${employee.id}</td>
                    <td><strong>${employee.name}</strong></td>
                    <td><span class="badge badge-primary">${employee.position}</span></td>
                    <td><strong>${formatCurrency(employee.basicSalary)}</strong></td>
                    <td>${formatDateShort(employee.hireDate)}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editEmployee(${employee.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deleteEmployee(${employee.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="viewEmployeeDetails(${employee.id})" title="التفاصيل">
                            <i class="fas fa-eye"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        console.log(`✅ تم رسم جدول الموظفين - ${employees.length} موظف`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول الموظفين:', error);
        showNotification('خطأ في تحميل بيانات الموظفين', 'error');
    }
}

function openEmployeeModal(employeeId = null) {
    console.log(`👤 فتح نافذة الموظف: ${employeeId || 'جديد'}`);

    editingId = employeeId;
    const modalTitle = document.getElementById('employeeModalTitle');
    const form = document.getElementById('employeeForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة الموظف غير موجودة');
        showNotification('خطأ في فتح نافذة الموظف', 'error');
        return;
    }

    if (employeeId) {
        const employee = AppData.employees.find(emp => emp.id === employeeId);
        if (employee) {
            modalTitle.textContent = 'تعديل بيانات الموظف';

            // ملء الحقول
            document.getElementById('employeeName').value = employee.name || '';
            document.getElementById('employeePosition').value = employee.position || '';
            document.getElementById('employeeSalary').value = employee.basicSalary || '';
            document.getElementById('employeeHireDate').value = employee.hireDate || '';
            document.getElementById('employeePhone').value = employee.phone || '';
            document.getElementById('employeeAddress').value = employee.address || '';
        } else {
            console.error('❌ الموظف غير موجود');
            showNotification('الموظف المطلوب غير موجود', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة موظف جديد';
        form.reset();
        // تعيين تاريخ اليوم كتاريخ افتراضي للتوظيف
        document.getElementById('employeeHireDate').value = new Date().toISOString().split('T')[0];
    }

    openModal('employeeModal');
}

function saveEmployee(formData) {
    console.log('💾 حفظ بيانات الموظف...');

    try {
        const employeeData = {
            name: formData.get('name')?.trim() || '',
            position: formData.get('position') || '',
            basicSalary: parseFloat(formData.get('basicSalary')) || 0,
            hireDate: formData.get('hireDate') || '',
            phone: formData.get('phone')?.trim() || '',
            address: formData.get('address')?.trim() || ''
        };

        // التحقق من البيانات المطلوبة
        if (!employeeData.name || !employeeData.position || employeeData.basicSalary <= 0 || !employeeData.hireDate) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'warning');
            return;
        }

        if (editingId) {
            // تحديث موظف موجود
            const index = AppData.employees.findIndex(emp => emp.id === editingId);
            if (index !== -1) {
                AppData.employees[index] = { ...AppData.employees[index], ...employeeData };
                showNotification(`تم تحديث بيانات الموظف "${employeeData.name}" بنجاح`, 'success');
                console.log(`✅ تم تحديث الموظف: ${employeeData.name}`);
            } else {
                throw new Error('الموظف غير موجود');
            }
        } else {
            // إضافة موظف جديد
            const newEmployee = {
                id: generateId('employee'),
                ...employeeData
            };
            AppData.employees.push(newEmployee);
            showNotification(`تم إضافة الموظف "${employeeData.name}" بنجاح`, 'success');
            console.log(`✅ تم إضافة موظف جديد: ${employeeData.name}`);
        }

        closeModal('employeeModal');
        renderEmployeesTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات الموظف:', error);
        showNotification('حدث خطأ أثناء حفظ البيانات', 'error');
    }
}

function editEmployee(employeeId) {
    openEmployeeModal(employeeId);
}

function deleteEmployee(employeeId) {
    const employee = AppData.employees.find(emp => emp.id === employeeId);
    if (!employee) {
        showNotification('الموظف غير موجود', 'error');
        return;
    }

    if (confirm(`هل أنت متأكد من حذف الموظف "${employee.name}"؟

سيتم حذف جميع البيانات المرتبطة به (السلف، الحضور، المرتبات)`)) {
        try {
            // حذف الموظف وجميع البيانات المرتبطة به
            AppData.employees = AppData.employees.filter(emp => emp.id !== employeeId);
            AppData.advances = AppData.advances.filter(adv => adv.employeeId !== employeeId);
            AppData.attendance = AppData.attendance.filter(att => att.employeeId !== employeeId);
            AppData.payroll = AppData.payroll.filter(pay => pay.employeeId !== employeeId);

            showNotification(`تم حذف الموظف "${employee.name}" وجميع البيانات المرتبطة به`, 'success');
            console.log(`🗑️ تم حذف الموظف: ${employee.name}`);

            renderEmployeesTable();
            updateDashboard();
        } catch (error) {
            console.error('❌ خطأ في حذف الموظف:', error);
            showNotification('حدث خطأ أثناء حذف الموظف', 'error');
        }
    }
}

function viewEmployeeDetails(employeeId) {
    const employee = AppData.employees.find(emp => emp.id === employeeId);
    if (!employee) {
        showNotification('الموظف غير موجود', 'error');
        return;
    }

    // حساب إحصائيات الموظف
    const advances = AppData.advances.filter(adv => adv.employeeId === employeeId);
    const totalAdvances = advances.reduce((sum, adv) => sum + (adv.amount - adv.payment), 0);

    const attendanceRecords = AppData.attendance.filter(att => att.employeeId === employeeId);
    const totalHours = attendanceRecords.reduce((sum, att) => sum + calculateHours(att.checkIn, att.checkOut), 0);

    const payrollRecords = AppData.payroll.filter(pay => pay.employeeId === employeeId);
    const totalPaid = payrollRecords.reduce((sum, pay) => sum + (pay.disbursed || 0), 0);

    const details = `
تفاصيل الموظف: ${employee.name}

📋 البيانات الأساسية:
• المنصب: ${employee.position}
• الراتب الأساسي: ${formatCurrency(employee.basicSalary)}
• تاريخ التوظيف: ${formatDate(employee.hireDate)}
• رقم الهاتف: ${employee.phone || 'غير محدد'}
• العنوان: ${employee.address || 'غير محدد'}

📊 الإحصائيات:
• عدد السلف: ${advances.length}
• إجمالي السلف المتبقية: ${formatCurrency(totalAdvances)}
• عدد أيام الحضور: ${attendanceRecords.length}
• إجمالي ساعات العمل: ${totalHours.toFixed(1)} ساعة
• عدد دفعات الراتب: ${payrollRecords.length}
• إجمالي المدفوع: ${formatCurrency(totalPaid)}
    `;

    alert(details);
}

// =================================================================
// إدارة السلف - وظائف متكاملة
// =================================================================

function renderAdvancesTable() {
    console.log('💰 رسم جدول السلف...');

    const tableBody = document.getElementById('advancesTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول السلف غير موجود');
        return;
    }

    try {
        const advances = AppData.advances.map(advance => {
            const employee = AppData.employees.find(emp => emp.id === advance.employeeId);
            return {
                ...advance,
                employeeName: employee ? employee.name : 'موظف محذوف',
                remaining: (advance.amount || 0) - (advance.payment || 0)
            };
        });

        // ترتيب حسب التاريخ (الأحدث أولاً)
        advances.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (advances.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty-state">
                        <i class="fas fa-hand-holding-usd"></i>
                        <h3>لا توجد سلف مسجلة</h3>
                        <p>ابدأ بإضافة سلفة جديدة للموظفين</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = advances.map(advance => `
                <tr class="${advance.remaining <= 0 ? 'paid-advance' : 'pending-advance'}">
                    <td>${formatDateShort(advance.date)}</td>
                    <td><strong>${advance.employeeName}</strong></td>
                    <td><strong>${formatCurrency(advance.amount)}</strong></td>
                    <td class="${advance.remaining > 0 ? 'text-warning' : 'text-success'}">
                        <strong>${formatCurrency(advance.remaining)}</strong>
                    </td>
                    <td>${formatCurrency(advance.payment)}</td>
                    <td>${advance.notes || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editAdvance(${advance.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deleteAdvance(${advance.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                        ${advance.remaining > 0 ? `
                            <button class="btn btn-sm btn-secondary" onclick="payAdvance(${advance.id})" title="دفع">
                                <i class="fas fa-money-bill"></i>
                            </button>
                        ` : ''}
                    </td>
                </tr>
            `).join('');
        }

        // تحديث قائمة الموظفين في النافذة المنبثقة
        populateEmployeeSelect('advanceEmployee');

        console.log(`✅ تم رسم جدول السلف - ${advances.length} سلفة`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول السلف:', error);
        showNotification('خطأ في تحميل بيانات السلف', 'error');
    }
}

function openAdvanceModal(advanceId = null) {
    console.log(`💰 فتح نافذة السلفة: ${advanceId || 'جديدة'}`);

    editingId = advanceId;
    populateEmployeeSelect('advanceEmployee');

    const modalTitle = document.getElementById('advanceModalTitle');
    const form = document.getElementById('advanceForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة السلفة غير موجودة');
        showNotification('خطأ في فتح نافذة السلفة', 'error');
        return;
    }

    if (advanceId) {
        const advance = AppData.advances.find(adv => adv.id === advanceId);
        if (advance) {
            modalTitle.textContent = 'تعديل السلفة';

            document.getElementById('advanceEmployee').value = advance.employeeId;
            document.getElementById('advanceDate').value = advance.date;
            document.getElementById('advanceAmount').value = advance.amount;
            document.getElementById('advancePayment').value = advance.payment;
            document.getElementById('advanceNotes').value = advance.notes || '';
        } else {
            console.error('❌ السلفة غير موجودة');
            showNotification('السلفة المطلوبة غير موجودة', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة سلفة جديدة';
        form.reset();
        document.getElementById('advanceDate').value = new Date().toISOString().split('T')[0];
        document.getElementById('advancePayment').value = '0';
    }

    openModal('advanceModal');
}

function saveAdvance(formData) {
    console.log('💾 حفظ بيانات السلفة...');

    try {
        const advanceData = {
            employeeId: parseInt(formData.get('employeeId')),
            date: formData.get('date'),
            amount: parseFloat(formData.get('amount')) || 0,
            payment: parseFloat(formData.get('payment')) || 0,
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات
        if (!advanceData.employeeId || !advanceData.date || advanceData.amount <= 0) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'warning');
            return;
        }

        if (advanceData.payment > advanceData.amount) {
            showNotification('المبلغ المسدد لا يمكن أن يكون أكبر من مبلغ السلفة', 'warning');
            return;
        }

        const employeeName = getEmployeeName(advanceData.employeeId);

        if (editingId) {
            // تحديث سلفة موجودة
            const index = AppData.advances.findIndex(adv => adv.id === editingId);
            if (index !== -1) {
                AppData.advances[index] = { ...AppData.advances[index], ...advanceData };
                showNotification(`تم تحديث سلفة الموظف "${employeeName}" بنجاح`, 'success');
                console.log(`✅ تم تحديث السلفة للموظف: ${employeeName}`);
            } else {
                throw new Error('السلفة غير موجودة');
            }
        } else {
            // إضافة سلفة جديدة
            const newAdvance = {
                id: generateId('advance'),
                ...advanceData
            };
            AppData.advances.push(newAdvance);
            showNotification(`تم إضافة سلفة للموظف "${employeeName}" بمبلغ ${formatCurrency(advanceData.amount)}`, 'success');
            console.log(`✅ تم إضافة سلفة جديدة للموظف: ${employeeName}`);
        }

        closeModal('advanceModal');
        renderAdvancesTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات السلفة:', error);
        showNotification('حدث خطأ أثناء حفظ السلفة', 'error');
    }
}

function editAdvance(advanceId) {
    openAdvanceModal(advanceId);
}

function deleteAdvance(advanceId) {
    const advance = AppData.advances.find(adv => adv.id === advanceId);
    if (!advance) {
        showNotification('السلفة غير موجودة', 'error');
        return;
    }

    const employeeName = getEmployeeName(advance.employeeId);

    if (confirm(`هل أنت متأكد من حذف سلفة الموظف "${employeeName}" بمبلغ ${formatCurrency(advance.amount)}؟`)) {
        try {
            AppData.advances = AppData.advances.filter(adv => adv.id !== advanceId);
            showNotification(`تم حذف السلفة بنجاح`, 'success');
            console.log(`🗑️ تم حذف سلفة للموظف: ${employeeName}`);

            renderAdvancesTable();
            updateDashboard();
        } catch (error) {
            console.error('❌ خطأ في حذف السلفة:', error);
            showNotification('حدث خطأ أثناء حذف السلفة', 'error');
        }
    }
}

function payAdvance(advanceId) {
    const advance = AppData.advances.find(adv => adv.id === advanceId);
    if (!advance) {
        showNotification('السلفة غير موجودة', 'error');
        return;
    }

    const remaining = advance.amount - advance.payment;
    const employeeName = getEmployeeName(advance.employeeId);

    const paymentAmount = prompt(`المبلغ المتبقي للموظف "${employeeName}": ${formatCurrency(remaining)}\n\nأدخل المبلغ المراد دفعه:`);

    if (paymentAmount !== null) {
        const amount = parseFloat(paymentAmount);

        if (isNaN(amount) || amount <= 0) {
            showNotification('يرجى إدخال مبلغ صحيح', 'warning');
            return;
        }

        if (amount > remaining) {
            showNotification('المبلغ المدخل أكبر من المبلغ المتبقي', 'warning');
            return;
        }

        // تحديث الدفعة
        advance.payment += amount;

        const newRemaining = advance.amount - advance.payment;
        showNotification(`تم دفع ${formatCurrency(amount)} للموظف "${employeeName}"${newRemaining <= 0 ? ' - تم سداد السلفة بالكامل' : ''}`, 'success');

        renderAdvancesTable();
        updateDashboard();
    }
}

function populateEmployeeSelect(selectId) {
    const select = document.getElementById(selectId);
    if (!select) {
        console.warn(`⚠️ قائمة الموظفين ${selectId} غير موجودة`);
        return;
    }

    let options = '<option value="">اختر الموظف</option>';
    AppData.employees.forEach(emp => {
        options += `<option value="${emp.id}">${emp.name} - ${emp.position}</option>`;
    });
    select.innerHTML = options;
}

// يتبع في التعليق التالي بسبب الحد الأقصى للطول...
// =================================================================
// إدارة الحضور والانصراف - وظائف متكاملة
// =================================================================

function renderAttendanceTable() {
    console.log('⏰ رسم جدول الحضور والانصراف...');

    const tableBody = document.getElementById('attendanceTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول الحضور غير موجود');
        return;
    }

    try {
        const attendance = AppData.attendance.map(att => {
            const employee = AppData.employees.find(emp => emp.id === att.employeeId);
            return {
                ...att,
                employeeName: employee ? employee.name : 'موظف محذوف',
                totalHours: calculateHours(att.checkIn, att.checkOut)
            };
        });

        // ترتيب حسب التاريخ (الأحدث أولاً)
        attendance.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (attendance.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty-state">
                        <i class="fas fa-clock"></i>
                        <h3>لا توجد سجلات حضور</h3>
                        <p>ابدأ بتسجيل حضور الموظفين</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = attendance.map(att => `
                <tr class="${att.totalHours < 8 ? 'incomplete-hours' : 'complete-hours'}">
                    <td>${formatDateShort(att.date)}</td>
                    <td><strong>${att.employeeName}</strong></td>
                    <td><span class="time-badge">${att.checkIn}</span></td>
                    <td><span class="time-badge">${att.checkOut}</span></td>
                    <td><strong class="${att.totalHours < 8 ? 'text-warning' : 'text-success'}">${att.totalHours.toFixed(2)} ساعة</strong></td>
                    <td>${att.notes || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editAttendance(${att.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deleteAttendance(${att.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        populateEmployeeSelect('attendanceEmployee');

        console.log(`✅ تم رسم جدول الحضور - ${attendance.length} سجل`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول الحضور:', error);
        showNotification('خطأ في تحميل بيانات الحضور', 'error');
    }
}

function openAttendanceModal(attendanceId = null) {
    console.log(`⏰ فتح نافذة الحضور: ${attendanceId || 'جديد'}`);

    editingId = attendanceId;
    populateEmployeeSelect('attendanceEmployee');

    const modalTitle = document.getElementById('attendanceModalTitle');
    const form = document.getElementById('attendanceForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة الحضور غير موجودة');
        showNotification('خطأ في فتح نافذة الحضور', 'error');
        return;
    }

    if (attendanceId) {
        const attendance = AppData.attendance.find(att => att.id === attendanceId);
        if (attendance) {
            modalTitle.textContent = 'تعديل سجل الحضور';

            document.getElementById('attendanceEmployee').value = attendance.employeeId;
            document.getElementById('attendanceDate').value = attendance.date;
            document.getElementById('attendanceCheckIn').value = attendance.checkIn;
            document.getElementById('attendanceCheckOut').value = attendance.checkOut;
            document.getElementById('attendanceNotes').value = attendance.notes || '';
        } else {
            console.error('❌ سجل الحضور غير موجود');
            showNotification('سجل الحضور المطلوب غير موجود', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'تسجيل حضور جديد';
        form.reset();
        document.getElementById('attendanceDate').value = new Date().toISOString().split('T')[0];

        // تعيين أوقات افتراضية
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('attendanceCheckIn').value = `${hours}:${minutes}`;

        // وقت الانصراف المتوقع (8 ساعات عمل)
        const endTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
        const endHours = endTime.getHours().toString().padStart(2, '0');
        const endMinutes = endTime.getMinutes().toString().padStart(2, '0');
        document.getElementById('attendanceCheckOut').value = `${endHours}:${endMinutes}`;
    }

    openModal('attendanceModal');
}

function saveAttendance(formData) {
    console.log('💾 حفظ بيانات الحضور...');

    try {
        const attendanceData = {
            employeeId: parseInt(formData.get('employeeId')),
            date: formData.get('date'),
            checkIn: formData.get('checkIn'),
            checkOut: formData.get('checkOut'),
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات
        if (!attendanceData.employeeId || !attendanceData.date || !attendanceData.checkIn || !attendanceData.checkOut) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'warning');
            return;
        }

        // التحقق من صحة الأوقات
        const totalHours = calculateHours(attendanceData.checkIn, attendanceData.checkOut);
        if (totalHours <= 0 || totalHours > 24) {
            showNotification('أوقات الحضور والانصراف غير صحيحة', 'warning');
            return;
        }

        const employeeName = getEmployeeName(attendanceData.employeeId);

        if (editingId) {
            // تحديث سجل موجود
            const index = AppData.attendance.findIndex(att => att.id === editingId);
            if (index !== -1) {
                AppData.attendance[index] = { ...AppData.attendance[index], ...attendanceData };
                showNotification(`تم تحديث سجل حضور الموظف "${employeeName}" بنجاح`, 'success');
                console.log(`✅ تم تحديث الحضور للموظف: ${employeeName}`);
            } else {
                throw new Error('سجل الحضور غير موجود');
            }
        } else {
            // إضافة سجل جديد
            const newAttendance = {
                id: generateId('attendance'),
                ...attendanceData
            };
            AppData.attendance.push(newAttendance);
            showNotification(`تم تسجيل حضور الموظف "${employeeName}" - ${totalHours.toFixed(2)} ساعة`, 'success');
            console.log(`✅ تم تسجيل حضور جديد للموظف: ${employeeName}`);
        }

        closeModal('attendanceModal');
        renderAttendanceTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات الحضور:', error);
        showNotification('حدث خطأ أثناء حفظ الحضور', 'error');
    }
}

function editAttendance(attendanceId) {
    openAttendanceModal(attendanceId);
}

function deleteAttendance(attendanceId) {
    const attendance = AppData.attendance.find(att => att.id === attendanceId);
    if (!attendance) {
        showNotification('سجل الحضور غير موجود', 'error');
        return;
    }

    const employeeName = getEmployeeName(attendance.employeeId);

    if (confirm(`هل أنت متأكد من حذف سجل حضور الموظف "${employeeName}" بتاريخ ${formatDateShort(attendance.date)}؟`)) {
        try {
            AppData.attendance = AppData.attendance.filter(att => att.id !== attendanceId);
            showNotification('تم حذف سجل الحضور بنجاح', 'success');
            console.log(`🗑️ تم حذف سجل حضور للموظف: ${employeeName}`);

            renderAttendanceTable();
        } catch (error) {
            console.error('❌ خطأ في حذف سجل الحضور:', error);
            showNotification('حدث خطأ أثناء حذف سجل الحضور', 'error');
        }
    }
}

// =================================================================
// إدارة المرتبات - وظائف متكاملة
// =================================================================

function renderPayrollTable() {
    console.log('💳 رسم جدول المرتبات...');

    const tableBody = document.getElementById('payrollTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول المرتبات غير موجود');
        return;
    }

    try {
        const payroll = AppData.payroll.map(pay => {
            const employee = AppData.employees.find(emp => emp.id === pay.employeeId);
            return {
                ...pay,
                employeeName: employee ? employee.name : 'موظف محذوف',
                remaining: (pay.basicSalary || 0) - (pay.disbursed || 0)
            };
        });

        // ترتيب حسب التاريخ (الأحدث أولاً)
        payroll.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (payroll.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty-state">
                        <i class="fas fa-money-check-alt"></i>
                        <h3>لا توجد مرتبات مسجلة</h3>
                        <p>ابدأ بإضافة دفعات رواتب الموظفين</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = payroll.map(pay => `
                <tr class="${pay.remaining <= 0 ? 'paid-salary' : 'partial-salary'}">
                    <td>${formatDateShort(pay.date)}</td>
                    <td><strong>${pay.employeeName}</strong></td>
                    <td><strong>${formatCurrency(pay.basicSalary)}</strong></td>
                    <td class="${pay.remaining > 0 ? 'text-warning' : 'text-success'}">
                        <strong>${formatCurrency(pay.remaining)}</strong>
                    </td>
                    <td>${formatCurrency(pay.disbursed)}</td>
                    <td>${pay.notes || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editPayroll(${pay.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deletePayroll(${pay.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                        ${pay.remaining > 0 ? `
                            <button class="btn btn-sm btn-secondary" onclick="payRemainingSalary(${pay.id})" title="دفع الباقي">
                                <i class="fas fa-coins"></i>
                            </button>
                        ` : ''}
                    </td>
                </tr>
            `).join('');
        }

        populateEmployeeSelect('payrollEmployee');

        console.log(`✅ تم رسم جدول المرتبات - ${payroll.length} دفعة`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول المرتبات:', error);
        showNotification('خطأ في تحميل بيانات المرتبات', 'error');
    }
}

function openPayrollModal(payrollId = null) {
    console.log(`💳 فتح نافذة المرتبات: ${payrollId || 'جديدة'}`);

    editingId = payrollId;
    populateEmployeeSelect('payrollEmployee');

    const modalTitle = document.getElementById('payrollModalTitle');
    const form = document.getElementById('payrollForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة المرتبات غير موجودة');
        showNotification('خطأ في فتح نافذة المرتبات', 'error');
        return;
    }

    // إعداد مستمع تغيير الموظف لتحديث الراتب الأساسي
    const employeeSelect = document.getElementById('payrollEmployee');
    const basicSalaryInput = document.getElementById('payrollBasicSalary');

    if (employeeSelect && basicSalaryInput) {
        employeeSelect.addEventListener('change', function() {
            const employeeId = parseInt(this.value);
            const employee = AppData.employees.find(emp => emp.id === employeeId);
            if (employee) {
                basicSalaryInput.value = employee.basicSalary;
            } else {
                basicSalaryInput.value = '';
            }
        });
    }

    if (payrollId) {
        const payroll = AppData.payroll.find(pay => pay.id === payrollId);
        if (payroll) {
            modalTitle.textContent = 'تعديل دفعة الراتب';

            document.getElementById('payrollEmployee').value = payroll.employeeId;
            document.getElementById('payrollDate').value = payroll.date;
            document.getElementById('payrollBasicSalary').value = payroll.basicSalary;
            document.getElementById('payrollDisbursed').value = payroll.disbursed;
            document.getElementById('payrollNotes').value = payroll.notes || '';
        } else {
            console.error('❌ دفعة الراتب غير موجودة');
            showNotification('دفعة الراتب المطلوبة غير موجودة', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة دفعة راتب جديدة';
        form.reset();
        document.getElementById('payrollDate').value = new Date().toISOString().split('T')[0];
    }

    openModal('payrollModal');
}

function savePayroll(formData) {
    console.log('💾 حفظ بيانات المرتبات...');

    try {
        const payrollData = {
            employeeId: parseInt(formData.get('employeeId')),
            date: formData.get('date'),
            basicSalary: parseFloat(formData.get('basicSalary')) || 0,
            disbursed: parseFloat(formData.get('disbursed')) || 0,
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات
        if (!payrollData.employeeId || !payrollData.date || payrollData.basicSalary <= 0 || payrollData.disbursed < 0) {
            showNotification('يرجى ملء جميع الحقول بقيم صحيحة', 'warning');
            return;
        }

        if (payrollData.disbursed > payrollData.basicSalary) {
            showNotification('المبلغ المصرف لا يمكن أن يكون أكبر من الراتب الأساسي', 'warning');
            return;
        }

        const employeeName = getEmployeeName(payrollData.employeeId);

        if (editingId) {
            // تحديث دفعة موجودة
            const index = AppData.payroll.findIndex(pay => pay.id === editingId);
            if (index !== -1) {
                AppData.payroll[index] = { ...AppData.payroll[index], ...payrollData };
                showNotification(`تم تحديث دفعة راتب الموظف "${employeeName}" بنجاح`, 'success');
                console.log(`✅ تم تحديث راتب الموظف: ${employeeName}`);
            } else {
                throw new Error('دفعة الراتب غير موجودة');
            }
        } else {
            // إضافة دفعة جديدة
            const newPayroll = {
                id: generateId('payroll'),
                ...payrollData
            };
            AppData.payroll.push(newPayroll);
            showNotification(`تم إضافة دفعة راتب للموظف "${employeeName}" بمبلغ ${formatCurrency(payrollData.disbursed)}`, 'success');
            console.log(`✅ تم إضافة دفعة راتب جديدة للموظف: ${employeeName}`);
        }

        closeModal('payrollModal');
        renderPayrollTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات المرتبات:', error);
        showNotification('حدث خطأ أثناء حفظ دفعة الراتب', 'error');
    }
}

function editPayroll(payrollId) {
    openPayrollModal(payrollId);
}

function deletePayroll(payrollId) {
    const payroll = AppData.payroll.find(pay => pay.id === payrollId);
    if (!payroll) {
        showNotification('دفعة الراتب غير موجودة', 'error');
        return;
    }

    const employeeName = getEmployeeName(payroll.employeeId);

    if (confirm(`هل أنت متأكد من حذف دفعة راتب الموظف "${employeeName}" بتاريخ ${formatDateShort(payroll.date)}؟`)) {
        try {
            AppData.payroll = AppData.payroll.filter(pay => pay.id !== payrollId);
            showNotification('تم حذف دفعة الراتب بنجاح', 'success');
            console.log(`🗑️ تم حذف دفعة راتب للموظف: ${employeeName}`);

            renderPayrollTable();
        } catch (error) {
            console.error('❌ خطأ في حذف دفعة الراتب:', error);
            showNotification('حدث خطأ أثناء حذف دفعة الراتب', 'error');
        }
    }
}

function payRemainingSalary(payrollId) {
    const payroll = AppData.payroll.find(pay => pay.id === payrollId);
    if (!payroll) {
        showNotification('دفعة الراتب غير موجودة', 'error');
        return;
    }

    const remaining = payroll.basicSalary - payroll.disbursed;
    const employeeName = getEmployeeName(payroll.employeeId);

    if (confirm(`هل تريد دفع المبلغ المتبقي ${formatCurrency(remaining)} للموظف "${employeeName}"؟`)) {
        payroll.disbursed = payroll.basicSalary;
        showNotification(`تم دفع المبلغ المتبقي ${formatCurrency(remaining)} للموظف "${employeeName}" - تم السداد بالكامل`, 'success');

        renderPayrollTable();
        updateDashboard();
    }
}

// =================================================================
// إدارة الموردين والدفعات - وظائف متكاملة
// =================================================================

function renderSuppliersTable() {
    console.log('🚚 رسم جدول الموردين...');

    const tableBody = document.getElementById('suppliersTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول الموردين غير موجود');
        return;
    }

    try {
        const suppliers = [...AppData.suppliers];

        if (suppliers.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="empty-state">
                        <i class="fas fa-truck"></i>
                        <h3>لا توجد موردين مسجلين</h3>
                        <p>ابدأ بإضافة موردين جدد</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = suppliers.map(supplier => `
                <tr>
                    <td>${supplier.id}</td>
                    <td><strong>${supplier.name}</strong></td>
                    <td><span class="phone-badge">${supplier.contact}</span></td>
                    <td>${supplier.address || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editSupplier(${supplier.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deleteSupplier(${supplier.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="viewSupplierPayments(${supplier.id})" title="المدفوعات">
                            <i class="fas fa-eye"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        populateSupplierSelect('paymentSupplier');

        console.log(`✅ تم رسم جدول الموردين - ${suppliers.length} مورد`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول الموردين:', error);
        showNotification('خطأ في تحميل بيانات الموردين', 'error');
    }
}

function renderPaymentsTable() {
    console.log('💳 رسم جدول المدفوعات للموردين...');

    const tableBody = document.getElementById('paymentsTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول المدفوعات غير موجود');
        return;
    }

    try {
        const payments = AppData.payments.map(payment => {
            const supplier = AppData.suppliers.find(sup => sup.id === payment.supplierId);
            return {
                ...payment,
                supplierName: supplier ? supplier.name : 'مورد محذوف'
            };
        });

        // ترتيب حسب التاريخ (الأحدث أولاً)
        payments.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (payments.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty-state">
                        <i class="fas fa-money-bill"></i>
                        <h3>لا توجد مدفوعات مسجلة</h3>
                        <p>ابدأ بإضافة مدفوعات للموردين</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = payments.map(payment => {
                const isPaid = payment.payment >= payment.invoiceTotal;
                return `
                    <tr class="${isPaid ? 'paid-invoice' : 'pending-invoice'}">
                        <td>${formatDateShort(payment.date)}</td>
                        <td><strong>${payment.supplierName}</strong></td>
                        <td><strong>${formatCurrency(payment.payment)}</strong></td>
                        <td><strong>${formatCurrency(payment.invoiceTotal)}</strong></td>
                        <td>${payment.returnedItems || '-'}</td>
                        <td>${payment.notes || '-'}</td>
                        <td>
                            <button class="btn btn-sm btn-primary" onclick="editPayment(${payment.id})" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-error" onclick="deletePayment(${payment.id})" title="حذف">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        console.log(`✅ تم رسم جدول المدفوعات - ${payments.length} دفعة`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول المدفوعات:', error);
        showNotification('خطأ في تحميل بيانات المدفوعات', 'error');
    }
}

function showSuppliersView() {
    document.getElementById('suppliersView').style.display = 'block';
    document.getElementById('paymentsView').style.display = 'none';

    document.getElementById('showSuppliersBtn').className = 'btn btn-primary';
    document.getElementById('showPaymentsBtn').className = 'btn btn-secondary';

    renderSuppliersTable();
}

function showPaymentsView() {
    document.getElementById('suppliersView').style.display = 'none';
    document.getElementById('paymentsView').style.display = 'block';

    document.getElementById('showSuppliersBtn').className = 'btn btn-secondary';
    document.getElementById('showPaymentsBtn').className = 'btn btn-primary';

    renderPaymentsTable();
}

function openSupplierModal(supplierId = null) {
    console.log(`🚚 فتح نافذة المورد: ${supplierId || 'جديد'}`);

    editingId = supplierId;
    const modalTitle = document.getElementById('supplierModalTitle');
    const form = document.getElementById('supplierForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة المورد غير موجودة');
        showNotification('خطأ في فتح نافذة المورد', 'error');
        return;
    }

    if (supplierId) {
        const supplier = AppData.suppliers.find(sup => sup.id === supplierId);
        if (supplier) {
            modalTitle.textContent = 'تعديل بيانات المورد';

            document.getElementById('supplierName').value = supplier.name || '';
            document.getElementById('supplierContact').value = supplier.contact || '';
            document.getElementById('supplierAddress').value = supplier.address || '';
        } else {
            console.error('❌ المورد غير موجود');
            showNotification('المورد المطلوب غير موجود', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة مورد جديد';
        form.reset();
    }

    openModal('supplierModal');
}

function saveSupplier(formData) {
    console.log('💾 حفظ بيانات المورد...');

    try {
        const supplierData = {
            name: formData.get('name')?.trim() || '',
            contact: formData.get('contact')?.trim() || '',
            address: formData.get('address')?.trim() || ''
        };

        // التحقق من البيانات المطلوبة
        if (!supplierData.name || !supplierData.contact) {
            showNotification('يرجى ملء اسم المورد ورقم الاتصال', 'warning');
            return;
        }

        if (editingId) {
            // تحديث مورد موجود
            const index = AppData.suppliers.findIndex(sup => sup.id === editingId);
            if (index !== -1) {
                AppData.suppliers[index] = { ...AppData.suppliers[index], ...supplierData };
                showNotification(`تم تحديث بيانات المورد "${supplierData.name}" بنجاح`, 'success');
                console.log(`✅ تم تحديث المورد: ${supplierData.name}`);
            } else {
                throw new Error('المورد غير موجود');
            }
        } else {
            // إضافة مورد جديد
            const newSupplier = {
                id: generateId('supplier'),
                ...supplierData
            };
            AppData.suppliers.push(newSupplier);
            showNotification(`تم إضافة المورد "${supplierData.name}" بنجاح`, 'success');
            console.log(`✅ تم إضافة مورد جديد: ${supplierData.name}`);
        }

        closeModal('supplierModal');
        renderSuppliersTable();
        populateSupplierSelect('paymentSupplier');

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات المورد:', error);
        showNotification('حدث خطأ أثناء حفظ البيانات', 'error');
    }
}

function populateSupplierSelect(selectId) {
    const select = document.getElementById(selectId);
    if (!select) {
        console.warn(`⚠️ قائمة الموردين ${selectId} غير موجودة`);
        return;
    }

    let options = '<option value="">اختر المورد</option>';
    AppData.suppliers.forEach(supplier => {
        options += `<option value="${supplier.id}">${supplier.name}</option>`;
    });
    select.innerHTML = options;
}

function editSupplier(supplierId) {
    openSupplierModal(supplierId);
}

function deleteSupplier(supplierId) {
    const supplier = AppData.suppliers.find(sup => sup.id === supplierId);
    if (!supplier) {
        showNotification('المورد غير موجود', 'error');
        return;
    }

    // التحقق من وجود مدفوعات مرتبطة
    const relatedPayments = AppData.payments.filter(pay => pay.supplierId === supplierId);

    if (relatedPayments.length > 0) {
        const confirmed = confirm(`المورد "${supplier.name}" له ${relatedPayments.length} مدفوعات مسجلة.\n\nهل تريد حذف المورد وجميع مدفوعاته؟`);
        if (!confirmed) return;

        // حذف المدفوعات المرتبطة
        AppData.payments = AppData.payments.filter(pay => pay.supplierId !== supplierId);
    } else {
        if (!confirm(`هل أنت متأكد من حذف المورد "${supplier.name}"؟`)) return;
    }

    try {
        AppData.suppliers = AppData.suppliers.filter(sup => sup.id !== supplierId);
        showNotification(`تم حذف المورد "${supplier.name}" بنجاح`, 'success');
        console.log(`🗑️ تم حذف المورد: ${supplier.name}`);

        renderSuppliersTable();
        populateSupplierSelect('paymentSupplier');
    } catch (error) {
        console.error('❌ خطأ في حذف المورد:', error);
        showNotification('حدث خطأ أثناء حذف المورد', 'error');
    }
}

function viewSupplierPayments(supplierId) {
    const supplier = AppData.suppliers.find(sup => sup.id === supplierId);
    if (!supplier) {
        showNotification('المورد غير موجود', 'error');
        return;
    }

    const payments = AppData.payments.filter(pay => pay.supplierId === supplierId);

    if (payments.length === 0) {
        alert(`لا توجد مدفوعات مسجلة للمورد "${supplier.name}"`);
        return;
    }

    const totalPayments = payments.reduce((sum, pay) => sum + (pay.payment || 0), 0);
    const totalInvoices = payments.reduce((sum, pay) => sum + (pay.invoiceTotal || 0), 0);
    const remainingAmount = totalInvoices - totalPayments;

    let details = `مدفوعات المورد: ${supplier.name}\n\n`;
    details += `📊 الإحصائيات:\n`;
    details += `• عدد المدفوعات: ${payments.length}\n`;
    details += `• إجمالي المدفوع: ${formatCurrency(totalPayments)}\n`;
    details += `• إجمالي الفواتير: ${formatCurrency(totalInvoices)}\n`;
    details += `• المبلغ المتبقي: ${formatCurrency(remainingAmount)}\n\n`;

    details += `📝 تفاصيل المدفوعات:\n`;
    payments.sort((a, b) => new Date(b.date) - new Date(a.date));
    payments.forEach((payment, index) => {
        details += `${index + 1}. ${formatDateShort(payment.date)} - ${formatCurrency(payment.payment)}\n`;
    });

    alert(details);
}

// =================================================================
// إدارة المصاريف - وظائف متكاملة
// =================================================================

function renderExpensesTable() {
    console.log('🧾 رسم جدول المصاريف...');

    const tableBody = document.getElementById('expensesTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول المصاريف غير موجود');
        return;
    }

    try {
        let expenses = [...AppData.expenses];

        // تطبيق البحث
        const searchTerm = document.getElementById('expenseSearch')?.value?.toLowerCase();
        if (searchTerm) {
            expenses = expenses.filter(exp => 
                exp.name.toLowerCase().includes(searchTerm) || 
                exp.notes.toLowerCase().includes(searchTerm)
            );
        }

        // تطبيق فلتر النوع
        const typeFilter = document.getElementById('expenseTypeFilter')?.value;
        if (typeFilter) {
            expenses = expenses.filter(exp => exp.type === typeFilter);
        }

        // تطبيق فلتر التاريخ
        const dateFilter = document.getElementById('expenseDateFilter')?.value;
        if (dateFilter) {
            expenses = expenses.filter(exp => exp.date === dateFilter);
        }

        // ترتيب حسب التاريخ (الأحدث أولاً)
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (expenses.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="empty-state">
                        <i class="fas fa-receipt"></i>
                        <h3>لا توجد مصاريف</h3>
                        <p>لم يتم العثور على مصاريف مطابقة للبحث</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = expenses.map(expense => `
                <tr>
                    <td>${formatDateShort(expense.date)}</td>
                    <td>
                        <span class="badge badge-${expense.type === 'شخصية' ? 'primary' : expense.type === 'عامة' ? 'secondary' : 'success'}">
                            ${expense.type}
                        </span>
                    </td>
                    <td><strong>${expense.name}</strong></td>
                    <td><strong>${formatCurrency(expense.amount)}</strong></td>
                    <td>${expense.notes || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="editExpense(${expense.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-error" onclick="deleteExpense(${expense.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        console.log(`✅ تم رسم جدول المصاريف - ${expenses.length} مصروف`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول المصاريف:', error);
        showNotification('خطأ في تحميل بيانات المصاريف', 'error');
    }
}

function openExpenseModal(expenseId = null) {
    console.log(`🧾 فتح نافذة المصروف: ${expenseId || 'جديد'}`);

    editingId = expenseId;
    const modalTitle = document.getElementById('expenseModalTitle');
    const form = document.getElementById('expenseForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة المصروف غير موجودة');
        showNotification('خطأ في فتح نافذة المصروف', 'error');
        return;
    }

    if (expenseId) {
        const expense = AppData.expenses.find(exp => exp.id === expenseId);
        if (expense) {
            modalTitle.textContent = 'تعديل المصروف';

            document.getElementById('expenseDate').value = expense.date;
            document.getElementById('expenseType').value = expense.type;
            document.getElementById('expenseName').value = expense.name;
            document.getElementById('expenseAmount').value = expense.amount;
            document.getElementById('expenseNotes').value = expense.notes || '';
        } else {
            console.error('❌ المصروف غير موجود');
            showNotification('المصروف المطلوب غير موجود', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة مصروف جديد';
        form.reset();
        document.getElementById('expenseDate').value = new Date().toISOString().split('T')[0];
    }

    openModal('expenseModal');
}

function saveExpense(formData) {
    console.log('💾 حفظ بيانات المصروف...');

    try {
        const expenseData = {
            date: formData.get('date'),
            type: formData.get('type'),
            name: formData.get('name')?.trim() || '',
            amount: parseFloat(formData.get('amount')) || 0,
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات المطلوبة
        if (!expenseData.date || !expenseData.type || !expenseData.name || expenseData.amount <= 0) {
            showNotification('يرجى ملء جميع الحقول المطلوبة بقيم صحيحة', 'warning');
            return;
        }

        if (editingId) {
            // تحديث مصروف موجود
            const index = AppData.expenses.findIndex(exp => exp.id === editingId);
            if (index !== -1) {
                AppData.expenses[index] = { ...AppData.expenses[index], ...expenseData };
                showNotification(`تم تحديث المصروف "${expenseData.name}" بنجاح`, 'success');
                console.log(`✅ تم تحديث المصروف: ${expenseData.name}`);
            } else {
                throw new Error('المصروف غير موجود');
            }
        } else {
            // إضافة مصروف جديد
            const newExpense = {
                id: generateId('expense'),
                ...expenseData
            };
            AppData.expenses.push(newExpense);
            showNotification(`تم إضافة المصروف "${expenseData.name}" بمبلغ ${formatCurrency(expenseData.amount)}`, 'success');
            console.log(`✅ تم إضافة مصروف جديد: ${expenseData.name}`);
        }

        closeModal('expenseModal');
        renderExpensesTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات المصروف:', error);
        showNotification('حدث خطأ أثناء حفظ المصروف', 'error');
    }
}

function editExpense(expenseId) {
    openExpenseModal(expenseId);
}

function deleteExpense(expenseId) {
    const expense = AppData.expenses.find(exp => exp.id === expenseId);
    if (!expense) {
        showNotification('المصروف غير موجود', 'error');
        return;
    }

    if (confirm(`هل أنت متأكد من حذف المصروف "${expense.name}" بمبلغ ${formatCurrency(expense.amount)}؟`)) {
        try {
            AppData.expenses = AppData.expenses.filter(exp => exp.id !== expenseId);
            showNotification(`تم حذف المصروف "${expense.name}" بنجاح`, 'success');
            console.log(`🗑️ تم حذف المصروف: ${expense.name}`);

            renderExpensesTable();
            updateDashboard();
        } catch (error) {
            console.error('❌ خطأ في حذف المصروف:', error);
            showNotification('حدث خطأ أثناء حذف المصروف', 'error');
        }
    }
}

// =================================================================
// إدارة مراجعة اليوميات - وظائف متكاملة
// =================================================================

function renderDailyReviewTable() {
    console.log('📊 رسم جدول مراجعة اليوميات...');

    const tableBody = document.getElementById('dailyReviewTableBody');
    if (!tableBody) {
        console.error('❌ جسم جدول مراجعة اليوميات غير موجود');
        return;
    }

    try {
        const dailyReviews = [...AppData.dailyReview];

        // ترتيب حسب التاريخ (الأحدث أولاً)
        dailyReviews.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (dailyReviews.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty-state">
                        <i class="fas fa-chart-line"></i>
                        <h3>لا توجد مراجعات يومية</h3>
                        <p>ابدأ بإضافة مراجعات يومية للفروع</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = dailyReviews.map(review => {
                const totalSales = (review.salesCash || 0) + (review.salesElectronic || 0);
                return `
                    <tr>
                        <td>${formatDateShort(review.date)}</td>
                        <td><span class="badge badge-primary">${review.branch}</span></td>
                        <td><strong>${formatCurrency(review.salesCash)}</strong></td>
                        <td><strong>${formatCurrency(review.salesElectronic)}</strong></td>
                        <td>${formatCurrency(review.salesParts || 0)}</td>
                        <td>${formatCurrency(review.salesAccessories || 0)}</td>
                        <td><strong class="text-success">${formatCurrency(review.drawerBalance)}</strong></td>
                        <td>
                            <button class="btn btn-sm btn-primary" onclick="editDailyReview(${review.id})" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-error" onclick="deleteDailyReview(${review.id})" title="حذف">
                                <i class="fas fa-trash"></i>
                            </button>
                            <button class="btn btn-sm btn-secondary" onclick="viewDailyReviewDetails(${review.id})" title="التفاصيل">
                                <i class="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        console.log(`✅ تم رسم جدول مراجعة اليوميات - ${dailyReviews.length} مراجعة`);
    } catch (error) {
        console.error('❌ خطأ في رسم جدول مراجعة اليوميات:', error);
        showNotification('خطأ في تحميل بيانات مراجعة اليوميات', 'error');
    }
}

function openDailyReviewModal(reviewId = null) {
    console.log(`📊 فتح نافذة المراجعة اليومية: ${reviewId || 'جديدة'}`);

    editingId = reviewId;
    const modalTitle = document.getElementById('dailyReviewModalTitle');
    const form = document.getElementById('dailyReviewForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة المراجعة اليومية غير موجودة');
        showNotification('خطأ في فتح نافذة المراجعة اليومية', 'error');
        return;
    }

    if (reviewId) {
        const review = AppData.dailyReview.find(rev => rev.id === reviewId);
        if (review) {
            modalTitle.textContent = 'تعديل المراجعة اليومية';

            document.getElementById('dailyReviewDate').value = review.date;
            document.getElementById('dailyReviewBranch').value = review.branch;
            document.getElementById('dailyReviewSalesCash').value = review.salesCash;
            document.getElementById('dailyReviewSalesElectronic').value = review.salesElectronic;
            document.getElementById('dailyReviewSalesParts').value = review.salesParts || 0;
            document.getElementById('dailyReviewSalesAccessories').value = review.salesAccessories || 0;
            document.getElementById('dailyReviewDrawerBalance').value = review.drawerBalance;
            document.getElementById('dailyReviewNotes').value = review.notes || '';
        } else {
            console.error('❌ المراجعة اليومية غير موجودة');
            showNotification('المراجعة اليومية المطلوبة غير موجودة', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة مراجعة يومية جديدة';
        form.reset();
        document.getElementById('dailyReviewDate').value = new Date().toISOString().split('T')[0];

        // تعيين قيم افتراضية
        document.getElementById('dailyReviewSalesParts').value = '0';
        document.getElementById('dailyReviewSalesAccessories').value = '0';
    }

    openModal('dailyReviewModal');
}

function saveDailyReview(formData) {
    console.log('💾 حفظ بيانات المراجعة اليومية...');

    try {
        const reviewData = {
            date: formData.get('date'),
            branch: formData.get('branch'),
            salesCash: parseFloat(formData.get('salesCash')) || 0,
            salesElectronic: parseFloat(formData.get('salesElectronic')) || 0,
            salesParts: parseFloat(formData.get('salesParts')) || 0,
            salesAccessories: parseFloat(formData.get('salesAccessories')) || 0,
            drawerBalance: parseFloat(formData.get('drawerBalance')) || 0,
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات المطلوبة
        if (!reviewData.date || !reviewData.branch) {
            showNotification('يرجى ملء التاريخ والفرع', 'warning');
            return;
        }

        if (reviewData.salesCash < 0 || reviewData.salesElectronic < 0) {
            showNotification('المبيعات لا يمكن أن تكون سالبة', 'warning');
            return;
        }

        if (editingId) {
            // تحديث مراجعة موجودة
            const index = AppData.dailyReview.findIndex(rev => rev.id === editingId);
            if (index !== -1) {
                AppData.dailyReview[index] = { ...AppData.dailyReview[index], ...reviewData };
                showNotification(`تم تحديث مراجعة ${reviewData.branch} بتاريخ ${formatDateShort(reviewData.date)}`, 'success');
                console.log(`✅ تم تحديث المراجعة: ${reviewData.branch} - ${reviewData.date}`);
            } else {
                throw new Error('المراجعة اليومية غير موجودة');
            }
        } else {
            // إضافة مراجعة جديدة
            const newReview = {
                id: generateId('dailyReview'),
                ...reviewData
            };
            AppData.dailyReview.push(newReview);
            const totalSales = reviewData.salesCash + reviewData.salesElectronic;
            showNotification(`تم إضافة مراجعة ${reviewData.branch} - إجمالي المبيعات: ${formatCurrency(totalSales)}`, 'success');
            console.log(`✅ تم إضافة مراجعة جديدة: ${reviewData.branch} - ${reviewData.date}`);
        }

        closeModal('dailyReviewModal');
        renderDailyReviewTable();
        updateDashboard();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات المراجعة اليومية:', error);
        showNotification('حدث خطأ أثناء حفظ المراجعة اليومية', 'error');
    }
}

function editDailyReview(reviewId) {
    openDailyReviewModal(reviewId);
}

function deleteDailyReview(reviewId) {
    const review = AppData.dailyReview.find(rev => rev.id === reviewId);
    if (!review) {
        showNotification('المراجعة اليومية غير موجودة', 'error');
        return;
    }

    if (confirm(`هل أنت متأكد من حذف مراجعة ${review.branch} بتاريخ ${formatDateShort(review.date)}؟`)) {
        try {
            AppData.dailyReview = AppData.dailyReview.filter(rev => rev.id !== reviewId);
            showNotification(`تم حذف المراجعة بنجاح`, 'success');
            console.log(`🗑️ تم حذف المراجعة: ${review.branch} - ${review.date}`);

            renderDailyReviewTable();
            updateDashboard();
        } catch (error) {
            console.error('❌ خطأ في حذف المراجعة اليومية:', error);
            showNotification('حدث خطأ أثناء حذف المراجعة اليومية', 'error');
        }
    }
}

function viewDailyReviewDetails(reviewId) {
    const review = AppData.dailyReview.find(rev => rev.id === reviewId);
    if (!review) {
        showNotification('المراجعة اليومية غير موجودة', 'error');
        return;
    }

    const totalSales = (review.salesCash || 0) + (review.salesElectronic || 0);
    const totalProducts = (review.salesParts || 0) + (review.salesAccessories || 0);

    const details = `
تفاصيل مراجعة ${review.branch}
التاريخ: ${formatDate(review.date)}

💰 المبيعات:
• نقدي: ${formatCurrency(review.salesCash)}
• إلكتروني: ${formatCurrency(review.salesElectronic)}
• إجمالي المبيعات: ${formatCurrency(totalSales)}

🛠️ تفصيل المنتجات:
• قطع غيار: ${formatCurrency(review.salesParts || 0)}
• كماليات: ${formatCurrency(review.salesAccessories || 0)}
• إجمالي المنتجات: ${formatCurrency(totalProducts)}

💳 رصيد الدرج: ${formatCurrency(review.drawerBalance)}

📝 ملاحظات: ${review.notes || 'لا توجد ملاحظات'}
    `;

    alert(details);
}

// =================================================================
// إدارة النماذج - ربط الأحداث
// =================================================================

function initializeFormHandlers() {
    console.log('📋 تهيئة معالجات النماذج...');

    // نموذج الموظفين
    const employeeForm = document.getElementById('employeeForm');
    if (employeeForm) {
        employeeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveEmployee(formData);
        });
        console.log('✅ تم ربط نموذج الموظفين');
    }

    // نموذج السلف
    const advanceForm = document.getElementById('advanceForm');
    if (advanceForm) {
        advanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveAdvance(formData);
        });
        console.log('✅ تم ربط نموذج السلف');
    }

    // نموذج الحضور
    const attendanceForm = document.getElementById('attendanceForm');
    if (attendanceForm) {
        attendanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveAttendance(formData);
        });
        console.log('✅ تم ربط نموذج الحضور');
    }

    // نموذج المرتبات
    const payrollForm = document.getElementById('payrollForm');
    if (payrollForm) {
        payrollForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            savePayroll(formData);
        });
        console.log('✅ تم ربط نموذج المرتبات');
    }

    // نموذج الموردين
    const supplierForm = document.getElementById('supplierForm');
    if (supplierForm) {
        supplierForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveSupplier(formData);
        });
        console.log('✅ تم ربط نموذج الموردين');
    }

    // نموذج المدفوعات
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            savePayment(formData);
        });
        console.log('✅ تم ربط نموذج المدفوعات');
    }

    // نموذج المصاريف
    const expenseForm = document.getElementById('expenseForm');
    if (expenseForm) {
        expenseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveExpense(formData);
        });
        console.log('✅ تم ربط نموذج المصاريف');
    }

    // نموذج المراجعة اليومية
    const dailyReviewForm = document.getElementById('dailyReviewForm');
    if (dailyReviewForm) {
        dailyReviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            saveDailyReview(formData);
        });
        console.log('✅ تم ربط نموذج المراجعة اليومية');
    }
}

function initializeSearchFilters() {
    console.log('🔍 تهيئة معالجات البحث والفلترة...');

    // البحث في الموظفين
    const employeeSearch = document.getElementById('employeeSearch');
    if (employeeSearch) {
        employeeSearch.addEventListener('input', debounce(() => {
            if (currentSection === 'employees') {
                renderEmployeesTable();
            }
        }, 300));
    }

    // فلتر مناصب الموظفين
    const positionFilter = document.getElementById('positionFilter');
    if (positionFilter) {
        positionFilter.addEventListener('change', () => {
            if (currentSection === 'employees') {
                renderEmployeesTable();
            }
        });
    }

    // البحث في المصاريف
    const expenseSearch = document.getElementById('expenseSearch');
    if (expenseSearch) {
        expenseSearch.addEventListener('input', debounce(() => {
            if (currentSection === 'expenses') {
                renderExpensesTable();
            }
        }, 300));
    }

    // فلتر نوع المصاريف
    const expenseTypeFilter = document.getElementById('expenseTypeFilter');
    if (expenseTypeFilter) {
        expenseTypeFilter.addEventListener('change', () => {
            if (currentSection === 'expenses') {
                renderExpensesTable();
            }
        });
    }

    // فلتر تاريخ المصاريف
    const expenseDateFilter = document.getElementById('expenseDateFilter');
    if (expenseDateFilter) {
        expenseDateFilter.addEventListener('change', () => {
            if (currentSection === 'expenses') {
                renderExpensesTable();
            }
        });
    }

    console.log('✅ تم تهيئة معالجات البحث والفلترة');
}

// دالة مساعدة للتأخير (debounce)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// يتبع في التعليق التالي...
// =================================================================
// إدارة المدفوعات للموردين
// =================================================================

function openPaymentModal(paymentId = null) {
    console.log(`💳 فتح نافذة المدفوعات: ${paymentId || 'جديدة'}`);

    editingId = paymentId;
    populateSupplierSelect('paymentSupplier');

    const modalTitle = document.getElementById('paymentModalTitle');
    const form = document.getElementById('paymentForm');

    if (!modalTitle || !form) {
        console.error('❌ عناصر نافذة المدفوعات غير موجودة');
        showNotification('خطأ في فتح نافذة المدفوعات', 'error');
        return;
    }

    if (paymentId) {
        const payment = AppData.payments.find(pay => pay.id === paymentId);
        if (payment) {
            modalTitle.textContent = 'تعديل الدفعة';

            document.getElementById('paymentSupplier').value = payment.supplierId;
            document.getElementById('paymentDate').value = payment.date;
            document.getElementById('paymentAmount').value = payment.payment;
            document.getElementById('paymentInvoiceTotal').value = payment.invoiceTotal;
            document.getElementById('paymentReturnedItems').value = payment.returnedItems || '';
            document.getElementById('paymentNotes').value = payment.notes || '';
        } else {
            console.error('❌ الدفعة غير موجودة');
            showNotification('الدفعة المطلوبة غير موجودة', 'error');
            return;
        }
    } else {
        modalTitle.textContent = 'إضافة دفعة جديدة';
        form.reset();
        document.getElementById('paymentDate').value = new Date().toISOString().split('T')[0];
    }

    openModal('paymentModal');
}

function savePayment(formData) {
    console.log('💾 حفظ بيانات الدفعة...');

    try {
        const paymentData = {
            supplierId: parseInt(formData.get('supplierId')),
            date: formData.get('date'),
            payment: parseFloat(formData.get('payment')) || 0,
            invoiceTotal: parseFloat(formData.get('invoiceTotal')) || 0,
            returnedItems: formData.get('returnedItems')?.trim() || '',
            notes: formData.get('notes')?.trim() || ''
        };

        // التحقق من البيانات المطلوبة
        if (!paymentData.supplierId || !paymentData.date || paymentData.payment <= 0 || paymentData.invoiceTotal <= 0) {
            showNotification('يرجى ملء جميع الحقول المطلوبة بقيم صحيحة', 'warning');
            return;
        }

        if (paymentData.payment > paymentData.invoiceTotal) {
            showNotification('مبلغ الدفعة لا يمكن أن يكون أكبر من إجمالي الفاتورة', 'warning');
            return;
        }

        const supplierName = getSupplierName(paymentData.supplierId);

        if (editingId) {
            // تحديث دفعة موجودة
            const index = AppData.payments.findIndex(pay => pay.id === editingId);
            if (index !== -1) {
                AppData.payments[index] = { ...AppData.payments[index], ...paymentData };
                showNotification(`تم تحديث دفعة المورد "${supplierName}" بنجاح`, 'success');
                console.log(`✅ تم تحديث الدفعة للمورد: ${supplierName}`);
            } else {
                throw new Error('الدفعة غير موجودة');
            }
        } else {
            // إضافة دفعة جديدة
            const newPayment = {
                id: generateId('payment'),
                ...paymentData
            };
            AppData.payments.push(newPayment);
            showNotification(`تم إضافة دفعة للمورد "${supplierName}" بمبلغ ${formatCurrency(paymentData.payment)}`, 'success');
            console.log(`✅ تم إضافة دفعة جديدة للمورد: ${supplierName}`);
        }

        closeModal('paymentModal');
        renderPaymentsTable();

    } catch (error) {
        console.error('❌ خطأ في حفظ بيانات الدفعة:', error);
        showNotification('حدث خطأ أثناء حفظ الدفعة', 'error');
    }
}

function editPayment(paymentId) {
    openPaymentModal(paymentId);
}

function deletePayment(paymentId) {
    const payment = AppData.payments.find(pay => pay.id === paymentId);
    if (!payment) {
        showNotification('الدفعة غير موجودة', 'error');
        return;
    }

    const supplierName = getSupplierName(payment.supplierId);

    if (confirm(`هل أنت متأكد من حذف دفعة المورد "${supplierName}" بمبلغ ${formatCurrency(payment.payment)}؟`)) {
        try {
            AppData.payments = AppData.payments.filter(pay => pay.id !== paymentId);
            showNotification(`تم حذف الدفعة بنجاح`, 'success');
            console.log(`🗑️ تم حذف دفعة للمورد: ${supplierName}`);

            renderPaymentsTable();
        } catch (error) {
            console.error('❌ خطأ في حذف الدفعة:', error);
            showNotification('حدث خطأ أثناء حذف الدفعة', 'error');
        }
    }
}

// =================================================================
// نظام التقارير المتقدم
// =================================================================

function generateEmployeesReport() {
    console.log('📄 إنشاء تقرير الموظفين...');

    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');

        const totalSalaries = AppData.employees.reduce((sum, emp) => sum + (emp.basicSalary || 0), 0);
        const avgSalary = AppData.employees.length > 0 ? totalSalaries / AppData.employees.length : 0;

        // إحصائيات حسب المنصب
        const positionStats = {};
        AppData.employees.forEach(emp => {
            if (!positionStats[emp.position]) {
                positionStats[emp.position] = { count: 0, totalSalary: 0 };
            }
            positionStats[emp.position].count++;
            positionStats[emp.position].totalSalary += emp.basicSalary || 0;
        });

        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير الموظفين - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { 
                        font-family: 'Cairo', Arial, sans-serif; 
                        direction: rtl; 
                        margin: 20px;
                        color: #333;
                        line-height: 1.6;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 30px; 
                        border-bottom: 3px solid #1e40af;
                        padding-bottom: 20px;
                    }
                    .header h1 { 
                        color: #1e40af; 
                        margin-bottom: 10px;
                        font-size: 28px;
                    }
                    .header h2 { 
                        color: #666; 
                        margin-bottom: 5px;
                        font-size: 20px;
                    }
                    .header p {
                        color: #888;
                        font-size: 14px;
                    }
                    .summary {
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 30px;
                        border-right: 4px solid #1e40af;
                    }
                    .summary h3 {
                        color: #1e40af;
                        margin-bottom: 15px;
                    }
                    .summary-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 15px;
                    }
                    .summary-item {
                        background: white;
                        padding: 15px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .summary-item strong {
                        color: #1e40af;
                        font-size: 18px;
                    }
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 20px 0;
                        background: white;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 12px; 
                        text-align: right; 
                    }
                    th { 
                        background: linear-gradient(135deg, #1e40af, #3b82f6);
                        color: white;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    tbody tr:nth-child(even) {
                        background-color: #f8f9fa;
                    }
                    tbody tr:hover {
                        background-color: #e3f2fd;
                    }
                    .total-row {
                        font-weight: bold;
                        background: linear-gradient(135deg, #e3f2fd, #bbdefb) !important;
                        color: #1e40af;
                    }
                    .position-stats {
                        margin: 30px 0;
                    }
                    .position-stats h3 {
                        color: #1e40af;
                        border-bottom: 2px solid #1e40af;
                        padding-bottom: 10px;
                    }
                    .badge {
                        display: inline-block;
                        padding: 4px 8px;
                        background: #1e40af;
                        color: white;
                        border-radius: 4px;
                        font-size: 12px;
                    }
                    @media print {
                        body { margin: 0; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير شامل للموظفين</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد الموظفين: ${AppData.employees.length} موظف</p>
                </div>

                <div class="summary">
                    <h3>📊 ملخص الإحصائيات</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي عدد الموظفين</p>
                            <strong>${AppData.employees.length}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي الرواتب الشهرية</p>
                            <strong>${formatCurrency(totalSalaries)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>متوسط الراتب</p>
                            <strong>${formatCurrency(avgSalary)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>عدد المناصب المختلفة</p>
                            <strong>${Object.keys(positionStats).length}</strong>
                        </div>
                    </div>
                </div>

                <h3>📋 تفاصيل الموظفين</h3>
                <table>
                    <thead>
                        <tr>
                            <th>الرقم</th>
                            <th>الاسم</th>
                            <th>المنصب</th>
                            <th>الراتب الأساسي</th>
                            <th>تاريخ التوظيف</th>
                            <th>رقم الهاتف</th>
                            <th>العنوان</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.employees.map(emp => `
                            <tr>
                                <td>${emp.id}</td>
                                <td><strong>${emp.name}</strong></td>
                                <td><span class="badge">${emp.position}</span></td>
                                <td><strong>${formatCurrency(emp.basicSalary)}</strong></td>
                                <td>${formatDateShort(emp.hireDate)}</td>
                                <td>${emp.phone || '-'}</td>
                                <td>${emp.address || '-'}</td>
                            </tr>
                        `).join('')}
                        <tr class="total-row">
                            <td colspan="3"><strong>الإجمالي (${AppData.employees.length} موظف)</strong></td>
                            <td><strong>${formatCurrency(totalSalaries)}</strong></td>
                            <td colspan="3"></td>
                        </tr>
                    </tbody>
                </table>

                <div class="position-stats">
                    <h3>📈 إحصائيات المناصب</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>المنصب</th>
                                <th>عدد الموظفين</th>
                                <th>إجمالي الرواتب</th>
                                <th>متوسط الراتب</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(positionStats).map(([position, stats]) => `
                                <tr>
                                    <td><span class="badge">${position}</span></td>
                                    <td><strong>${stats.count}</strong></td>
                                    <td><strong>${formatCurrency(stats.totalSalary)}</strong></td>
                                    <td><strong>${formatCurrency(stats.totalSalary / stats.count)}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                    <p>للاستفسارات: اتصل بإدارة النظام</p>
                </div>

                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;

        reportWindow.document.write(reportContent);
        reportWindow.document.close();

        showNotification('تم إنشاء تقرير الموظفين بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير الموظفين');

    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير الموظفين:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}

function generateAdvancesReport() {
    console.log('📄 إنشاء تقرير السلف...');

    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');

        const advances = AppData.advances.map(advance => {
            const employee = AppData.employees.find(emp => emp.id === advance.employeeId);
            return {
                ...advance,
                employeeName: employee ? employee.name : 'موظف محذوف',
                remaining: (advance.amount || 0) - (advance.payment || 0)
            };
        });

        const totalAdvances = advances.reduce((sum, adv) => sum + (adv.amount || 0), 0);
        const totalPaid = advances.reduce((sum, adv) => sum + (adv.payment || 0), 0);
        const totalRemaining = advances.reduce((sum, adv) => sum + adv.remaining, 0);

        // إحصائيات حسب الموظف
        const employeeStats = {};
        advances.forEach(adv => {
            if (!employeeStats[adv.employeeName]) {
                employeeStats[adv.employeeName] = { 
                    count: 0, 
                    totalAmount: 0, 
                    totalPaid: 0, 
                    totalRemaining: 0 
                };
            }
            employeeStats[adv.employeeName].count++;
            employeeStats[adv.employeeName].totalAmount += adv.amount || 0;
            employeeStats[adv.employeeName].totalPaid += adv.payment || 0;
            employeeStats[adv.employeeName].totalRemaining += adv.remaining;
        });

        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير السلف - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { 
                        font-family: 'Cairo', Arial, sans-serif; 
                        direction: rtl; 
                        margin: 20px;
                        color: #333;
                        line-height: 1.6;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 30px; 
                        border-bottom: 3px solid #f59e0b;
                        padding-bottom: 20px;
                    }
                    .header h1 { 
                        color: #f59e0b; 
                        margin-bottom: 10px;
                        font-size: 28px;
                    }
                    .header h2 { 
                        color: #666; 
                        margin-bottom: 5px;
                        font-size: 20px;
                    }
                    .summary {
                        background: #fffbf0;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 30px;
                        border-right: 4px solid #f59e0b;
                    }
                    .summary h3 {
                        color: #f59e0b;
                        margin-bottom: 15px;
                    }
                    .summary-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 15px;
                    }
                    .summary-item {
                        background: white;
                        padding: 15px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .summary-item strong {
                        color: #f59e0b;
                        font-size: 18px;
                    }
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 20px 0;
                        background: white;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 12px; 
                        text-align: right; 
                    }
                    th { 
                        background: linear-gradient(135deg, #f59e0b, #fbbf24);
                        color: white;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    tbody tr:nth-child(even) {
                        background-color: #fffbf0;
                    }
                    tbody tr:hover {
                        background-color: #fef3cd;
                    }
                    .total-row {
                        font-weight: bold;
                        background: linear-gradient(135deg, #fef3cd, #fde68a) !important;
                        color: #92400e;
                    }
                    .paid-row {
                        background-color: #d1fae5 !important;
                    }
                    .pending-row {
                        background-color: #fef2f2 !important;
                    }
                    .badge {
                        display: inline-block;
                        padding: 4px 8px;
                        border-radius: 4px;
                        font-size: 12px;
                        font-weight: bold;
                    }
                    .badge-paid {
                        background: #10b981;
                        color: white;
                    }
                    .badge-pending {
                        background: #ef4444;
                        color: white;
                    }
                    @media print {
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير شامل لسلف الموظفين</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد السلف: ${advances.length} سلفة</p>
                </div>

                <div class="summary">
                    <h3>💰 ملخص السلف</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي عدد السلف</p>
                            <strong>${advances.length}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي مبالغ السلف</p>
                            <strong>${formatCurrency(totalAdvances)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المبالغ المسددة</p>
                            <strong>${formatCurrency(totalPaid)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المبالغ المتبقية</p>
                            <strong>${formatCurrency(totalRemaining)}</strong>
                        </div>
                    </div>
                </div>

                <h3>📋 تفاصيل السلف</h3>
                <table>
                    <thead>
                        <tr>
                            <th>التاريخ</th>
                            <th>اسم الموظف</th>
                            <th>مبلغ السلفة</th>
                            <th>المبلغ المسدد</th>
                            <th>المبلغ المتبقي</th>
                            <th>الحالة</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${advances.map(advance => `
                            <tr class="${advance.remaining <= 0 ? 'paid-row' : 'pending-row'}">
                                <td>${formatDateShort(advance.date)}</td>
                                <td><strong>${advance.employeeName}</strong></td>
                                <td><strong>${formatCurrency(advance.amount)}</strong></td>
                                <td>${formatCurrency(advance.payment)}</td>
                                <td><strong>${formatCurrency(advance.remaining)}</strong></td>
                                <td>
                                    <span class="badge ${advance.remaining <= 0 ? 'badge-paid' : 'badge-pending'}">
                                        ${advance.remaining <= 0 ? 'مسددة' : 'متبقية'}
                                    </span>
                                </td>
                                <td>${advance.notes || '-'}</td>
                            </tr>
                        `).join('')}
                        <tr class="total-row">
                            <td colspan="2"><strong>الإجمالي (${advances.length} سلفة)</strong></td>
                            <td><strong>${formatCurrency(totalAdvances)}</strong></td>
                            <td><strong>${formatCurrency(totalPaid)}</strong></td>
                            <td><strong>${formatCurrency(totalRemaining)}</strong></td>
                            <td colspan="2"></td>
                        </tr>
                    </tbody>
                </table>

                <div style="margin-top: 30px;">
                    <h3>📊 إحصائيات الموظفين</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>اسم الموظف</th>
                                <th>عدد السلف</th>
                                <th>إجمالي السلف</th>
                                <th>إجمالي المسدد</th>
                                <th>إجمالي المتبقي</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(employeeStats).map(([name, stats]) => `
                                <tr>
                                    <td><strong>${name}</strong></td>
                                    <td>${stats.count}</td>
                                    <td><strong>${formatCurrency(stats.totalAmount)}</strong></td>
                                    <td>${formatCurrency(stats.totalPaid)}</td>
                                    <td><strong class="${stats.totalRemaining > 0 ? 'text-danger' : 'text-success'}">${formatCurrency(stats.totalRemaining)}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                </div>

                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;

        reportWindow.document.write(reportContent);
        reportWindow.document.close();

        showNotification('تم إنشاء تقرير السلف بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير السلف');

    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير السلف:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}

function generateAttendanceReport() {
    console.log('📄 إنشاء تقرير الحضور...');

    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');

        const attendance = AppData.attendance.map(att => {
            const employee = AppData.employees.find(emp => emp.id === att.employeeId);
            return {
                ...att,
                employeeName: employee ? employee.name : 'موظف محذوف',
                totalHours: calculateHours(att.checkIn, att.checkOut)
            };
        });

        // ترتيب حسب التاريخ (الأحدث أولاً)
        attendance.sort((a, b) => new Date(b.date) - new Date(a.date));

        const totalHours = attendance.reduce((sum, att) => sum + att.totalHours, 0);
        const avgHoursPerDay = attendance.length > 0 ? totalHours / attendance.length : 0;

        // إحصائيات حسب الموظف
        const employeeStats = {};
        attendance.forEach(att => {
            if (!employeeStats[att.employeeName]) {
                employeeStats[att.employeeName] = { 
                    days: 0, 
                    totalHours: 0,
                    avgHours: 0,
                    lateCount: 0,
                    earlyLeaveCount: 0
                };
            }
            employeeStats[att.employeeName].days++;
            employeeStats[att.employeeName].totalHours += att.totalHours;

            // تحديد التأخير (بعد 8:30)
            if (att.checkIn > '08:30') {
                employeeStats[att.employeeName].lateCount++;
            }

            // تحديد الانصراف المبكر (قبل 17:00)
            if (att.checkOut < '17:00') {
                employeeStats[att.employeeName].earlyLeaveCount++;
            }
        });

        // حساب المتوسط لكل موظف
        Object.keys(employeeStats).forEach(name => {
            const stats = employeeStats[name];
            stats.avgHours = stats.days > 0 ? stats.totalHours / stats.days : 0;
        });

        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير الحضور والانصراف - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { 
                        font-family: 'Cairo', Arial, sans-serif; 
                        direction: rtl; 
                        margin: 20px;
                        color: #333;
                        line-height: 1.6;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 30px; 
                        border-bottom: 3px solid #10b981;
                        padding-bottom: 20px;
                    }
                    .header h1 { 
                        color: #10b981; 
                        margin-bottom: 10px;
                        font-size: 28px;
                    }
                    .header h2 { 
                        color: #666; 
                        margin-bottom: 5px;
                        font-size: 20px;
                    }
                    .summary {
                        background: #f0fdf4;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 30px;
                        border-right: 4px solid #10b981;
                    }
                    .summary h3 {
                        color: #10b981;
                        margin-bottom: 15px;
                    }
                    .summary-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 15px;
                    }
                    .summary-item {
                        background: white;
                        padding: 15px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .summary-item strong {
                        color: #10b981;
                        font-size: 18px;
                    }
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 20px 0;
                        background: white;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 12px; 
                        text-align: right; 
                    }
                    th { 
                        background: linear-gradient(135deg, #10b981, #34d399);
                        color: white;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    tbody tr:nth-child(even) {
                        background-color: #f0fdf4;
                    }
                    tbody tr:hover {
                        background-color: #dcfce7;
                    }
                    .total-row {
                        font-weight: bold;
                        background: linear-gradient(135deg, #dcfce7, #bbf7d0) !important;
                        color: #047857;
                    }
                    .good-hours {
                        background-color: #d1fae5 !important;
                    }
                    .low-hours {
                        background-color: #fef2f2 !important;
                    }
                    .time-badge {
                        background: #10b981;
                        color: white;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 12px;
                        font-weight: bold;
                    }
                    .late-badge {
                        background: #ef4444;
                        color: white;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 12px;
                    }
                    @media print {
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير الحضور والانصراف</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد السجلات: ${attendance.length} سجل</p>
                </div>

                <div class="summary">
                    <h3>⏰ ملخص الحضور</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي أيام الحضور</p>
                            <strong>${attendance.length}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي ساعات العمل</p>
                            <strong>${totalHours.toFixed(1)} ساعة</strong>
                        </div>
                        <div class="summary-item">
                            <p>متوسط ساعات العمل اليومية</p>
                            <strong>${avgHoursPerDay.toFixed(1)} ساعة</strong>
                        </div>
                        <div class="summary-item">
                            <p>عدد الموظفين النشطين</p>
                            <strong>${Object.keys(employeeStats).length}</strong>
                        </div>
                    </div>
                </div>

                <h3>📋 تفاصيل الحضور اليومي</h3>
                <table>
                    <thead>
                        <tr>
                            <th>التاريخ</th>
                            <th>اسم الموظف</th>
                            <th>وقت الحضور</th>
                            <th>وقت الانصراف</th>
                            <th>عدد الساعات</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${attendance.map(att => `
                            <tr class="${att.totalHours >= 8 ? 'good-hours' : 'low-hours'}">
                                <td>${formatDateShort(att.date)}</td>
                                <td><strong>${att.employeeName}</strong></td>
                                <td>
                                    <span class="time-badge ${att.checkIn > '08:30' ? 'late-badge' : ''}">${att.checkIn}</span>
                                    ${att.checkIn > '08:30' ? ' (متأخر)' : ''}
                                </td>
                                <td>
                                    <span class="time-badge">${att.checkOut}</span>
                                    ${att.checkOut < '17:00' ? ' (مبكر)' : ''}
                                </td>
                                <td><strong>${att.totalHours.toFixed(2)} ساعة</strong></td>
                                <td>${att.notes || '-'}</td>
                            </tr>
                        `).join('')}
                        <tr class="total-row">
                            <td colspan="4"><strong>الإجمالي (${attendance.length} يوم)</strong></td>
                            <td><strong>${totalHours.toFixed(1)} ساعة</strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <div style="margin-top: 30px;">
                    <h3>📊 إحصائيات الموظفين</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>اسم الموظف</th>
                                <th>أيام الحضور</th>
                                <th>إجمالي الساعات</th>
                                <th>متوسط الساعات</th>
                                <th>مرات التأخير</th>
                                <th>مرات الانصراف المبكر</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(employeeStats).map(([name, stats]) => `
                                <tr>
                                    <td><strong>${name}</strong></td>
                                    <td>${stats.days}</td>
                                    <td><strong>${stats.totalHours.toFixed(1)} ساعة</strong></td>
                                    <td><strong>${stats.avgHours.toFixed(1)} ساعة</strong></td>
                                    <td>${stats.lateCount > 0 ? `<span class="late-badge">${stats.lateCount}</span>` : '0'}</td>
                                    <td>${stats.earlyLeaveCount > 0 ? `<span class="late-badge">${stats.earlyLeaveCount}</span>` : '0'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                </div>

                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;

        reportWindow.document.write(reportContent);
        reportWindow.document.close();

        showNotification('تم إنشاء تقرير الحضور بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير الحضور');

    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير الحضور:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}

function generatePayrollReport() {
    console.log('📄 إنشاء تقرير المرتبات...');
    
    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');
        
        const payroll = AppData.payroll.map(pay => {
            const employee = AppData.employees.find(emp => emp.id === pay.employeeId);
            return {
                ...pay,
                employeeName: employee ? employee.name : 'موظف محذوف',
                remaining: (pay.basicSalary || 0) - (pay.disbursed || 0)
            };
        });
        
        const totalBasicSalaries = payroll.reduce((sum, pay) => sum + (pay.basicSalary || 0), 0);
        const totalDisbursed = payroll.reduce((sum, pay) => sum + (pay.disbursed || 0), 0);
        const totalRemaining = payroll.reduce((sum, pay) => sum + ((pay.basicSalary || 0) - (pay.disbursed || 0)), 0);
        
        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير المرتبات - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; margin: 20px; color: #333; line-height: 1.6; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #1e40af; padding-bottom: 20px; }
                    .header h1 { color: #1e40af; margin-bottom: 10px; font-size: 28px; }
                    .header h2 { color: #666; margin-bottom: 5px; font-size: 20px; }
                    .summary { background: #f0f9ff; padding: 20px; border-radius: 10px; margin-bottom: 30px; border-right: 4px solid #1e40af; }
                    .summary h3 { color: #1e40af; margin-bottom: 15px; }
                    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
                    .summary-item { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .summary-item strong { color: #1e40af; font-size: 18px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
                    th { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; font-weight: 600; font-size: 14px; }
                    tbody tr:nth-child(even) { background-color: #f0f9ff; }
                    tbody tr:hover { background-color: #dbeafe; }
                    .total-row { font-weight: bold; background: linear-gradient(135deg, #dbeafe, #bfdbfe) !important; color: #1e3a8a; }
                    .paid-row { background-color: #dcfce7 !important; }
                    .partial-row { background-color: #fef3c7 !important; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير شامل للمرتبات والدفعات</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد الدفعات: ${payroll.length} دفعة</p>
                </div>
                
                <div class="summary">
                    <h3>💰 ملخص المرتبات</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي الرواتب الأساسية</p>
                            <strong>${formatCurrency(totalBasicSalaries)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المبالغ المصروفة</p>
                            <strong>${formatCurrency(totalDisbursed)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المبالغ المتبقية</p>
                            <strong>${formatCurrency(totalRemaining)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>نسبة الصرف</p>
                            <strong>${totalBasicSalaries > 0 ? ((totalDisbursed / totalBasicSalaries) * 100).toFixed(1) : '0'}%</strong>
                        </div>
                    </div>
                </div>
                
                <h3>📋 تفاصيل المرتبات</h3>
                <table>
                    <thead>
                        <tr>
                            <th>التاريخ</th>
                            <th>اسم الموظف</th>
                            <th>الراتب الأساسي</th>
                            <th>المبلغ المصروف</th>
                            <th>المبلغ المتبقي</th>
                            <th>نسبة الصرف</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${payroll.map(pay => {
                            const percentage = pay.basicSalary > 0 ? ((pay.disbursed / pay.basicSalary) * 100).toFixed(1) : '0';
                            const rowClass = pay.remaining <= 0 ? 'paid-row' : 'partial-row';
                            return `
                                <tr class="${rowClass}">
                                    <td>${formatDateShort(pay.date)}</td>
                                    <td><strong>${pay.employeeName}</strong></td>
                                    <td><strong>${formatCurrency(pay.basicSalary)}</strong></td>
                                    <td>${formatCurrency(pay.disbursed)}</td>
                                    <td><strong>${formatCurrency(pay.remaining)}</strong></td>
                                    <td><strong>${percentage}%</strong></td>
                                    <td>${pay.notes || '-'}</td>
                                </tr>
                            `;
                        }).join('')}
                        <tr class="total-row">
                            <td colspan="2"><strong>الإجمالي (${payroll.length} دفعة)</strong></td>
                            <td><strong>${formatCurrency(totalBasicSalaries)}</strong></td>
                            <td><strong>${formatCurrency(totalDisbursed)}</strong></td>
                            <td><strong>${formatCurrency(totalRemaining)}</strong></td>
                            <td><strong>${totalBasicSalaries > 0 ? ((totalDisbursed / totalBasicSalaries) * 100).toFixed(1) : '0'}%</strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                </div>
                
                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;
        
        reportWindow.document.write(reportContent);
        reportWindow.document.close();
        
        showNotification('تم إنشاء تقرير المرتبات بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير المرتبات');
        
    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير المرتبات:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}


function generateExpensesReport() {
    console.log('📄 إنشاء تقرير المصاريف...');
    
    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');
        
        const expenses = [...AppData.expenses];
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        const totalAmount = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
        
        // إحصائيات حسب النوع
        const typeStats = {};
        AppConfig.expenseCategories.forEach(type => {
            const typeExpenses = expenses.filter(exp => exp.type === type);
            typeStats[type] = {
                count: typeExpenses.length,
                total: typeExpenses.reduce((sum, exp) => sum + (exp.amount || 0), 0)
            };
        });
        
        // إحصائيات شهرية
        const monthlyStats = {};
        expenses.forEach(exp => {
            const date = new Date(exp.date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (!monthlyStats[monthKey]) {
                monthlyStats[monthKey] = { count: 0, total: 0 };
            }
            monthlyStats[monthKey].count++;
            monthlyStats[monthKey].total += exp.amount || 0;
        });
        
        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير المصاريف - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; margin: 20px; color: #333; line-height: 1.6; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #ef4444; padding-bottom: 20px; }
                    .header h1 { color: #ef4444; margin-bottom: 10px; font-size: 28px; }
                    .header h2 { color: #666; margin-bottom: 5px; font-size: 20px; }
                    .summary { background: #fef2f2; padding: 20px; border-radius: 10px; margin-bottom: 30px; border-right: 4px solid #ef4444; }
                    .summary h3 { color: #ef4444; margin-bottom: 15px; }
                    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
                    .summary-item { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .summary-item strong { color: #ef4444; font-size: 18px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
                    th { background: linear-gradient(135deg, #ef4444, #f87171); color: white; font-weight: 600; font-size: 14px; }
                    tbody tr:nth-child(even) { background-color: #fef2f2; }
                    tbody tr:hover { background-color: #fecaca; }
                    .total-row { font-weight: bold; background: linear-gradient(135deg, #fecaca, #fca5a5) !important; color: #991b1b; }
                    .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; color: white; }
                    .badge-شخصية { background: #3b82f6; }
                    .badge-عامة { background: #10b981; }
                    .badge-موظفين { background: #f59e0b; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير شامل للمصاريف</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد المصاريف: ${expenses.length} مصروف</p>
                </div>
                
                <div class="summary">
                    <h3>🧾 ملخص المصاريف</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي عدد المصاريف</p>
                            <strong>${expenses.length}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المبلغ</p>
                            <strong>${formatCurrency(totalAmount)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>متوسط المصروف</p>
                            <strong>${formatCurrency(expenses.length > 0 ? totalAmount / expenses.length : 0)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>عدد أنواع المصاريف</p>
                            <strong>${Object.keys(typeStats).length}</strong>
                        </div>
                    </div>
                </div>
                
                <h3>📋 تفاصيل المصاريف</h3>
                <table>
                    <thead>
                        <tr>
                            <th>التاريخ</th>
                            <th>النوع</th>
                            <th>اسم المصروف</th>
                            <th>المبلغ</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${expenses.map(expense => `
                            <tr>
                                <td>${formatDateShort(expense.date)}</td>
                                <td><span class="badge badge-${expense.type}">${expense.type}</span></td>
                                <td><strong>${expense.name}</strong></td>
                                <td><strong>${formatCurrency(expense.amount)}</strong></td>
                                <td>${expense.notes || '-'}</td>
                            </tr>
                        `).join('')}
                        <tr class="total-row">
                            <td colspan="3"><strong>الإجمالي (${expenses.length} مصروف)</strong></td>
                            <td><strong>${formatCurrency(totalAmount)}</strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="margin-top: 30px;">
                    <h3>📊 إحصائيات حسب النوع</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>نوع المصروف</th>
                                <th>عدد المصاريف</th>
                                <th>إجمالي المبلغ</th>
                                <th>متوسط المبلغ</th>
                                <th>النسبة من الإجمالي</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(typeStats).map(([type, stats]) => `
                                <tr>
                                    <td><span class="badge badge-${type}">${type}</span></td>
                                    <td>${stats.count}</td>
                                    <td><strong>${formatCurrency(stats.total)}</strong></td>
                                    <td>${formatCurrency(stats.count > 0 ? stats.total / stats.count : 0)}</td>
                                    <td><strong>${totalAmount > 0 ? ((stats.total / totalAmount) * 100).toFixed(1) : '0'}%</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                </div>
                
                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;
        
        reportWindow.document.write(reportContent);
        reportWindow.document.close();
        
        showNotification('تم إنشاء تقرير المصاريف بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير المصاريف');
        
    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير المصاريف:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}


function generateSuppliersReport() {
    console.log('📄 إنشاء تقرير الموردين...');
    
    try {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');
        
        const suppliers = [...AppData.suppliers];
        const payments = [...AppData.payments];
        
        // إحصائيات الموردين مع المدفوعات
        const supplierStats = suppliers.map(supplier => {
            const supplierPayments = payments.filter(pay => pay.supplierId === supplier.id);
            const totalPayments = supplierPayments.reduce((sum, pay) => sum + (pay.payment || 0), 0);
            const totalInvoices = supplierPayments.reduce((sum, pay) => sum + (pay.invoiceTotal || 0), 0);
            const remaining = totalInvoices - totalPayments;
            
            return {
                ...supplier,
                paymentsCount: supplierPayments.length,
                totalPayments,
                totalInvoices,
                remaining,
                lastPaymentDate: supplierPayments.length > 0 ? 
                    supplierPayments.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date : null
            };
        });
        
        const grandTotalPayments = supplierStats.reduce((sum, sup) => sum + sup.totalPayments, 0);
        const grandTotalInvoices = supplierStats.reduce((sum, sup) => sum + sup.totalInvoices, 0);
        const grandTotalRemaining = supplierStats.reduce((sum, sup) => sum + sup.remaining, 0);
        
        const reportContent = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>تقرير الموردين والمدفوعات - شركة بطاح لقطع غيار السيارات</title>
                <style>
                    body { font-family: 'Cairo', Arial, sans-serif; direction: rtl; margin: 20px; color: #333; line-height: 1.6; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #10b981; padding-bottom: 20px; }
                    .header h1 { color: #10b981; margin-bottom: 10px; font-size: 28px; }
                    .header h2 { color: #666; margin-bottom: 5px; font-size: 20px; }
                    .summary { background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 30px; border-right: 4px solid #10b981; }
                    .summary h3 { color: #10b981; margin-bottom: 15px; }
                    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
                    .summary-item { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .summary-item strong { color: #10b981; font-size: 18px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
                    th { background: linear-gradient(135deg, #10b981, #34d399); color: white; font-weight: 600; font-size: 14px; }
                    tbody tr:nth-child(even) { background-color: #f0fdf4; }
                    tbody tr:hover { background-color: #dcfce7; }
                    .total-row { font-weight: bold; background: linear-gradient(135deg, #dcfce7, #bbf7d0) !important; color: #047857; }
                    .paid-supplier { background-color: #dcfce7 !important; }
                    .pending-supplier { background-color: #fef3c7 !important; }
                    .phone-badge { background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>شركة بطاح لقطع غيار السيارات</h1>
                    <h2>تقرير شامل للموردين والمدفوعات</h2>
                    <p>تاريخ التقرير: ${formatDate(new Date().toISOString().split('T')[0])}</p>
                    <p>عدد الموردين: ${suppliers.length} مورد</p>
                </div>
                
                <div class="summary">
                    <h3>🚚 ملخص الموردين والمدفوعات</h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <p>إجمالي عدد الموردين</p>
                            <strong>${suppliers.length}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المدفوعات</p>
                            <strong>${formatCurrency(grandTotalPayments)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي الفواتير</p>
                            <strong>${formatCurrency(grandTotalInvoices)}</strong>
                        </div>
                        <div class="summary-item">
                            <p>إجمالي المتبقي</p>
                            <strong>${formatCurrency(grandTotalRemaining)}</strong>
                        </div>
                    </div>
                </div>
                
                <h3>🏢 بيانات الموردين</h3>
                <table>
                    <thead>
                        <tr>
                            <th>اسم المورد</th>
                            <th>رقم الاتصال</th>
                            <th>العنوان</th>
                            <th>عدد المدفوعات</th>
                            <th>آخر دفعة</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${supplierStats.map(supplier => `
                            <tr>
                                <td><strong>${supplier.name}</strong></td>
                                <td><span class="phone-badge">${supplier.contact}</span></td>
                                <td>${supplier.address || '-'}</td>
                                <td><strong>${supplier.paymentsCount}</strong></td>
                                <td>${supplier.lastPaymentDate ? formatDateShort(supplier.lastPaymentDate) : 'لا توجد مدفوعات'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <h3>💰 ملخص المدفوعات حسب المورد</h3>
                <table>
                    <thead>
                        <tr>
                            <th>اسم المورد</th>
                            <th>عدد المدفوعات</th>
                            <th>إجمالي المدفوع</th>
                            <th>إجمالي الفواتير</th>
                            <th>المبلغ المتبقي</th>
                            <th>نسبة السداد</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${supplierStats.map(supplier => {
                            const paymentPercentage = supplier.totalInvoices > 0 ? ((supplier.totalPayments / supplier.totalInvoices) * 100).toFixed(1) : '0';
                            const rowClass = supplier.remaining <= 0 ? 'paid-supplier' : 'pending-supplier';
                            return `
                                <tr class="${rowClass}">
                                    <td><strong>${supplier.name}</strong></td>
                                    <td>${supplier.paymentsCount}</td>
                                    <td><strong>${formatCurrency(supplier.totalPayments)}</strong></td>
                                    <td><strong>${formatCurrency(supplier.totalInvoices)}</strong></td>
                                    <td><strong>${formatCurrency(supplier.remaining)}</strong></td>
                                    <td><strong>${paymentPercentage}%</strong></td>
                                </tr>
                            `;
                        }).join('')}
                        <tr class="total-row">
                            <td colspan="2"><strong>الإجمالي (${suppliers.length} مورد)</strong></td>
                            <td><strong>${formatCurrency(grandTotalPayments)}</strong></td>
                            <td><strong>${formatCurrency(grandTotalInvoices)}</strong></td>
                            <td><strong>${formatCurrency(grandTotalRemaining)}</strong></td>
                            <td><strong>${grandTotalInvoices > 0 ? ((grandTotalPayments / grandTotalInvoices) * 100).toFixed(1) : '0'}%</strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="margin-top: 30px;">
                    <h3>📝 تفاصيل جميع المدفوعات</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>التاريخ</th>
                                <th>المورد</th>
                                <th>مبلغ الدفعة</th>
                                <th>إجمالي الفاتورة</th>
                                <th>المرتجعات</th>
                                <th>ملاحظات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${payments.sort((a, b) => new Date(b.date) - new Date(a.date)).map(payment => {
                                const supplier = suppliers.find(sup => sup.id === payment.supplierId);
                                return `
                                    <tr>
                                        <td>${formatDateShort(payment.date)}</td>
                                        <td><strong>${supplier ? supplier.name : 'مورد محذوف'}</strong></td>
                                        <td><strong>${formatCurrency(payment.payment)}</strong></td>
                                        <td>${formatCurrency(payment.invoiceTotal)}</td>
                                        <td>${payment.returnedItems || '-'}</td>
                                        <td>${payment.notes || '-'}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div style="margin-top: 40px; text-align: center; color: #666; font-size: 12px;">
                    <p>تم إنشاء هذا التقرير بواسطة نظام إدارة شركة بطاح المتكامل</p>
                </div>
                
                <script>
                    window.onload = function() {
                        setTimeout(() => window.print(), 1000);
                    };
                </script>
            </body>
            </html>
        `;
        
        reportWindow.document.write(reportContent);
        reportWindow.document.close();
        
        showNotification('تم إنشاء تقرير الموردين والمدفوعات بنجاح وجاري طباعته', 'success');
        console.log('✅ تم إنشاء تقرير الموردين');
        
    } catch (error) {
        console.error('❌ خطأ في إنشاء تقرير الموردين:', error);
        showNotification('حدث خطأ أثناء إنشاء التقرير', 'error');
    }
}


// =================================================================
// وظائف إضافية ومساعدة
// =================================================================

function toggleTheme() {
    console.log('🎨 تبديل الثيم...');
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);

    // تحديث أيقونة الثيم
    const themeButton = document.querySelector('.theme-toggle i');
    if (themeButton) {
        themeButton.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // حفظ التفضيل في التخزين المحلي
    localStorage.setItem('theme', newTheme);

    showNotification(`تم التبديل إلى الثيم ${newTheme === 'dark' ? 'الداكن' : 'الفاتح'}`, 'info');
    console.log(`✅ تم تبديل الثيم إلى: ${newTheme}`);
}

function toggleSidebar() {
    console.log('📱 تبديل الشريط الجانبي...');
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);

        // تحديث أيقونة الثيم
        const themeButton = document.querySelector('.theme-toggle i');
        if (themeButton) {
            themeButton.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        console.log(`🎨 تم تحميل الثيم المحفوظ: ${savedTheme}`);
    }
}

function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('ar-EG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dateElement.textContent = formattedDate;
    }
}

// =================================================================
// تهيئة النظام الرئيسية
// =================================================================

function initializeApp() {
    console.log('🚀 بدء تهيئة النظام...');

    try {
        // تحميل تفضيلات الثيم
        loadThemePreference();

        // تحديث التاريخ الحالي
        updateCurrentDate();

        // تهيئة التنقل
        initializeNavigation();

        // تهيئة معالجات النماذج
        initializeFormHandlers();

        // تهيئة البحث والفلاتر
        initializeSearchFilters();

        // تحديث لوحة التحكم
        updateDashboard();

        // عرض رسالة ترحيب
        setTimeout(() => {
            showNotification('مرحباً بك في نظام إدارة شركة بطاح المتكامل! جميع الوظائف جاهزة للاستخدام.', 'success', 6000);
        }, 2000);

        console.log('✅ تم تحميل النظام بنجاح - جميع الوظائف جاهزة!');

    } catch (error) {
        console.error('❌ خطأ في تهيئة النظام:', error);
        showNotification('حدث خطأ في تحميل النظام، ولكن يمكن المتابعة', 'error');
    }
}

// =================================================================
// معالجات الأحداث العامة
// =================================================================

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 تم تحميل DOM - بدء تهيئة النظام...');

    // إخفاء شاشة التحميل
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            console.log('✅ تم إخفاء شاشة التحميل');
        }, 1500);
    }

    // تهيئة النظام
    setTimeout(() => {
        initializeApp();
    }, 1000);
});

// معالج الأخطاء العامة
window.addEventListener('error', function(e) {
    console.error('❌ خطأ عام في النظام:', e.error);
    showNotification('حدث خطأ غير متوقع في النظام', 'error');
});

// معالج عدم وجود وعود مرفوضة
window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ وعد مرفوض:', e.reason);
    showNotification('حدث خطأ في معالجة البيانات', 'error');
});

// تحديث التاريخ كل دقيقة
setInterval(updateCurrentDate, 60000);

// حفظ البيانات في التخزين المحلي كل 5 دقائق
setInterval(() => {
    try {
        localStorage.setItem('batahSystemData', JSON.stringify(AppData));
        console.log('💾 تم حفظ البيانات في التخزين المحلي');
    } catch (error) {
        console.error('❌ خطأ في حفظ البيانات:', error);
    }
}, 5 * 60 * 1000);

// تحميل البيانات المحفوظة عند بدء التشغيل
try {
    const savedData = localStorage.getItem('batahSystemData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        // دمج البيانات المحفوظة مع البيانات الافتراضية
        Object.keys(parsedData).forEach(key => {
            if (AppData[key] && Array.isArray(AppData[key])) {
                AppData[key] = [...AppData[key], ...parsedData[key]];
                // إزالة التكرارات حسب المعرف
                AppData[key] = AppData[key].filter((item, index, self) =>
                    index === self.findIndex(t => t.id === item.id)
                );
            }
        });
        console.log('📥 تم تحميل البيانات المحفوظة');
    }
} catch (error) {
    console.error('❌ خطأ في تحميل البيانات المحفوظة:', error);
}

console.log('🎉 تم تحميل جميع وظائف النظام بنجاح - شركة بطاح لقطع غيار السيارات');
console.log('📊 النظام جاهز للاستخدام مع جميع الوظائف:');
console.log('   ✅ إدارة الموظفين');
console.log('   ✅ سلف الموظفين');
console.log('   ✅ الحضور والانصراف');
console.log('   ✅ القبض والمرتبات');
console.log('   ✅ الموردين والدفعات');
console.log('   ✅ إدارة المصاريف');
console.log('   ✅ مراجعة اليوميات');
console.log('   ✅ التقارير الشاملة');
console.log('   ✅ الرسوم البيانية');
console.log('   ✅ التنبيهات المتقدمة');
console.log('   ✅ البحث والفلترة');
console.log('   ✅ النوافذ المنبثقة');
console.log('   ✅ الثيم الفاتح/الداكن');
console.log('   ✅ التخزين المحلي');
console.log('💡 جميع الأزرار والوظائف تعمل بكفاءة عالية!');
