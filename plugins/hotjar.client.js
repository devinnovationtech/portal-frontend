import Vue from 'vue'
import Hotjar from 'vue-hotjar'

export default function ({ $config }) {
  Vue.use(Hotjar, {
    id: `${$config.hotjarSiteId}`
  })
}
