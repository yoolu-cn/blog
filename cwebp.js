import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

/**
 * 提交图片之前需要转下图片格式
 * 注意： 执行时需要将 package.json 中的 type 改为 module
 */
async function anyToWebp() {
  await imagemin(['docs/.vuepress/public/img/in-post/*.{jpg,jpeg,png}'], {
    destination: 'docs/.vuepress/public/img/in-post',
    plugins: [imageminWebp({ quality: 50 })],
  })

  console.log('Images optimized')
}

anyToWebp()
