# Hướng dẫn chuyển đổi từ Next.js + TypeScript sang React thuần (.jsx + .module.css)

## Tổng quan

Dự án đã được chuyển đổi từ Next.js + TypeScript sang React thuần sử dụng:
- **.jsx** files thay vì .tsx
- **.js** files thay vì .ts  
- **CSS Modules** (.module.css) thay vì Tailwind classes
- **React Router** thay vì Next.js routing
- **Vite** thay vì Next.js build system

## Đã hoàn thành

### Cấu trúc dự án
- ✅ `package.json` - Đã cập nhật với Vite, React Router, loại bỏ Next.js và TypeScript
- ✅ `vite.config.js` - Cấu hình Vite với path aliases
- ✅ `index.html` - Entry point cho React app
- ✅ `src/main.jsx` - React entry point
- ✅ `src/App.jsx` - Main app component với React Router

### Core files
- ✅ `src/lib/store.js` - Redux store
- ✅ `src/lib/utils.js` - Utility functions
- ✅ `src/lib/features/products/productsSlice.js` - Products slice
- ✅ `src/lib/features/carts/cartsSlice.js` - Carts slice
- ✅ `src/lib/hooks/redux.jsx` - Redux hooks
- ✅ `src/components/storage/index.jsx` - Storage configuration
- ✅ `src/app/providers.jsx` - Redux providers

### Pages
- ✅ `src/pages/HomePage.jsx` - Trang chủ
- ✅ `src/pages/ShopPage.jsx` - Trang shop
- ✅ `src/pages/ProductPage.jsx` - Trang chi tiết sản phẩm
- ✅ `src/pages/CartPage.jsx` - Trang giỏ hàng

### Components đã chuyển đổi
- ✅ `src/components/common/ProductCard.jsx` + CSS module
- ✅ `src/components/common/ProductListSec.jsx` + CSS module
- ✅ `src/components/common/ReviewCard.jsx` + CSS module
- ✅ `src/components/ui/SpinnerbLoader/index.jsx`
- ✅ `src/components/ui/Rating.jsx`
- ✅ `src/components/ui/button.jsx`
- ✅ `src/components/layout/Banner/TopBanner.jsx` + CSS module
- ✅ `src/components/layout/Navbar/TopNavbar/index.jsx` + CSS module
- ✅ `src/components/layout/Navbar/TopNavbar/CartBtn.jsx` + CSS module
- ✅ `src/components/layout/Navbar/TopNavbar/MenuItem.jsx`
- ✅ `src/components/layout/Navbar/TopNavbar/MenuList.jsx`
- ✅ `src/components/layout/Navbar/TopNavbar/ResTopNavbar.jsx` + CSS module
- ✅ `src/components/homepage/Header/index.jsx` (cần CSS module)
- ✅ `src/components/homepage/Brands/index.jsx` + CSS module
- ✅ `src/components/homepage/Reviews/index.jsx` + CSS module
- ✅ `src/components/homepage/DressStyle/index.jsx` + CSS module
- ✅ `src/components/homepage/DressStyle/DressStyleCard.jsx` + CSS module

## Cần hoàn thành

### Components còn lại cần chuyển đổi (khoảng 40+ files)

#### UI Components
- [ ] `src/components/ui/accordion.tsx` → `.jsx`
- [ ] `src/components/ui/breadcrumb.tsx` → `.jsx`
- [ ] `src/components/ui/carousel.tsx` → `.jsx`
- [ ] `src/components/ui/drawer.tsx` → `.jsx`
- [ ] `src/components/ui/input-group.tsx` → `.jsx` + CSS module
- [ ] `src/components/ui/navigation-menu.tsx` → `.jsx`
- [ ] `src/components/ui/pagination.tsx` → `.jsx`
- [ ] `src/components/ui/select.tsx` → `.jsx`
- [ ] `src/components/ui/separator.tsx` → `.jsx`
- [ ] `src/components/ui/sheet.tsx` → `.jsx`
- [ ] `src/components/ui/slider.tsx` → `.jsx`
- [ ] `src/components/ui/AnimatedCounter.tsx` → `.jsx`
- [ ] `src/components/ui/CartCounter.tsx` → `.jsx`

#### Layout Components
- [ ] `src/components/layout/Footer/index.tsx` → `.jsx` + CSS module
- [ ] `src/components/layout/Footer/LinksSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/layout/Footer/NewsLetterSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/layout/Footer/LayoutSpacing.tsx` → `.jsx` + CSS module

#### Homepage Components
- [ ] `src/components/homepage/Header/index.tsx` → Cần tạo CSS module

#### Product Page Components
- [ ] `src/components/product-page/BreadcrumbProduct.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/index.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/PhotoSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/ColorSelection.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/SizeSelection.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/AddToCartBtn.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Header/AddToCardSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Tabs/index.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Tabs/ProductDetails.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Tabs/ProductDetailsContent.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Tabs/ReviewsContent.tsx` → `.jsx` + CSS module
- [ ] `src/components/product-page/Tabs/FaqContent.tsx` → `.jsx` + CSS module

#### Shop Page Components
- [ ] `src/components/shop-page/BreadcrumbShop.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/index.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/CategoriesSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/ColorsSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/DressStyleSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/PriceSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/SizeSection.tsx` → `.jsx` + CSS module
- [ ] `src/components/shop-page/filters/MobileFilters.tsx` → `.jsx` + CSS module

#### Cart Page Components
- [ ] `src/components/cart-page/BreadcrumbCart.tsx` → `.jsx` + CSS module
- [ ] `src/components/cart-page/ProductCard.tsx` → `.jsx` + CSS module

### Type files cần xóa hoặc chuyển đổi
- [ ] `src/types/product.types.ts` → Đã tạo `.js` (có thể xóa .ts)
- [ ] `src/types/review.types.ts` → Đã tạo `.js` (có thể xóa .ts)
- [ ] `src/components/layout/Navbar/navbar.types.ts` → Chuyển sang `.js` hoặc inline types
- [ ] `src/components/layout/Footer/footer.types.ts` → Chuyển sang `.js` hoặc inline types

## Quy tắc chuyển đổi

### 1. TypeScript → JavaScript
```typescript
// Before (.tsx)
type Props = {
  title: string;
  data: Product[];
};

const Component = ({ title, data }: Props) => {
  // ...
};

// After (.jsx)
const Component = ({ title, data }) => {
  // ...
};
```

### 2. Next.js Imports → React Router
```typescript
// Before
import Link from "next/link";
import Image from "next/image";

// After
import { Link } from "react-router-dom";
// Sử dụng <img> thay vì <Image>
```

### 3. Tailwind Classes → CSS Modules
```jsx
// Before
<div className="flex items-center justify-between p-4 bg-white rounded-lg">

// After
import styles from "./Component.module.css";
<div className={styles.container}>
```

```css
/* Component.module.css */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
}
```

### 4. Next.js Image → Regular img
```jsx
// Before
<Image
  src="/image.png"
  width={100}
  height={100}
  alt="description"
  priority
/>

// After
<img
  src="/image.png"
  width={100}
  height={100}
  alt="description"
/>
```

### 5. Next.js Metadata → HTML head
Metadata từ Next.js cần được xử lý bằng `react-helmet` hoặc tương tự trong React.

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Lưu ý quan trọng

1. **CSS Modules**: Mỗi component cần có file `.module.css` riêng
2. **Path Aliases**: Đã cấu hình `@/` trong `vite.config.js`
3. **Fonts**: Cần load fonts qua CSS @font-face thay vì Next.js font loader
4. **Routing**: Sử dụng React Router thay vì Next.js file-based routing
5. **Images**: Sử dụng `<img>` thay vì Next.js `<Image>` component

## Tiếp tục chuyển đổi

Để hoàn thành việc chuyển đổi:

1. Chuyển đổi từng component từ `.tsx` sang `.jsx`
2. Loại bỏ TypeScript types
3. Thay thế `next/link` bằng `react-router-dom`
4. Thay thế `next/image` bằng `<img>`
5. Tạo CSS modules cho mỗi component
6. Cập nhật imports trong các file đã chuyển đổi

Sử dụng các component đã chuyển đổi làm mẫu tham khảo.

