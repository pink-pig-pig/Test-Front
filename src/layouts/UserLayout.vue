<template>
  <div>
    <q-layout view="hHh LpR fff" style="font-family: 微软雅黑">
      <q-header class="bg-white text-primary shadow-1">
        <q-toolbar>
          <q-toolbar-title> Sika Code Design</q-toolbar-title>
          <div>Sika v1.0.0</div>
        </q-toolbar>
      </q-header>
      <q-footer class="bg-white text-blue-grey-4">
        <div class="q-my-lg">
          <div class="text-center q-mb-sm">
            <span class="inline-block q-mr-sm">QA Front PRO</span>
            <q-btn type="a" target="_blank" unelevated size="12px" dense round
                   href="http://www.quasarchs.com/">
              <q-avatar size="sm">
                <img alt="quasar" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
              </q-avatar>
            </q-btn>
            <q-btn type="a" target="_blank" unelevated size="12px" dense round
                   href="https://github.com/dq-open-cloud/quasar-sika-design">
              <q-avatar size="sm">
                <q-icon class="iconfont iconhuaban88 text-primary" />
              </q-avatar>
            </q-btn>
            <span class="inline-block q-ml-sm">QA</span>
          </div>
          <div class="text-center">Copyright@2023 QA {{ $t('user.layout.experienceDesc') }}</div>
        </div>
      </q-footer>
      <q-page-container>
        <div class="q-pa-sm row justify-center" :class="topMarginClass">
          <div class="col text-center" style="width: 100%; max-width: 400px">
            <div class="q-mb-xl">
              <h4 class="q-ma-sm">
                <q-avatar class="q-mr-md">
                  <img alt="KS logo" src="imgs/ks-head.png" />
                </q-avatar>
                <strong>QA</strong>
              </h4>
              <p class="text-grey">
                QA {{ $t('user.layout.dawanDesc') }}
              </p>
            </div>
            <router-view />
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  props: {},
  data() {
    return {
      lang: this.$q.lang.getLocale(),
      topMarginClass: 'q-mt-lg'
    }
  },
  methods: {
    topMargin() {
    }
  },
  mounted: function() {
    console.log(this.$q.lang.getLocale())
  },
  watch: {
    lang(lang) {
      console.log(lang)
      this.$i18n.locale = lang
    }
  }
}
</script>
<style>
@import 'http://at.alicdn.com/t/font_2136554_95kmewdgocg.css';
</style>
