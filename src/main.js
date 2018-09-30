//1.
import Vue from 'vue'
//3
import app from './App.vue'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
//2
import './lib/mui/css/mui.min.css'

var vm = new Vue({
el:'#app',
render:c=>c(app)
})