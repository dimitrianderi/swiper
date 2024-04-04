<template>
  <section>
    <swiper-container
      class="main-page__main-slider cursor-pointer"
      data-slider-name="main-slider"
      init="false"
    >
      <swiper-slide
        class="categories__slider_item pa-0 ma-0 cursor-pointer main-slider__item"
      >
        <img src="./1.jpg" alt="main-slider" class="h-100 w-100" />
      </swiper-slide>
      <swiper-slide
        class="categories__slider_item pa-0 ma-0 cursor-pointer main-slider__item"
      >
        <img src="./2.jpg" alt="main-slider" class="h-100 w-100" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script>
export default {
  mounted() {
    const swiperEl = document.querySelector(
      'swiper-container[data-slider-name="main-slider"]'
    );
    
    const swiperParams = {
      slidesPerView: 1,
      loopAddBlankSlides: true,
      loop: true,
      effect: 'fade',
      speed: 600,
      autoplay: {
        disableOnInteraction: false,
        delay: 2000,
      },
    };
    
    Object.assign(swiperEl, swiperParams);
    console.log(swiperEl);

    swiperEl.initialize();
  },
};
</script>

<style lang="scss" scoped>
.main-page__main-slider {
  max-height: 100vh;
  height: 100vh;

  .main-slider__item {
    width: 100%;
    height: 100vh;

    :deep(img) {
      max-width: 100vw;
    }
  }

  .slick-arrow {
    display: none !important;
  }
}

@media screen and (max-width: 900px) {
  .main-page__main-slider,
  .main-page__main-slider .main-slider__item {
    height: calc(100vh - 74px) !important;
  }
}

@media screen and (max-width: 450px) {
  .main-page__main-slider,
  .main-page__main-slider .main-slider__item {
    max-height: 428px;
    height: 100vh;
  }
}
</style>
