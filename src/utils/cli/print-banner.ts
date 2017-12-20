import print from '../utils/print'
import colors from 'colors'
import jetpack from 'fs-jetpack'
import { split } from 'ramda'

// grab ze files
const BANNER = split('\n', jetpack.read(`${__dirname}/banner.txt`))
const pkg = jetpack.read(`${__dirname}/../../package.json`, 'json')

/**
 * Prints the bruce banner.
 */
function printBanner() {
  print.newline()
  print.fancy(colors.random(BANNER[0]))
  print.fancy(colors.random(BANNER[1]))
  print.fancy(colors.random(BANNER[2]))
  print.fancy(colors.random(BANNER[3]))
  print.fancy(colors.random(BANNER[4]))
  print.fancy(colors.random(BANNER[5]))
  print.fancy(colors.random(BANNER[6]))
  print.fancy(colors.random(BANNER[7]))
  print.newline()
  print.newline()
  print.fancy(colors.yellow('  https://github.com/infinitered/gluegun'))
  print.fancy(colors.white(`  ${pkg.version}`))
  print.newline()
  print.divider()
}

export default printBanner
