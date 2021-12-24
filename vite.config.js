import WindiCSS from 'vite-plugin-windicss'
import { minifyHtml } from 'vite-plugin-html'

export default {
  plugins: [
    WindiCSS(),
    minifyHtml()
  ]
}
