"use strict";(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[512],{75512:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var r=i(49230),n=i(37030),o=i(28350),a=i(78341),c=i(55825),d=function(){function t(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var e=t.prototype;return e.selectNewVideo=function(t){t.preventDefault();var e=c(t.currentTarget);this.currentVideo={id:e.data("videoId"),$selectedThumb:e},this.setMainVideo(),this.setActiveThumb()},e.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},t}(),s=i(55825),u=i.n(s),l=i(67313),f=i(44505),v=i(55825);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}var p=function(t){var e,i;function r(e){var i;return(i=t.call(this,e)||this).url=window.location.href,i.$reviewLink=v('[data-reveal-id="modal-review-form"]'),i.$bulkPricingLink=v('[data-reveal-id="modal-bulk-pricing"]'),i.reviewModal=(0,f.ZP)("#modal-review-form")[0],i}i=t,(e=r).prototype=Object.create(i.prototype),e.prototype.constructor=e,h(e,i);var s=r.prototype;return s.onReady=function(){var t,e,i=this;v(document).on("close.fndtn.reveal",(function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),(0,o.ZP)(),this.productDetails=new a.Z(v(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),c("[data-"+(e="video-gallery")+"]").each((function(t,i){var r=c(i);r.data(e)instanceof d||r.data(e,new d(r))})),this.bulkPricingHandler();var r=(0,l.iR)(".writeReview-form");if(0!==r.length){var s=new n.Z({$reviewForm:r});v("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){t=s.registerValidation(i.context),i.ariaDescribeReviewInputs(r)})),r.on("submit",(function(){return!!t&&(t.performCheck(),t.areAll("valid"))})),""!==u()("#tab-specifications").text().trim()&&u()(".tab-heading--specs").show(),u()("#form-action-addToCart").on("click",(function(){var t=u()(".productView-options form").offset().top,e=u()(".header").height();u()(window).scrollTop(t-e)})),this.productReviewHandler()}},s.ariaDescribeReviewInputs=function(t){t.find("[data-input]").each((function(t,e){var i=v(e),r=i.attr("name")+"-msg";i.siblings("span").attr("id",r),i.attr("aria-describedby",r)}))},s.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},s.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.512.js.map