-- 插入测试用户数据
INSERT INTO users (email, name, phone, address) VALUES
('john@example.com', '張小明', '0912345678', '台北市信義區信義路五段7號'),
('mary@example.com', '李小美', '0923456789', '台中市西屯區台灣大道三段99號'),
('david@example.com', '王大衛', '0934567890', '高雄市前鎮區中山二路5號'),
('sarah@example.com', '陳小雅', '0945678901', '新北市板橋區文化路一段188號'),
('mike@example.com', '林小強', '0956789012', '桃園市中壢區中正路123號');

-- 插入分类数据
INSERT INTO categories (name, description, image_url) VALUES
('電子產品', '最新科技產品與配件', 'https://example.com/electronics.jpg'),
('服飾配件', '時尚服裝與配件商品', 'https://example.com/fashion.jpg'),
('居家生活', '居家用品與生活必需品', 'https://example.com/home.jpg'),
('美妝保養', '美容保養與化妝品', 'https://example.com/beauty.jpg'),
('運動健身', '運動器材與健身用品', 'https://example.com/sports.jpg');

-- 插入商品数据
INSERT INTO products (name, description, price, image_url, category, stock, featured) VALUES
('iPhone 15 Pro', '最新款 iPhone，搭載 A17 Pro 晶片', 35900, 'https://example.com/iphone15.jpg', '電子產品', 50, 1),
('MacBook Air M2', '輕薄筆記型電腦，適合工作與娛樂', 34900, 'https://example.com/macbook.jpg', '電子產品', 30, 1),
('AirPods Pro', '主動降噪無線耳機', 7490, 'https://example.com/airpods.jpg', '電子產品', 100, 0),
('時尚外套', '秋冬必備保暖外套', 2990, 'https://example.com/jacket.jpg', '服飾配件', 80, 1),
('運動鞋', '舒適透氣運動鞋', 3590, 'https://example.com/shoes.jpg', '服飾配件', 60, 0),
('智能手錶', '健康監測與運動追蹤', 8990, 'https://example.com/watch.jpg', '電子產品', 40, 1),
('藍牙喇叭', '高音質無線音響', 1990, 'https://example.com/speaker.jpg', '電子產品', 70, 0),
('牛仔褲', '經典款牛仔褲', 1890, 'https://example.com/jeans.jpg', '服飾配件', 90, 0),
('手提包', '時尚真皮手提包', 4590, 'https://example.com/bag.jpg', '服飾配件', 35, 1),
('咖啡機', '全自動義式咖啡機', 12900, 'https://example.com/coffee.jpg', '居家生活', 25, 1),
('空氣清淨機', '高效過濾空氣清淨機', 8900, 'https://example.com/purifier.jpg', '居家生活', 45, 0),
('保濕面霜', '深層保濕修護面霜', 890, 'https://example.com/cream.jpg', '美妝保養', 120, 0),
('精華液', '抗老緊緻精華液', 1590, 'https://example.com/serum.jpg', '美妝保養', 80, 1),
('瑜伽墊', '防滑瑜伽運動墊', 990, 'https://example.com/yoga.jpg', '運動健身', 150, 0),
('啞鈴組', '可調式重量啞鈴', 2890, 'https://example.com/dumbbell.jpg', '運動健身', 30, 1);

-- 插入订单数据
INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES
(1, 35900, 'completed', '台北市信義區信義路五段7號'),
(2, 42490, 'processing', '台中市西屯區台灣大道三段99號'),
(3, 6580, 'pending', '高雄市前鎮區中山二路5號'),
(4, 15890, 'shipped', '新北市板橋區文化路一段188號'),
(5, 8990, 'completed', '桃園市中壢區中正路123號');

-- 插入订单项数据
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 35900),
(2, 1, 1, 35900),
(2, 3, 1, 7490),
(3, 4, 2, 2990),
(3, 8, 1, 1890),
(4, 10, 1, 12900),
(4, 6, 1, 8990),
(5, 6, 1, 8990);