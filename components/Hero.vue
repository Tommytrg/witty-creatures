<template>
  <div class="section">
    <img
      class="header"
      src="@/assets/svg/wittycreatures-website-header.svg"
      alt="Witty Creatures"
    />
    <i18n tag="p" path="hero.text" class="text">
      <span class="eth">{{ $t('hero.eth') }}</span>
    </i18n>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background: $black;
  padding: 50px 24px;
  padding-bottom: 10vw;
  display: grid;
  grid-template: max-content max-content/ 1fr;
  justify-items: center;
  align-content: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  .header {
    max-width: 80vw;
  }

  .text {
    width: 600px;
    max-width: 80vw;
    margin-top: 40px;
    font-size: 24px;
    color: #f8971e;
    font-family: 'Ocra ext', sans-serif;
    .eth {
      font-family: 'Ocra ext', sans-serif;
      font-size: 24px;
      color: white;
    }
  }
}
@media (max-width: 1200px) {
  .section {
    padding-bottom: 20vw;
  }
}
</style>
