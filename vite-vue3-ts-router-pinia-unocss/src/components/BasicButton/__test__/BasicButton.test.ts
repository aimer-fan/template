import { mount } from '@vue/test-utils'
import BasicButton from '@/components/BasicButton/BasicButton.vue'

describe('BasicButton', () => {
  it('should render a button', () => {
    const wrapper = mount(BasicButton)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should emit click event when click button', () => {
    const wrapper = mount(BasicButton)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('should render slots', () => {
    const wrapper = mount(BasicButton, { slots: { default: 'slots content' } })
    expect(wrapper.find('button').text()).toBe('slots content')
  })
})
