const registerModule = (Vue) => {
  Vue.component('m-area-title', () => import('./area-title'))
  Vue.component('m-area-image', () => import('./area-image'))
}

export default registerModule