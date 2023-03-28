import { mount } from '@vue/test-utils'
import { expect, describe } from '@jest/globals'

import NavigationLevel from './NavigationLevel.vue'

describe('NavigationLevel ', () => {
  it('isVueInstance', () => {
    const wrapper = mount(NavigationLevel, {
        propsData: {
            parentItem: {
                meta: {
                    target: "https://github.com"
                }
            },
            level: 1,
            defaultOpenLevel: 1
        }
      })

    expect(wrapper.exists()).toBe(true)
  })
})