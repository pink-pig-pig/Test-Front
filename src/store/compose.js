import store from './index'
import generateID from '@/components/dynamicform/utils/generateID'
import eventBus from '@/components/dynamicform/utils/eventBus'
import decomposeComponent from '@/components/dynamicform/utils/decomposeComponent'
import { $ } from '@/components/dynamicform/utils/utils'
import { commonAttr, commonStyle } from '@/components/dynamicform/custom-component/component-list'
import createGroupStyle from '@/components/dynamicform/utils/createGroupStyle'

export default {
  state: {
    areaData: { // 选中区域包含的组件以及区域位移信息
      style: {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      components: []
    },
    editor: null
  },
  mutations: {
    getEditor(state) {
      state.editor = $('#editor')
    },

    setAreaData(state, data) {
      state.areaData = data
    },

    compose({ componentData, areaData, editor }) {
      const components = []
      areaData.components.forEach(component => {
        if (component.component !== 'Group') {
          components.push(component)
        } else {
          // 如果要组合的组件中，已经存在组合数据，则需要提前拆分
          const parentStyle = { ...component.style }
          const subComponents = component.propValue
          const editorRect = editor.getBoundingClientRect()

          store.commit('deleteComponent')
          subComponents.forEach(component => {
            decomposeComponent(component, editorRect, parentStyle)
            store.commit('addComponent', { component })
          })

          components.push(...component.propValue)
          store.commit('batchDeleteComponent', component.propValue)
        }
      })

      const groupComponent = {
        id: generateID(),
        component: 'Group',
        ...commonAttr,
        style: {
          ...commonStyle,
          ...areaData.style
        },
        propValue: components
      }
      createGroupStyle(groupComponent)
      store.commit('addComponent', {
        component: groupComponent
      })

      eventBus.$emit('hideArea')

      store.commit('batchDeleteComponent', areaData.components)
      store.commit('setCurComponent', {
        component: componentData[componentData.length - 1],
        index: componentData.length - 1
      })

      areaData.components = []
    },

    // 将已经放到 Group 组件数据删除，也就是在 componentData 中删除，因为它们已经放到 Group 组件中了
    batchDeleteComponent({ componentData }, deleteData) {
      deleteData.forEach(component => {
        for (let i = 0, len = componentData.length; i < len; i++) {
          if (component.id === componentData[i].id) {
            componentData.splice(i, 1)
            break
          }
        }
      })
    },

    decompose({ curComponent, editor }) {
      const parentStyle = { ...curComponent.style }
      const components = curComponent.propValue
      const editorRect = editor.getBoundingClientRect()

      store.commit('deleteComponent')
      components.forEach(component => {
        decomposeComponent(component, editorRect, parentStyle)
        store.commit('addComponent', { component })
      })
    }
  }
}
