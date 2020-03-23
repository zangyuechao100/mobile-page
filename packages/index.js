import title from './../src/assets/title.png'
import image from './../src/assets/image.png'
import text from './../src/assets/text_normal.png'
import container from './../src/assets/container.png'
export default [
  {
    name: '标题',
    image: title,
    components: 'm-area-title',
    container: false
  },
  {
    name: '单列图片',
    image: image,
    components: 'm-area-image',
    container: false
  },
  {
    name: '文本',
    image: text,
    components: 'm-area-text',
    container: false
  },
  {
    name: '容器',
    image: container,
    components: 'm-area-wrap',
    container: true
  }
]
