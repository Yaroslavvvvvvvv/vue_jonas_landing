import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



import ('../src/assets/css/bootstrap.css')
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ('../src/assets/css/animate.min.css')
import('../src/assets/css/styles.css')
import('../src/assets/img/second_section/ball.png')
import ('../src/assets/img/second_section/castro.png')
import ('../src/assets/img/second_section/watch.png')
import ('../src/assets/img/second_section/grey_phone.png')
import ('../src/assets/img/second_section/last_phone.png')
import ('../src/assets/img/second_section/yellow_phone.png')
import ('../src/assets/img/fourth_section/men.png')
import ('../src/assets/fonts/Inter-Black.ttf')
import ('../src/assets/fonts/Inter-Bold.ttf')
import ('../src/assets/fonts/Inter-ExtraBold.ttf')
import ('../src/assets/fonts/Inter-ExtraLight.ttf')
import ('../src/assets/fonts/Inter-Light.ttf')
import ('../src/assets/fonts/Inter-Medium.ttf')
import ('../src/assets/fonts/Inter-Regular.ttf')
import ('../src/assets/fonts/Inter-SemiBold.ttf')
import ('../src/assets/fonts/Inter-Thin.ttf')


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
