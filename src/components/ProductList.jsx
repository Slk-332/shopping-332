import PropTypes from "prop-types";

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "สร้อยทอง 1 บาท",
      price: 15000,
      stock: 5,
      image:
        "https://pbs.twimg.com/profile_images/1056230348361752576/8uIV0zBs_400x400.jpg",
    },
    {
      id: 2,
      name: "เมาส์ยิงคมๆ",
      price: 1000,
      stock: 12,
      image:
        "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/01/Product/loga-kirin-pro-r2-wireless-gaming-mouse-black-02.jpg",
    },
    {
      id: 3,
      name: "จอมหาเทพ1000Hz",
      price: 49999,
      stock: 2,
      image:
        "https://img.advice.co.th/images_nas/pic_product4/A0156453/A0156453OK_BIG_1.jpg",
    },
    {
      id: 4,
      name: "Air jordan 1 low ",
      price: 3000,
      stock: 0,
      image:
        "https://www.footlocker.co.th/media/catalog/product/cache/e13c0351dc8369f59bb8d16c2d746c6b/9/9/9991-NIKFN521414100W07H-1.jpg",
    },
    {
      id: 5,
      name: "GOAT",
      price: 99999999999,
      stock: 0,
      image:
        "https://i.ytimg.com/vi/8PCwX2wRJqQ/maxresdefault.jpg",
    },
    {
      id: 6,
      name: "mclaren",
      price: 3100000000,
      stock: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/640px-McLaren_P1.jpg",
    },
    {
      id: 7,
      name: "คอมเทพระดับSSS",
      price: 4500,
      stock: 3,
      image:
        "https://www.chitservices.com/wp-content/uploads/2018/02/dell-celeron-new-3-Copy.png",
    },
    {
      id: 8,
      name: "ลูกอมแก้ปากซิ่ง",
      price: 200,
      stock: 3,
      image:
        "https://www.babybbb.com/upload_images/image/article/article-434.jpg",
    },
    {
      id: 9,
      name: "ใจดวงน้อยๆคอยรัก",
      price: 1,
      stock: 999,
      image:
        "https://fth0.com/uppic/80101197/news/80101197_0_20140805-105332.jpg",
    },
    {
      id: 10,
      name: "ทองแท้ๆแม่ตั้กการันตี",
      price: 20000,
      stock: 10,
      image:
        "https://www.huasengheng.com/wp-content/uploads/2023/12/Artboard-2_0-1000x975.jpg",
    },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  w-[1500px] items-center justify-center gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4  flex flex-col">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>Price: {product.price} THB</p>
          <p>Stock: {product.stock > 0 ? product.stock : "Out of stock"}</p>
          <button
            onClick={() => addToCart(product)}
            className={`px-4 py-2 rounded text-white mt-auto w-1/2 md:w-full ${
              product.stock > 0
                ? "bg-green-500"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
