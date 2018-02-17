import test from 'ava'
import { Runtime } from './runtime'

test('can read from config', async t => {
  const r = new Runtime()
  const plugin = r.addPlugin(`${__dirname}/../fixtures/good-plugins/args`)
  const context = await r.run('config')

  t.truthy(plugin.defaults)
  t.is(plugin.defaults.color, 'blue')
  t.is(context.result, 'blue')
})

test('project config trumps plugin config', async t => {
  const r = new Runtime()
  r.defaults = { args: { color: 'red' } }
  const plugin = r.addPlugin(`${__dirname}/../fixtures/good-plugins/args`)
  const context = await r.run('config')

  t.truthy(plugin.defaults)
  t.is(plugin.defaults.color, 'blue')
  t.is(context.result, 'red')
})
