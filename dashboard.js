// Dashboard API Functions

/**
 * Lấy tất cả sản phẩm từ API
 * @returns {Promise<Array>} Danh sách sản phẩm
 */
async function getAll() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    console.log("Lấy dữ liệu thành công:", products.length, "sản phẩm");

    return products;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    throw error;
  }
}

// Xuất hàm để sử dụng ở nơi khác
if (typeof module !== "undefined" && module.exports) {
  module.exports = { getAll };
}

// Ví dụ sử dụng:
// getAll().then(products => {
//     console.log('Danh sách sản phẩm:', products);
// });
