new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '磅',
        category: '咖啡豆',
        title: '日曬耶加雪夫',
        origin_price: 1200,
        price: 900,
        description: '淡淡發酵酒香，些微焦苦味，整體口感濃郁厚實。',
        content: '淡淡發酵酒香，些微焦苦味，整體口感濃郁厚實。',
        is_enabled: true,
        imageUrl: 'https://images.unsplash.com/photo-1474683396613-94f0629b3a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 1196934917910,
        unit: '磅',
        category: '咖啡豆',
        title: '水洗耶加雪夫',
        origin_price: 1200,
        price: 900,
        description: '水洗處理的酸度較明顯，初入口感較清新，後段些微紅茶感。',
        content: '水洗處理的酸度較明顯，初入口感較清新，後段些微紅茶感。',
        is_enabled: false,
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
    ],
    tempProduct: {
      imageUrl: [],
    },
  },
  methods: {
    openModal(status, item) {
      if (status === 'new') {
        $('#productModal').modal('show');

      } else if (status === 'delete') {
        // this.tempProduct = JSON.parse(JSON.stringify(item)); // 將當下這筆資料深拷貝存在 tempProduct
        this.tempProduct = item; // 將當下這筆資料深拷貝存在 tempProduct
        $('#delProductModal').modal('show');
      } else if (status === 'edit') {
        // this.tempProduct = item;
        this.tempProduct = JSON.parse(JSON.stringify(item)); // 將當下這筆資料深拷貝存在 tempProduct
        console.log(this.tempProduct);
        $('#productModal').modal('show');
      }

    },
    updateProduct() {
      if (this.tempProduct.id) { //編輯
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempProduct;
          }
        });
      } else { // 新增
        const id = new Date().getTime();
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
      $('#productModal').modal('hide');
    },
    deleteProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    }

  },
});