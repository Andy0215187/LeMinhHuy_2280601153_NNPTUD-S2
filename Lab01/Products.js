

function logResult(title, content) {
    const output = document.getElementById('output');
    const displayData = typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
    output.innerHTML += `
        <div class="result-box">
            <h3>${title}</h3>
            <pre>${displayData}</pre>
        </div>
    `;
}

// Câu 1: Khai báo constructor function Product
function Product(name, price, category, quantity, isAvailable) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (Dòng sản phẩm mới)
const products = [
    new Product("Samsung Galaxy Z Fold 5", 32000000, "Smartphone", 8, true),
    new Product("iPad Pro M2", 22500000, "Tablet", 12, true),
    new Product("Sạc dự phòng Anker 20k", 1200000, "Accessories", 45, true),
    new Product("Bàn phím Logitech MX", 2800000, "Accessories", 0, true),
    new Product("Laptop Dell XPS 15", 42000000, "Laptop", 4, true),
    new Product("Chuột Magic Mouse", 1900000, "Accessories", 15, false)
];
logResult("Câu 2: Khởi tạo danh sách sản phẩm", products);

// Câu 3: Tạo mảng mới chỉ chứa name, price
const namePriceList = products.map(p => ({ name: p.name, price: p.price }));
logResult("Câu 3: Mảng rút gọn (name, price)", namePriceList);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
logResult("Câu 4: Các sản phẩm còn hàng", inStockProducts);

// Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30.000.000
const hasExpensiveItem = products.some(p => p.price > 30000000);
logResult("Câu 5: Có sản phẩm > 30 triệu?", hasExpensiveItem ? "Có" : "Không");

// Câu 6: Kiểm tra tất cả sản phẩm "Accessories" có đang bán không
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
logResult("Câu 6: Tất cả Accessories đang được bán?", allAccAvailable);

// Câu 7: Tính tổng giá trị kho hàng
const totalStockValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
logResult("Câu 7: Tổng giá trị kho hàng", totalStockValue.toLocaleString() + " VNĐ");

// Câu 8: Dùng for...of duyệt mảng và in thông tin
let cau8Text = "";
for (const p of products) {
    cau8Text += `${p.name} - ${p.category} - ${p.isAvailable ? "Sẵn sàng" : "Ngừng bán"}\n`;
}
logResult("Câu 8: Duyệt bằng for...of", cau8Text);

// Câu 9: Dùng for...in in ra thuộc tính và giá trị (lấy sản phẩm thứ 1)
let cau9Text = "";
const targetObj = products[0];
for (const key in targetObj) {
    cau9Text += `${key}: ${targetObj[key]}\n`;
}
logResult("Câu 9: Duyệt for...in cho sản phẩm đầu tiên", cau9Text);

// Câu 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
const readyNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
logResult("Câu 10: Tên các sản phẩm đủ điều kiện bán", readyNames);