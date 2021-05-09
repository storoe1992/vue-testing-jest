import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.titulo when passed', () => {
    const titulo = 'new title'
    const wrapper = shallowMount(Header, {
      propsData: { titulo }
    })
    expect(wrapper.props().titulo).toEqual(titulo)
  })
})

describe('Header.vue', () => {
  it('renders props.titulo and props.color when passed', () => {
    const titulo = 'new title';
    const color = 'some color';
    const wrapper = shallowMount(Header, {
      propsData: { titulo, color}
    })
    expect(wrapper.props().titulo).toEqual(titulo);
    expect(wrapper.props().color).toEqual(color);
  })
})
