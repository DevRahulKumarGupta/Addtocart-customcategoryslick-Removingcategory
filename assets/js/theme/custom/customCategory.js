
import utils from '@bigcommerce/stencil-utils';
import { async } from 'regenerator-runtime';

if (document.querySelectorAll(".category-products").length) {
  $(".category-products").each(function () {
    let url = $(".category-product-section").data("prod");
    let $this = $(this);

    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        if ($(data).find("li.product").length) {
          $this
            .find(".category-product-list ul.productGrid")
            .html($(data).find("li.product:lt(10)"))
            .slick({
              infinite: false,
              mobileFirst: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                  },
                },
              ],
            });
          addCustomCart();
        } else {
          $this
            .find(".category-product-list ul.productGrid")
            .html("<li>No any product yet</li>");
        }
      },
    });
  });
}

async function addCustomCart() {
  var buttons = document.querySelectorAll(".card-button");

  if (buttons) {
    buttons.forEach(function (button) {
      button.addEventListener("click", async (e) => {
        try {
          // Change the button text to "added"
          button.innerText = "added";

          const productSku = button.getAttribute("data-product-sku");
          e.preventDefault();

          // Delay the function call slightly to allow the text change to be reflected
          setTimeout(async () => {
            // Assuming addToCart is an asynchronous function
            await addToCart(productSku);
            button.innerText = "ADD TO CART";
          }, 100); // You can adjust the delay as needed
        } catch (error) {
          console.error("An error occurred:", error);
          // Handle the error as needed
        }
      });
    });
  }
}


function addToCart (productSku){
  var url_add = '/cart.php';
  $.ajax({
    url: url_add,
    data: `action=add&sku=${productSku}&qty=1`,
    dataType: 'json',
    async :false,
    type: "POST",
    success: function(response) {
      console.log(response)
    }
});
  
utils.api.cart.getCartQuantity({}, (err, response) => {
  response ? document.querySelector('.cart-quantity.countPill--positive').innerText = response : console.log(err)
});
}




addCustomCart();
