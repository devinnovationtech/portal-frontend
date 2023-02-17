/* eslint-disable */
import { generateBrowserScript } from '~/static/newrelic'

export default ({ $config: { newrelic }, app }) => {
  const newRelicScript = generateBrowserScript(newrelic)

  app.head.script.push({
    hid: 'newrelic',
    defer: true,
    type: "text/javascript",
    charset: "utf-8",
    innerHTML: newRelicScript
  })
}
