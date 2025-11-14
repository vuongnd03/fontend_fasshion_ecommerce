# CÀI ĐẶT VÀ CÔNG NGHỆ SỬ DỤNG

## Tổng Quan Dự Án

Dự án **TEEZ.LO** - Website thương mại điện tử thời trang được xây dựng bằng React thuần với CSS Modules.

## Công Nghệ Core

### Frontend Framework & Library
- **React** (v18) - Thư viện JavaScript để xây dựng giao diện người dùng
- **React DOM** (v18) - Render React components vào DOM
- **React Router DOM** (v6.26.0) - Quản lý routing và điều hướng trong ứng dụng

### Build Tool & Development
- **Vite** (v5.4.0) - Build tool và development server nhanh
- **@vitejs/plugin-react** (v4.3.1) - Plugin Vite cho React

### State Management
- **Redux Toolkit** (v2.2.7) - Quản lý state toàn cục
- **React Redux** (v9.1.2) - Kết nối React với Redux
- **Redux Persist** (v6.0.0) - Lưu trữ Redux state vào localStorage

### UI Components & Styling
- **CSS Modules** - Scoped CSS cho từng component
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework (sử dụng một phần)
- **PostCSS** (v8) - CSS processing tool
- **Autoprefixer** (v10.4.20) - Tự động thêm vendor prefixes
- **tailwindcss-animate** (v1.0.7) - Animation utilities cho Tailwind

### UI Component Libraries
- **Radix UI** - Headless UI components:
  - `@radix-ui/react-accordion` (v1.2.0) - Accordion component
  - `@radix-ui/react-dialog` (v1.1.1) - Dialog/Modal component
  - `@radix-ui/react-icons` (v1.3.0) - Icon library
  - `@radix-ui/react-navigation-menu` (v1.2.0) - Navigation menu
  - `@radix-ui/react-select` (v2.1.1) - Select dropdown
  - `@radix-ui/react-separator` (v1.1.0) - Separator component
  - `@radix-ui/react-slider` (v1.2.0) - Slider component
  - `@radix-ui/react-slot` (v1.1.0) - Slot component

### Animation & Motion
- **Framer Motion** (v11.5.4) - Thư viện animation cho React
- **embla-carousel-react** (v8.2.1) - Carousel/slider component

### Icons
- **React Icons** (v5.3.0) - Thư viện icons phong phú
- **Lucide React** (v0.438.0) - Icon library hiện đại

### Utilities & Helpers
- **clsx** (v2.1.1) - Utility để kết hợp class names
- **tailwind-merge** (v2.5.2) - Merge Tailwind classes
- **class-variance-authority** (v0.7.0) - Quản lý component variants
- **usehooks-ts** (v3.1.0) - Collection of React hooks

### Rating & Reviews
- **react-simple-star-rating** (v5.1.7) - Component đánh giá sao

### Drawer/Sheet Component
- **vaul** (v0.9.4) - Drawer component cho React

## Cấu Trúc Dự Án

```
Fashion-Ecommerce/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/            # App configuration (providers)
│   ├── components/     # React components
│   │   ├── ui/         # UI components (buttons, inputs, etc.)
│   │   ├── common/     # Shared components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   ├── homepage/   # Homepage sections
│   │   ├── product-page/ # Product detail components
│   │   ├── shop-page/  # Shop page components
│   │   └── cart-page/  # Cart page components
│   ├── lib/            # Utilities và configuration
│   │   ├── features/   # Redux slices
│   │   ├── hooks/      # Custom hooks
│   │   └── utils.js    # Helper functions
│   ├── pages/          # Page components
│   ├── styles/         # Global styles và fonts
│   └── types/          # Type definitions (đã chuyển sang JS)
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies và scripts
```

## Scripts

```bash
# Development
npm run dev          # Chạy development server

# Build
npm run build        # Build cho production

# Preview
npm run preview      # Preview production build

# Lint
npm run lint         # Chạy ESLint
```

## Tính Năng Chính

1. **Quản Lý Sản Phẩm**
   - Hiển thị danh sách sản phẩm
   - Chi tiết sản phẩm
   - Lọc và tìm kiếm sản phẩm

2. **Giỏ Hàng**
   - Thêm/xóa sản phẩm
   - Cập nhật số lượng
   - Tính toán giá với giảm giá
   - Lưu trữ vào localStorage

3. **Giao Diện**
   - Responsive design
   - Animation với Framer Motion
   - CSS Modules cho styling
   - Dark/Light mode support (có thể mở rộng)

## Định Dạng Tiền Tệ

- **Đơn vị**: VND (Việt Nam Đồng)
- **Tỷ giá quy đổi**: 1 USD = 24,000 VND
- **Format**: Sử dụng `Intl.NumberFormat` với locale 'vi-VN'

## Ngôn Ngữ

- **Giao diện**: Tiếng Việt
- **Code**: JavaScript (ES6+)
- **Styling**: CSS Modules + Tailwind CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tools

- **ESLint** (v8.57.0) - Code linting
- **ESLint Plugin React** (v7.34.0) - React-specific linting rules
- **ESLint Plugin React Hooks** (v4.6.2) - Hooks linting
- **ESLint Plugin React Refresh** (v0.4.6) - Fast Refresh support

## Dependencies Summary

### Production Dependencies (24)
- React ecosystem (React, React DOM, React Router)
- State management (Redux Toolkit, React Redux, Redux Persist)
- UI libraries (Radix UI components, React Icons, Lucide)
- Animation (Framer Motion, Embla Carousel)
- Utilities (clsx, tailwind-merge, class-variance-authority)
- Other (react-simple-star-rating, vaul, usehooks-ts)

### Development Dependencies (11)
- Build tools (Vite, @vitejs/plugin-react)
- CSS processing (PostCSS, Autoprefixer, Tailwind CSS)
- Code quality (ESLint và plugins)
- Type definitions (@types/react, @types/react-dom)

## Cấu Hình Đặc Biệt

### Path Aliases
- `@/` → `./src/` (được cấu hình trong vite.config.js)

### Fonts
- **Integral CF** - Font chữ cho headings
- **Satoshi** - Font chữ chính (Regular, Medium, Bold)

### Breakpoints (Tailwind)
- `xs`: 375px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Lưu Ý

- Dự án đã được chuyển đổi từ Next.js + TypeScript sang React thuần + JavaScript
- Tất cả components sử dụng CSS Modules thay vì Tailwind classes trực tiếp
- State được quản lý bằng Redux Toolkit với Redux Persist
- Routing được xử lý bởi React Router DOM

