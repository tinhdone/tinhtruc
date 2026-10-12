const productsData = [
    {
        "id": 1,
        "name": "MacBook Air 13 inch M2 2022 8GB/256GB",
        "specs": "Apple M2 / 8GB RAM / 256GB SSD",
        "price": 24990000,
        "oldPrice": 27490000,
        "discount": "-9%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 200.000đ",
        "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Apple",
        "variants": ["8GB - 256GB", "8GB - 512GB"],
        "rating": "5.0",
        "sold": "Đã bán 1,4k"
    },
    {
        "id": 2,
        "name": "Asus Vivobook S14 S3407VA Core 5 210H (LY146W)",
        "specs": "Intel Core 5 210H / 16GB RAM / 512GB SSD",
        "price": 21890000,
        "oldPrice": 22990000,
        "discount": "-4%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 100.000đ",
        "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "ASUS",
        "variants": ["16GB - 512GB"],
        "rating": "4.9",
        "sold": "Đã bán 400"
    },
    {
        "id": 3,
        "name": "MacBook Air 15 inch M3 2024 16GB/512GB",
        "specs": "Apple M3 / 16GB RAM / 512GB SSD",
        "price": 33890000,
        "oldPrice": 35990000,
        "discount": "-5%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 300.000đ",
        "img": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Apple",
        "variants": ["16GB/512GB", "16GB/1TB"],
        "rating": "5.0",
        "sold": "Đã bán 1,4k"
    },
    {
        "id": 4,
        "name": "Dell Inspiron 15 3530 R5 7530U (71031302)",
        "specs": "AMD Ryzen 5 7500U / 16GB RAM / 512GB SSD",
        "price": 16990000,
        "oldPrice": 18490000,
        "discount": "-8%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 150.000đ",
        "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Dell",
        "variants": ["16GB - 512GB"],
        "rating": "4.8",
        "sold": "Đã bán 209"
    },
    {
        "id": 5,
        "name": "Acer Aspire Lite 15 AL15-51 i5 1235U (Hệ điều hành Win 11)",
        "specs": "Intel Core i5 1235U / 16GB RAM / 512GB SSD",
        "price": 13990000,
        "oldPrice": 15490000,
        "discount": "-10%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 100.000đ",
        "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Acer",
        "variants": ["16GB - 512GB"],
        "rating": "4.9",
        "sold": "Đã bán 350"
    },
    {
        "id": 6,
        "name": "Lenovo IdeaPad Slim 3 15IRU8 i5 13420H",
        "specs": "Intel Core i5 13420H / 16GB RAM / 512GB SSD",
        "price": 14990000,
        "oldPrice": 16990000,
        "discount": "-12%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 200.000đ",
        "img": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Lenovo",
        "variants": ["16GB - 512GB"],
        "rating": "4.8",
        "sold": "Đã bán 520"
    },
    {
        "id": 7,
        "name": "PC Gaming Apex Pro (Intel i5-13400F / RTX 4060 8GB)",
        "specs": "Case kính cường lực RGB / 16GB DDR5 / 512GB SSD",
        "price": 18290000,
        "oldPrice": 22900000,
        "discount": "-20%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 500.000đ",
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom",
        "variants": ["16GB RAM", "32GB RAM"],
        "rating": "5.0",
        "sold": "Đã bán 120"
    },
    {
        "id": 8,
        "name": "PC Gaming Phantom X (i7-14700K / RTX 4070 Ti Super 16GB)",
        "specs": "Tản nước AIO / 32GB RAM / 1TB SSD Gen4",
        "price": 36990000,
        "oldPrice": 41500000,
        "discount": "-11%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 1.000.000đ",
        "img": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom",
        "variants": ["32GB - 1TB", "64GB - 2TB"],
        "rating": "5.0",
        "sold": "Đã bán 85"
    },
    {
        "id": 9,
        "name": "Màn Hình Gaming LG UltraGear 27GR75Q-B 27 inch 240Hz",
        "specs": "QHD 2K / 1ms / Tấm nền IPS / G-Sync",
        "price": 6990000,
        "oldPrice": 8500000,
        "discount": "-18%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 100.000đ",
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "LG",
        "variants": ["27 inch QHD", "32 inch 4K"],
        "rating": "4.9",
        "sold": "Đã bán 610"
    },
    {
        "id": 10,
        "name": "Chuột Gaming Logitech G Pro X Superlight 2 Wireless White",
        "specs": "Siêu nhẹ 60g / Mắt đọc HERO 2 32.000 DPI",
        "price": 2990000,
        "oldPrice": 3590000,
        "discount": "-17%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 50.000đ",
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Logitech",
        "variants": ["White", "Black"],
        "rating": "5.0",
        "sold": "Đã bán 2,1k"
    },
    {
        "id": 11,
        "name": "Bàn Phím Cơ Keychron Q1 Max Wireless QMK/VIA",
        "specs": "Vỏ nhôm CNC / Hot-swap / RGB / Gateron Switch",
        "price": 3890000,
        "oldPrice": 4500000,
        "discount": "-14%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 100.000đ",
        "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Keychron",
        "variants": ["Red Switch", "Brown Switch"],
        "rating": "4.9",
        "sold": "Đã bán 430"
    },
    {
        "id": 12,
        "name": "Tai Nghe Razer BlackShark V2 Pro Wireless Esports",
        "specs": "Driver 50mm / Mic Super Wideband / Pin 70h",
        "price": 3990000,
        "oldPrice": 4690000,
        "discount": "-15%",
        "badge": "Trả chậm 0% trả trước 0đ",
        "gift": "Quà 150.000đ",
        "img": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Razer",
        "variants": ["Black", "White"],
        "rating": "4.8",
        "sold": "Đã bán 780"
    }
];

function getCart() {
    let cart = localStorage.getItem('celltech_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('celltech_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = getCart();
    let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    let badge = document.getElementById('cartCount');
    if (badge) badge.innerText = totalCount;
}

function addToCart(name, price, img) {
    let cart = getCart();
    let found = cart.find(item => item.name === name);
    let image = img || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80';
    if (found) {
        found.qty++;
    } else {
        cart.push({ name: name, price: price, qty: 1, img: image });
    }
    saveCart(cart);
    showToast(`Đã thêm "${name}" vào giỏ hàng!`);
}

function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

function getCurrentUser() {
    let userStr = localStorage.getItem('celltech_current_user');
    return userStr ? JSON.parse(userStr) : null;
}

function checkAdminAccess() {
    let user = getCurrentUser();
    if (!user || user.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang quản trị! Vui lòng đăng nhập tài khoản Admin.');
        window.location.href = 'login.html';
    }
}

function handleLogin(e) {
    e.preventDefault();
    let username = document.getElementById('loginUser').value.trim();
    let pass = document.getElementById('loginPass').value;

    if ((username === 'admin' || username.toLowerCase() === 'đỗ phạm trung tính') && pass === '123456') {
        let adminUser = { name: 'Đỗ Phạm Trung Tính', username: 'admin', role: 'admin' };
        localStorage.setItem('celltech_current_user', JSON.stringify(adminUser));
        alert('Đăng nhập thành công với quyền Quản trị viên!');
        window.location.href = 'admin.html';
        return;
    }

    if (username === 'yeukimtruc' && pass === '09022007') {
        let yktUser = { name: 'Yêu Kim Trúc', username: 'yeukimtruc', role: 'user' };
        localStorage.setItem('celltech_current_user', JSON.stringify(yktUser));
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
        return;
    }

    let users = JSON.parse(localStorage.getItem('celltech_users') || '[]');
    let foundUser = users.find(u => u.username === username && u.pass === pass);
    if (foundUser) {
        localStorage.setItem('celltech_current_user', JSON.stringify(foundUser));
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
}

function handleRegister(e) {
    e.preventDefault();
    let name = document.getElementById('regName').value.trim();
    let username = document.getElementById('regUser').value.trim();
    let pass = document.getElementById('regPass').value;

    if (!name || !username || !pass) {
        alert('Vui lòng điền đầy đủ thông tin đăng ký!');
        return;
    }

    let users = JSON.parse(localStorage.getItem('celltech_users') || '[]');
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        alert('Tên đăng nhập này đã tồn tại! Vui lòng chọn tên khác.');
        return;
    }

    let newUser = { name: name, username: username, pass: pass, role: 'user' };
    users.push(newUser);
    localStorage.setItem('celltech_users', JSON.stringify(users));
    alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập bằng tài khoản mới.');
    
    document.getElementById('loginUser').value = username;
    document.getElementById('loginPass').value = pass;
}

function logoutUser() {
    localStorage.removeItem('celltech_current_user');
    alert('Đã đăng xuất tài khoản!');
    window.location.href = 'index.html';
}

function updateHeaderAuth() {
    let user = getCurrentUser();
    let authContainer = document.getElementById('authHeaderContainer');
    if (!authContainer) return;

    if (user) {
        authContainer.innerHTML = `
            <a href="${user.role==='admin'?'admin.html':'#'}" class="head-link-item" style="color:#d0021b;">
                <i class="fa-solid fa-user-check"></i>
                <span>${user.name}</span>
            </a>
            <button onclick="logoutUser()" style="background:none; border:none; font-size:11px; color:#666; cursor:pointer; margin-left:4px;">[Thoát]</button>
        `;
    } else {
        authContainer.innerHTML = `
            <a href="login.html" class="head-link-item" style="color:#d0021b;">
                <i class="fa-solid fa-user"></i>
                <span>Đăng nhập</span>
            </a>
        `;
    }
}

/* --- CART PAGE LOGIC --- */
function renderCart() {
    let cart = getCart();
    let container = document.getElementById('cartItemsContainer');
    let countEl = document.getElementById('cartItemCount');
    let subtotalEl = document.getElementById('subtotalPrice');
    let totalEl = document.getElementById('totalPrice');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 60px 20px; color:#666; font-size:15px;"><i class="fa-solid fa-cart-flatbed" style="font-size:40px; color:#ccc; margin-bottom:10px; display:block;"></i>Giỏ hàng của bạn đang trống!</div>';
        if (countEl) countEl.innerText = 0;
        if (subtotalEl) subtotalEl.innerText = '0₫';
        if (totalEl) totalEl.innerText = '0₫';
        return;
    }

    let html = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        html += `
            <div class="cart-item-row">
                <img src="${item.img || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString('vi-VN')}₫</p>
                </div>
                <div class="quantity-selector">
                    <button onclick="changeCartQty(${index}, -1)">-</button>
                    <input type="text" value="${item.qty}" readonly>
                    <button onclick="changeCartQty(${index}, 1)">+</button>
                </div>
                <div style="font-weight:bold; color:#d0021b; width:110px; text-align:right;">${itemTotal.toLocaleString('vi-VN')}₫</div>
                <button onclick="removeCartItem(${index})" class="btn-remove-cart"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    });

    container.innerHTML = html;
    if (countEl) countEl.innerText = cart.reduce((s, i) => s + i.qty, 0);
    if (subtotalEl) subtotalEl.innerText = subtotal.toLocaleString('vi-VN') + '₫';
    if (totalEl) totalEl.innerText = subtotal.toLocaleString('vi-VN') + '₫';
}

function changeCartQty(index, change) {
    let cart = getCart();
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

function removeCartItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

/* --- CHECKOUT PAGE LOGIC --- */
function renderCheckout() {
    let cart = getCart();
    let container = document.getElementById('checkoutItemsList');
    let totalEl = document.getElementById('checkoutTotal');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color:#888;">Chưa có sản phẩm nào để thanh toán.</p>';
        if (totalEl) totalEl.innerText = '0₫';
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
        let sum = item.price * item.qty;
        total += sum;
        html += `
            <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px; border-bottom:1px dashed #eee; padding-bottom:8px;">
                <span>${item.name} <b>x${item.qty}</b></span>
                <strong style="color:#d0021b;">${sum.toLocaleString('vi-VN')}₫</strong>
            </div>
        `;
    });

    container.innerHTML = html;
    if (totalEl) totalEl.innerText = total.toLocaleString('vi-VN') + '₫';
    updateVietQr(total);
}

function updateVietQr(totalAmount) {
    let phoneInput = document.getElementById('cusPhone');
    let phone = phoneInput ? phoneInput.value.trim() : 'KH';
    let transferNote = 'CELLTECH ' + (phone ? phone : 'DH');
    let noteEl = document.getElementById('transferNote');
    if (noteEl) noteEl.innerText = transferNote;

    let qrImg = document.getElementById('vietQrImg');
    if (qrImg) {
        let encodedNote = encodeURIComponent(transferNote);
        qrImg.src = `https://img.vietqr.io/image/MB-002603939-compact2.png?amount=${totalAmount}&addInfo=${encodedNote}&accountName=DO%20PHAM%20TRUNG%20TINH`;
    }
}

function submitOrder(e) {
    e.preventDefault();
    let name = document.getElementById('cusName').value.trim();
    let phone = document.getElementById('cusPhone').value.trim();
    let address = document.getElementById('cusAddress').value.trim();
    let cart = getCart();

    if (cart.length === 0) {
        alert('Giỏ hàng trống! Vui lòng chọn sản phẩm trước khi đặt hàng.');
        return;
    }

    let total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    let orderCode = '#CT' + Math.floor(100000 + Math.random() * 900000);
    let itemsSummary = cart.map(i => `${i.name} (x${i.qty})`).join(', ');

    let newOrder = {
        code: orderCode,
        name: name,
        phone: phone,
        address: address,
        items: itemsSummary,
        total: total,
        status: 'Chờ xử lý',
        date: new Date().toLocaleString('vi-VN')
    };

    let allOrders = JSON.parse(localStorage.getItem('celltech_orders') || '[]');
    allOrders.unshift(newOrder);
    localStorage.setItem('celltech_orders', JSON.stringify(allOrders));

    localStorage.removeItem('celltech_cart');
    updateCartCount();

    document.getElementById('orderCode').innerText = orderCode;
    document.getElementById('successModal').style.display = 'flex';
}

/* --- ADMIN DASHBOARD LOGIC --- */
function initAdmin() {
    checkAdminAccess();
    loadOrdersToAdmin();
}

function switchTab(tabName) {
    let tabs = document.querySelectorAll('.admin-tab-content');
    tabs.forEach(t => t.classList.remove('active'));
    let selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) selectedTab.classList.add('active');

    let menuLinks = document.querySelectorAll('.admin-menu a');
    menuLinks.forEach(a => a.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

function loadOrdersToAdmin() {
    let tableRecent = document.getElementById('adminOrdersTable');
    let tableFull = document.getElementById('adminOrdersTableFull');
    let orders = JSON.parse(localStorage.getItem('celltech_orders') || '[]');

    if (orders.length === 0) {
        let emptyRow = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#888;">Chưa có đơn hàng nào trong hệ thống.</td></tr>';
        if (tableRecent) tableRecent.innerHTML = emptyRow;
        if (tableFull) tableFull.innerHTML = emptyRow;
        return;
    }

    let htmlRecent = '';
    orders.slice(0, 5).forEach(o => {
        htmlRecent += `
            <tr>
                <td><b style="color:#288ad6;">${o.code}</b></td>
                <td><b>${o.name}</b><br><small style="color:#666;">${o.phone || ''}</small></td>
                <td style="font-size:12px; max-width:200px;">${o.items || 'Sản phẩm công nghệ'}</td>
                <td style="font-weight:bold; color:#d0021b;">${o.total.toLocaleString('vi-VN')}₫</td>
                <td><span class="badge-status pending">${o.status}</span></td>
            </tr>
        `;
    });

    let htmlFull = '';
    orders.forEach(o => {
        htmlFull += `
            <tr>
                <td><b style="color:#288ad6;">${o.code}</b></td>
                <td><b>${o.name}</b></td>
                <td>${o.phone || ''}</td>
                <td>${o.address || ''}</td>
                <td style="font-weight:bold; color:#d0021b;">${o.total.toLocaleString('vi-VN')}₫</td>
                <td><span class="badge-status pending">${o.status}</span></td>
            </tr>
        `;
    });

    if (tableRecent) tableRecent.innerHTML = htmlRecent;
    if (tableFull) tableFull.innerHTML = htmlFull;
}

let selectedCategory = 'all';
let selectedBrand = 'all';
let selectedPriceRange = 'all';
let selectedSort = 'default';

function filterByCategory(cat) {
    selectedCategory = cat;
    renderFilteredProducts();
}

function applyFilters() {
    let brandSelect = document.getElementById('brandFilter');
    let priceSelect = document.getElementById('priceFilter');
    let sortSelect = document.getElementById('sortFilter');

    if (brandSelect) selectedBrand = brandSelect.value;
    if (priceSelect) selectedPriceRange = priceSelect.value;
    if (sortSelect) selectedSort = sortSelect.value;

    renderFilteredProducts();
}

function renderFilteredProducts() {
    let container = document.getElementById('dynamicProductsGrid');
    if (!container) return;

    let filtered = productsData.filter(p => {
        let matchCat = (selectedCategory === 'all' || p.category === selectedCategory);
        let matchBrand = (selectedBrand === 'all' || p.brand === selectedBrand);
        
        let matchPrice = true;
        if (selectedPriceRange === 'under15') {
            matchPrice = (p.price < 15000000);
        } else if (selectedPriceRange === '15to25') {
            matchPrice = (p.price >= 15000000 && p.price <= 25000000);
        } else if (selectedPriceRange === 'over25') {
            matchPrice = (p.price > 25000000);
        }

        return matchCat && matchBrand && matchPrice;
    });

    if (selectedSort === 'priceAsc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'priceDesc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'discount') {
        filtered.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
    }

    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#707070;">Không tìm thấy sản phẩm phù hợp!</p>';
        return;
    }

    let html = '';
    filtered.forEach(p => {
        let varPills = '';
        if (p.variants && p.variants.length > 0) {
            varPills = '<div class="card-variants-row">' + p.variants.map((v, i) => `<span class="var-pill ${i===0?'active':''}">${v}</span>`).join('') + '</div>';
        }

        html += `
            <div class="tgdd-card">
                <div>
                    <div class="card-top-badges">
                        <span class="badge-tra-gop">${p.badge || 'Trả chậm 0% trả trước 0đ'}</span>
                        ${p.gift ? `<span class="badge-qua-tang">${p.gift}</span>` : ''}
                    </div>
                    <div class="card-img-holder">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                    <a href="product.html?id=${p.id}" class="card-title-link">${p.name}</a>
                    <div class="card-spec-tag">${p.specs}</div>
                    ${varPills}
                </div>
                <div>
                    <div class="card-price-row">
                        <span class="price-main">${p.price.toLocaleString('vi-VN')}₫</span>
                        <span class="price-old-val">${p.oldPrice.toLocaleString('vi-VN')}₫</span>
                        <span class="price-discount-tag">${p.discount}</span>
                    </div>
                    <div class="card-rating-sold">
                        <span class="star-rating">★ ${p.rating}</span>
                        <span>• ${p.sold}</span>
                    </div>
                    <div class="card-bottom-actions">
                        <button class="btn-so-sanh"><i class="fa-solid fa-circle-plus"></i> So sánh</button>
                        <button class="btn-them-gio" onclick="addToCart('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.img}')">Thêm giỏ</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function handleSearch() {
    let kw = document.getElementById('searchInput').value.trim().toLowerCase();
    if(kw) {
        let filtered = productsData.filter(p => p.name.toLowerCase().includes(kw) || p.specs.toLowerCase().includes(kw));
        let container = document.getElementById('dynamicProductsGrid');
        if (!container) return;
        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#707070;">Không tìm thấy sản phẩm cho "' + kw + '"</p>';
            return;
        }
        let html = '';
        filtered.forEach(p => {
            html += `
                <div class="tgdd-card">
                    <div class="card-img-holder"><img src="${p.img}"></div>
                    <a href="product.html?id=${p.id}" class="card-title-link">${p.name}</a>
                    <div class="price-main">${p.price.toLocaleString('vi-VN')}₫</div>
                    <button class="btn-them-gio" style="margin-top:8px;" onclick="addToCart('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.img}')">Thêm giỏ</button>
                </div>
            `;
        });
        container.innerHTML = html;
    } else {
        renderFilteredProducts();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateHeaderAuth();
    renderFilteredProducts();
});
